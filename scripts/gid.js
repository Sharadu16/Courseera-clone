

let  gridArr=
[{imgurl:"./components/UNT-logo1 (1).jpg",name:"Bachelor of Applied Arts and Sciences",dis:"#23 Best Online Learning Schools (Newsweek, 2022)"},
{imgurl:"./components/UoL-Logo_180x180.png",name:"Bachelor of Business Administration",dis:"#2 Executive MBAs in Latin America (QS Rankings, 2020)"},
{imgurl:"./components/UNT-logo1 (1).jpg",name:"Bachelor of Sciences in Business Administration",dis:"#23 Best Online Learning Schools (Newsweek, 2022)"},
{imgurl:"./components/UoL-Logo_180x180.png",name:"Bachelor of Sciences in Business Administration",dis:"#2 Executive MBAs in Latin America (QS Rankings, 2020)"}]

function degreeFilter(){
    console.log("hii")
    let h5= document.createElement("h5")
    h5.innerText="Showing 6 total results for Master's Degree in Business"
    let div = document.getElementById("leadingUniversity")
    div.style.display="block";  
    div.style.marginLeft="100px";
    div.append(h5);
  let program = document.getElementById("degree").value 
 if(program==="Bachelor's Degree") {
   div.innerHTML=null;
    appendvideo(gridArr)
  }
}



var degree123 = document.querySelector("#degree123") ;
degree123.append(h5)


function appendvideo(data){
    let container = document.getElementById("leadingUniversity")

    // let h5 = document.createElement("h5")
    // h5.innerText="Showing 4 total results for Bachelor's Degree in Business"

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