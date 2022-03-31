

let  gridArr=
[{imgurl:"/Courseera-clone/components/UNT-logo1 (1).jpg",name:"Bachelor of Applied Arts and Sciences",dis:"#23 Best Online Learning Schools (Newsweek, 2022)"},
{imgurl:"/Courseera-clone/components/UoL-Logo_180x180.png",name:"Bachelor of Business Administration",dis:"#2 Executive MBAs in Latin America (QS Rankings, 2020)"},
{imgurl:"/Courseera-clone/components/UNT-logo1 (1).jpg",name:"Bachelor of Sciences in Business Administration",dis:"#23 Best Online Learning Schools (Newsweek, 2022)"},
{imgurl:"/Courseera-clone/components/UoL-Logo_180x180.png",name:"Bachelor of Sciences in Business Administration",dis:"#2 Executive MBAs in Latin America (QS Rankings, 2020)"}]

function degreeFilter(){
    console.log("hii")
    let div = document.getElementById("leadingUniversity")
    div.style.display="list-item";
    div.style.marginLeft="100px";
  let program = document.getElementById("degree").value 
 if(program==="Bachelor's Degree") {
   div.innerHTML=null;
    appendvideo(gridArr)
  }
}
function appendvideo(data){
    let container = document.getElementById("leadingUniversity")
    data.forEach((ele)=>{
      
       let div = document.createElement("div")
       let sdiv=document.createElement("div")
       let imgdiv =document.createElement("div")
       let img =document.createElement("img")
        img.src=ele.imgurl
        imgdiv.append(img)

       let name= document.createElement("h3")
       name.innerText=ele.name
       
       let p= document.createElement("p")
       p.innerText=ele.dis
       sdiv.append(name,p)
       div.append(imgdiv,sdiv)
       
       container.append(div)

    })
}
// appendvideo(gridArr)
function playVedio(url){
    window.open(url);
}


// <!-- <div>
// <div style="background-image:url('components\secondary2.jpg'); background-size: cover;" onclick="playVedio(url)"></div>
// <div></div>
// </div>
// <div>
// <div style="background-image: url('components\mcs-ds_video_2x.jpg');" onclick="playVedio(url)"></div>
// <div></div>
// </div>
// <div>
// <div style="background-image: url('');" onclick="playVedio(url)"></div>
// <div></div>
// </div>
// <div>
// <div style="background-image: url('');" onclick="playVedio(url)"></div>
// <div></div>
// </div>
// <div>
// <div style="background-image: url('');" onclick="playVedio(url)"></div>
// <div></div>
// </div>
// <div>
// <div style="background-image: url('');" onclick="playVedio(url)"></div>
// <div></div>
// </div> -->