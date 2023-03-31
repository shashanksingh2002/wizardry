console.log("Javascript loads sucessfully");

const carouselLeftButton = document.querySelector('.left-button');
const carouselRightButton = document.querySelector('.right-button');
const carouselMainImage = document.querySelector('.main-img');
const carouselContainer = document.querySelector('.carousel-books');
const loginButton = document.querySelector('.login-button');
const fiction = document.querySelector('#fiction');
const bestSeller = document.querySelector('#best-seller');
const manga = document.querySelector('#manga');
const author = document.querySelector('#author');
const genre = document.querySelector('#genre');
let carouselIdx = 1;
const carouselImageSlider = ["../assets/carousel3.jpeg", "../assets/carousel4.jpg", "../assets/carousel5.jpg", "../assets/carousel1.jpg", "../assets/carousel2.jpg"];
carouselRightButton.addEventListener("click",()=>{
    console.log("right-button clicked");
    if(carouselIdx === carouselImageSlider.length-1) carouselIdx = -1;
    carouselMainImage.src = carouselImageSlider[++carouselIdx];
});

carouselLeftButton.addEventListener("click",()=>{
    console.log("left-button clicked");
    if(carouselIdx === 0) carouselIdx = carouselImageSlider.length;
    carouselMainImage.src = carouselImageSlider[--carouselIdx];
});

carouselContainer.addEventListener("mouseover",()=>{
    carouselLeftButton.style.display = "block";
    carouselRightButton.style.display = "block";
});

carouselContainer.addEventListener("mouseout",()=>{
    carouselLeftButton.style.display = "none";
    carouselRightButton.style.display = "none";
});

loginButton.addEventListener('click',()=>{ location.href = "login.html";});
fiction.addEventListener('click',()=>{ location.href = "bookinfo.html";});
manga.addEventListener('click',()=>{ location.href = "bookinfo.html";});
author.addEventListener("click",()=>{ location.href = "bookinfo.html";});
genre.addEventListener("click",()=>{ location.href = "bookinfo.html";});
bestSeller.addEventListener("click",()=>{ location.href = "bookinfo.html";});
