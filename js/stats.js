"use strict";

window.renderStatistics = function (ctx, names, times) {

	// Задаем свойства для всех элементов
	
	// Координаты
	
	var statisticsBlockX = 100;
	var statisticsBlockY = 10;
	var statisticsBlockShadowX = 110;
	var statisticsBlockShadowY = 20;

	// Высота, ширина
	
	var statisticsBlockHeight = 270;
	var statisticsBlockWidth = 420;

	// Отступ между блоками гистограммы
	
	var gap = 10;

	// Высота, ширина, блока гистограммы
	
	var barHeight = 150;
	var barWidth = 40;

    // Отступ между блоками гистограммы

    var barGap = 60;

    // Координата блока гистограммы (Отступ сверху)

    var barY = 110;

	// Шрифт
	
	var font = "16px PT Mono"

ctx.textBaseline = "hanging";

// Функция создания блока

var createBlock = function (x, y, width, height, color) {
	ctx.fillStyle = color;
	ctx.fillRect(x, y, width, height);
}

// Функция создания текста

var createText = function (text, x, y) {
	ctx.font = font;
	ctx.fillStyle = "#000";
    ctx.fillText(text, x, y);
}

// Функция нахождения максимального элемента массива

var getMaxElement = function (arr) {
	var maxElement = arr[0];

	for (var i = 0; i < arr.length; i++) {
		if (arr[i] > maxElement)
		maxElement = arr[i];	
	}

	return maxElement;
};

var maxTime = getMaxElement(times);

// Генерим рандомные цвета

var getRandomColor = function (name) {
    return name === "Вы" ? "rgba(255, 0, 0, 1)" : "rgba(0, 0, 255, " + Math.random() + ")";
  };

// Создаем тень для блока

createBlock(
	statisticsBlockShadowX, 
	statisticsBlockShadowY, 
	statisticsBlockWidth, 
	statisticsBlockHeight,
	"rgba(0, 0, 0, 0.7)"
	);

// Создаем сам блок

createBlock(
	statisticsBlockX, 
	statisticsBlockY, 
	statisticsBlockWidth, 
	statisticsBlockHeight,
	"#ffffff"
	);

// Создаем Текст

createText(
	"Ура! Вы победили!",
	statisticsBlockX + gap * 2,
	statisticsBlockY + gap * 3,
	
	);

createText(
	"Список результатов:",
	statisticsBlockX + gap * 2,
	statisticsBlockY + gap * 5,

	);



// Отрисовываем гистограмму

for (var i = 0; i < names.length; i++) {

	// Определяем длину блока гистограммы 
	
	var barMaxHeight = (barHeight * times[i]) / maxTime;

	// Создаем блок гистограммы

	createBlock(
		statisticsBlockX + barGap * i + barWidth * (i + 1),
        barY + barHeight - barMaxHeight,
        barWidth,
        barMaxHeight,
        getRandomColor(names[i])
		);

	// Пишем Имена

	createText(
		names[i],
		statisticsBlockX + barGap * i + barWidth * (i + 1),
		barY - 20 + barHeight - barMaxHeight,
		);

	// Пишем мс.

	createText(
		"~" + Math.ceil(times[i] / 1000) + " с",
		statisticsBlockX + barGap * i + barWidth * (i + 1) - 1,
		barY + barHeight
		);
}

};

