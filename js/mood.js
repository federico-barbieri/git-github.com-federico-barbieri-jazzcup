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


// vinyl

const vinyl = document.querySelector('.vinyl-hero');


window.onload = () => {
    vinyl.classList.add("vinyl-spins");
}

// MOODS 

const modal = document.querySelector('.modal1Content');

const closeModal = document.querySelector('#closeModal1');

const moodlistUl = document.querySelector('#moodlist-ul');

const happy = document.querySelector('.happy');
const sad = document.querySelector('.sad');
const dreamy = document.querySelector('.dreamy');
const joyful = document.querySelector('.joyful');
const melancholic = document.querySelector('.melancholic');

let modalImg = document.querySelector('.mood-img');

let modalP = document.querySelector('.artist-name');

// close modal

closeModal.addEventListener('click', () =>{
    modal.style.display = "none";
    modalImg.src = "";
})

// happy modal

happy.addEventListener('click', () =>{

    modal.style.display = "block";
    modalImg.src = "../img/moods/happy.jpg";
    modalP.textContent = "Janet Leary";

})

// sad modal

sad.addEventListener('click', () =>{

    modal.style.display = "block";
    modalImg.src = "../img/moods/sad.jpg";
    modalP.textContent = "Oliver Hampton";

})

// dreamy modal

dreamy.addEventListener('click', () =>{

    modal.style.display = "block";
    modalImg.src = "../img/moods/dreamy.jpg";
    modalP.textContent = "The Power Sound";

})

// joyful modal

joyful.addEventListener('click', () =>{

    modal.style.display = "block";
    modalImg.src = "../img/moods/joyful.jpg";
    modalP.textContent = "Open Sounds";

})

// melancholic modal

melancholic.addEventListener('click', () =>{

    modal.style.display = "block";
    modalImg.src = "../img/moods/melancholic.jpg";
    modalP.textContent = "Time Travellers";

})