
// Nav Bar 

const toggleBtn = document.querySelector(".toggle-btn");
const navListWrap = document.querySelector(".nav-items");
const navList = document.querySelector(".nav-link-list");


toggleBtn.addEventListener("click", function(){
const navListHeight = navList.getBoundingClientRect().height;
  const navItemHeight = navListWrap.getBoundingClientRect().height;

    if (navItemHeight === 0) {
    navListWrap.style.height = `${navListHeight}px`;
  } else {
    navListWrap.style.height = 0;
  }
    // navList.classList.toggle("active-nav")
})



// ********** fixed navbar ************

const navBar = document.getElementById("nav");
const topLink = document.querySelector(".go-top-link");

window.addEventListener("scroll", function () {
  const scrollHeight = window.pageYOffset;
  const navHeight = navBar.getBoundingClientRect().height;
  if (scrollHeight > navHeight) {
    navBar.classList.add("fixed-nav");
  } else {
    navBar.classList.remove("fixed-nav");
  }

  // setup back to top link

  if (scrollHeight > 287) {
    topLink.classList.add("show-back-up-icon");
  } else {
    topLink.classList.remove("show-back-up-icon");
  }
});





