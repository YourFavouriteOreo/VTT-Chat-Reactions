import { TemplatePreloader } from "./module/helper/TemplatePreloader";
import { EmojiButton } from "@joeattardi/emoji-button";
import DirectoryPicker from "./lib/DirectoryPicker";
import utils from "./utils";
// import ImagePicker from "./lib/ImagePicker";
import { parse } from "twemoji-parser";

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

function isHexColor(hex) {
  const x =
    typeof hex === "string" && hex.length === 6 && !isNaN(Number("0x" + hex));
  if (x) {
    setPicker();
  }
  return x;
}

Hooks.once("init", async () => {
  console.log(
    "===========================♥ Chat  Reactions ♥=========================="
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

  game.settings.register("chatreactions", "picker-background", {
    name: "Background color for the picker",
    hint: "Background color in hex that will appear behind the emoji picker ",
    scope: "world",
    config: true,
    type: String,
    default: "d2d2c6",
    onChange: (value) => {
      isHexColor(value);
    },
  });

  game.settings.register("chatreactions", "picker-font-color", {
    name: "Font color for the picker",
    hint: "Hex color used in the text for the emoji picker.This color will be contrasted for headers",
    scope: "world",
    config: true,
    type: String,
    default: "000000",
    onChange: (value) => {
      isHexColor(value);
    },
  });

  game.settings.register("chatreactions", "category-active-icon-color", {
    name: "Font color for the active icon/category",
    hint: "Font color for the active icon/category. This color will be contrasted for inactive",
    scope: "world",
    config: true,
    type: String,
    default: "782e22",
    onChange: (value) => {
      isHexColor(value);
    },
  });

//   --category-button-color

// --category-button-active-color

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

  setPicker();

  picker.on("emoji", (selection) => {
    // `selection` object has an `emoji` property
    // containing the selected emoji
    if (currentMessage === null) {
      const chatMessage = $("#chat-message");
      if (!selection.custom) {
        chatMessage.val(
          insert(
            chatMessage.val(),
            chatMessage.prop("selectionStart"),
            selection.emoji
          )
        );
      } else {
        chatMessage.val(
          insert(
            chatMessage.val(),
            chatMessage.prop("selectionStart"),
            `:${selection.name}:`
          )
        );
      }
    } else {
      //@ts-ignore
      if (selection.custom) {
        socketExecute(selection.url, currentMessage);
      } else {
        socketExecute(selection.emoji, currentMessage);
      }
    }
  });
});

function setPicker() {
  picker = new EmojiButton({
    style: "twemoji",
    custom: customEmojis,
    styleProperties: {
      "--background-color": `#${game.settings.get(
        "chatreactions",
        "picker-background"
      )}`,
      "--text-color": `#${game.settings.get(
        "chatreactions",
        "picker-font-color"
      )}`,
      "--secondary-text-color": `#${game.settings.get(
        "chatreactions",
        "picker-font-color"
      )}75`,
      "--category-button-color": `#${game.settings.get(
        "chatreactions",
        "category-active-icon-color"
      )}75`,
      "--category-button-active-color": `#${game.settings.get(
        "chatreactions",
        "category-active-icon-color"
      )}`,
      "--font":"Signika"
    },
  }) as EmojiButton;
}

function insert(str, index, value) {
  return str.substr(0, index) + value + str.substr(index);
}

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
  sentMessage = game.messages?.get(sentMessage.id);
  if (sentMessage.getFlag("world", "emoji")) {
    currentEmojiState = JSON.parse(
      sentMessage.getFlag("world", "emoji") as string
    );
  }

  const translatedEmoji = emojiUnicode(emoji);

  // Reaction Logic
  if (currentEmojiState[translatedEmoji]) {
    if (currentEmojiState[translatedEmoji].includes(user.id)) {
      currentEmojiState[translatedEmoji] = currentEmojiState[
        translatedEmoji
      ].filter(function (value) {
        return value != user.id;
      });
      if (currentEmojiState[translatedEmoji].length === 0) {
        delete currentEmojiState[translatedEmoji];
      }
    } else {
      currentEmojiState[translatedEmoji].push(user.id);
    }
  } else {
    currentEmojiState[translatedEmoji] = [user.id];
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

Hooks.on("renderChatLog", (_app, html, _options) => {
  const chatForm = html.find("#chat-form")[0];
  chatForm.classList += "relative";
  const button = document.createElement("button");
  button.innerHTML += `<img draggable="false" class="emoji" src="https://twemoji.maxcdn.com/v/latest/svg/2795.svg">`;
  button.className += "chatReactionsPicker";
  button.type = "button";
  button.addEventListener("click", function () {
    picker.togglePicker(button);
    currentMessage = null;
  });
  chatForm.appendChild(button);
});

// const splitOn = (slicable, ...indices) =>
//   [0, ...indices].map((n, i, m) => slicable.slice(n, m[i + 1]));

// Logic for Button Styling and Rendering
Hooks.on("renderChatMessage", async (message, element) => {
  let messagingElement = element.find(".flavor-text")[0];
  if (messagingElement === undefined) {
    messagingElement = element.find(".message-content")[0];
  }
  const emojiData = parse(messagingElement.innerText);
  emojiData.forEach((emoji) => {
    const splitText = messagingElement.innerHTML.split(emoji.text);
    messagingElement.innerHTML = "";
    splitText.forEach((text, index) => {
      messagingElement.innerHTML += text;
      if (index < splitText.length - 1) {
        messagingElement.innerHTML += `<img draggable="false" class="emoji" src="${emoji.url}"/>`;
      }
    });
  });
  const match = new RegExp(":[a-zA-Z0-9_]*:");
  let matchResult = match.exec(messagingElement.innerHTML);

  while (matchResult != null) {
    const result = customEmojis.filter((customEmoji) => {
      //@ts-ignore
      return customEmoji.name === matchResult[0].replace(/:/g, "");
    });
    if (result.length > 0) {
      messagingElement.innerHTML = messagingElement.innerHTML.replace(
        matchResult[0],
        `<img class="emoji" src="${
          window.location.origin + "/" + result[0].emoji
        }"/>`
      );
    } else {
      messagingElement.innerHTML = messagingElement.innerHTML.replace(
        matchResult[0],
        matchResult[0].replace(/:/g, "")
      );
    }

    matchResult = match.exec(messagingElement.innerHTML);
  }

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
      if (game.user?.id == voter) {
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
