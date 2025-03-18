// Handle video popup opening
document.querySelectorAll(".u4m-alternating-content .cardVideo").forEach((cardVideo) => {
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
document.querySelectorAll(".cmpopup .cardpopVideo .close").forEach((closeButton) => {
    closeButton.addEventListener("click", () => {
        document.querySelectorAll(".cardVideoPopup.cmpopup").forEach((popup) => {
            popup.style.display = "none";
        });

        document.querySelectorAll(" .cmpopup .cardpopVideo video").forEach((video) => {
            video.pause();
            video.removeAttribute("autoplay"); // Properly remove autoplay
        });
    });
});
