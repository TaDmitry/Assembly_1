//Открытие закрытие бургера

const burgerButton = document.getElementById("main-menu__burgers");
const overlayMenu = document.getElementById("main-menu__list");

burgerButton.addEventListener("click", () => {
	burgerButton.classList.toggle("close");
	overlayMenu.classList.toggle("overlay");
});
