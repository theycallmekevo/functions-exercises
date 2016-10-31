// 1. Build your own concatenation
function combineWords(word1, word2) {
    console.log(word1 + word2);
    return(word1 + word2);
}
// combineWords("Rainbow", "Unicorns");

// 2. Repeat a phrase
function repeatPhrase(phrase, n) {
  for (var i = 0; i < n; i++) {
    console.log(phrase);
//     return(phrase)
  }
};
// repeatPhrase("Donuts", 7);

//3. Build your own Power function
function toTheNthPower(number, power) {
	var result = 1;
	for(var i = 0; i < power; i++) {
		result *= number;
	}
	console.log(result);
	return (result);
}
// toTheNthPower(2, 4);

//4. Area of a circle: π r2
function areaOfACircle(radius) {
  var r = (radius * radius);
  var totalArea = (Math.PI * r);
  console.log(totalArea.toFixed(2));
  return(totalArea.toFixed(2));
}
// areaOfACircle(10);

//5. Pythagorean Theorem: a2 + b2 = c2
function pythagoreanTheorem(a, b) {
  var aSquared = (a * a);
  var bSquared = (b * b);
  var cSquared = (aSquared + bSquared);
  var c = Math.sqrt(cSquared);
  console.log(c.toFixed(1));
  return(c.toFixed(1));
};
// pythagoreanTheorem(3, 4);

//6. Is X Evenly Divisible by Y
function isXEvenlyDivisibleByY(x, y){
  if (x % y === 0) {
    console.log("true");
    return("true");
  } else {
    console.log("false");
    return("false");
  }
};
// isXEvenlyDivisibleByY(8, 4);

// 7. Vowel Count
function countVowels(word) {
  var word = word.toLowerCase();
  var counter = 0;
  for (var i = 0; i < word.length; i++) {
    if (word[i] === "a" || word[i] === "e" || word[i] === "i" || word[i] === "o" || word[i] === "u") {
      counter++;
    } else {
    }
  }
  console.log(counter);
  return(counter);
};
// countVowels("A KeViN TrAn");

// 8. Does the array contain "wdi"
function findWdi(arr){
	for (var i = 0; i < arr.length; i++) {
		if(arr[i] === 'wdi'){
			return true;
		}
	}
	return false;
}
// findWdi(["cheese", "bread", "wdi"]);

//9. Build an ASCII Triangle!
function printTriangle(length){
  var ast = [],
  i, j = 5;
  for (i = 0; i < length; i++) {
    ast[i] = new Array(i + 2).join("*");
    console.log(ast[i]);
  }
};
// printTriangle(5);
