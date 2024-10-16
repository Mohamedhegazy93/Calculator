// catch elements

const input = document.getElementById("input");
const button_input = document.querySelectorAll(".input-button");

const clear = document.getElementById("clear");
const erase = document.getElementById("erase");
const equal = document.getElementById("equal");

//loop on elemnts and put in input area

button_input.forEach((el) => {
  el.addEventListener("click", () => {
    input.value += el.value;
  });
});


//equal button expression
equal.addEventListener("click", () => {
  try {
    let result = eval(input.value);
    input.value = result;
  } catch (err) {
    console.log(err);
  }
});

//clear button

clear.addEventListener("click", () => {
  input.value = "";
});
//Erase Single Digit
erase.addEventListener("click", () => {
  input.value = input.value.substr(0, input.value.length - 1);
});
