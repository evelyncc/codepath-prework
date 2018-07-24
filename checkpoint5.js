var permute = function(arr) {
  var results = {};

  var generate = function(string, array) {
    if (arr.length === 1) {
      results[arr[0]] = 1;
    } else if (string.split(' ').length === arr.length) {
      results[string] = 1;
    } else {
      for (var i = 0; i < array.length; i++) {
        var newArray = array.slice(0)
        newArray.splice(i, 1)
        if (string.length > 0) {
          generate(string + ' ' + array[i], newArray);
        } else {
          generate('' + array[i], newArray)
        }
    }
    }
  }
  generate('', arr);
  return Object.keys(results).map(function(item) {
    return item.split(' ')
  })
};
