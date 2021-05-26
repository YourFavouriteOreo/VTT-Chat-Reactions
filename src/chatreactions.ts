import { TemplatePreloader } from "./module/helper/TemplatePreloader";
import { EmojiButton } from "@joeattardi/emoji-button";
import DirectoryPicker from "./lib/DirectoryPicker";
import utils from "./utils";
// import ImagePicker from "./lib/ImagePicker";

let socket;
let picker;
let currentMessage;
const emojiDirectories: any = [];
const customEmojis: any = [];

Hooks.once("socketlib.ready", () => {
  // Setup Socket Lib for GM ability to add Chat Reactions
  // @ts-ignore
  socket = socketlib.registerModule("chatreactions");
  // @ts-ignore
  socket.register("handleReaction", handleReaction);
});

Hooks.once("init", async () => {
  console.log(
    "===========================♥ Chat Reactions ♥=========================="
  );

  const modules = await game.modules;
  modules.forEach((module) => {
    // Go through all modules to find Emoji Packs to add
    if (module.data["flags"]?.["emojiPacker"]) {
      console.log(`\nChat Reactions found ${module.data["title"]}\n`);
      emojiDirectories.push(
        `modules/${module.data["name"]}${module.data["flags"]?.["emojiPacker"]}`
      );
    }
  });

  emojiDirectories.forEach(async (directory) => {
    const dir = DirectoryPicker.parse(directory);
    const fileList = await DirectoryPicker.browse(
      dir.activeSource,
      dir.current,
      {
        bucket: dir.bucket,
      }
    );
    // Load all the custom emojis from emoji packs
    addToCustomEmojiList(fileList, customEmojis);
  });

  // Store the custom emoji directory for loading up all them delciious emojis
  game.settings.register("chatreactions", "chat-reactions-directory", {
    name: utils.localize("settings.chatReactionsDirectory.name"),
    hint: utils.localize("settings.chatReactionsDirectory.hint"),
    scope: "world",
    config: true,
    //@ts-ignore
    type: DirectoryPicker.Directory,
    onChange: () => {
      window.location.reload();
    },
  });

  // Allow GM to upload custom emojis
  // game.settings.register("chatreactions", "upload-to-directory", {
  //   name: "Upload Custom Emojis",
  //   hint: "",
  //   scope: "world",
  //   config: true,
  //   //@ts-ignore
  //   type: ImagePicker.Img,
  //   onChange: () => {
  //     window.location.reload();
  //   },
  // });

  // Warn User/GM if the directory isnt defined
  if (game.settings.get("chatreactions", "chat-reactions-directory") === "") {
    ui.notifications?.warn(
      "The Emoji Reactions module supports custom emojis, Please setup a custom directory to add them!"
    );
  } else {
    const dir = DirectoryPicker.parse(
      game.settings.get("chatreactions", "chat-reactions-directory")
    );
    const fileList = await DirectoryPicker.browse(
      dir.activeSource,
      dir.current,
      { bucket: dir.bucket }
    );
    // Load Up Custom Emojis from folder
    addToCustomEmojiList(fileList, customEmojis);
  }

  picker = new EmojiButton({
    style: "twemoji",
    custom: customEmojis,
  }) as EmojiButton;

  picker.on("emoji", (selection) => {
    // `selection` object has an `emoji` property
    // containing the selected emoji
    //@ts-ignore
    if (selection.custom) {
      socketExecute(selection.url, currentMessage);
    } else {
      socketExecute(selection.emoji, currentMessage);
    }
  });
});

async function socketExecute(emoji, message) {
  try {
    await socket.executeAsGM("handleReaction", emoji, message, game.user);
  } catch (error) {
    if (game.scenes?.["current"] === undefined) {
      ui.notifications?.warn(
        "Please make sure a scene is loaded before reacting to messages"
      );
    } else {
      ui.notifications?.warn(
        "Due to foundry limitations, a GM needs to be online to use chat reactions"
      );
    }
  }
}

function handleReaction(emoji: string, sentMessage, user: User) {
  let currentEmojiState = {};

  // Get Current State of Emojis if it exists
  sentMessage = game.messages?.get(sentMessage._id);
  if (sentMessage.getFlag("world", "emoji")) {
    currentEmojiState = JSON.parse(
      sentMessage.getFlag("world", "emoji") as string
    );
  }

  const translatedEmoji = emojiUnicode(emoji);

  // Reaction Logic
  if (currentEmojiState[translatedEmoji]) {
    if (currentEmojiState[translatedEmoji].includes(user._id)) {
      currentEmojiState[translatedEmoji] = currentEmojiState[
        translatedEmoji
      ].filter(function (value) {
        return value != user._id;
      });
      if (currentEmojiState[translatedEmoji].length === 0) {
        delete currentEmojiState[translatedEmoji];
      }
    } else {
      currentEmojiState[translatedEmoji].push(user._id);
    }
  } else {
    currentEmojiState[translatedEmoji] = [user._id];
  }
  sentMessage.setFlag("world", "emoji", JSON.stringify(currentEmojiState));
}

// Get all emoji image files from the directory and add them to the picker
function addToCustomEmojiList(fileList, customEmojis) {
  fileList["files"].forEach(function (value) {
    customEmojis.push({
      name: `${value.split("/").pop(-1).split(".").slice(0, -1).join(".")}`,
      emoji: value,
    });
  });
}

// Logic for Button Styling and Rendering
Hooks.on("renderChatMessage", async (message, element) => {
  let currentEmojiState = {};
  // Get current state of emojis
  if (message.getFlag("world", "emoji")) {
    currentEmojiState = JSON.parse(message.getFlag("world", "emoji") as string);
  }

  // Add All the reactions and render them accordingly as if the current user reacted or not
  const emojiRack = document.createElement("div");
  emojiRack.id = "chatReactionRack";
  for (const [key, value] of Object.entries(currentEmojiState)) {
    let isvoted = false;
    const button = document.createElement("button");
    const voters = value as Array<string>;
    voters.forEach((voter) => {
      if (game.user?._id == voter) {
        isvoted = true;
      }
    });
    const ButtonContent = document.createElement("div");
    const EmojiImage = document.createElement("img");
    const EmojiReactions = document.createElement("p");
    EmojiReactions.textContent = `${voters.length}`;
    if (key.includes("/")) {
      EmojiImage.src = window.location.origin + "/" + key;
    } else {
      EmojiImage.src = `https://twemoji.maxcdn.com/v/latest/svg/${key}.svg`;
    }
    EmojiImage.className = "emoji-image";
    ButtonContent.className = "emoji-button-content";
    ButtonContent.appendChild(EmojiImage);
    ButtonContent.appendChild(EmojiReactions);
    button.appendChild(ButtonContent);
    if (isvoted) {
      button.className = "emoji-button emoji-active ";
    } else {
      button.className = "emoji-button reaction";
    }
    ButtonContent.addEventListener("click", function () {
      console.log("executing function");
      //@ts-ignore
      socketExecute(
        key.includes("/") ? key : String.fromCodePoint(parseInt(key, 16)),
        message
      );
    });
    emojiRack.appendChild(button);
  }

  // Create Picker Button and add it to the Emoji Rack
  const messageElement = element[0];
  if (Object.entries(currentEmojiState).length < 4) {
    const p = document.createElement("button");
    const EmojiImage = document.createElement("img");
    EmojiImage.src = `https://twemoji.maxcdn.com/v/latest/svg/2795.svg`;
    EmojiImage.className = "emoji-image";
    p.appendChild(EmojiImage);
    p.className += "emoji-button trigger";

    // tslint:disable-next-line
    p?.addEventListener("click", function () {
      picker.togglePicker(p);
      currentMessage = message;
    });
    emojiRack.appendChild(p);
  }
  messageElement?.appendChild(emojiRack);
});

function isEmoji(emoji) {
  // Check if the parameter passed is an emoji or not
  const re = new RegExp(
    "(\u00a9|\u00ae|[\u2000-\u3300]|\ud83c[\ud000-\udfff]|\ud83d[\ud000-\udfff]|\ud83e[\ud000-\udfff])"
  );
  return re.exec(emoji);
}

function emojiUnicode(emoji) {
  // Return unicode or actual emojis or just return img urls
  if (isEmoji(emoji)) {
    let comp;
    if (emoji.length === 1) {
      comp = emoji.charCodeAt(0);
    }
    comp =
      (emoji.charCodeAt(0) - 0xd800) * 0x400 +
      (emoji.charCodeAt(1) - 0xdc00) +
      0x10000;
    if (comp < 0) {
      comp = emoji.charCodeAt(0);
    }
    return comp.toString("16");
  }
  return emoji;
}

if (process.env.NODE_ENV === "development") {
  if (module.hot) {
    module.hot.accept();

    if (module.hot.status() === "apply") {
      for (const template in _templateCache) {
        if (Object.prototype.hasOwnProperty.call(_templateCache, template)) {
          delete _templateCache[template];
        }
      }

      TemplatePreloader.preloadHandlebarsTemplates().then(() => {
        for (const application in ui.windows) {
          if (Object.prototype.hasOwnProperty.call(ui.windows, application)) {
            ui.windows[application].render(true);
          }
        }
      });
    }
  }
}
