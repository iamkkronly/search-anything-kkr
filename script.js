function searchGoogle() {
    let query = document.getElementById("search-query").value;
    let filetype = document.getElementById("filetype").value;

    if (query === "") {
        alert("Please enter a search query.");
        return;
    }

    let searchUrl = "https://www.google.com/search?q=";

    if (filetype) {
        searchUrl += `intitle:"index of" ${filetype} ${query}`;
    } else {
        searchUrl += query;
    }

    window.open(searchUrl, "_blank");
}
