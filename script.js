let slideIndex = 0;
showSlides();

function showSlides() {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
    setTimeout(showSlides, 7000); // Change image every 2 seconds
}

// ================================================= COUNT UP =================================================











// ========================================= MENU =========================================

const navBar = document.querySelector("nav"),
  menuBtns = document.querySelectorAll(".menu-icon"),
  overlay = document.querySelector(".overlay");

menuBtns.forEach((menuBtn) => {
  menuBtn.addEventListener("click", () => {
    navBar.classList.toggle("open");
  });
});

overlay.addEventListener("click", () => {
  navBar.classList.remove("open");
});






//login

  //retrieve form information when submit
  let myNameEl = document.getElementById("myName");
  let username = localStorage.getItem("username");
  if (username != null && username != "") {
    myNameEl.innerHTML = username;
  }
        
   document.addEventListener("submit", function (event) {
    //prevent default action of the form from actually submitting
     event.preventDefault();
     
     //retrieve form values
     let myName = document.getElementById("uname").value;
     console.log(myName);
     //set the name
     localStorage.setItem('username',myName);  
    document.getElementById("myName").innerHTML = myName;
     //document.getElementById('myName').textContent = myName;
  
     //clear the form upon each sumission
    document.getElementById("myFrm").reset();
   });
      
//register








