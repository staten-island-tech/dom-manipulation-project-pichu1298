const students = ["Matt", "Mark", "Josephine", "Thomas"];
//console.log(students[0]); //allows us to call a single student/get an element
//students.forEach((student) => console.log(student)); //allows us to loop through every element on the list => arrow function returns objects

const movie = {
  title: "Star Wars",
  release: 1977,
  actors: ["Mark", "Harrison", "Carrie"],
};

const movies = [
  {
    title: "Star Wars",
    release: 1977,
    actors: ["Mark", "Harrison", "Carrie"],
  },
  {
    title: "Lion King",
    release: 1994,
    actors: ["James Earl Jones"],
  },
];

movies.forEach((movie) => console.log(movie.title));
//filter, to get a new array of movies that match criteria.
//array name DOT Array Command then arrow function that accepts singular element of array. Filter name does not matter.
const newMovies = movies.filter((soe) => soe.release > 1990);
console.log(newMovies);

movies
  .filter((movie) => movie.release > 1990)
  .forEach((movie) => console.log(movie));
