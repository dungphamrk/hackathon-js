let add_project=document.querySelector(".link_info > button");
let newProject=document.querySelectorAll("input");
let i=1;
let table=document.querySelector("tbody");
let projects=[];
let idChange=0;
add_project.addEventListener("click",function () {
    console.log(idChange);
    if (idChange==0) {
        i=JSON.parse(localStorage.getItem("idProject"))||1 ;
        projects=JSON.parse(localStorage.getItem("projects"))||[];
        let project_item={id:i,name:newProject[0].value,img_url: newProject[1].value,link: newProject[2].value,tag:newProject[3].value};
        projects.push(project_item); 
        i++;
        localStorage.setItem("projects",JSON.stringify(projects));
        localStorage.setItem("idProject",JSON.stringify(i));
        newProject.forEach(element => {
            element.value="";
        });
        render();  
    }else{
        let project= projects.filter((projects)=>projects.id===idChange);
        project[0].name=newProject[0].value;
        project[0].img_url=newProject[1].value;
        project[0].link=newProject[2].value;
        project[0].tag=newProject[3].value;
        for (let j = 0; j < projects.length; j++) {
           if (idChange===projects[j].id) {
                projects[j]=project[0];
           }
        }
   
        localStorage.setItem("projects",JSON.stringify(projects));
        render();
    }
});
function render() {
    projects=JSON.parse(localStorage.getItem("projects"))||[];
    console.log(projects);
   
    projects.forEach(item => {
        table.innerHTML+=` 
     <tr>
        <td>${item.id}</td>
        <td>${item.name}</td>
        <td>${item.img_url}</td>
        <td>${item.link}</td>
        <td>${item.tag}</td>
        <td><button class="del_btn" onclick="del(${item.id})">Delete</button></td>
        <td><button class="updt_btn" onclick="updt(${item.id})">Update</button></td>
    </tr>`
    });
}
function del(id) {
    let project = projects.filter((projects) => projects.id !== id);
    localStorage.setItem("projects", JSON.stringify(project));
    render();
}
function updt(id){
    let project= projects.filter((projects)=>projects.id===id);
    idChange=project[0].id;
    newProject[0].value=project[0].name;
    newProject[1].value=project[0].img_url;
    newProject[2].value=project[0].link;
    newProject[3].value=project[0].tag;
    add_project.textContent="Update";  console.log(idChange);
}


let heroInfo = {
    name: "Dũng ",
    job: "freelance react developer",
    imgUrl: "./WIN_20240131_10_25_27_Pro.jpg",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi porro excepturi assumenda, culpa cupiditate, veritatis nobis rerum blanditiis necessitatibus dolorum amet sed voluptatum aspernatur impedit ducimus veniam dicta itaque ratione!",
  };
  
  let recentProjects = [
    {
      id: 1,
      img_url: "https://picsum.photos/300/300",
      name: "Auto Drive Project",
      link: "https://abcd-example.com",
      tag: ["Angular", "React", "Jquery"],
    },
    {
      id: 2,
      img_url: "https://picsum.photos/300/300",
      name: "Ecommerce Project",
      link: "https://abcd-example.com",
      tag: ["Bootstrap", "CSS", "Javascript"],
    },
    {
      id: 3,
      img_url: "https://picsum.photos/300/300",
      name: "Chat Application",
      link: "https://abcd-example.com",
      tag: ["MongoDB", "Javascript"],
    },
    {
      id: 4,
      img_url: "https://picsum.photos/300/300",
      name: "Social Media Platform",
      link: "https://abcd-example.com",
      tag: ["Vue", "Javascript"],
    },
    {
      id: 5,
      img_url: "https://picsum.photos/300/300",
      name: "Image Sharing Platform",
      link: "https://abcd-example.com",
      tag: ["React", "Javascript"],
    },
  ];
  
  let services = [
    {
      id: 1,
      imgUrl: "https://picsum.photos/300/300",
      serviceName: "Website Design",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui veritatis tenetur corrupti obcaecati ipsam culpa et totam fuga eligendi",
    },
    {
      id: 2,
      imgUrl: "https://picsum.photos/300/300",
      serviceName: "Figma Design",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui veritatis tenetur corrupti obcaecati ipsam culpa et totam fuga eligendi",
    },
    {
      id: 3,
      imgUrl: "https://picsum.photos/300/300",
      serviceName: "SEO Marketing",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui veritatis tenetur corrupti obcaecati ipsam culpa et totam fuga eligendi",
    },
    {
      id: 4,
      imgUrl: "https://picsum.photos/300/300",
      serviceName: "Graphic Design",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui veritatis tenetur corrupti obcaecati ipsam culpa et totam fuga eligendi",
    },
  ];
localStorage.setItem("projects", JSON.stringify(recentProjects));
localStorage.setItem("heroInfo", JSON.stringify(heroInfo));
localStorage.setItem("services", JSON.stringify(services));
render();