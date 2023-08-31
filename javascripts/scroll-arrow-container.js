document.addEventListener("DOMContentLoaded", function () {
    // Get the arrow element by its ID
    var arrowElement = document.getElementById("scrollArrowContainer");

    // Add a class to hide the arrow after 1000ms (1 second)
    setTimeout(function () {
        arrowElement.classList.add("hidden");
    }, 2000);
});