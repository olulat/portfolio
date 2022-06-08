 import {projectList} from  './data.js';
//  import {displayProjectList} from  './project-object.js';

const projectContentWrap = document.querySelector(".my-work-contenet");
let page = 0

// Loading The projectList
window.addEventListener("DOMContentLoaded", function() {

    // Displaying the projects 
    displayProjectList(projectList)
   
})

const paginate = (followers) => {
  const itemsPerPage = 4
  const numberOfPages = Math.ceil(followers.length / itemsPerPage)

  const newFollowers = Array.from({ length: numberOfPages }, (_, index) => {
    const start = index * itemsPerPage
    return followers.slice(start, start + itemsPerPage)
  })
  return newFollowers
}



function displayProjectList(placeHolder) {
    let recentFour = placeHolder.slice(0,4)
    let displayProject = recentFour.map(function(item) {
        let langUsed = item.language.map(myFunction);
        langUsed = langUsed.join(" ");
        
        function myFunction(value) {
            return `<li class="my-work-list-item">${value}</li>`
        }

        return `
        <div class="my-work-card">
                    <div class="my-work-card-heading">
                        <div class="my-work-card-image">
                            <img src=${item.img} alt="${item.title}" class="my-work-img">
                        </div>
                        <h3 class="my-work-card-title">${item.title}</3>

                    </div>

                    <div class="my-work-card-body">
                        <span class="my-work-lang">Language used</span>
                        <ul class="my-work-card-list grid-2">
                            ${langUsed}
                        </ul>
                    </div>
                    <div class="my-work-card-footer">
                        <ul class="my-work-card-list grid-2">
                            <li class="my-work-list-item"><a href=${item.visit} class="my-work-card-link visit"target="_blank">Visit</a></li>
                            <li class="my-work-list-item"><a href="${item.code} "class="my-work-card-link code" target="_blank">Code</a></li>
                        </ul>
                    </div>
                </div>
        
        `    
   }).join("");

   projectContentWrap.innerHTML = displayProject;
}





