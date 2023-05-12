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
  let validUser = false;
  while (!validUser) {
    let name = prompt("Enter your name");
    let genre = prompt("Enter your favorite genre: \n Jazz \n Rock \n Pop");
    let artist1 = prompt("Enter your favorite artist");
    let record1 = prompt("Enter your favorite record");
    let artist2 = prompt("Enter your 2nd favorite artist");
    let record2 = prompt("Enter your 2nd favorite record");

    if (
      name === "" ||
      (genre !== "Jazz" && genre !== "Rock" && genre !== "Pop") ||
      artist1 === "" || record1 === "" || artist2 === "" || record2 === "") {
        alert("There's a problem with your info");
    } else {
      let musicUser = new User(name, genre, artist1, record1, artist2, record2);
      userArr.push(musicUser);
      console.log(userArr);
      recommend();
      validUser = true;
    }
  }
}

function recommend() {
  let select = prompt ("Do you want to: \n 1. Recommend me a record. \n 2. Show me my favorite artists. \n 3. Show me my favorite records. \n 4. Change Record 1 \n 5. Change Record 2 \n 6. Leave");
  while (trueOFalse) {
    switch (select) {
        case "1":
            recommending();
            break;
        case "2":
            myArtists();
            break;
        case "3":
            myRecords();
            break
        case "4":
            
            break
        case "5":
            
            break        
        case "6":
          trueOFalse = false
          break;
  }
}


}
function recommending(arr ,fn){
  for (const User of userArr){
    if (User.genre === "Jazz"){
      jazzRecord();
    }else if(User.genre === "Pop"){
      popRecord();
    }else if(User.genre === "Rock"){
      rockRecord();
    }else{
      alert("There's something wrong with your info")
      createUser();
    }
    
  }
}
function jazzRecord (arr, fn){
  for (const User of userArr){
    if (User.artist1 === "Miles Davis" || User.record1 === "Kind of Blue" || User.artist2 === "Miles Davis" || User.record2 === "Kind of Blue"){
    alert("Based on your info we recommend to listen to John Coltrane - A Love Supreme \nhttps://open.spotify.com/album/4o1ObbFgVBo6rxIdW2vnxM?si=xvvV9-I9QJShZjNMKrlSqw")  
    }else{alert("Based on your info we recommend to listen to Miles Davis - Kind of Blue \nhttps://open.spotify.com/album/4o1ObbFgVBo6rxIdW2vnxM?si=xvvV9-I9QJShZjNMKrlSqw")
  }
    trueOFalse = false;
  }
  
}
function rockRecord (arr, fn){
  for (const User of userArr){
    if (User.artist1 === "Led Zeppelin" || User.record1 === "Led Zeppelin IV" || User.artist2 === "Led Zeppelin" || User.record2 === "Led Zeppelin IV"){
    alert("Based on your info we recommend to listen to The Police - Outlandos D'Amour \nhttps://open.spotify.com/album/1H9g6j4Wwj6wh6p8YHVtkf?si=skTyluytSfSD3sT9VtsOjA")  
    }else{alert("Based on your info we recommend to listen to Led Zeppelin - Led Zeppelin IV \nhttps://open.spotify.com/album/5EyIDBAqhnlkAHqvPRwdbX?si=IEgM9EcHRaKxfIer0L6Zog")
  }
    trueOFalse = false;
  }
  
}
function popRecord (arr, fn){
  for (const User of userArr){
    if (User.artist1 === "Michael Jackson" || User.record1 === "Thriller" || User.artist2 === "Michael Jackson" || User.record2 === "Thriller"){
    alert("Based on your info we recommend to listen to Prince - Purple Rain \nhttps://open.spotify.com/album/7nXJ5k4XgRj5OLg9m8V3zc?si=qCTsST6fSbCEhe75RsqHYQ")  
    }else{alert("Based on your info we recommend to listen to Michael Jackson - Thriller \nhttps://open.spotify.com/album/2ANVost0y2y52ema1E9xAZ?si=7tJUyun-ToaqoU55C8cYuw")
  }
    trueOFalse = false;
  }
  
}

function myArtists(){
  userArr.forEach(artist => {
    alert(`${artist.artist1}  \n${artist.artist2}`)
    trueOFalse = false;
  })
}

function myRecords(){
  userArr.forEach(record => {
    alert(`${record.record1}  \n${record.record2}`)
    trueOFalse = false;
  })
}

createUser();