// Проверяем, сохранен ли язык в localStorage
const storedLanguage = localStorage.getItem("selectedLanguage");
if (storedLanguage) {
	document.getElementById("selectedLanguage").innerText = storedLanguage;
}

const mainMenu = document.getElementById("mainMenu");
const languagesMenu = document.getElementById("languages");

// Открываем меню при клике на больших экранах
mainMenu.addEventListener("mouseover", function () {
	if (window.innerWidth > 768) {
		languagesMenu.style.display = "block";
	}
});

// Закрываем меню при уходе с больших экранов
mainMenu.addEventListener("mouseout", function () {
	if (window.innerWidth > 768) {
		languagesMenu.style.display = "none";
	}
});

// Открываем/закрываем меню при клике на маленьких экранах
mainMenu.addEventListener("click", function () {
	if (window.innerWidth <= 768) {
		languagesMenu.style.display = languagesMenu.style.display === "block" ? "none" : "block";
	}
});

// Закрываем меню при клике вне него
window.addEventListener("click", function (event) {
	if (
		event.target !== mainMenu &&
		!mainMenu.contains(event.target) &&
		event.target !== languagesMenu &&
		!languagesMenu.contains(event.target)
	) {
		languagesMenu.style.display = "none";
	}
});

// Функция для смены языка
document.getElementById("ruLanguage").addEventListener("click", function () {
	changeLanguage("RU");
});

document.getElementById("enLanguage").addEventListener("click", function () {
	changeLanguage("EN");
});

document.getElementById("kkLanguage").addEventListener("click", function () {
	changeLanguage("KK");
});

function changeLanguage(language) {
	// Сохраняем выбранный язык в localStorage
	localStorage.setItem("selectedLanguage", language);

	// Обновляем отображение выбранного языка
	document.getElementById("selectedLanguage").innerText = language;

	// Закрываем меню на мобильных устройствах
	languagesMenu.style.display = "none";
}
