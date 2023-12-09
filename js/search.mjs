const searchModule = (function() {

    const resultsContainer = document.getElementById("#resultsContainer");

    function displayResults() {
        let searchTerm = searchInput.value;

        let resultsHTML = "";
        let contents = searchMyWebsite(searchTerm);

        contents.forEach(content => {
            resultsHTML+= `<li>${content.title}</li>`;
        });

        resultsContainer.innerHTML = resultsHTML;

        if(resultsHTML) {
            resultsContainer.style.display = "block";
        } else {
            resultsContainer.style.display = "none";
        }
    }

    return {
        displayResults
    };

})();

export default searchModule;