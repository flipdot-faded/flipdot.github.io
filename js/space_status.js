const spaceStatusElem = document.getElementById("status-bar-space-status");

fetch("https://api.flipdot.org/")
    .then(response => response.json())
    .then(apiData => {
        if (apiData.open === true) {
            spaceStatusElem.classList.add("open");
        } else {
            spaceStatusElem.classList.add("closed");
        }
    });
