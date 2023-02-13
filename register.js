//register
$(document).ready(function () { 
    const APIKEY = "63dfedfc3bc6b255ed0c46c4";
  
    $("#registerbtn").on("click", function (e) {
      e.preventDefault();
      console.log('test');

    let contactUsername = $("#create_username").val();
    let contactEmail = $("#create_email").val();
    let contactPassword = $("#create_password").val();
    let contactCfmPassword = $("#password_cfm").val();

    var jsondata = {
      "username": contactUsername,
      "email": contactEmail,
      "password": contactPassword
    };
    console.log(`${contactCfmPassword} ${contactPassword}`);
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

      $.ajax(settings).done(function (response) {
        console.log('confrm');
        console.log(response);
      });
    }
    
    
    
    })
  })

  
  