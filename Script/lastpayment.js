 
    let amount1 = document.getElementById("amount1");

    let amt11 =  localStorage.getItem("amount");

    // amount1.innerHTML = "Total Amount : Rs. - "+ amt11+" "

    
    document.querySelector("button").addEventListener("click", function () {
        var name = document.querySelector("#name").value;
        var cardNumber = document.getElementById("cardNumber").value;
        var expiry = document.querySelector("#expiry").value;
        var cvv = document.querySelector("#cvv").value;

        if (name.length && cardNumber.length && expiry && cvv) {
        console.log(name, cardNumber, expiry, cvv);
        if (
            cardNumber === "1234567890987" &&
            expiry === "2026-02" &&
            cvv === "064"
        ) {
            var otp = prompt("Enter Your OTP");
            // console.log(otp)
            if (otp === "123456") {
            localStorage.removeItem("cartPage");
            window.location.href = "succss.html";
            alert("Payment is Successful");
         
            }
        } else {
            alert("Wrong Credentials");
            
        }
        } else {
        alert("Please fill all the fields");
        }
      
    });
    let data =JSON.parse(localStorage.getItem("googleData"));
    let amount11 = document.getElementById("amount1")
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
        price.innerText = "Total Amount :"+ data.price;

        amount11.append(price)
        // amt111.append(price)
    }