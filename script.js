function searchGoogle() {
    let query = document.getElementById("search-query").value.trim();
    let filetype = document.getElementById("filetype").value;

    if (query === "") {
        alert("Please enter a search query.");
        return;
    }

    let searchUrl = "https://www.google.com/search?q=";
    let formattedQuery = `"index of" ${query}`;

    if (filetype) {
        formattedQuery = `"index of" ${filetype} ${query}`;
    }

    searchUrl += encodeURIComponent(formattedQuery);
    window.open(searchUrl, "_blank");
}
