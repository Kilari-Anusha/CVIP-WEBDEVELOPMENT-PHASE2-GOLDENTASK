document.addEventListener("DOMContentLoaded", function() {
    const originalLinkInput = document.getElementById("original-link");
    const shortenButton = document.getElementById("shorten-button");
    const shortenedLink = document.getElementById("shortened-link");

    shortenButton.addEventListener("click", function() {
        const originalLink = originalLinkInput.value.trim();

        // You can add your link shortening logic here
        // For this example, we'll just display the original link
        shortenedLink.href = originalLink;
        shortenedLink.textContent = originalLink;
        shortenedLink.style.display = "block";
    });
});
