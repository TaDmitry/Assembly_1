// Проверяем, сохранен ли язык в localStorage
const storedLanguage = localStorage.getItem("selectedLanguage");
if (storedLanguage) {
	document.getElementById("selectedLanguage").innerText = storedLanguage;
}

const mainMenu = document.getElementById("mainMenu");
const languagesMenu = document.getElementById("languages");

mainMenu.addEventListener("mouseover", function () {
	if (window.innerWidth > 768) {
		languagesMenu.style.display = "block";
	}
});

mainMenu.addEventListener("mouseout", function () {
	if (window.innerWidth > 768) {
		languagesMenu.style.display = "none";
	}
});

mainMenu.addEventListener("click", function () {
	if (window.innerWidth <= 768) {
		languagesMenu.style.display = languagesMenu.style.display === "block" ? "none" : "block";
	}
});

// Закрываем меню при клике вне него и при клике на любую кнопку языка
window.addEventListener("click", function (event) {
	if (
		event.target !== mainMenu &&
		!mainMenu.contains(event.target) &&
		event.target !== languagesMenu &&
		!languagesMenu.contains(event.target)
	) {
		closeLanguagesMenu();
	}
	if (
		event.target.id === "ruLanguage" ||
		event.target.id === "enLanguage" ||
		event.target.id === "kkLanguage"
	) {
		closeLanguagesMenu();
	}
});

// Функция для закрытия меню на мобильных устройствах
function closeLanguagesMenu() {
	if (window.innerWidth <= 768) {
		languagesMenu.style.display = "none";
	}
}

// Сохраняем каждый язык в переменную по его идентификатору
const ruLanguageBtn = document.getElementById("ruLanguage");
const enLanguageBtn = document.getElementById("enLanguage");
const kkLanguageBtn = document.getElementById("kkLanguage");

// Добавляем обработчики событий для каждого языка
ruLanguageBtn.addEventListener("click", function () {
	changeLanguage("RU");
});

enLanguageBtn.addEventListener("click", function () {
	changeLanguage("EN");
});

kkLanguageBtn.addEventListener("click", function () {
	changeLanguage("KK");
});

// Функция для смены языка
function changeLanguage(language) {
	// Сохраняем выбранный язык в localStorage
	localStorage.setItem("selectedLanguage", language);

	// Обновляем отображение выбранного языка
	document.getElementById("selectedLanguage").innerText = language;
}
