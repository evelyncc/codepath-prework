var prettyPrint = function(n) {
  var size = n * 2 - 1;
  var matrix = [];

  for (var i = 0; i < size; i++) {
    matrix.push([[]])
  }
  size = matrix.length - 1;

  for (var layer = 0; layer <= size/2; layer++) {
    for (var i = layer; i < size - layer; i++) {        
      matrix[layer][i] = n - layer;
      matrix[size - i][layer] = n - layer
      matrix[size - layer][size - i] = n - layer
      matrix[i][size - layer] = n - layer
    }
  }
  matrix[n-1][n-1] = 1
  return matrix;
};
