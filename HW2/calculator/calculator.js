/* Главная функция */
function calculator(firstNumber) {

		/* Складывает */
		function sum() {	  
		  let res = firstNumber;
		  for (let i = 0; i < arguments.length; i++) {
		    res += arguments[i];
		  }
		  return res;
		}

		/* Вычитает */
		function dif() {		 
			let res = firstNumber; 
		  for (let i = 0; i < arguments.length; i++) {
		    res -= arguments[i];
		  }
		  return res;
		}

		/* Делит */
		function div() {
			let res = firstNumber;
		  try {	    
		    for (let i = 0; i < arguments.length; i++) {
		      if (arguments[i]){
		        res /= arguments[i];
		  		}
		      else {
		        throw new Error("На ноль делить нельзя!");
		      }
		    }
		    return res;
		  }
		  catch(e) {
		  	console.log('\n' + e.message)
		  	return "-Обработано исключение-\n";
			}
		}

		/* Умножает */
		function mul() {	
			let res = firstNumber;  
		  for (let i = 0; i < arguments.length; i++) {
		    res *= arguments[i];
		  }
		  return res;
		}

	  return {
	  	sum,
	  	dif,
	  	div,
	  	mul
	 	};
}

var myCalculator = calculator(100);
console.log(myCalculator.sum(1, 2, 3)); //вернет 106
console.log(myCalculator.dif(10, 20)); //вернет 70
console.log(myCalculator.div(0, 2)); //вернет 25
console.log(myCalculator.mul(2, 2)); //вернет 400
