// Variables
const input = document.querySelector("input");
const nums = document.querySelectorAll(".writable");
//End of variables

// Functions

// Input your operation
function clickNumber(ele) {
  input.value += ele.textContent;
}

// Get the result if the operation is true and error if false
function result() {
  try {
    input.value = eval(input.value);
  } catch (reason) {
    input.value = "Error";
  }
}

function removeAll() {
  input.value = "";
}

function removeOnlyOne() {
  input.value = input.value.slice(0,-1)
}

//End of functions

// click event => any number or operation
nums.forEach((num) => {
  num.addEventListener("click", () => {
    clickNumber(num);
  });
});

// click event => enter button
document.addEventListener("keydown", (e) => {
  if (e.key.toLowerCase() === "enter") {
    result();
  }
})