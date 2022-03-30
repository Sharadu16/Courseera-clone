let  gridArr=[{imgurl:'components\secondary2.jpg',videourl:"https://youtu.be/BVPJPG4zOso",dis:"Each week of every course, you will join a live global classroom. You will be involved in give-and-take discussions with faculty, not just listen to us. You will work on real-world accounting problems."},
{imgurl:'components\secondary2.jpg',videourl:"https://youtu.be/BVPJPG4zOso"},
{imgurl:'components\secondary2.jpg',videourl:"https://youtu.be/BVPJPG4zOso"},
{imgurl:'components\secondary2.jpg',videourl:"https://youtu.be/BVPJPG4zOso"},
{imgurl:'components\secondary2.jpg',videourl:"https://youtu.be/BVPJPG4zOso"},
{imgurl:'components\secondary2.jpg',videourl:"https://youtu.be/BVPJPG4zOso"}]
appendvideo(gridArr)
function appendvideo(data){
    let container= document.getElementById('videoGrid')
    data.forEach((ele)=>{
      
      

       let ddiv = document.createElement("div")
       
       let iframe =document.createElement("iframe")
        iframe.src=ele.videourl

       let p= document.createElement("p")
       p.innerText=ele.dis
       

       ddiv.append(iframe,p)
       
       container.append(ddiv)

    })
}
 







function playVedio(url){
    window.open(url);
}
