// let userArr = []
// let trueOFalse = true

// class User{
//   constructor (name, genre, artist1, record1, artist2, record2){
//   this.name = name
//   this.genre = genre
//   this.artist1 = artist1
//   this.record1 = record1
//   this.artist2 = artist2
//   this.record2 = record2
//   }
// }

// function createUser() {
//   let name = prompt("Enter your name");
//   let genre = prompt("Enter your favorite genre: \n Jazz \n Rock \n Pop");
//   let artist1 = prompt("Enter your favorite artist");
//   let record1 = prompt("Enter your favorite record");
//   let artist2 = prompt("Enter your 2nd favorite artist");
//   let record2 = prompt("Enter your 2nd favorite record");

//   while (trueOFalse) {
//     if (name == "" || genre != "Jazz" || genre != "Rock" || genre != "Pop" || artist1 == "" || record1 == "" || artist2 == "" || record2 == "") {
//       alert("There's a problem with your info");
//       name = prompt("Enter your name");
//       genre = prompt("Enter your favorite genre: \n 1. Jazz \n 2. Rock \n 3. Pop");
//       artist1 = prompt("Enter your favorite artist");
//       record1 = prompt("Enter your favorite record");
//       artist2 = prompt("Enter your 2nd favorite artist");
//       record2 = prompt("Enter your 2nd favorite record");
//     } else {
//       let musicUser = new User(name, genre, artist1, record1, artist2, record2);
//       userArr.push(musicUser);
//       console.log(userArr)      
//     }
//   }
// }
// trueOFalse = false;


// createUser()
let userArr = [];
let trueOFalse = true;

class User {
  constructor(name, genre, artist1, record1, artist2, record2) {
    this.name = name;
    this.genre = genre;
    this.artist1 = artist1;
    this.record1 = record1;
    this.artist2 = artist2;
    this.record2 = record2;
  }
}

function createUser() {
  while (trueOFalse) {
    let name = prompt("Enter your name");
    let genre = prompt("Enter your favorite genre: \n Jazz \n Rock \n Pop");
    let artist1 = prompt("Enter your favorite artist");
    let record1 = prompt("Enter your favorite record");
    let artist2 = prompt("Enter your 2nd favorite artist");
    let record2 = prompt("Enter your 2nd favorite record");

    if (
      name === "" ||
      (genre !== "Jazz" && genre !== "Rock" && genre !== "Pop") ||
      artist1 == "" || record1 == "" ||  artist2 == "" ||  record2 == "") {
      alert("There's a problem with your info");
      createUser()
    } else {
      let musicUser = new User(name, genre, artist1, record1, artist2, record2);
      userArr.push(musicUser);
      console.log(userArr);
      trueOFalse = false; 
    }
  }
}

createUser();
