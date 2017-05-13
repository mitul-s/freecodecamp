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
function titleCase(str) {
  var capStr = [];
  var fullStr;
  var newStr = str.split(" ");
  for(var i = 0; i < newStr.length; i++){
      capStr[i] = newStr[i].slice(0,1).toUpperCase() + newStr[i].slice(1).toLowerCase();
      fullStr = capStr.join(" ");
  }
      return fullStr;
}

titleCase("I'm a little tea pot");

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
function mutation(arr) {
  var arrOne = arr[0].toLowerCase();
  var arrTwo = arr[1].toLowerCase();
  for (var i = 0; i < arrTwo.length; i++) {
    if (arrOne.indexOf(arrTwo[i]) < 0)
      return false;
  }
  return true;
}

mutation(["HELello", "hey"]);
// ==================== //



// ==================== //
// Falsy Bouncer
function bouncer(arr) {
  // Don't show a false ID to this bouncer.
  return arr.filter(Boolean);
}

bouncer([7, "ate", "", false, 9]);
// ==================== //



// ==================== //
// Seek and Destroy
function destroyer(arr) {
  // Remove all the values
  var args = arr.slice.call(arguments);
  args.splice(0,1);
  
  return arr.filter(function(element){
    return args.indexOf(element) === -1;   
  });
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
// ==================== //

// ==================== //
// Where do I belong
function getIndexToIns(arr, num) {
  // Find my place in this sorted array.
  arr.push(num);
  arr.sort(function(a,b) {
  return (a-b); 
  });
  return arr.indexOf(num);
}

getIndexToIns([40, 60], 50);
// ==================== //

// ==================== //
// Caesars Cipher
function rot13(str) {
  return str.split('')
    .map.call(str, function(char) {
      x = char.charCodeAt(0);
      if (x < 65 || x > 90) {
        return String.fromCharCode(x);
      }
      else if (x < 78) {
        return String.fromCharCode(x + 13);
      }
      return String.fromCharCode(x - 13);
    }).join('');
}

// Change the inputs below to test
rot13("SERR PBQR PNZC");
// ==================== //

