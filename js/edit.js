function loadEditorCss() {
    // From https://stackoverflow.com/a/39008859
    return new Promise((resolve, reject) => {
        const link = document.createElement("link");
        link.rel = "stylesheet";
        link.href = "/css/github_md_editor.css";
        link.addEventListener("load", resolve);
        link.addEventListener("error", () => reject("Error loading stylesheet."));
        link.addEventListener("abort", () => reject("Stylesheet loading aborted."));
        document.head.appendChild(link);
    });
}

function loadEditorJs() {
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

    const editorElem = document.getElementById("github-md-editor");

    Promise.all([loadEditorCss(), loadEditorJs()])
        .then(() => {
            window.startEditor(editorElem, {
                mode: "CreatePage",
                path: path,
            });
        }).catch(err => {
            throw err;
        });
};
