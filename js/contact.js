var email = document.getElementById("email");
var number = document.getElementById("number");
var message = document.getElementById("message");
var loginButton = document.getElementById("submit");
var username=document.getElementById("name");
loginButton.addEventListener('click', (event) => {
    event.preventDefault();
    var email_value = email.value.toLowerCase().trim();
    var number_value = number.value.trim();
    var message_value = message.value.trim();
    var username_value=username.value.trim();
    // validating if fields are not empty
    if (email_value.length === 0 || number_value.length === 0 || message_value.length === 0||username_value.length==0) {
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
    
    // on success
    alert("message sent")
    location.href = "home.html";
    
    
})