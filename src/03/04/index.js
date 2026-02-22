function add(a, b) {
  const sum = a + b;
  return sum > 100 ? 100 : sum;
}

function sub(a, b) {
  if (a >= b) {
    return a - b;
  } else {
    throw new Error('aはbより大きい値である必要があります');
  }
}

module.exports = { add, sub };