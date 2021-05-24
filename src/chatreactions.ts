import { TemplatePreloader } from "./module/helper/TemplatePreloader";
import { EmojiButton } from "@joeattardi/emoji-button";

let socket;
let picker;
let currentMessage;

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
  picker = new EmojiButton({
    style: "twemoji",
  }) as EmojiButton;

  picker.on("emoji", (selection) => {
    // `selection` object has an `emoji` property
    // containing the selected emoji
    //@ts-ignore
    socket.executeAsGM(
      "handleReaction",
      selection.emoji,
      currentMessage,
      game.user
    );
  });
});

function handleReaction(emoji: string, sentMessage, user: User) {
  let currentEmojiState = {};

  sentMessage = game.messages?.get(sentMessage._id);
  console.log(sentMessage);
  if (sentMessage.getFlag("world", "emoji")) {
    currentEmojiState = JSON.parse(
      sentMessage.getFlag("world", "emoji") as string
    );
  }
  console.log("handleReactionExecution");

  if (currentEmojiState[emojiUnicode(emoji)]) {
    if (currentEmojiState[emojiUnicode(emoji)].includes(user._id)) {
      currentEmojiState[emojiUnicode(emoji)] = currentEmojiState[
        emojiUnicode(emoji)
      ].filter(function (value) {
        return value != user._id;
      });
      if (currentEmojiState[emojiUnicode(emoji)].length === 0){
        delete currentEmojiState[emojiUnicode(emoji)]
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
  console.log(game.user);
});

Hooks.on("renderChatMessage", async (message, element) => {
  console.log(message);
  let currentEmojiState = {};
  if (message.getFlag("world", "emoji")) {
    currentEmojiState = JSON.parse(message.getFlag("world", "emoji") as string);
    console.log(currentEmojiState);
  }

  const emojiRack = document.createElement("div");
  emojiRack.id = "chatReactionRack";
  console.log(currentEmojiState);
  for (const [key, value] of Object.entries(currentEmojiState)) {
    console.log(value);
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
    EmojiImage.src = `https://twemoji.maxcdn.com/v/latest/svg/${key}.svg`;
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
        String.fromCodePoint(parseInt (key, 16)),
        message,
        game.user
      );
    });
    emojiRack.appendChild(button);
  }

  const messageElement = element[0];
  const p = document.createElement("button");
  const EmojiImage = document.createElement("img");
  EmojiImage.src = `https://twemoji.maxcdn.com/v/latest/svg/2795.svg`;
  EmojiImage.className = "emoji-image";
  p.appendChild(EmojiImage)
  p.className += "emoji-button trigger";

  // tslint:disable-next-line
  p?.addEventListener("click", function () {
    picker.togglePicker(p);
    currentMessage = message;
  });
  emojiRack.appendChild(p);
  messageElement?.appendChild(emojiRack);
});

function emojiUnicode(emoji) {
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
