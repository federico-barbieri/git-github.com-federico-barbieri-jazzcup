
const vinyl = document.querySelector('.vinyl-hero');


window.onload = () => {
   // vinyl.classList.add("vinyl-spins");
    everything();
}


// change name of hero h1

let heroSpan = document.querySelector('.jazz-can-be');

function playful(){
    heroSpan.textContent = "playful";
}

function sad(){
    heroSpan.textContent = "sad";
}

function dreamy(){
    heroSpan.textContent = "dreamy";
}

function anything(){
    heroSpan.textContent = "anything";
}

function everything () {
    setTimeout(playful, 2000);
    setTimeout(sad, 4000);
    setTimeout(dreamy, 6000);
    setTimeout(anything, 8000);
    setTimeout(everything, 11000);
}

// fetching stuff

//normal url
const url = "https://jazzcup-f9ed.restdb.io/rest/albums";

// api key

const options = { 
    headers: {
        'x-apikey': "639cf150f43a573dae0955cd"
    }, 
}


fetch(url, options)
.then(response => {
    if (!response.ok) {
        throw Error(response.statusText);
    }
        return response.json();
})
.then(data => {
    // we have the data 
    console.log(data); 
    handleData(data);
})
.catch (e => {
    // something went wrong
    console.error("An error has occured.", e.message);
})


// FUNCTION FOR THE albums CATEGORY

function handleData(jazzData){
    
    
    jazzData.forEach( album => {

        // make template

        // grab it


            const temp = document.querySelector('.template').content;

            // clone it
            const clone = temp.cloneNode(true);


            // album name

            clone.querySelector('.new-release-album').innerHTML = `<strong>${album.name}</strong>`; 

            // album image

            clone.querySelector('img').src = album.img;

            // band name

            clone.querySelector('.new-release-band').textContent = album.band; 

               // price

               clone.querySelector('.new-release-price').innerHTML = `<strong>${album.price} dkk</strong>`; 

            // append to parent

            const daddy = document.querySelector(".template-article");

            daddy.appendChild(clone); }

        )}





