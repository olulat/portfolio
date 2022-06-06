
const projectList = [

    {
        id:1,
        type:"web",
        img:"https://source.unsplash.com/p-xSl33Wxyc",
        title:"let",
        language:["HTML/CSS","js","React","SQL",],
        visit:"https://www.google.com/",
        code:"www.linktocode.com",
    },
    {
        id:2,
        type:"web",
        img:"https://source.unsplash.com/bs2Ba7t69mM",
        title:"Project Name",
        language:["HTML/CSS","js","React","SQL",],
        visit:"www.linktolife.com",
        code:"www.linktocode.com",
    },
    {
        id:3,
        type:"mobile",
        img:"https://source.unsplash.com/OqtafYT5kTw",
        title:"Project Name",
       language:["HTML/CSS","js","React","SQL",],
        visit:"www.linktolife.com",
        code:"www.linktocode.com",
    },
    {
        id:4,
        type:"mobile",
        img:"https://source.unsplash.com/SYTO3xs06fU",
        title:"Project Name",
        language:["HTML/CSS","js","React","SQL",],
        visit:"www.linktolife.com",
        code:"www.linktocode.com",
    },
    {
        id:5,
        type:"api",
        img:"/img/profile.jpeg",
        title:"Project Name",
        language:["HTML/CSS","js","React","NoSQL",],
        visit:"www.linktolife.com",
        code:"www.linktocode.com",
    },

     {
        id:6,
        type:"api",
        img:"https://secure.img1-cg.wfcdn.com/im/92316237/resize-h445%5Ecompr-r85/5575/55758946/Wrapped+Canvas+Photograph.jpg",
        title:"cat",
        language:["fish","js","feed","eat",],
        visit:"www.linktolife.com",
        code:"www.linktocode.com",
    },
]

 
const projectContentWrap = document.querySelector(".my-work-contenet");
const filterBtnList = document.querySelector(".project-cat-list");
const searchInput = document.querySelector("[data-search]")
const checkBoxWrap = document.querySelector(".dropdown-selection");




// Loading The projectList
window.addEventListener("DOMContentLoaded", function() {

    // Displaying the projects 
    displayProjectList(projectList)
    //displaying the Filter BTN
    displayFilterButtons()  

    // Check box function 
    checkBoxDisplay()
})




// Display Project Card function 

function displayProjectList(placeHolder) {
    let displayProject = placeHolder.map(function(item) {
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
   });
   
   displayProject = displayProject.join("");
   projectContentWrap.innerHTML = displayProject;
}

// Display Project fiter BTN and adding Function

function displayFilterButtons() {
     const allTypes = projectList.reduce(function(values,item){
        if (!values.includes(item.type)) {
            values.push(item.type)
        }
    return values
    },['All'])
const typeBtns = allTypes.map(function(btn){

    return`
    <li><button class="project-filter-btn" data-id=${btn}>${btn}</button></li>
    `
}).join('')
filterBtnList.innerHTML = typeBtns
const filterBtn = document.querySelectorAll(".project-filter-btn");

// Adding Filter function

filterBtn.forEach(function(btn) {
    btn.addEventListener('click',function(e) {
        const typeOfProject =e.currentTarget.dataset.id
        const projectType = projectList.filter(function (projectCard) {
        
            if (projectCard.type === typeOfProject) { 
                return projectCard
            }
            
        })
        if (typeOfProject === 'All') { 
                return displayProjectList(projectList)
            }

            else{
                displayProjectList(projectType)
            }
    })
})
}


// Adding Search Bar Function 
  
   const myinput = searchInput.addEventListener("input", function(e) {
        const inputValue = e.target.value
        
        const projectSearch = projectList.filter(function (itemFind) {
            if (itemFind.title.includes(inputValue)) {
                return itemFind
            }
        })

         if (projectSearch) {
               return displayProjectList(projectSearch)
            } 
   
})
 




// Displaying Filter check box

function checkBoxDisplay() {
     let langList = projectList.map(function(item) {     
  let langUsed = item.language.map(function(lang){return lang});     
    return langUsed   
   });
let checkBoxLabel = ["All",...new Set(langList.flat())]
const allLabel = checkBoxLabel.map((labelList) => {

      return `
          <li class="dropdown-checkbox-wrap">
                            <input class="dropdown-checkbox ${labelList}" type="radio" name="filter-by-lang" data-id=${labelList}>
                           <label>${labelList}</label>
                           </li>
        `
}).join('');
checkBoxWrap.innerHTML = allLabel

// Add Click events to check box 
const checkBtn = document.querySelectorAll(".dropdown-checkbox");



checkBtn.forEach(function(btn) {
    btn.addEventListener('click',function(e) {
        const lang =e.currentTarget.dataset.id
        const projectType = projectList.filter(function (itemFind) {
       
            if (itemFind.language.includes(lang)) { 
                return itemFind
            }
        })

        if (projectType) {
               return displayProjectList(projectType)
            } 


            else{
                displayProjectList(projectList)
            }


    })
  
})
const checkAllBtn = document.querySelector(".All")
checkAllBtn.addEventListener('click',function () {
     displayProjectList(projectList)
})

}



