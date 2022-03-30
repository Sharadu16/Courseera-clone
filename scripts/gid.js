

let  gridArr=
[{imgurl:'components\secondary2.jpg',videourl:"https://youtu.be/BVPJPG4zOso",dis:"Each week of every course, you will join a live global classroom. You will be involved in give-and-take discussions with faculty, not just listen to us. You will work on real-world accounting problems."},
{imgurl:'components\secondary2.jpg',videourl:"https://youtu.be/BVPJPG4zOso",dis:"I feel great that I got the opportunity to work with one of the best universities on my own schedule. It will elevate my life, and my family's life overall, to help me grow my career into the latest technology trends."},
{imgurl:'components\secondary2.jpg',videourl:"https://youtu.be/BVPJPG4zOso",dis:"In our program, we combine the expertise of teaching faculty who bring in solid ideas and frameworks with the hands-on expertise of seasoned entrepreneurs who function as mentors."},
{imgurl:'components\secondary2.jpg',videourl:"https://youtu.be/BVPJPG4zOso",dis:"My first week of studying was in Africa with no mobile or wifi. I was able to download all the content in advance."},
{imgurl:'components\secondary2.jpg',videourl:"https://youtu.be/BVPJPG4zOso",dis:"Today's learners need options. The future of work and the future of learning are converging."},
{imgurl:'components\secondary2.jpg',videourl:"https://youtu.be/BVPJPG4zOso",dis:"The theoretical background that I am getting from the Illinois MCS program I am able to use a lot of those ideas on a day-to-day basis."}]

function appendvideo(data){
    let container = document.getElementById("videoGrid")
    data.forEach((ele)=>{
      
      

       let div = document.createElement("div")
       
       let iframe =document.createElement("iframe")
        iframe.src=ele.videourl

       let p= document.createElement("p")
       p.innerText=ele.dis
       

       div.append(iframe,p)
       
       container.append(div)

    })
}
appendvideo(gridArr)







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