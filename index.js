/* import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs'
const swiper1 = new Swiper('.swiper', {
    // Optional parameters
    direction: 'vertical',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });
 */
  var swiper = new Swiper(".mySwiper", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  /* const menubar = document.querySelector('.menubar');

menubar.addEventListener('click', () => {
    menubar.classList.toggle('active');
}); */


var menu = document.querySelector(".container")

let burger = document.querySelector(".burger");
menu.onclick = function(){
    menu.classList.toggle("openmenu");
}

let isOpen = false; // Menyun açıq və ya bağlı olduğunu izləyən dəyişən

menu.addEventListener("click", () => {
  if (isOpen) {
    burger.style.left = "-100%"; // Menyu bağlıdırsa, onu gizlət
  } else {
    burger.style.left = "0%"; // Menyu açıqdırsa, onu göstər
  }
  isOpen = !isOpen; // isOpen-in dəyərini dəyişmək
});

 