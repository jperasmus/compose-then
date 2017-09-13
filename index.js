'use strict';

var compose = function compose() {
  for (var _len = arguments.length, functions = Array(_len), _key = 0; _key < _len; _key++) {
    functions[_key] = arguments[_key];
  }

  return function(input) {
    return functions.reduceRight(function(chain, func) {
      return chain.then(func);
    }, Promise.resolve(input));
  };
};

module.exports = compose;
