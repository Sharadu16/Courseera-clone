


 const faqs = document.querySelectorAll(".faq"); // ===>  Main Div

 faqs.forEach((elem) => {     

  elem.addEventListener("click", () => {  // ===> click event given to class


    // <== This is an inbuild function classList.toggle("active"); for faqs dropdiown ==>>> 

    elem.classList.toggle("active");

  });
});



