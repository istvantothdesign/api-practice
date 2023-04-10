const sayName = () => {
  console.log("Hello, John.");
};

const sayAddress = () => {
  console.log("Johnson Street");
};

module.exports.sayName = sayName;
module.exports.sayAddress = sayAddress;
