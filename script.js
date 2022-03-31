//Mengambil element-element <button> menggunakan class “number”
//menggunakan querySelectorAll karena ada banyak tombol yang memiliki class “number’ untuk ditampilkan semua
const numbers = document.querySelectorAll(".number");

//Mengambil element class ".calculator-screen" menggunakan querySelector karena hanya 1 element 
const calculatorScreen = document.querySelector('.calculator-screen');

//Deﬁnisi 3 variable : “prevNumber”, “currentNumber” dan “calculationOperator” untuk menyimpan 2 angka dan and 1 operator
let prevNumber = "";
let calculationOperator = "";
let currentNumber = "0";

//Menarik element di code JS dan deﬁnisi function “updateScreen” untuk memperbarui nilai.
const updateScreen = (number) => {
  calculatorScreen.value = number;
};

const inputNumber = (number) => {
  if (currentNumber === '0') {
    currentNumber = number;
  } else {
    currentNumber += number;
  }
};

numbers.forEach((number) => {
  number.addEventListener("click", (event) => {
    inputNumber(event.target.value);
    updateScreen(currentNumber);
  });
});

const operators = document.querySelectorAll(".operator");

operators.forEach((operator) => {
  operator.addEventListener("click", (event) => {
    inputOperator(event.target.value);
    if (event.target.value === "%") {
      calculate();
      updateScreen(currentNumber);
    }
  });
});

//Memperbarui variable prevNumber hanya saat tombol operator diklik terlebih dahulu.
const inputOperator = (operator) => {
  if (calculationOperator === "") {
    prevNumber = currentNumber;
  }
  calculationOperator = operator;
  currentNumber = "0";
};

//Jalankan Function Calculate saat tombol sama-dengan (=) di Klik, dan perbarui layarnya.
const equalSign = document.querySelector('.equal-sign');
equalSign.addEventListener("click", () => {
  calculate();
  updateScreen(currentNumber);
});

//function Calculate dengan method parseInt Untuk menghindari perangkaian string, mengganti string menjadi integer
const calculate = () => {
  let result = "";
  switch (calculationOperator) {
    case "+":
      result = parseInt(prevNumber) + parseInt(currentNumber);
      break;
    case "-":
      result = parseInt(prevNumber) - parseInt(currentNumber);
      break;
    case "*":
      result = parseInt(prevNumber) * parseInt(currentNumber);
      break;
    case "/":
      result = parseInt(prevNumber) / parseInt(currentNumber);
      break;
    case "%":
      result = parseInt(prevNumber) / parseInt(100);
      break;
    default:
      return;
  }
  currentNumber = result;
  calculationOperator = "";
};

//mengambil element <button> menggunakan class “all-clear” dan function saat tombol AC di klik
const clearBtn = document.querySelector(".all-clear");

clearBtn.addEventListener("click", (event) => {
  console.log(event.target.value);
  claerAll();
  updateScreen(currentNumber);
});


const claerAll = () => {
  prevNumber = "";
  calculationOperator = "";
  currentNumber = "0";
};

//Mengambil element & function <button> class "decimal"
const decimal = document.querySelector(".decimal");

decimal.addEventListener("click", (event) => {
  inputDecimal(event.target.value);
  updateScreen(currentNumber);
});

inputDecimal = (dot) => {
  if (currentNumber.includes(".")) {
    return;
  }
  currentNumber += dot;
};