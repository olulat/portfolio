
// Nav Bar 

const toggleBtn = document.querySelector(".toggle-btn");
const navList = document.querySelector(".nav-link-list");
toggleBtn.addEventListener("click", function(){
    navList.classList.toggle("active-nav")
})

// Project Nav 

const dropdownBtn = document.querySelector(".dropdown-span");
const dropdownIcon = document.querySelector(".dropdown-icon-span");
const dropdownOption = document.querySelector(".check-box-wraper");

dropdownBtn.addEventListener("click", function() {
    dropdownOption.classList.toggle("project-active-togler");
    dropdownIcon.classList.toggle("dropdown-icon-change");
})

