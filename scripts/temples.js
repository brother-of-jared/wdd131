// For footer
const currentyear = document.querySelector("#currentyear");
const today = new Date();

currentyear.innerHTML = `&copy; <span id="currentyear">${today.getFullYear()}</span>`;
document.getElementById("lastModified").innerHTML = document.lastModified;

// For mobile nav
const hamButton = document.querySelector("#menu");
const navigation = document.querySelector("nav");

hamButton.addEventListener("click", () => {
	navigation.classList.toggle("open");
	hamButton.classList.toggle("open");
});
