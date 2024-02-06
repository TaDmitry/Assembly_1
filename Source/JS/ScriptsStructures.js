// Обработчики смены контента при клике на соответствующие ссылки
document.getElementById("structure__nav-ul-guide").addEventListener("click", function () {
	document.getElementById("structure__content-guide").style.display = "flex";
	document.getElementById("structure__content-departments").style.display = "none";
});

document.getElementById("structure__nav-ul-departments").addEventListener("click", function () {
	document.getElementById("structure__content-departments").style.display = "block";
	document.getElementById("structure__content-guide").style.display = "none";
});
