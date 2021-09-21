AOS.init({
  offset: 150,
  duration: 1000,
});

const cardBtns = document.querySelectorAll(".recommendation__tabs li");
const cards = document.querySelectorAll(".recommendation__cards-container");
const card1 = document.querySelector(".card-1");
const card2 = document.querySelector(".card-2");
const card3 = document.querySelector(".card-3");
const card4 = document.querySelector(".card-4");

const customersCarousel = document.querySelector(".customers-carousel");
const customerCards = document.querySelectorAll(".customer-card");
const menuBtn = document.querySelector('.navbar__menuBtn')
const mobileBtn = document.querySelector('.mobile__menuBtn')
const mobileMenu = document.querySelector('.mobile-menu')
const navbarLinks = document.querySelectorAll('.mobile-navbar__links li a')

menuBtn.addEventListener('click',()=>{
  mobileMenu.classList.add('active')
})
mobileBtn.addEventListener('click',()=>{
  mobileMenu.classList.remove('active')
})
navbarLinks.forEach(navLink =>{
  navLink.addEventListener('click',()=>{
    mobileMenu.classList.remove('active')
  })
})

cardBtns.forEach((cardBtn) => {
  cardBtn.addEventListener("click", (e) => {
    e.preventDefault();
    removeAllClasses();
    cardBtn.classList.add("active");

    if (cardBtn.classList.contains("cardBtn-1")) {
      removeCardClasses();
      card1.classList.add("active");
    } else if (cardBtn.classList.contains("cardBtn-2")) {
      removeCardClasses();
      card2.classList.add("active");
    } else if (cardBtn.classList.contains("cardBtn-3")) {
      removeCardClasses();
      card3.classList.add("active");
    } else if (cardBtn.classList.contains("cardBtn-4")) {
      removeCardClasses();
      card4.classList.add("active");
    }
  });
});

function removeAllClasses() {
  cardBtns.forEach((cardBtn) => {
    cardBtn.classList.remove("active");
  });
}
function removeCardClasses() {
  cards.forEach((card) => {
    card.classList.remove("active");
  });
}

let idx = 0;
let interval = setInterval(run, 3000);

function run() {
  idx++;
  changeSlide();
}
function changeSlide() {
  if (idx > customerCards.length - 1) {
    idx = 0;
  } else if (idx < 0) {
    idx = customerCards.length - 1;
  }
  customersCarousel.style.transform = `translateX(${-idx * 100}%)`;
}
