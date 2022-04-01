
    var btn = document.querySelector("#btn").addEventListener("click",function()
    {
           event.preventDefault()
         
           var googleData = [] ;
           var courseName = document.querySelector("#courseName").innerHTML
          

           var input1 = document.querySelector("#month1") ;
           var input2 = document.querySelector("#month3") ;
           var input3 = document.querySelector("#month6") ;

            if (input1.checked == true) {
               
                //console.log("month1");

                var monthData = document.querySelector("#month11").innerHTML ;
                var price  = document.querySelector("#price1").innerHTML ;
                
                var obj = {
                   
                    course : courseName,
                    month : monthData,
                    price : price
                    
                }

                googleData.push(obj) ;
            }

            else if (input2.checked == true) 
            {
                //console.log("month2");
                var monthData = document.querySelector("#month13").innerHTML ;
                var price  = document.querySelector("#price3").innerHTML ;

               var obj = {
                   course : courseName,
                   month : monthData,
                   price : price
               }

                googleData.push(obj) ;
            }


            else if (input3.checked == true) {
               // console.log("month3")
               var monthData = document.querySelector("#month16").innerHTML ;
               var price  = document.querySelector("#price3").innerHTML ;

              var obj = {
                  course : courseName,
                  month : monthData,
                  price : price
              }

              googleData.push(obj) ;
            }
          
        console.log(googleData)  
        
        localStorage.setItem("googleData",JSON.stringify(googleData)) ;

        window.location.href="paymentpage.html"

     
    });
