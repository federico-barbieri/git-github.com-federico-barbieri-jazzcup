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

            const daddy = document.querySelector("#shop-grid");

            daddy.appendChild(clone); }

        )}