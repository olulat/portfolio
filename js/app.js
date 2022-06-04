
// Nav Bar 

const toggleBtn = document.querySelector(".toggle-btn");
const navList = document.querySelector(".nav-link-list");
toggleBtn.addEventListener("click", function(){
    navList.classList.toggle("active-nav")
})

// Project Nav 

const dropdownBtn = document.querySelector(".dropdown-span");
const dropdownIcon = document.querySelector(".dropdown-icon-span");
const dropdownOption = document.querySelector(".dropdown-selection");

dropdownBtn.addEventListener("click", function() {
    dropdownOption.classList.toggle("project-active-togler");
    dropdownIcon.classList.toggle("dropdown-icon-change");
})

// Check Box 

function uncheckAll() {
  document.querySelectorAll('.dropdown-checkbox[type="checkbox"]')
    .forEach(el => el.checked = false);
}
document.querySelector('.checkboc-clear-btn-wrap').addEventListener('click', uncheckAll)


// Search Functionality 

