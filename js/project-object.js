
const projectList = [

    {
        id:1,
        type:"web",
        img:"https://source.unsplash.com/p-xSl33Wxyc",
        title:"Project Name",
        language:{html:"HTML/CSS" , js:"js",react:"React",database:"SQL",},
        visit:"www.linktolife.com",
        code:"www.linktocode.com",
    },
    {
        id:2,
        type:"web",
        img:"https://source.unsplash.com/bs2Ba7t69mM",
        title:"Project Name",
        language:{html:"HTML/CSS" , js:"js",react:"React",database:"SQL",},
        visit:"www.linktolife.com",
        code:"www.linktocode.com",
    },
    {
        id:3,
        type:"mobile",
        img:"https://source.unsplash.com/OqtafYT5kTw",
        title:"Project Name",
        language:{html:"HTML/CSS" , js:"js",react:"React",database:"SQL",},
        visit:"www.linktolife.com",
        code:"www.linktocode.com",
    },
    {
        id:4,
        type:"mobile",
        img:"https://source.unsplash.com/SYTO3xs06fU",
        title:"Project Name",
        language:{html:"HTML/CSS" , js:"js",react:"React",database:"SQL",},
        visit:"www.linktolife.com",
        code:"www.linktocode.com",
    },
    {
        id:5,
        type:"api",
        img:"/img/profile.jpeg",
        title:"Project Name",
        language:{html:"HTML/CSS" , js:"js",react:"React",database:"SQL",},
        visit:"www.linktolife.com",
        code:"www.linktocode.com",
    },
]



// Loading The projectList 

const projectContentWrap = document.querySelector(".my-work-contenet");

window.addEventListener("DOMContentLoaded", function() {
    displayProjectList(projectList)
})

function displayProjectList(projectArray) {
    let displayProject = projectArray.map(function(item) {
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
                            <li class="my-work-list-item">${item.language}</li>
                            

                        </ul>
                    </div>
                    <div class="my-work-card-footer">
                        <ul class="my-work-card-list grid-2">
                            <li class="my-work-list-item"><a href=${item.visit} class="my-work-card-link visit">Visit</a></li>
                            <li class="my-work-list-item"><a href="${item.code}" class="my-work-card-link code">Code</a></li>
                        </ul>
                    </div>
                </div>
        
        `    
   });
   displayProject = displayProject.join("");
   projectContentWrap.innerHTML = displayProject;
}