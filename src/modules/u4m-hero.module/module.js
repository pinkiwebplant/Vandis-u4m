// Handle video popup opening
document.querySelectorAll(".cardVideo").forEach((cardVideo) => {
    cardVideo.addEventListener("click", () => {
        let dtPopup = cardVideo.getAttribute("data-popup-id"),
            popupVideoTag = document.getElementById("video-" + dtPopup),
            popupElement = document.getElementById(dtPopup);

        if (popupElement) {
            popupElement.style.display = "flex";
            popupVideoTag.play(); // No need to set 'autoplay' explicitly
        }
    });
});

// Handle closing of video popup
document.querySelectorAll(".cardpopVideo .close").forEach((closeButton) => {
    closeButton.addEventListener("click", () => {
        document.querySelectorAll(".cardVideoPopup").forEach((popup) => {
            popup.style.display = "none";
        });

        document.querySelectorAll(".cardpopVideo video").forEach((video) => {
            video.pause();
            video.removeAttribute("autoplay"); // Properly remove autoplay
        });
    });
});
