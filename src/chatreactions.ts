import { TemplatePreloader } from "./module/helper/TemplatePreloader";
import { EmojiButton } from "@joeattardi/emoji-button";
import DirectoryPicker from "./lib/DirectoryPicker";

let socket;
let picker;
let currentMessage;
const customEmojis:any = [];

Hooks.once("socketlib.ready", () => {
  console.log("SOCKET LIB READY!!!!");
  // @ts-ignore
  socket = socketlib.registerModule("chatreactions");
  // @ts-ignore
  socket.register("handleReaction", handleReaction);
});

Hooks.once("init", async () => {
  console.log(
    "===========================♥ ChatReactions ♥=========================="
  );

  game.settings.register("chatreactions", "chat-reactions-directory", {
    name: "Custom Emojis",
    hint: "You can add more custom emojis for your players to interact with!",
    scope: "world", // This specifies a world-level setting
    config: true, // This specifies that the setting appears in the configuration view
    //@ts-ignore
    type: DirectoryPicker.Directory, // The default value for the setting,
    onChange: () => {
      window.location.reload();
    },
  });

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
    console.log("FILE LIST");
    console.log(fileList);
    fileList["files"].forEach(function (value, i) {
      customEmojis.push(
        {
          name:`${i}`,
          emoji : value
        }
      );
    });
  }

  picker = new EmojiButton({
    style: "twemoji",
    custom: customEmojis,
  }) as EmojiButton;

  picker.on("emoji", (selection) => {
    // `selection` object has an `emoji` property
    // containing the selected emoji
    console.log(selection)
    //@ts-ignore
    if (selection.custom){
      socket.executeAsGM(
        "handleReaction",
        selection.url,
        currentMessage,
        game.user
      );
    }
    else {
      socket.executeAsGM(
        "handleReaction",
        selection.emoji,
        currentMessage,
        game.user
      );
    }
  });
});

function handleReaction(emoji: string, sentMessage, user: User) {
  let currentEmojiState = {};

  sentMessage = game.messages?.get(sentMessage._id);
  if (sentMessage.getFlag("world", "emoji")) {
    currentEmojiState = JSON.parse(
      sentMessage.getFlag("world", "emoji") as string
    );
  }

  if (currentEmojiState[emojiUnicode(emoji)]) {
    if (currentEmojiState[emojiUnicode(emoji)].includes(user._id)) {
      currentEmojiState[emojiUnicode(emoji)] = currentEmojiState[
        emojiUnicode(emoji)
      ].filter(function (value) {
        return value != user._id;
      });
      if (currentEmojiState[emojiUnicode(emoji)].length === 0) {
        delete currentEmojiState[emojiUnicode(emoji)];
      }
    } else {
      currentEmojiState[emojiUnicode(emoji)].push(user._id);
    }
  } else {
    currentEmojiState[emojiUnicode(emoji)] = [user._id];
  }
  sentMessage.setFlag("world", "emoji", JSON.stringify(currentEmojiState));
}

Hooks.once("ready", async () => {
  console.log("loadedd chatreactions");
});

Hooks.on("renderChatMessage", async (message, element) => {
  let currentEmojiState = {};
  if (message.getFlag("world", "emoji")) {
    currentEmojiState = JSON.parse(message.getFlag("world", "emoji") as string);
  }

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
    console.log(key)
    if(key.includes('/')){
      EmojiImage.src = window.location.origin+'/'+key;
    }
    else {
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
      socket.executeAsGM(
        "handleReaction",
        key.includes("/")?key:String.fromCodePoint(parseInt(key, 16)),
        message,
        game.user
      );
    });
    emojiRack.appendChild(button);
  }

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

function isEmoji(emoji){
  const re = new RegExp('(\u00a9|\u00ae|[\u2000-\u3300]|\ud83c[\ud000-\udfff]|\ud83d[\ud000-\udfff]|\ud83e[\ud000-\udfff])')
  return re.exec(emoji) 
}

function emojiUnicode(emoji) {
  if (isEmoji(emoji)){
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
  return emoji
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
