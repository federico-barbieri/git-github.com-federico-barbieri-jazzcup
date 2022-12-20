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