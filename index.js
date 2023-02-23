const myButton = document.getElementById("my-button");
const popup = document.getElementById("popup");

const image = document.getElementById("image");
const buttons = document.querySelectorAll(".color-button");

myButton.addEventListener("mouseenter", () => {
    popup.classList.add("popup-visible");
});

myButton.addEventListener("mouseleave", () => {
    popup.classList.remove("popup-visible");
});

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        const newImage = button.getAttribute("data-image");
        image.setAttribute("src", newImage);
    });
});
