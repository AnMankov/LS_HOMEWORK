var allNumbers = [1, 2, 4, 5, 6, 7, 8],
someNumbers = [1, 2, 'привет', 4, 5, 'loftschool', 6, 7, 8],
noNumbers = ['это', 'массив', 'без', 'чисел'];

/* Фильтрующая функция */
function isNumber(val) {
return typeof val === 'number';
}

/* Главная функция */
function isSomeTrue(source, filterFn){
	for (var i = 0; !filterFn(source[i]) && i < source.length; ++i)
								;
	return (i < source.length);
}

/*Вызовы*/
console.log(isSomeTrue(allNumbers, isNumber)); //вернет true
console.log(isSomeTrue(someNumbers, isNumber)); //вернет true
console.log(isSomeTrue(noNumbers, isNumber)); //вернет false