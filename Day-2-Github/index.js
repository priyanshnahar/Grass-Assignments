function Calc(value1, value2, sign) {
  if (sign === "+"){
      console.log(value1 + value2);
  }
  else if (sign === "-"){
      console.log(value1 - value2);
  }
  else if (sign === "/"){
      console.log(value1 / value2);
  }
  else if (sign === "*"){
      console.log(value1 * value2);
  }
}

Calc(1, 2, '+')
Calc(8, 2, '-')
Calc(10, 2, '/')
Calc(10, 20, '*')