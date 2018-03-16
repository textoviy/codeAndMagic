"use strict";


var wizardNames = ["Иван", "Хуан Себастьян", "Мария", "Кристоф",
 "Виктор", "Юлия", "Люпита", "Вашингтон"];

var wizardSurnames = ["да Марья", "Верон", "Мирабелла", "Вальц",
 "Онопко", "Топольницкая", "Нионго", "Ирвинг"];

var coatColors = ["rgb(101, 137, 164)", "rgb(241, 43, 107)",
 "rgb(146, 100, 161)", "rgb(56, 159, 117)", "rgb(215, 210, 55)", "rgb(0, 0, 0)"];

var eyesColors = ["black", "red", "blue", "yellow", "green"];

var wizards = [];

var setup = document.querySelector(".setup");

// Убираем .hidden

setup.classList.remove("hidden");

// Функция получения рандомного индекса заданного массива

var getRandomArrIndex = function (arr) {
	var randomNum = Math.floor(Math.random() * arr.length);
	return arr[randomNum];
}

var getFullName = function () {

	return (Math.floor(Math.random() * 2)) ? getRandomArrIndex(wizardNames) + " " + getRandomArrIndex(wizardSurnames) :
	getRandomArrIndex(wizardSurnames) + " " + getRandomArrIndex(wizardNames);
}

for (var i = 0; i < 4; i++) {
	wizards.push({
		name: getFullName(),
		coatColor: getRandomArrIndex(coatColors),
		eyesColor: getRandomArrIndex(eyesColors)
	});
}

document.write(wizards[0].name);


