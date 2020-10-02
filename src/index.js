exports.max = function max (array) {
  let max = 0;
  for (i in array)
  if (array[i] > max)
  max = array[i];

  return max;
}

exports.min = function min (array) {
  if((arguments.length === 0) || array.length === 0)
  return 0;

  let min = 100;
  for (i in array)
  if (array[i] < min)
  min = array[i];
  return min;
}

exports.avg = function avg (array) {

  if((arguments.length === 0) || (array.length === 0))
  return 0;

  let avg = 0;
  for (i in array)
  avg += array[i];

  avg /= array.length;

  return avg;
}
