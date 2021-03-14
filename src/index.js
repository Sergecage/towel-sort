
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (!matrix) {
    return []
  }

  var arr = []
  
  for (i = 0; i < matrix.length; i++ ) {
    if (i % 2 !== 0) {
      var reverseMatrix = matrix[i].reverse()
      arr = arr.concat(reverseMatrix)
    } else {
      arr = arr.concat(matrix[i])
    }
  }
  return arr;
}
