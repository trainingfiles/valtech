Array.prototype.showCurrencySymbol = function (symbol) {
  var output = "";
  for (let i = 0; i < this.length; i++) {
    output += symbol + this[i] + ".00" + "\n";
  }
  return output;
};
