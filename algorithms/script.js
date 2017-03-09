// ==================== //
// Reverse a String

function reverseString(str){
  var newStr = str.split("").reverse().join("");
  return newStr;
}

reverseString("hello");
// ==================== //

// ==================== //
// Factorialize a Number
// ==================== //

// ==================== //
// Check for Palindromes

function palindrome(str) {
  str = str.replace(/[^a-z0-9]+/gi, "");
  str = str.toLowerCase();
  var newStr = str.split(" " && "");
  var revStr = newStr.reverse();
  newStr = revStr.join("");
 
if(newStr === str) {
    return true;
  } else {
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
		}
	}
	return newStr;
}

findLong("The quick brown fox jumped over the lazy dog");
// ==================== //

// ==================== //
// Title Case a Sentence
// ==================== //

// ==================== //
// Return Largest Numbers in Arrays

function largestOfFour(arr) {
  // You can do this!
  var newArr = [0,0,0,0];
  for(var i = 0; i < arr.length; i++){
   for(var x = 0; x < arr[i].length; x++){
     if(arr[i][x] > newArr[i]) {         
          newArr[i] = arr[i][x];
	 }
   	}
  }
  return newArr;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
// ==================== //


// ==================== //
// Confirm the Ending

function confirmEnding(str, target) {
  // "Never give up and good luck will find you."
  // -- Falcor
  var newStr = str.substr(str.length - target.length);
  if(newStr === target){
    return true;
  } else {
    return false;
  }
}

confirmEnding("Bastian", "n");

// ==================== //


// ==================== //
// Repeat a string, repeat a string
function repeatStringNumTimes(str, num) {
  return num > 0 ? str.repeat(num) : '';
}

repeatStringNumTimes("abc", 3);
// ==================== //


// ==================== //
// Turnacate a String

function truncateString(str, num) {
  // Clear out that junk in your trunk
  var newStr = "";
  if(str.length > num){
    if(num <= 3) {
      	newStr = str.slice(0, num) + "...";
    } else {
       	newStr = str.slice(0, num - 3) + "...";
    }
  } else {
    return str;
  }
  return newStr;
}

truncateString("A-tisket a-tasket A green and yellow basket", 11);

// ==================== //


// ==================== //
// Chunky Monkey

// ==================== //


// ==================== //
// Slasher Flick // Reduced this code significantly down to one line :)
function slasher(arr, howMany) {
  // it doesn't always pay to be first
  return arr.slice(howMany);
}

slasher([1, 2, 3], 2);
// ==================== //

// ==================== //
// Mutations
// ==================== //

// ==================== //
// Falsy Bouncer
// ==================== //

// ==================== //
// Seek and Destroy
// ==================== //

// ==================== //
// Where do I belong
// ==================== //

// ==================== //
// Caesars Cipher
// ==================== //

