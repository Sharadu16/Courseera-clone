
    let card = document.getElementById("cardbtn");
   
    card.addEventListener("click",function(){
      window.location.href="Lastpayment.html"
    })


   let num =  localStorage.getItem("mobile_No")

   console.log(num)
   let num1 = document.getElementById("num1")
   num1.innerHTML = "Mobile_No. : "+num;
  //  let container



  let h1  = document.getElementById("course_name")
let amt111  = document.getElementById("price")
  let data =JSON.parse(localStorage.getItem("googleData"));
  console.log(data)
  display(data[0])
  function display(data){

      let div = document.createElement("div")
      div.setAttribute("id","div11")

      let name = document.createElement("h3");
      name.innerText = data.course;

      let month = document.createElement("h3");
      month.innerText = data.month;




      let price = document.createElement("h3");
      price.innerText = data.price;

      h1.append(name,price)
      // amt111.append(price)
  }


