function validate(){


var username = document.getElementById("username").Value;
var username = document.getElementById("password").Value;


if(username=="admin"&& password=="user")
{
    alert("Login Succesfully");
    return true;
}
else{
    alert("Login Failed");
}

}