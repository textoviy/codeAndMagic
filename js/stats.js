"use strict";

/*
var canvas = document.getElementById("myCanvas"); // in your HTML this element appears as 
var ctx = canvas.getContext("2d");
*/

/*
window.renderStatistics = function (ctx, names, times) {
	ctx.fillStyle = "rgba(0, 0, 0, 0.7)";
	ctx.strokeRect(110, 20, 420, 270);
	ctx.fillRect(110, 20, 420, 270);
	ctx.fillStyle = "rgba(256, 256, 256, 1.0)";
	ctx.strokeRect(100, 10, 420, 270);
	ctx.fillRect(100, 10, 420, 270);

	ctx.fillStyle = "black";
	ctx.font = "16px PT Mono";



	ctx.fillText("Ура вы победили!\nСписок результатов:", 120, 40);

	var max = -1;
	var maxIndex = -1;

	for (var i = 0; i < times.length; i++) {
		var time = times[i];
		if (time > max) {
			max = time;
			maxIndex = i;
		}
	}


	var histogramWidth = 150;
	var step = histogramWidth / (max - 0);

	ctx.fillText("Худшее время: " + max.toFixed(2) + "мс у игрока " + names[maxIndex], 120, 60);
	
	

	var barHeight = 40;
	var indent = 50;
	var initialX = 120;
	var initialY = 80;
	var lineHeight = 25;


	for (var i = 0; i < times.length; i++) {
		//ctx.fillStyle = "red";
		
		ctx.fillRect(initialX, initialY + indent * i, times[i] * step, barHeight);
		ctx.fillText(names[i], initialX + histogramWidth, initialY + lineHeight + indent * i);
	}
};

*/

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
		"~" + Math.ceil(times[i] / 1000) + " мс",
		statisticsBlockX + barGap * i + barWidth * (i + 1) - 4,
		barY + barHeight
		);
}

};



/*

"use strict";

window.renderStatistics = function (ctx, names, times) {

  var CLOUD_WIDTH = 420;
  var CLOUD_HEIGHT = 270;
  var CLOUD_X = 100;
  var CLOUD_Y = 10;
  var GAP = 10;
  var FONT_GAP = 16;
  var TEXT_FONT = "16px PT Mono";
  var BAR_WIDTH = 40;
  var BAR_GAP = 50;
  var BAR_HEIGHT = 150;
  var BAR_X = 90;

  var renderBlock = function (x, y, width, height, color, text) {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, width, height);
  };

  var renderText = function (text, x, y) {
    ctx.fillStyle = "#000";
    ctx.font = TEXT_FONT;
    ctx.textBaseline = "hanging";
    ctx.fillText(text, x, y);
  };

  var getMaxElement = function (arr) {
    var maxElement = arr[0];

    for (var i = 0; i < arr.length; i++) {
      if (arr[i] > maxElement) {
        maxElement = arr[i];
      }
    }

    return maxElement;
  };

  var getRandomColor = function (name) {
    return name === "Вы" ? "rgba(255, 0, 0, 1)" : "rgba(0, 0, 255, " + Math.random() + ")";
  };
  renderBlock(CLOUD_X + GAP, CLOUD_Y + GAP, CLOUD_WIDTH, CLOUD_HEIGHT, "rgba(0, 0, 0, 0.7)");
  renderBlock(CLOUD_X, CLOUD_Y, CLOUD_WIDTH, CLOUD_HEIGHT, "#fff");
  renderText("Ура Вы победили!", CLOUD_X + GAP * 2, CLOUD_Y + GAP * 2);
  renderText("Список результатов:", CLOUD_X + GAP * 2, CLOUD_Y + GAP * 2 + FONT_GAP);

  var maxTime = getMaxElement(times);

  for (var i = 0; i < names.length; i++) {
    var barTotalHeight = (BAR_HEIGHT * times[i]) / maxTime;
    renderBlock(
        CLOUD_X + BAR_GAP * i + BAR_WIDTH * (i + 1),
        BAR_X + BAR_HEIGHT - barTotalHeight,
        BAR_WIDTH,
        barTotalHeight,
        getRandomColor(names[i])
    );
    renderText(
        names[i],
        CLOUD_X + BAR_GAP * i + BAR_WIDTH * (i + 1),
        CLOUD_Y + CLOUD_HEIGHT - GAP - FONT_GAP
    );
    renderText(
        Math.round(times[i]),
        CLOUD_X + BAR_GAP * i + BAR_WIDTH * (i + 1),
        BAR_X + BAR_HEIGHT - barTotalHeight - FONT_GAP
    );
  }
};
 */