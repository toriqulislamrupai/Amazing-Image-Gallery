function openLightbox(img) {
    const lightbox = document.getElementById("lightbox");
    const lightboxImage = document.getElementById("lightboxImage");
    lightboxImage.src = img.src;
    lightbox.classList.remove("hidden");
}

function closeLightbox() {
    const lightbox = document.getElementById("lightbox");
    lightbox.classList.add("hidden");
    const lightboxImage = document.getElementById("lightboxImage");
    lightboxImage.classList.remove("zoomed");
}

function toggleZoom() {
    const lightboxImage = document.getElementById("lightboxImage");
    if (lightboxImage.classList.contains("zoomed")) {
        lightboxImage.classList.remove("zoomed");
    } else {
        lightboxImage.classList.add("zoomed");
    }
}
