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



// MEMBERSHIP LIST

        // BENEFITS

        const openMembershipOne = document.querySelector('#openMembership1');

        const pBenefits = document.querySelector('.p-benefits');

       

        openMembershipOne.addEventListener('click', () => {
            pBenefits.style.display = "block";

            if(openMembershipOne.innerHTML === '<i class="fa-solid fa-arrow-down arrowMembership1"></i>'){
                openMembershipOne.innerHTML = '<i class="fa-solid fa-arrow-up arrowMembership1"></i>';
            } else{
                openMembershipOne.innerHTML = '<i class="fa-solid fa-arrow-down arrowMembership1"></i>';
                pBenefits.style.display = "none";
            }
            
        })


        // PRICE

        const openMembershipTwo = document.querySelector('#openMembership2');

        const pPrice = document.querySelector('.p-price');

        

        openMembershipTwo.addEventListener('click', () => {
            pPrice.style.display = "block";

            if(openMembershipTwo.innerHTML === '<i class="fa-solid fa-arrow-down arrowMembership2"></i>'){
                openMembershipTwo.innerHTML = '<i class="fa-solid fa-arrow-up arrowMembership2"></i>';
            } else{
                openMembershipTwo.innerHTML = '<i class="fa-solid fa-arrow-down arrowMembership2"></i>';
                pPrice.style.display = "none";
            }
            
        })


         // FAQ

         const openMembershipThree = document.querySelector('#openMembership3');

         const pFaq = document.querySelector('.p-faq');
 
       
 
         openMembershipThree.addEventListener('click', () => {
             pFaq.style.display = "block";
 
             if(openMembershipThree.innerHTML === '<i class="fa-solid fa-arrow-down arrowMembership3"></i>'){
                 openMembershipThree.innerHTML = '<i class="fa-solid fa-arrow-up arrowMembership3"></i>';
             } else{
                 openMembershipThree.innerHTML = '<i class="fa-solid fa-arrow-down arrowMembership3"></i>';
                 pFaq.style.display = "none";
             }
             
         })