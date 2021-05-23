import { TemplatePreloader } from "./module/helper/TemplatePreloader";

Hooks.once("init", async () => {
    console.log("=============================HMR============================")
});

Hooks.once("ready", async () => {
    console.log("loadedd chatreactions")
});

Hooks.on("renderChatMessage", async (message,element) => {
    console.log(message)
    console.log(element[0])
    const test = element[0]
    const p = document.createElement("p");
    p.textContent = "Hello, World!";
    test?.appendChild(p)
});


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