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