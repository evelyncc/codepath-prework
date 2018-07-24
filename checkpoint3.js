var kthsmallest = function(A, B){
  var sorted = A.sort((function(a, b){
      return a - b;
      }));
  return sorted[B - 1];
}