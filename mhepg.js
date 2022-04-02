document.getElementById("nav21").addEventListener("click", goToHomepg);

function goToHomepg(){
    window.location.href="mhmepg.html";
}

document.getElementById("nav22").addEventListener("click", goToInprocess);
function  goToInprocess(){
    window.location.href="InProgress.html";
}

document.getElementById("nav23").addEventListener("click", goToCompleted);
function goToCompleted(){
    window.location.href="completed.html";
}


let data =JSON.parse(localStorage.getItem("googleData"));

console.log(data)
let container = document.getElementById("blank");
// let pr = document.getElementById("h31")
// let mon = document.getElementById("h3")
if(data==null)
{
    document.getElementById("blank").innerHTML=null;
}

else{
    display(data[0])
   
    }
    function display(data){
        let div = document.createElement("div")
        div.setAttribute("id","div11")
        div.style.display="flex";
    
        let div1 = document.createElement("div")
        div1.setAttribute("id","div111")
        div1.setAttribute("id","div1")
        
        let para = document.createElement("p")
        para.innerText = "Course OFFERED BYMULTIPLE PARTNERS"

        let name = document.createElement("h1");
        name.innerText = data.course;
        name.setAttribute("id","namediv")

        let month = document.createElement("h2");
        month.setAttribute("id","month")
        month.innerText = "Months of Access : "+ data.month;
    
        let div3 = document.createElement("div")
        div3.setAttribute("id","div3")
        div3.style.display="flex"
        let div2 = document.createElement("div")
        div2.setAttribute("id","div2")
     
        let para1 = document.createElement("h4")
        para1.innerText = "0 % completed"
        // let price = document.createElement("h3");
        // price.innerText = "Total Price : "+ data.price;
      
        let image = document.createElement("img");
        
        image.src = "http://coursera-university-assets.s3.amazonaws.com/4a/cb36835ae3421187080898a7ecc11d/Google-G_360x360.png"
        image.setAttribute("id","im")
        div3.append(div2,para1)
        div1.append(para,name,month,div3)
        div.append(image,div1);
        container.append(div)
    }
// img.addEventListener("click", function()
// {
// window.location.href="video.html";
// })