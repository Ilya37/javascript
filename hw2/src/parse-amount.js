function parseAmount(str) {
  return parseFloat(str.replace(',', '.')) * 100;
}


module.exports = {
  parseAmount: parseAmount
}
