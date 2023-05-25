const toggle     = document.getElementById('header-tggle');
const navMenu    = document.getElementById('nav-menu');
const navClose   = document.getElementById('nav-close');

const cargarEventos = ()=>{
    toggle.addEventListener('click',motrarMenu);
    navClose.addEventListener('click',ocultarMenu);
    
}
const motrarMenu =()=>{
    navMenu.classList.add('show-menu');   
}
const ocultarMenu =()=>{
    navMenu.classList.remove('show-menu');
}

cargarEventos();


// MODAL SECTION

const modalViews = document.querySelectorAll('.portfolio__modal');
const modalCloses = document.querySelectorAll('.portfolio__modal-close');
const modalBts= document.querySelectorAll('.portfolio-card__buttom');

let modal = function(modalClick){
    modalViews[modalClick].classList.add('active-modal');
}
modalBts.forEach((e,i) => {
    e.addEventListener('click',()=>{
        modal(i)
    })
});

modalCloses.forEach(close =>{
    close.addEventListener('click',()=>{
        modalViews.forEach(view =>{
            view.classList.remove('active-modal');
        })
    })
})