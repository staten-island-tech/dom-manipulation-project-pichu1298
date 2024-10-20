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
  container: document.querySelector(".container"),
  card: document.querySelectorAll(".card"),
};
let button = document.querySelector("form");
const cards = Array.from(DOMSelectors.card);
let cardID = 0;
button.addEventListener("submit", function (event) {
  event.preventDefault();
  // let cardID = 0;
  let color = document.querySelector("#color");
  console.log("color", color.value);
  let smth = document.querySelector("#smth");
  console.log("Picture", smth.value);
  let desc = document.querySelector("#desc");
  console.log("Card description", desc.value);
  createCard(smth, desc, color);
  findButtons(cardID);
});

let details = {
  color: color.value,
  picture: smth.value,
  desc: desc.value,
};

function findButtons(CARDS) {
  const btn = document.querySelectorAll(".Remove");
  const btns = Array.from(btn);
  btns.forEach((btn) =>
    btn.addEventListener("click", function (removed) {
      //if (btns.includes(btn.id) === true) {
      removed.preventDefault();
      console.log("Button found", btn.id);
      CARDS = document.getElementById(btn.id);
      CARDS.remove();
      console.log("Card removed");
      //}
    })
  );
}
function createCard(smth, desc, color) {
  // cardID = document.querySelectorAll(".card").length;
  cardID++;
  DOMSelectors.container.insertAdjacentHTML(
    "beforeend",
    `<div class="card" id="${cardID}">
        <h2 class="cardheader">${color.value}</h2>
        <img src="${smth.value}" class="pictureValue" alt="" />
        <p class="card-desc">${desc.value}</p>
        <button type="button" class = "Remove" id="${cardID}">Remove</button>
      </div>`,
    console.log("Information Accepted")
  );
}
// const item = document.querySelectorAll("li");
// const items = Array.from(item); // make nodelist into array
// console.log(item);
// //Node List not an array, but has several of the array methods Does not have filter.

// items.forEach((el) => (el.style.color = "red")); //selects all li and changes color to red.
// //iterate/loop over array and for each item and for each element make the color red.
// const buttons = document.querySelectorAll("button");
// buttons.forEach((btn) =>
//   btn.addEventListener("click", function (event) {
//     console.log(event.target.textContent); // grabs the specific button
//   })
// );

// DOMSelectors.container.insertAdjacentHTML(
//   beforeend,
//   `<div class = "card">
// <h2 class = "cardheader">${album.name}</h2>

// </div>`
// );

// let album = {
//   name: "yay",
// };

// //event listener for form,
// get values from form for widget object (widget is generac term)
//create the card insert the card
//find remove buttons and add event listeners

//const Album = makeAlbum()
//addCard(Album)
//clearFields()
//addRemoveButtons
