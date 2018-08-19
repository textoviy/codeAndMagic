"use strict";

var ESC_KEYCODE = 27;
var ENTER_KEYCODE = 13;

// Задаем начальные значения для волшебников
var wizardNames = ["Иван", "Хуан Себастьян", "Мария", "Кристоф",
 "Виктор", "Юлия", "Люпита", "Вашингтон"];

var wizardSurnames = ["да Марья", "Верон", "Мирабелла", "Вальц",
 "Онопко", "Топольницкая", "Нионго", "Ирвинг"];

var coatColors = ["rgb(101, 137, 164)", "rgb(241, 43, 107)",
 "rgb(146, 100, 161)", "rgb(56, 159, 117)", "rgb(215, 210, 55)", "rgb(0, 0, 0)"];

var fireballColors = ["#ee4830", "#30a8ee", "#5ce6c0", "#e848d5", "#e6e848"];

var eyesColors = ["black", "red", "blue", "yellow", "green"];

var wizards = [];

var setupUserName = document.querySelector(".setup-user-name");

var setupFireball = document.querySelector(".setup-fireball");

var mainWizardCoat = document.querySelector(".wizard-coat");

var mainWizardEyes = document.querySelector(".wizard-eyes");

var wizardHead = document.querySelector(".wizard-head");

var similarListElement = document.querySelector(".setup-similar-list");

var similarWizardsTemplate = document.querySelector("#similar-wizard-template").content;

var setup = document.querySelector(".setup");

var setupOpen = document.querySelector(".setup-open");

var setupClose = document.querySelector(".setup-close");

document.querySelector(".setup-similar").classList.remove("hidden");






// Убираем .hidden

var onPopupEscPress = function(evt) {
	if (evt.keyCode === ESC_KEYCODE) {
		closePopup();
	}
}

var openPopup = function() {
	document.removeEventListener("keydown", onPopupEscPress);
	setup.classList.remove("hidden");
	document.removeEventListener("keydown", onPopupEscPress);
}

var closePopup = function() {

	setup.classList.add("hidden");
	document.removeEventListener("keydown", onPopupEscPress);
}



setupOpen.addEventListener("click", function() {
	openPopup();
});

setupOpen.addEventListener("keydown", function(evt) {
	if (evt.keyCode === ENTER_KEYCODE) {
		openPopup();
	}
	debugger;
})

setupClose.addEventListener("click", function() {
	closePopup();
});

setupClose.addEventListener("keydown", function(evt) {
	if (evt.keyCode === ENTER_KEYCODE) {
		closePopup();
	}
})

//setupClose.addEventListener("click", closePopup);

//.addEventListener("keydown", onClickSetup);

//setupClose.addEventListener("keydown", onClickSetupClose);

// Функция получения рандомного индекса заданного массива

var getRandomArrIndex = function(arr) {
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

mainWizardCoat.addEventListener("click", function() {
	mainWizardCoat.style.fill = getRandomArrIndex(coatColors);
});

mainWizardEyes.addEventListener("click", function() {
	mainWizardEyes.style.fill = getRandomArrIndex(eyesColors);
});

setupFireball.addEventListener("click", function() {
	setupFireball.style.backgroundColor = getRandomArrIndex(fireballColors);
});

setupUserName.addEventListener("invalid", function() {
	if (setupUserName.validity.tooShort) {
		setupUserName.setCustomValidity("Минимум 2 знака");
	} else if (setupUserName.validity.valueMissing)  {
		setupUserName.setCustomValidity("Введите имя");
	} else if (setupUserName.validity.tooLong)  {
		setupUserName.setCustomValidity("Максимум 25 знаков");
	} else {
		setupUserName.setCustomValidity("");
	}
}, true);

// for (var i = 0; i < wizards.length; i++) {
// 	var wizardElement = similarWizardsTemplate.cloneNode(true);

// 	wizardElement.querySelector(".setup-similar-label").textContent = wizards[i].name;
// 	wizardElement.querySelector(".wizard-coat").style.fill = wizards[i].coatColor;
// 	wizardElement.querySelector(".wizard-eyes").style.fill = wizards[i].eyesColor;

// 	similarListElement.appendChild(wizardElement)

// }
// 
// 
  var setupDialogElement = document.querySelector('.setup');
  var dialogHandler = setupDialogElement.querySelector('.upload');


 dialogHandle.addEventListener("mousedown", function(evt) {
	evt.preventDefault();

	var startCoords = {
		x: evt.clientX,
		y: evt.clientY
	};


var onMouseMove = function (moveEvt) {
	moveEvt.preventDefault();
	console.log("hello");

	var shift = {
		x: startCoords.x - moveEvt.clientX,
		y: startCoords.y - moveEvt.clientY
	};

    startCoords = {
		x: moveEvt.clientX,
		y: moveEvt.clientY
	};

	setup.style.top = (setup.offsetTop - shift.y) + 'px';
	setup.style.left = (setup.offsetTop - shift.x) + 'px';
}

var onMouseUp = function (upEvt) {
	upEvt.preventDefault();

	document.removeEventListener("mousemove", onMouseMove);
    document.removeEventListener("mouseup", onMouseUp);
}

document.addEventListener("mousemove", onMouseMove);
document.addEventListener("mouseup", onMouseUp);

});
