"use strict";


var wizardNames = ["Иван", "Хуан Себастьян", "Мария", "Кристоф",
 "Виктор", "Юлия", "Люпита", "Вашингтон"];

var wizardSurnames = ["да Марья", "Верон", "Мирабелла", "Вальц",
 "Онопко", "Топольницкая", "Нионго", "Ирвинг"];

var coatColors = ["rgb(101, 137, 164)", "rgb(241, 43, 107)",
 "rgb(146, 100, 161)", "rgb(56, 159, 117)", "rgb(215, 210, 55)", "rgb(0, 0, 0)"];

var eyesColors = ["black", "red", "blue", "yellow", "green"];

var wizards = [];



var similarListElement = document.querySelector(".setup-similar-list");

var similarWizardsTemplate = document.querySelector("#similar-wizard-template").content;




// Убираем .hidden
// 
 var setup = document.querySelector(".setup");

setup.classList.remove("hidden");

document.querySelector(".setup-similar").classList.remove("hidden");


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

var fragment = document.createDocumentFragment();

var renderWizard = function (wizard) {
	var wizardElement = similarWizardsTemplate.cloneNode(true);

	wizardElement.querySelector(".setup-similar-label").textContent = wizards[i].name;
 	wizardElement.querySelector(".wizard-coat").style.fill = wizards[i].coatColor;
 	wizardElement.querySelector(".wizard-eyes").style.fill = wizards[i].eyesColor;

 	return wizardElement;
}
for (var i = 0; i < wizards.length; i++) {
	fragment.appendChild(renderWizard(wizards[i]));
}
similarListElement.appendChild(fragment);


// for (var i = 0; i < wizards.length; i++) {
// 	var wizardElement = similarWizardsTemplate.cloneNode(true);

// 	wizardElement.querySelector(".setup-similar-label").textContent = wizards[i].name;
// 	wizardElement.querySelector(".wizard-coat").style.fill = wizards[i].coatColor;
// 	wizardElement.querySelector(".wizard-eyes").style.fill = wizards[i].eyesColor;

// 	similarListElement.appendChild(wizardElement)

// }

document.write(wizards[0].name);


