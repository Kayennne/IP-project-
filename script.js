

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


// ================================ SLIDESHOW ================================
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



//login
$(document).ready(function () { 
  const APIKEY = "63dfedfc3bc6b255ed0c46c4";

  $("#loginbtn").on("click", function (e) {
    e.preventDefault();

    let loginUsername = $("#login_username").val();
    let loginPassword = $("#login_password").val();

    let contact = {
      "username": loginUsername,
      "password": loginPassword,
    };

    var settings = {
      "async": true,
      "crossDomain": true,
      "url": "https://reach-01ac.restdb.io/rest/contacts",
      "method": "GET",
      "headers": {
        "content-type": "application/json",
        "x-apikey": APIKEY,
        "cache-control": "no-cache"
      }
    }

    $.ajax(settings).done(function (response) {
      console.log(response);
    });
  })
})






//register
$(document).ready(function () { 
  const APIKEY = "63dfedfc3bc6b255ed0c46c4";

  $("#registerbtn").on("click", function (e) {
    e.preventDefault();

    let contactUsername = $("#create_username").val();
    let contactEmail = $("#create_email").val();
    let contactPassword = $("#create_password").val();
    let contactCfmPassword = $("#password_cfm").val();

    var jsondata = {
      "username": contactUsername,
      "email": contactEmail,
      "password": contactPassword
    };

    if (contactPassword == contactCfmPassword){
      console.log("Password Matches")

      var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://reach-01ac.restdb.io/rest/contacts",
        "method": "POST",
        "headers": {
          "content-type": "application/json",
          "x-apikey": APIKEY,
          "cache-control": "no-cache"
        },
        "processData": false,
        "data": JSON.stringify(jsondata)
      }
    }
    
    
    $.ajax(settings).done(function (response) {
      console.log(response);
    });
  })
})





