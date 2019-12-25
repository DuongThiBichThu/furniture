var user=document.getElementById('user');
var password=document.getElementById('password');
var lname=document.getElementById('lname');
var fname=document.getElementById('fname');
var phone=document.getElementById('phone');
var address=document.getElementById('address');
function addUser(){
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "http://localhost:3000/users",
        "method": "POST",
        "headers": {
          "Content-Type": "application/x-www-form-urlencoded",
          "cache-control": "no-cache",
          "Postman-Token": "d75e5a1b-c01f-4542-8d56-41b743657e56"
        },
        "data": {
            "firstname": fname.value,
            "lastname": lname.value,
            "address": address.value,
            "phone": phone.value,
            "username": user.value,
            "password": password.value,
            "role" : "user",
            "img":"/img/user/img1.jpg"
        }
      }
      
      $.ajax(settings).done(function (response) {
        console.log(response);
       document.location="login.html"

      });
}
var btnadd=document.getElementById('signup');
btnadd.addEventListener('click',addUser);