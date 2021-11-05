// =================-----search-------=================
let searchBtn=document.querySelector("#search-btn")
let searchBar=document.querySelector(".search-bar-container")

searchBtn.addEventListener("click", () =>{
    searchBtn.classList.toggle("uil-times")
    searchBar.classList.toggle("active")

    loginForm.classList.remove("active")
    menu.classList.remove("uil-times")
    navbar.classList.remove("active")
})
window.onscroll = () =>{
    searchBtn.classList.remove("uil-times")
    searchBar.classList.remove("active")
}
// =================-----form-------=================
let formBtn=document.querySelector("#login-btn")
let formClose=document.querySelector("#form-close")
let loginForm=document.querySelector(".login-form-container")

formBtn.addEventListener("click", () =>{
    loginForm.classList.add("active")

    menu.classList.remove("uil-times")
    navbar.classList.remove("active")
    searchBtn.classList.remove("uil-times")
    searchBar.classList.remove("active")
})
formClose.addEventListener("click", () =>{
    loginForm.classList.remove("active")
})
window.onscroll = () =>{
    loginForm.classList.remove("active")
}
// =================-----mobile nav-------=================
let menu=document.querySelector("#menu-bar")
let navbar=document.querySelector(".navbar")

menu.addEventListener("click", () =>{
    menu.classList.toggle("uil-times")
    navbar.classList.toggle("active")

    searchBtn.classList.remove("uil-times")
    searchBar.classList.remove("active")
    loginForm.classList.remove("active")
})
window.onscroll = () =>{
    menu.classList.remove("uil-times")
    navbar.classList.remove("active")
}
// =================-----video circles-------=================
let videoBtn=document.querySelectorAll(".vid-btn")
videoBtn.forEach(btn =>{
    btn.addEventListener("click",()=>{
        document.querySelector(".controls .active").classList.remove("active")
        btn.classList.add("active")
        src=btn.getAttribute("data-src")
        document.querySelector("#video-slider").src=src;

    } )
})



 
var swiper = new Swiper(".review-slider", {
    spaceBetween:20,
    loop:true,
    autoplay:{
        delay:2500,
        disableOnInteraction:false,
    },
    breakpoints:{
        640:{
            slidesPerView:1,
        },
        768:{
            slidesPerView:2,
        },
        1024:{
            slidesPerView:3,
        },
    },
});




var swiper = new Swiper(".brand-slider", {
    spaceBetween:20,
    loop:true,
    autoplay:{
        delay:2500,
        disableOnInteraction:false,
    },
    breakpoints:{
        450:{
            slidesPerView:2,
        },
        768:{
            slidesPerView:3,
        },
        991:{
            slidesPerView:4,
        },
        1024:{
            slidesPerView:5,
        },
    },
});





