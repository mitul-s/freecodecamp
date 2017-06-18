// ==================== //
// Sum All Numbers in a Range
function sumAll(arr) { 
  var max = Math.max(arr[0], arr[1]),
	  min = Math.min(arr[0], arr[1]);
  var sum = [max, min].reduce(function(max, min) {
  var fullSum = 0;
    for(var i = max; i >= min; i--){
      fullSum = max + fullSum;
      max--;
    }
    return fullSum;
});
  return sum;
}

sumAll([1, 4]);


// ==================== //