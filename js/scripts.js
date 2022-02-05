const btn = document.getElementById("btn");

btn.addEventListener('click',()=>{
    let barraUno = document.querySelector(".bars1");
    let barraDos = document.querySelector(".bars2");
    let barraTres = document.querySelector(".bars3");
    let seccionUno = document.getElementById("seccionUno");

    barraUno.classList.toggle("bars1-active");
    barraDos.classList.toggle("bars2-active");
    barraTres.classList.toggle("bars3-active");
    seccionUno.classList.toggle("seccionUnoBg")
})


/* dark MOde */
const darkIcon = document.getElementById("darkMode");

darkIcon.addEventListener('click',()=>{
    let footer = document.querySelector(".footer");
    let header = document.querySelector(".header");
    let nav = document.querySelector(".nav");
    let seccionUno = document.getElementById("seccionUno");
    let enlaces = document.querySelectorAll(".nav__a");
    let btnMore = document.querySelector(".moreImages");
    seccionUno.classList.toggle("seccionUnoActiveDarkMode");

    footer.classList.toggle("footerDark")
    header.classList.toggle("darkHeader");
    nav.classList.toggle("navDark");
    btnMore.classList.toggle("moreDark")


    if(darkIcon.src.includes('moon.svg')){
        darkIcon.src = 'assets/sun.svg';
    }else{
        darkIcon.src = 'assets/moon.svg'
    }

    enlaces.forEach(enlaces =>{
        enlaces.classList.toggle("aDark");
    })



});



//tap Img MOdal

const imagenes = document.querySelectorAll(".seccion__img");

imagenes.forEach(imagenes =>{
   imagenes.addEventListener('click',()=>{
    let source = imagenes.src;
    let imgModal = document.querySelector(".modalImg");
    let modal = document.querySelector(".modal");
    let closeModal = document.getElementById("closeModal");
    modal.classList.add("modalActive");
    imgModal.setAttribute('src', source);
    
    closeModal.addEventListener('click', ()=>{
        modal.classList.remove("modalActive")
    })

   })
})

/* More */
let btnMore = document.querySelector(".moreImages");
btnMore.addEventListener('click',()=>{
    let seccionMore = document.querySelector(".seccion-imagenes--dos");
    seccionMore.classList.toggle("seccion-imagenes--dosActive");

    btnMore.classList.add("btnMore");
})
