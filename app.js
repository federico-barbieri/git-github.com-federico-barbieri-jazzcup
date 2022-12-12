
const vinyl = document.querySelector('.vinyl-hero');


window.onload = () => {
    vinyl.classList.add("vinyl-spins");
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



