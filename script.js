// Navigation
function goNext() {
    window.location.href = "page2.html";
}

function goBack() {
    window.location.href = "index.html";
}

// Hearts creation
const heartsContainer = document.querySelector(".hearts");

function createHeart() {
    const heart = document.createElement("span");
    heart.innerHTML = "💖";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = Math.random() * 3 + 3 + "s";
    heartsContainer.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 6000);
}

setInterval(createHeart, 300);
