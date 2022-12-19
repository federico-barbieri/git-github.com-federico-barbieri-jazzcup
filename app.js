
// burger menu 

const burger = document.querySelector('.burger');

const navUl = document.querySelector('.main-ul');

burger.addEventListener('click', () => {
    burger.classList.toggle('active');
    navUl.classList.toggle('active');
    
    document.body.classList.toggle('active');

    if(burger.classList.contains('active')){
        burger.innerHTML = '<i class="fa-solid fa-x"></i>';
    } else{
        burger.innerHTML = '<i class="fa-solid fa-bars"></i>';
    };

})

document.querySelectorAll('.main-li').forEach(item => item.addEventListener('click', () =>{
    burger.classList.remove('active');
    navUl.classList.remove('active');
    burger.innerHTML = '<i class="fa-solid fa-bars"></i>';
}))



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
   // console.log(data); 
    handleData(data);
})
.catch (e => {
    // something went wrong
    console.error("An error has occured.", e.message);
})


// FUNCTION FOR THE albums CATEGORY

function handleData(jazzData){
    
    
    jazzData.forEach( album => {

        // grab only if it's a new release

        if (album.new == true){


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

            daddy.appendChild(clone); }}

        )}


        // MODAL WORLD

        // modal 1

        // jacob list element

        let jacobLi = document.querySelector('.jacob-li');

        // jacob paragraph

        let jacobP = document.querySelector('.jacob');

        // jacob arrow down

        let arrowModal1 = document.querySelector('.arrowModal1');

        // grab modal 1

        const modal1Content = document.querySelector('.modal1Content');

        // Grab "open modal 1" btn 

        const openModal1 = document.getElementById("openModal1");

        // make modal visible

            openModal1.addEventListener('click', () => {
                modal1Content.style.display = "block";
                jacobLi.style.backgroundColor = "var(--yellow)";
                jacobP.innerHTML = "<strong>Jacob Fischer</strong>";
                arrowModal1.style.opacity = "0";
            })

        // close modal

        // Get the btn element that closes the modal

            const closeModalOne = document.getElementById("closeModal1");


            closeModalOne.addEventListener('click', () => {
                modal1Content.style.display = "none";
                jacobLi.style.backgroundColor = "var(--white2)";
                jacobP.innerHTML = "Jacob Fischer";
                arrowModal1.style.opacity = "1";
            })


        // modal 2

        // malcolm list element

        let malcolmLi = document.querySelector('.malcolm-li');

        // jacob paragraph

        let malcolmP = document.querySelector('.malcolm');

        // malcolm arrow down

        let arrowModal2 = document.querySelector('.arrowModal2');

        // grab modal 1

        const modal2Content = document.querySelector('.modal2Content');

        // Grab "open modal 1" btn 

        const openModal2 = document.getElementById("openModal2");

        // make modal visible

            openModal2.addEventListener('click', () => {
                modal2Content.style.display = "block";
                malcolmLi.style.backgroundColor = "var(--yellow)";
                malcolmP.innerHTML = "<strong>Malcolm Lohm</strong>";
                arrowModal2.style.opacity = "0";
            })

        // close modal

        // Get the btn element that closes the modal

            const closeModalTwo = document.getElementById("closeModal2");


            closeModalTwo.addEventListener('click', () => {
                modal2Content.style.display = "none";
                malcolmLi.style.backgroundColor = "var(--white2)";
                malcolmP.innerHTML = "Malcolm Lohm";
                arrowModal2.style.opacity = "1";
            })




        // modal 3

        // robert list element

        let robertLi = document.querySelector('.robert-li');

        // robert paragraph

        let robertP = document.querySelector('.robert');

        // robert arrow down

        let arrowModal3 = document.querySelector('.arrowModal3');

        // grab modal 3

        const modal3Content = document.querySelector('.modal3Content');

        // Grab "open modal 1" btn 

        const openModal3 = document.getElementById("openModal3");

        // make modal visible

            openModal3.addEventListener('click', () => {
                modal3Content.style.display = "block";
                robertLi.style.backgroundColor = "var(--yellow)";
                robertP.innerHTML = "<strong>Robert Dahl</strong>";
                arrowModal3.style.opacity = "0";
            })

        // close modal

        // Get the btn element that closes the modal

            const closeModalThree = document.getElementById("closeModal3");


            closeModalThree.addEventListener('click', () => {
                modal3Content.style.display = "none";
                robertLi.style.backgroundColor = "var(--white2)";
                robertP.innerHTML = "Robert Dahl";
                arrowModal3.style.opacity = "1";
            })








