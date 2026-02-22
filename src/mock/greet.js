function greet(name) {
  return `Hello ${name}`;
}

function sayGoodBye(name) {
  throw new Error('未実装');
}

module.exports = { greet, sayGoodBye };