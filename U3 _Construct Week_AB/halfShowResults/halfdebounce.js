 let timerId ;
console.log("ab")

let courseData = [
    {
        image: "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://d15cw65ipctsrr.cloudfront.net/ba/e14875b76f4e799e067d3551076e8c/1200x600_DA.png?auto=format%2Ccompress&dpr=1&w=150&h=150&fit=fill&bg=FFF&q=25",
        courseName: "Google Data Analytics",
        company: "Google",
        certificate: "Professional Certificate",
        rating: "4.8(49,298)  |  790k students",
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


 function searchData()
 {
     let input = document.querySelector("#input").value;
 }


 function appendData(courseData)
 {
     var data = document.querySelector("#data") ;
     data.innerHTML = null ;

     courseData.forEach(function(el)
     {
         let para = document.createElement("p");
         para.innerText = el.courseName ;
         para.addEventListener("click",function()
         {
            //  para.style.cursor = "pointer"
             window.location.href = "google.html"
         })

         data.append(para) ;
     })
 }

 async function main()
 {
     let datamain = await searchData() ;

     if(courseData === undefined)
     {
         return false ;
     }

     appendData(courseData) ;
 }

 function debounce(func,delay)
 {
     if(timerId)
     {
         clearTimeout(timerId)
     }

     timerId = setTimeout(function()
     {
         func()
     },delay)
 }