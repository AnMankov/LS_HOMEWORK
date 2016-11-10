var emptyArray = [],
noArray = true,
allNumbers = [1, 2, 4, 5, 6, 7, 8],
someNumbers = [1, 2, 'привет', 4, 5, 'loftschool', 6, 7, 8],
noNumbers = ['это', 'массив', 'без', 'чисел'];

/* Фильтрующая функция */
function isNumber(val) {
return typeof val === 'number';
}

/*
Проверка исходного массива
Коды ошибок:
------------ARRAY_IS_EMPTY
------------IT'S_NOT_ARRAY
*/
function checkSrc(source) {
	if (source.length == 0) throw new Error("ARRAY_IS_EMPTY")
	else if (!Array.isArray(source)) throw new Error("IT'S_NOT_ARRAY")
}

/* Обработка ошибок - разбор кодов */
function handlerExcept(e) {
	switch(e.message) {
		case "ARRAY_IS_EMPTY": 		
				return console.log("В 'source' пустой массив!");
		case "IT'S_NOT_ARRAY":
				return console.log("В 'source' не массив!");
	}
}

/* Главная функция */
function isAllTrue(source, filterFn) {
	var flagExcept = 0;
	try {
		checkSrc(source);
	}
	catch(e) {
		handlerExcept(e);
		flagExcept = "-Обработано исключение-\n";
	}
	if (flagExcept) return flagExcept;
	else {
				for(var i = 0; filterFn(source[i]) && i < source.length; ++i)
											;
				return !(i < source.length);
	}															
}

/*Вызовы*/
console.log(isAllTrue(emptyArray, isNumber)); //исключение
console.log(isAllTrue(noArray, isNumber)); //исключение
console.log(isAllTrue(allNumbers, isNumber)); //вернет true
console.log(isAllTrue(someNumbers, isNumber)); //вернет false
console.log(isAllTrue(noNumbers, isNumber)); //вернет false