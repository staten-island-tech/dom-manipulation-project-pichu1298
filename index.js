const header = document.querySelector("h1");
console.log(header.parentElement);

const DOMSelectors = {
  header: document.querySelector("h1"),
  description: document.querySelector(".card-desc"), // select a single object(first one)
  items: document.querySelectorAll("li"), //to select things in a node list ALL
};
student = {
  name: "Mark",
  age: 16,
};
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
