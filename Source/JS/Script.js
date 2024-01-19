"use strict";

// Выбираем необходимые DOM-элементы
const parallax = document.querySelector(".parallax");
const background = document.querySelector(".images-parallax__background");
const buttons = document.querySelectorAll(".structure__nav-ul-li");

// Коэффициенты для параллакса
const forBackground = 40;
const speed = 0.05;

// Переменные для отслеживания координат мыши
let positionX = 0,
	positionY = 0;
let coordXprocent = 0,
	coordYprocent = 0;

// Функция для установки стилей параллакса при движении мыши
function setMouseParallaxStyle() {
	const distX = coordXprocent - positionX;
	const distY = coordYprocent - positionY;

	positionX = positionX + distX * speed;
	positionY = positionY + distY * speed;

	// Применяем стили к заднему фону
	background.style.cssText = `transform: translate(${positionX / forBackground}%,${
		positionY / forBackground
	}%);`;

	// Запускаем анимацию следующего кадра
	requestAnimationFrame(setMouseParallaxStyle);
}

// Инициализация параллакса при движении мыши
setMouseParallaxStyle();

// Обработчик движения мыши для определения координат
parallax.addEventListener("mousemove", function (e) {
	const parallaxWidth = parallax.offsetWidth;
	const parallaxHeight = parallax.offsetHeight;

	const coordX = e.pageX - parallaxWidth / 2;
	const coordY = e.pageY - parallaxHeight / 2;

	// Получаем процентные координаты
	coordXprocent = (coordX / parallaxWidth) * 100;
	coordYprocent = (coordY / parallaxHeight) * 100;
});

// Визуальное отображение активного блока навигации
buttons.forEach((button) => {
	button.addEventListener("click", () => {
		// Снимаем выделение с других кнопок
		buttons.forEach((btn) => btn.classList.remove("structure__nav-ul-li-activated"));
		// Выделяем текущую кнопку
		button.classList.add("structure__nav-ul-li-activated");
	});
});

// Обработчики смены контента при клике на соответствующие ссылки
document.getElementById("structure__nav-ul-guide").addEventListener("click", function () {
	document.getElementById("structure__content-guide").style.display = "flex";
	document.getElementById("structure__content-departments").style.display = "none";
});

document.getElementById("structure__nav-ul-departments").addEventListener("click", function () {
	document.getElementById("structure__content-departments").style.display = "block";
	document.getElementById("structure__content-guide").style.display = "none";
});
