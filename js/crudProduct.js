function listP(){    
    $(document).ready(function(){
      $.ajax({
          url: "http://localhost:3000/product",
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
                  event_data += '<td>'+value.name+'</td>';
                  event_data += `<td> <img  src="${value.img}" width="100px"> </td>`;

            
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
  listP();
  
//gan id cua the input vao day
var id = document.getElementById('id');
var name1 = document.getElementById('name');
var img = document.getElementById('img');
var price = document.getElementById('price');
//Add method
function AddP() {
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "http://localhost:3000/product",
        "method": "POST",
        "headers": {
            "Content-Type": "application/x-www-form-urlencoded",
            "cache-control": "no-cache",
            "Postman-Token": "7aec137d-1142-44de-9795-d845dca86867"
        },
        "data": {
            "id":id.value,
            "name":name1.value,
            "img":img.value,
            "price":price.value

        }
    }
    $.ajax(settings).done(function (response) {
        console.log(response);
    });
}
var btnadd=document.getElementById('btnadd');
btnadd.addEventListener('click',AddP);

//Update
function UpdateP() {
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "http://localhost:3000/product/" +id.value,
        "method": "PATCH",
        "headers": {
          "cache-control": "no-cache",
          "Postman-Token": "3188c935-f0bc-4944-ad68-fc727581ee33"
        },
        "data": {
            "id":id.value,
            "name":name1.value,
            "img":img.value,
            "price":price.value
        }
    }

    $.ajax(settings).done(function (response) {
        console.log(response);
    });
}
var btnUpdate = document.getElementById('btnup');
btnUpdate.addEventListener('click',UpdateP);
//Delete
function DeleteP() {
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "http://localhost:3000/users/" + id.value,
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
btnDel.addEventListener('click', DeleteP);