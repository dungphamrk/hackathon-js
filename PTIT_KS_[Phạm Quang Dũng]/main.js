let logoBox=document.querySelector(".logoBox");
let heroInfo=JSON.parse(localStorage.getItem("heroInfo")); 
logoBox.innerHTML+=`<h2>${heroInfo.name}</h2>`
document.querySelector(".description_hero").textContent=`${heroInfo.description}`;
document.querySelector(".headBlue").textContent=`${heroInfo.job}`
let myImg=document.createElement("img");
myImg.setAttribute("src",`${heroInfo.imgUrl}`)
document.querySelector("header section").appendChild(myImg);
let services_info=JSON.parse(localStorage.getItem("services"));
let services=document.querySelector(".services");
let services_img=document.querySelectorAll(".services_item");
let serviceName=document.querySelectorAll(".services article div div b")
for (let i = 0; i < services_info.length; i++) {
    services_img[i].setAttribute("src",`${services_info[i].imgUrl}`)
    serviceName[i].innerHTML=`${services_info[i].serviceName}`;
}

let list_projects= document.querySelector(".listWork");
let recentProjects=JSON.parse(localStorage.getItem("projects"));
list_projects.innerHTML="";
for (let i = 0; i < recentProjects.length; i++) {
    const element = recentProjects[i];
    list_projects.innerHTML+=`  
     <div class="work">
        <img
            src="${element.img_url}"
            alt>
        <div>
            <div class="workDetails">
                <b>${element.name}</b>
                <p>${element.tag}</p>
            </div>
            <button>&#8594;</button>
        </div>
    </div>`
};