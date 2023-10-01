"use stricr";

// Ждем загрузку контента
window.onload = function () {
	const parallax = document.querySelector(".parallax");

	if (parallax) {
		const content = document.querySelector(".parallax__content");
		const background = document.querySelector(".images-parallax__background");

		// Коэффициенты
		const forBackground = 40;

		// Скорость анимации
		const speed = 0.05;

		// Обьвление переменных
		let positionX = 0,
			positionY = 0;
		let coordXprocent = 0,
			coordYprocent = 0;

		function setMouseParallaxStyle() {
			const distX = coordXprocent - positionX;
			const distY = coordYprocent - positionY;

			positionX = positionX + distX * speed;
			positionY = positionY + distY * speed;

			// Передаем стили
			background.style.cssText = `transform: translate(${positionX / forBackground}%,${
				positionY / forBackground
			}%);`;

			requestAnimationFrame(setMouseParallaxStyle);
		}
		setMouseParallaxStyle();

		parallax.addEventListener("mousemove", function (e) {
			// Получение ширины и высоты блока
			const parallaxWidth = parallax.offsetWidth;
			const parallaxHeight = parallax.offsetHeight;

			// Ноль по середине
			const coordX = e.pageX - parallaxWidth / 2;
			const coordY = e.pageY - parallaxHeight / 2;

			// Получаем проценты
			coordXprocent = (coordX / parallaxWidth) * 100;
			coordYprocent = (coordY / parallaxHeight) * 100;
		});

		// Parallfx при скролле

		let thresholdSets = [];
		for (let i = 0; i <= 1.0; i += 0.005) {
			thresholdSets.push(i);
		}
		const callback = function (entries, observer) {
			const scrollTopProcent = (window.pageYOffset / parallax.offsetHeight) * 100;
			setParallaxItemsStyle(scrollTopProcent);
		};
		const observer = new IntersectionObserver(callback, {
			threshold: thresholdSets,
		});

		observer.observe(document.querySelector(".content"));

		function setParallaxItemsStyle(scrollTopProcent) {
			content.style.cssText = `transform: translate(0%,-${scrollTopProcent / 1}%);`;
		}
	}
};

// Прокрутка страницы
document.querySelectorAll("nav a").forEach((anchor) => {
	anchor.addEventListener("click", function (e) {
		e.preventDefault();

		const targetId = this.getAttribute("href").substring(1);
		const targetSection = document.getElementById(targetId);

		const targetOffset = targetSection.getBoundingClientRect().top + window.scrollY;

		window.scrollTo({
			top: targetOffset - document.querySelector("nav").offsetHeight,
			behavior: "smooth",
		});
	});
});

document.getElementById("structure__nav-ul-guide").addEventListener("click", function () {
	document.getElementById("structure__content-guide").style.cssText = "display: flex;";
	document.getElementById("structure__content-departments").style.cssText = "display: none;";
});

document.getElementById("structure__nav-ul-departments").addEventListener("click", function () {
	document.getElementById("structure__content-departments").style.cssText = "display: block;";
	document.getElementById("structure__content-guide").style.cssText = "display: none;";
});
