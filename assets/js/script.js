
let icon = document.getElementById("form-control-icon");
let error = document.getElementById("form-control-error");

icon.style.display = "none";
error.style.display = "none";

function ValidateEmail(input) {

    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  
    if (input.value.match(validRegex)) {
        return true;

    } else {
        icon.style.display = "block";
        error.style.display = "block";
    }

    
  
  }






