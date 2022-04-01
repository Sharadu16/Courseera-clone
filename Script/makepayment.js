    // let number = null;

    let proceed = document.getElementById("proceed")

       


    proceed.addEventListener("click",function (event){
       
        event.preventDefault()
        let Mobile_No = document.getElementById("MobileNo").value;
        let Email = document.getElementById("Email").value;
        localStorage.setItem("mobile_No",Mobile_No)


        if(Email=="" ||Mobile_No.length<10)
        {
            alert("fill All Credentials")
        }
        else
        window.location.href="Cardpayment.html"
      
     
    })
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
