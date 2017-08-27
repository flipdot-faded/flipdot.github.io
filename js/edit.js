window.wiki_runEditor = function() {
    const editor = document.createElement("script");
    editor.src = "/js/github_md_editor.js";
    document.getElementsByTagName("head")[0].appendChild(editor);
};

window.wiki_createPage = function(path) {
    window.githubMdEditorConfig = {
        mode: "CreatePage",
        path: path,
    };

    window.wiki_runEditor();
};
