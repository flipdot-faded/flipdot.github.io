const path_segments = window.location.pathname.split("/");
const page_name = path_segments[path_segments.length - 1]
    .split("-")
    .map(segment => segment[0].toUpperCase() + segment.slice(1))
    .join(" ");

document.title = page_name;

const page_titles = document.getElementsByClassName("page-title");
if (page_titles.length != 1) {
    throw new Error("There should only be one .page-title on the 404 page!");
}

page_titles[0].textContent = page_name;

document.getElementById("404-message").innerHTML = "\
    <p>Diese Seite existiert noch nicht.</p>\
    <a class='btn' id='404-new-page-btn' href='#'>Seite erstellen</a>\
";

document.getElementById("404-new-page-btn").addEventListener("click", ev => {
    ev.preventDefault();

    window.wiki_createPage(window.location.pathname.slice(1));
});
