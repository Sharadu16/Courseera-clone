let courseData = [
    {
        image: "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://d15cw65ipctsrr.cloudfront.net/ba/e14875b76f4e799e067d3551076e8c/1200x600_DA.png?auto=format%2Ccompress&dpr=1&w=150&h=150&fit=fill&bg=FFF&q=25",
        courseName: "Google Data Analytics",
        company: "Google",
        certificate: "Professional Certificate",
        rating: "    4.8(49,298)  |  790k students",
        courseFor: "Beginner",
    },
    {
        image:"https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://d15cw65ipctsrr.cloudfront.net/14/b2d530f1ad11e7ab380fc0c6c817a8/Search-Thumbnail.jpg?auto=format%2Ccompress&dpr=1&w=150&h=150&fit=fill&bg=FFF&q=25",
        courseName: "Google IT Support",
        company: "Google",
        certificate: "Professional Certificate",
        rating: "4.8(129,298)  |  1.2m students",
        courseFor: "Beginner",
    },
    {
        image:"https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://d15cw65ipctsrr.cloudfront.net/8a/f7f459f9674408947edb8e594a5da3/1200x600_PgM.png?auto=format%2Ccompress&dpr=1&w=150&h=150&fit=fill&bg=FFF&q=25",
        courseName : "Google Project Management",
        company: "Google",
        certificate: "Professional Certificate",
        rating: "4.8(34,298)  |  560k students",
        courseFor: "Beginner",
    },
    {
        image:"https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://d15cw65ipctsrr.cloudfront.net/75/32388ec64444d7a2b09297c0b59c56/1200x600_UXD.png?auto=format%2Ccompress&dpr=1&w=150&h=150&fit=fill&bg=FFF&q=25",
        
        courseName: "Google UX Design",
        company: "Google",
        certificate: "Professional Certificate",
        rating: "4.8(27,298)  |  450k students",
        courseFor: "Beginner",
    },
    {
        image:"https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://d15cw65ipctsrr.cloudfront.net/10/94e64625eb4b41b05e66ed0e5bab30/Xavier-MI-Thompson-119.jpg?auto=format%2Ccompress&dpr=1&w=150&h=150&fit=fill&bg=FFF&q=25",
        courseName: "Google IT Automation with Python",
        company: "Google",
        certificate: "Professional Certificate",
        rating: "4.7(28,298)  |  620k students",
        courseFor: "Beginner",
    },
    {
        image:"https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://d15cw65ipctsrr.cloudfront.net/1a/2bb79d283a447ca12982eebfc8941a/GoogleG_FullColor_192px_768.png?auto=format%2Ccompress&dpr=1&w=150&h=150&q=25&fit=fill&bg=FFF",
        courseName: "Google started with Google Workplace",
        company: "Google Cloud",
        certificate: "Specialization",
        rating: "4.7(678)  |  17k students",
        courseFor: "Beginner",
    },
    {
        image:"https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera-course-photos/d5/3e32a0a1d544c08ad1f6ee13be3f75/Paid-Media---April-2020-Recap-6-.jpg?auto=format%2Ccompress&dpr=1&w=150&h=150&q=25&fit=fill&bg=FFF",
        courseName: "Google Ads for Beginners",
        company: "Coursera Project Network",
        certificate: "Guided Project",
        rating: "4.5(2,898)  |  99k students",
        courseFor: "Beginner",
    },
    {
        image:"https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://d15cw65ipctsrr.cloudfront.net/6d/8298d730d449aaafc40d1a201b9da1/DA.jpeg?auto=format%2Ccompress&dpr=1&w=150&h=150&q=25&fit=fill&bg=FFF",
        courseName: "Analisis de Datos de Google",
        company: "Google",
        certificate: "Professional Certificate",
        rating: "4.7(52)  |  2.9k students",
        courseFor: "Beginner",
    },
    {
        image:"https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://d15cw65ipctsrr.cloudfront.net/87/fb9365e97c4d93a30017ee0bc76883/PM.jpeg?auto=format%2Ccompress&dpr=1&w=150&h=150&q=25&fit=fill&bg=FFF",
        courseName: "Gestion de Proyectos de Google",
        compan: "Google",
        certificate: "Professional Certificate",
        rating: "4.9(70)  |  2.7k students",
        courseFor: "Beginner",
    },
    {
        image:"https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://d15cw65ipctsrr.cloudfront.net/1d/714104d1c241e8981bb58390da9811/Option-2_1.png?auto=format%2Ccompress&dpr=1&w=150&h=150&q=25&fit=fill&bg=FFF",
        courseName: "Preparing for Google Cloud Certification: Cloud Architect",
        company: "Google Cloud",
        certificate: "Professional Certificate",
        rating: "4.7(53,188)  |  620k students",
        courseFor: "Intermediate",
    },
]

console.log(courseData)

const googleData =(courseData)=> 
{
    courseData.forEach(function(elem)
    {
        var div = document.createElement("div");
        div.style.display = "flex" ;
        div.style.height = "150px" ;
        div.style.width = "1000px" ;
        div.style.backgroundColor = "white";
        div.style.marginBottom = "20px"

        var div1 = document.createElement("div")
        // div1.style.border= "1px solid green";

        var avtar = document.createElement("img")
        avtar.src = elem.image;

        var div2 = document.createElement("div")
        // div2.style.border = "1px solid blue";
        div2.style.height="90%";
        div2.style.marginLeft ="20px"

        var name = document.createElement("h2")
        name.innerHTML = elem.courseName;
        name.style.lineHeight="2px";
        name.style.fontSize = "20px"
        name.setAttribute("id","hoverName")
        name.addEventListener("click",function()
        {

        })

        var company = document.createElement("span");
        company.innerHTML = elem.company;
        company.style.lineHeight="2px";
        company.style.color = "#6E767E"

        var p =document.createElement("p") ;
        p.style.lineHeight="2px"

        var certificate = document.createElement("button");
        certificate.innerHTML = elem.certificate ;
        certificate.style.border = "none"
        certificate.style.height ="22px";

        p.append(certificate)

        var spanIcon = document.createElement("span") ;
        spanIcon.style.lineHeight="2px"
        
        var icon = document.createElement("i");
        icon.setAttribute("class","fa fa-star checked");
        icon.style.color ="rgb(211, 211, 52)";

        var icon2 = document.createElement("i");
        icon2.setAttribute("class","fa fa-star checked");
        icon2.style.color ="rgb(211, 211, 52)";

        var icon3 = document.createElement("i");
        icon3.setAttribute("class","fa fa-star checked");
        icon3.style.color ="rgb(211, 211, 52)";

        var icon4 = document.createElement("i");
        icon4.setAttribute("class","fa fa-star checked");
        icon4.style.color ="rgb(211, 211, 52)";

        var icon5 = document.createElement("i");
        icon5.setAttribute("class","fa fa-star checked");
        icon5.style.color ="rgb(211, 211, 52)";

        var rating = document.createElement("span");
        rating.innerHTML = elem.rating ;
        rating.style.lineHeight="2px"

        var span2 = document.createElement("span")
        span2.style.marginTop = "8px"

        var icon6 = document.createElement("i");
        icon6.setAttribute("class","fa-solid fa-signal");
        icon6.style.color ="black";

        var courseFor= document.createElement("strong");
        courseFor.innerHTML = elem.courseFor;
        courseFor.style.lineHeight="4px";
        courseFor.style.marginLeft = "10px"
      

        var break1 = document.createElement("br") ;

        span2.append(icon6,courseFor)
        spanIcon.append(icon,icon2,icon3,icon4,icon5)
        div1.append(avtar);
        div2.append(name,company,p,spanIcon,rating,break1,span2);
        div.append(div1,div2);
        document.querySelector("#container").append(div);
    })
   
}

googleData(courseData)

    ///////////////////////////////////            slider             /////////////////////////////////////////

    document.getElementById("1dots").style.opacity=1

    const productContainers = [...document.querySelectorAll('.product-container')];
    const nxtBtn = [...document.querySelectorAll('.nxt-btn')];
    const preBtn = [...document.querySelectorAll('.pre-btn')];
    
    productContainers.forEach((item, i) => {
        let containerDimensions = item.getBoundingClientRect();
        let containerWidth = containerDimensions.width;
        let count=1;
    
        nxtBtn[i].addEventListener('click', () => {
           
            console.log(count)
            if(count==1){
                document.getElementById("1dots").style.opacity=.3
                document.getElementById("2dots").style.opacity=1
            }
            
            if(count==2){
                document.getElementById("2dots").style.opacity=.3
                document.getElementById("3dots").style.opacity=1
            }
             
            count++
            item.scrollLeft += containerWidth;
           
        })
    
        preBtn[i].addEventListener('click', () => {
            item.scrollLeft -= containerWidth;
            count--
            if(count==1){
                document.getElementById("2dots").style.opacity=.3
                document.getElementById("1dots").style.opacity=1
            }
            
            if(count==2){
                document.getElementById("3dots").style.opacity=.3
                document.getElementById("2dots").style.opacity=1
            }
         
            console.log(count)
        })
    })

   