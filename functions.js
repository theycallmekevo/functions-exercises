//#1 Build your own concatenation
function concatenation(phrase1, phrase2){
  console.log(phrase1 + phrase2);
  return(phrase1 + phrase2);
};
// concatenation("Rainbow", "Unicorns");

//#2 Repeat a phrase
function repeatPhrase(word, n){
  for (var i = 0; i < n; i++) {
    console.log(word);
    return(word);
  }
};
// repeatPhrase("Donuts", 5);

//#3 Build your own Power function
////////////////////////////////////////// do not understand this solution
function toTheNthPower(number, power) {
	var result = 1;
	for(var i = 0; i < power; i++) {
		result *= number;
	}
	return result;
}
//toTheNthPower(4, 4);

//#4 Area of a circle
function circleArea(radius) {
  var r = (radius * radius);
  var totalArea = (Math.PI * r);
  console.log(totalArea);
  return(totalArea);
}
// circleArea(10);

//#5 Pythagorean Theorem
function pythagoreanTheorem(a, b){
  var aSquared = (a * a);
  var bSquared = (b * b);
  var cSquared = (aSquared + bSquared);
  var c = Math.sqrt(cSquared);
  console.log(c);
  return(c);
};
// pythagoreanTheorem(2, 3);

//#6. Is X Evenly Divisible by Y
function eventlyDivisible(x, y){
  if (x % y === 0) {
    console.log("true");
    return("true");
  } else {
    console.log("false");
    return("false");
  }
};
// eventlyDivisible(4, 2);

//#7. Vowel Count
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

//#8. Does the array contain "wdi"
function findWdi(arr){
	for (var i = 0; i < arr.length; i++) {
		if(arr[i] === 'wdi'){
			return true;
		}
	}
	return false;
}

// findWdi(["cheese", "bread", "wdi"]);

// #9. Build an ASCII Triangle!
function triangle(){
  var ast = [],
  i, j = 5;
  for (i = 0; i < j; i++) {
    ast[i] = new Array(i + 2).join("*");
    console.log(ast[i]);
  }
};
// triangle();
