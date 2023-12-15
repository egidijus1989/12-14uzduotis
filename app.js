let body = document.querySelector("body");
let form = document.createElement("form");

createInput("year");
createOutput();

function createInput(text1) {
  body.appendChild(form);
  let inputName = document.createElement("input");
  inputName.classList.add(text1);
  inputName.setAttribute("placeholder", "Choose year");
  inputName.setAttribute("type", "number");
  form.appendChild(inputName);
  let button = document.createElement("button");
  button.classList.add("inputBtn");
  button.textContent = "Show century";
  form.appendChild(button);
}
function createOutput() {
  let output = document.createElement("div");
  body.appendChild(output);
  output.classList.add("output");
  let h1 = document.createElement("h1");
  h1.classList.add("h1Century");
  let buttonRepeat = document.createElement("button");
  buttonRepeat.classList.add("repeatBtn");
  buttonRepeat.textContent = "Repeat";
  output.appendChild(h1);
  output.appendChild(buttonRepeat);
  output.style.display = "None";
}

let inputBtn = document.querySelector(".inputBtn");
inputBtn.addEventListener("click", (e) => {
  e.preventDefault();
  let output = document.querySelector(".output");
  output.style.display = "Block";
  let year = parseInt(document.querySelector(".year").value);
  let century = Math.floor(year / 100) + 1;
  let h1 = document.querySelector(".h1Century");
  h1.textContent = `Year ${year} belong to ${century} century`;
  form.style.display = "None";
});

let repeatBtn = document.querySelector(".repeatBtn");
repeatBtn.addEventListener("click", (e) => {
  e.preventDefault();
  form.style.display = "Block";
  let output = document.querySelector(".output");
  output.style.display = "None";
  let h1 = document.querySelector(".h1Century");
  h1.textContent = "";
});
