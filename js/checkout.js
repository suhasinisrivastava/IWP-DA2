var email = document.getElementById("email");
var number = document.getElementById("number");
var address1 = document.getElementById("address1");
var address2 = document.getElementById("address2");
var city = document.getElementById("city");
var state = document.getElementById("state");
var country = document.getElementById("country");
var pin = document.getElementById("pin");
var loginButton = document.getElementById("submit");
var username=document.getElementById("name");
loginButton.addEventListener('click', (event) => {
    event.preventDefault();
    var email_value = email.value.toLowerCase().trim();
    var number_value = number.value.trim();
    var username_value=username.value.trim();
    var address1_value=address1.value.trim();
    var address2_value=address2.value.trim();
    var city_value=city.value.trim();
    var state_value=state.value.trim();
    var country_value=country.value.trim();
    var pin_value=pin.value.trim();

    // validating if fields are not empty
    if (email_value.length === 0 || number_value.length === 0 || message_value.length === 0||username_value.length==0 ||address1_value.length===0
        ||address2_value.length==0 || city_value.length==0|| state_value.length==0||country_value.length==0||pin_value.length==0) {
        alert("Fields cannot be empty");
        return;
    }
    // validating email
    const email_re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    var isValid = email_value.match(email_re);
    if (!isValid) {
        alert("Please enter a valid e-mail");
        return;
    }
    // validating password
    var re = "[1-9]{2}[0-9]{9}";
    var isValidno = number_value.match(re);
    if (!isValidno) {
        alert("Please enter a valid phone number");
        return;
    }
    var re2 = "[1-9]{6}";
    var isValidno2 = number_value.match(re2);
    if (!isValidno2) {
        alert("Please enter a valid pincode");
        return;
    }
    
    // on success
    alert("order confirmed")
    location.href = "home.html";
    
    
})