// ==================== //
// Reverse a String

function reverseString(str){
   var newStr = str.split("").reverse().join("");
  return newStr;
}

reverseString("hello");
// ==================== //



// ==================== //
// Check for Palindromes

function palindrome(str) {
  str = str.replace(/[^a-z0-9]+/gi, "");
  str = str.toLowerCase();
  var newStr = str.split(" " && "");
  var revStr = newStr.reverse();
  newStr = revStr.join("");
 
if (newStr === str) {
    return true;
  }
  else {
    return false;
  }
}

palindrome("nope");
// ==================== //



// ==================== //
// Find Longest Word in a String

function findLong(str) {
	'use strict';
	var newStr = 0;
	var splitStr = str.split(" ");
	for (var i = 0; i < splitStr.length; i++){	
		if(splitStr[i].length >= newStr){
			newStr = splitStr[i].length;
			console.log(newStr);
		}
	}
	return newStr;
}

findLong("The quick brown fox jumped over the lazy dog");
// ==================== //