//1.1 Añade un botón a tu html con el id btnToClick y en tu javascript añade el evento click que ejecute un console log con la información del evento del click

const addedButton = document.createElement("button");
document.body.append(addedButton);
addedButton.setAttribute("id", "btnToClick");
console.log(addedButton);

addedButton.addEventListener("click", (event1) => {
  console.log(event1);
});

//1.2 Añade un evento 'focus' que ejecute un console.log con el valor del input.

const searchFocusInput = document.querySelectorAll("input");
console.log(searchFocusInput);

for (let inputs of searchFocusInput) {
  inputs.addEventListener("focus", (event) => {
    let inputFocus = event.target.value;
    console.log(inputFocus);
  });
}

//1.3 Añade un evento 'input' que ejecute un console.log con el valor del input.

for (let inputs of searchFocusInput) {
  inputs.addEventListener("input", (event2) => {
    let inputInput = event2.target.value;
    console.log(inputInput);
  });
}
