window.wiki_loadEditor = function() {
    // From https://stackoverflow.com/a/39008859
    return new Promise((resolve, reject) => {
        const script = document.createElement("script");
        script.async = true;
        script.src = "/js/github_md_editor.js";
        script.addEventListener("load", resolve);
        script.addEventListener("error", () => reject("Error loading script."));
        script.addEventListener("abort", () => reject("Script loading aborted."));
        document.head.appendChild(script);
    });
};

window.wiki_createPage = function(path) {
    // TODO: Loading animation

    window.wiki_runEditor().then(() => {
        window.startEditor(path, {
            mode: "CreatePage",
            path: path,
        });
    });
};
