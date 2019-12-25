function listUser(){    
    $(document).ready(function(){
      $.ajax({
          url: "http://localhost:3000/users",
          dataType: 'json',
          type: 'get',
          cache:false,
          success: function(data){
              /*console.log(data);*/
              var event_data = '';
              $.each(data, function(index, value){
                  /*console.log(value);*/
                  event_data += '<tr>';
                  event_data += '<td>'+value.id+'</td>';
                  event_data += '<td>'+value.firstname+'</td>';
                  event_data += '<td>'+value.lastname+'</td>';
                  event_data += '<td>'+value.phone+'</td>';
                  event_data += '<td>'+value.address+'</td>';
            
                  event_data += '<tr>';
              });
              $("#list_table_json").append(event_data);
          },
          error: function(d){
              /*console.log("error");*/
              alert("404. Please wait until the File is Loaded.");
          }
      });
  });
  }
  listUser();
  //gan id cua the input vao day
var iduser = document.getElementById('iduser');
var firstnameser = document.getElementById('firstnameser');
var lastnameser = document.getElementById('lastnameser');
var address = document.getElementById('address');
var phone = document.getElementById('phone');4
//Add method
function AddUser() {
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "http://localhost:3000/users",
        "method": "POST",
        "headers": {
            "Content-Type": "application/x-www-form-urlencoded",
            "cache-control": "no-cache",
            "Postman-Token": "7aec137d-1142-44de-9795-d845dca86867"
        },
        "data": {
            "id": iduser.value,
            "firstname": firstnameser.value,
            "lastname": lastnameser.value,
            "address": address.value,
            "phone": phone.value

        }
    }
    $.ajax(settings).done(function (response) {
        console.log(response);
    });
}
var btnadd=document.getElementById('btnadd');
btnadd.addEventListener('click',AddUser);

//Update
function UpdateUser() {
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "http://localhost:3000/users/" +iduser.value,
        "method": "PATCH",
        "headers": {
          "cache-control": "no-cache",
          "Postman-Token": "3188c935-f0bc-4944-ad68-fc727581ee33"
        },
        "data": {
            "id": iduser.value,
            "firstname": firstnameser.value,
            "lastname": lastnameser.value,
            "address": address.value,
            "phone": phone.value

        }
    }

    $.ajax(settings).done(function (response) {
        console.log(response);
    });
}
var btnUpdate = document.getElementById('btnup');
btnUpdate.addEventListener('click',UpdateUser);
//Delete
function DeleteUser() {
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "http://localhost:3000/users/" + iduser.value,
        "method": "DELETE",
        "headers": {
            "Content-Type": "application/x-www-form-urlencoded",
            "cache-control": "no-cache",
            "Postman-Token": "b2ed9448-21c0-4ad3-9d2b-f0473a8e3c59"
        },
        "data": {

        }
    }

    $.ajax(settings).done(function (response) {
        console.log(response);
    });

}


var btnDel = document.getElementById('btndel');
btnDel.addEventListener('click', DeleteUser);