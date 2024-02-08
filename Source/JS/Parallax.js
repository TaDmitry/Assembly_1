// Сокращения ЦРИ
function replaceTextInH3() {
	var parallax__h3 = document.getElementById("parallax__h3");

	if (parallax__h3) {
		if (window.innerWidth <= 510) {
			parallax__h3.innerHTML = "ЦРИ";
		} else {
			parallax__h3.innerHTML = "Центр <br> Развития <br> Информатизации";
		}
	} else {
		console.error("Элемент <h3 id='parallax__h3'> не найден");
	}
}

replaceTextInH3();

window.addEventListener("resize", replaceTextInH3);
