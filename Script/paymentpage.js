
let btn =  document.getElementById("btn")
let container = document.getElementById("a1") ;
    btn.addEventListener("click",function(){
        window.location.href = "makepayment.html"
    })

    let data =JSON.parse(localStorage.getItem("googleData"));

    console.log(data)

let pr = document.getElementById("h31")
let mon = document.getElementById("h3")
    display(data[0])
    function display(data){
 
        
        let div = document.createElement("div")
        div.setAttribute("id","div11")

        let div1 = document.createElement("div")
        div.setAttribute("id","div111")

        let name = document.createElement("h3");
        name.innerText = data.course;

        let month = document.createElement("h3");
        month.innerText = "Months of Access : "+ data.month;

        let price = document.createElement("h3");
        price.innerText = "Total Price : "+ data.price;




        div.append(name)
        container.append(div)

        mon.append(month)
        pr.append(price)


    }