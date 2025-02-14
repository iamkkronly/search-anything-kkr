function searchGoogle() {
    let query = document.getElementById("search-query").value.trim();

    if (query === "") {
        alert("Please enter a search query.");
        return;
    }

    let searchUrl = "https://www.google.com/search?q=";
    let formattedQuery = `"index of" ${query}`; // Only add "index of" in front of the query

    searchUrl += encodeURIComponent(formattedQuery);
    window.open(searchUrl, "_blank");
}
