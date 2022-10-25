// const DOG_LINK = "https://dog.ceo/api/breeds/list/all";
// let section = document.querySelector('.section');
// let dropdown = document.querySelector('.dogs')

// fetch(DOG_LINK)
//     .then(function(data){
//         return response = data.json();
//     })
//     .then(function (response){

//         console.log(Object.keys(response.message));
//        let dogs = response.message;

//         for (var breeds in dogs) {
//             let y = document.createElement('option');
//             y.textContent = breeds;
//             y.id = breeds;
//             dropdown.appendChild(y);
//         }
//     })

// let jobs = {
//     it : {0: 'se', 1: 'tl', 2: 'pm', 3: 'qa'},
//     finance : {0: 'bank', 1: 'audit', 2: 'marketing'},
//     medical : {0 : 'doctor', 1: 'nurse'},
//     law : {0: 'lawyer'}
// }

// for (var title in jobs) {
//     $(".contSelf").append("<h1 > " + title + "</h1>");

//     for (var bookArr in jobs[title]) {
//       //  console.log(general[title][book]);
//       var book = jobs[title];
//       $(".contSelf").append("<li class='book' > " + book[bookArr] + "</li>");

//     }
// }

// function printValue(e){
//     // var sel = document.getSelection().
//     // /* Use the above value of select option */
//     let value = e.value;

//     if(e.value !== 'none'){

//        let IMAGE_LINK = `https://dog.ceo/api/breed/${value}/images/random`;
//        console.log(IMAGE_LINK);

//        fetch(IMAGE_LINK)
//             .then(function(data){
//                 return data.json();
//             })
//             .then(function(response){
//                 let x = document.getElementById('imgContainer')
//                 x.src = response.message;
//                 console.log(response.message)
//                 x.alt = 'Dog Breed Image';
//                 section.appendChild(x);
//                 return;
//             })
//     }
// }

const BREEDS_URL = "https://dog.ceo/api/breeds/list/all";
const select = document.querySelector(".dogs");
let section = document.querySelector(".section");

fetch(BREEDS_URL)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    const breedsObject = data.message;
    const breedsArray = Object.keys(breedsObject);

    for (let i = 0; i < breedsArray.length; i++) {
      const option = document.createElement("option");
      if (i == 0) {
        option.value = "--select a breed---";
        option.innerText = "--select a breed---";
        select.appendChild(option);
      } else {
        option.value = breedsArray[i];
        option.innerText = breedsArray[i];
        select.appendChild(option);
      }
    }
  });

select.addEventListener("change", function (event) {
  // console.log(event.target.value);
  const value = event.target.value;
  let url = `https://dog.ceo/api/breed/${value}/images/random`;

  if (value == "--select a breed---") {
    return;
  }

  getDoggo(url);
});

let img = document.querySelector(".imgContainer");
let spinner = document.querySelector(".mole");

function getDoggo(url) {
  spinner.classList.add("show");
  img.classList.remove("show");

  fetch(url)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      img.src = data.message;
      img.alt = "Dog Breed Image";
      //   section.appendChild(x);

      // spinner.classList.remove('show');
      // img.classList.add('.show')
    });
}

img.addEventListener("load", function () {
  spinner.classList.remove("show");
  img.classList.add("show");
});
