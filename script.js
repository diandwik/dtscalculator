//update screen once it clicked
const calculatorScreen = document.querySelector('.calculator-screen')

const updateScreen = (number) => {
    calculatorScreen.value = number
}

//take html element (number) into javascript
const numbers = document.querySelectorAll(".number")
console.log(numbers)

//get every number from const numbers
numbers.forEach((number) => {
  console.log(number)
})

//add event click to each element using addEventListener
numbers.forEach((number) => {
  number.addEventListener("click", () => {
    console.log("number is pressed")
  })
})

//display number once it clicked
numbers.forEach((number) => {
  number.addEventListener("click", (event) => {
    console.log(event.target.value)
  })
})

numbers.forEach((number) => {
  number.addEventListener('click', (event) => {
    inputNumber(event.target.value)
    updateScreen(currentNumber)
  })
})

//def var to do calculation
let prevNumber = ''
let calculationOperator = ''
let currentNumber = '0'

//activating input action for > 2 digit numbers
const inputNumber = (number) => {
// clear 0 problem
    if (currentNumber === '0') {
        currentNumber = number
    } else {
        currentNumber += number
    }
}

// add click event to operator buttons
const operators = document.querySelectorAll(".operator")

operators.forEach((operator) => {
  operator.addEventListener("click", (event) => {
    console.log(event.target.value)
  })
})

//def input operator, if for deny double click operator error
const inputOperator = (operator) => {
  if (calculationOperator === '') {
    prevNumber = currentNumber
  }
  calculationOperator = operator
  currentNumber = '0'
}

//running inputOperator function once its clicked
operators.forEach((operator) => {
  operator.addEventListener("click", (event) => {
    inputOperator(event.target.value)
  })
})

//add click event to operator '='
const equalSign = document.querySelector('.equal-sign')

equalSign.addEventListener('click', () => {
  console.log('equal button is pressed')
})

//def calculation function
const calculate = () => {
  let result = ''
  switch(calculationOperator) {
    case "+":
      result = parseFloat(prevNumber) + parseFloat(currentNumber)
      break
    case "-":
      result = parseFloat(prevNumber) - parseFloat(currentNumber)
      break
    case "*":
      result = parseFloat(prevNumber) * parseFloat(currentNumber)
      break
    case "/":
      result = parseFloat(prevNumber) / parseFloat(currentNumber)
      break
    default:
      return
  }
  currentNumber = result
  calculationOperator = ''
}

//do calculate for '=' operator
equalSign.addEventListener('click', () => {
  calculate()
  updateScreen(currentNumber)
})

//AC Operator, take element button to javascript and add to click event
const clearBtn = document.querySelector('.all-clear')

clearBtn.addEventListener('click', () => {
  console.log('AC button is pressed')
})

//def var AC and make its function
const clearAll = () => {
  prevNumber = ''
  calculationOperator = ''
  currentNumber = '0'
}

clearBtn.addEventListener('click', () => {
  clearAll()
  updateScreen(currentNumber)
})

//make calculator work with decimal
const decimal = document.querySelector('.decimal')

decimal.addEventListener('click', (event) => {
  console.log(event.target.value)
})

//def and running decimal function
inputDecimal = (dot) => {
  if(currentNumber.includes('.')) {
    return
  }
  currentNumber += dot
}

decimal.addEventListener('click', (event) => {
  inputDecimal(event.target.value)
  updateScreen(currentNumber)
})