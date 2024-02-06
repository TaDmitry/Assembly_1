// Обработчики смены контента при клике на соответствующие ссылки
document.getElementById("structure__nav-ul-guide").addEventListener("click", function () {
	document.getElementById("structure__content-guide").style.display = "flex";
	document.getElementById("structure__content-departments").style.display = "none";
});

document.getElementById("structure__nav-ul-departments").addEventListener("click", function () {
	document.getElementById("structure__content-departments").style.display = "block";
	document.getElementById("structure__content-guide").style.display = "none";
});

window.onload = function () {
	function replacePhoneLink() {
		// Получаем ссылку и размер экрана
		var phoneLink = document.querySelector("#phoneLink");
		var screenWidth = window.innerWidth;

		if (screenWidth <= 768) {
			phoneLink.href = "tel:+77777777777";
		} else {
			phoneLink.href = "";
		}
	}

	// Вызываем функцию при загрузке страницы и изменении размера экрана
	replacePhoneLink();
	window.addEventListener("resize", replacePhoneLink);
};
