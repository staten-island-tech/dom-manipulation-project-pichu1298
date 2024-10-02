// const header = document.querySelector("h1");
// console.log(header.parentElement);

// const DOMSelectors = {
//   header: document.querySelector("h1"),
//   description: document.querySelector(".card-desc"), // select a single object(first one)
//   items: document.querySelectorAll("li"), //to select things in a node list ALL
// };

// console.log(DOMSelectors.items);
// //define function
// function changeColor() {
//   let button = document.querySelector(".enter");
//   //listen for a click event
//   console.log(button);
//   button.addEventListener("submit", function (event) {
//     event.preventDefault();
//     //logging the click event
//     console.log(event.target);
//     //get information from the form

//     form.style.backgroundColor = "red";
//   }); //allows it to run other events
// }
// //call function
// changeColor();

const DOMSelectors = {
  header: document.querySelectorAll("h1"),
  description: document.querySelectorAll(".card-desc"),
  items: document.querySelectorAll("li"),
};

let button = document.querySelector(".submit");
button.addEventListerner("click", function (event) {
  event.preventDefault();
  console.log("yay");
});
