
exports.min = function min (array) {
  result = 0;
  if (!array || array.length === 0) {
    return 0;
  }
  for (let i = 0; i < array.length; i++) {
    if (array[i] < result) {
      result = array[i]
    }
  }
  return result;
}

exports.max = function max (array) {
  result = 0;
  if (!array || array.length === 0) {
    return 0;
  }
  for (let i = 0; i < array.length; i++) {
    if (array[i] > result) {
      result = array[i]
    }
  }
  return result;
}

exports.avg = function avg (array) {
  if (!array || array.length === 0) {
    return 0;
  }
  let sum = array.reduce((acc, el) => acc + el);
  return sum / array.length
}
