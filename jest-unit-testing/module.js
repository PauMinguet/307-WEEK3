

// CALCULATOR

function sum (a, b){
  return a + b;
}
function sub (a, b){
  return a - b;
}
function mult (a, b){
  return a * b;
}
function div (a, b){
  return a / b;
}

function two_digit_calc (str){
  if (str.length != 5){
    return NaN
  }
  let num1 = Math.floor(str[0] + str[1])
  let num2 = Math.floor(str[3] + str[4])

  if (str[2] === "+"){
      return sum(num1, num2)
  } else if (str[2] === "-"){
      return sub(num1, num2)
  } else if (str[2] === "*"){
      return mult(num1, num2)
  } else if (str[2] === "/"){
      return div(num1, num2)
  } else { return NaN}
}


export default { two_digit_calc };
