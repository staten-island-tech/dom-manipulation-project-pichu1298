console.log(DOMSelectors.items);
//define function
function changeColor() {
  let form = document.querySelector(".enter");
  //listen for a click event
  console.log(button);
  form.addEventListener("submit", function (event) {
    event.preventDefault();
    //logging the click event
    console.log(event.target);
    //get information from the form

    form.style.backgroundColor = "red";
  }); //allows it to run other events
}
//call function
changeColor();
