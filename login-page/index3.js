var email = document.getElementById("Email");
var pass = document.getElementById("pass");


email.onfocus =function(){
    document.getElementById("email").style.display="block";
}
myInput.onblur = function() {
    document.getElementById("pass").style.display = "none";
  }
  