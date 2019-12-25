function listUser() {
    $(document).ready(function () {
        $.ajax({
            url: "http://localhost:3000/users?id="+sessionStorage.getItem("iduser"),//link json-server
            dataType: 'json',//kieu du lieu
            type: 'get',
            cache: false,
            success: function (data) {//thuc hien
                /*console.log(data);*/
                var event_data = '';//khoi tao 1 bien chuoi rong
                $.each(data, function (index, value) {//for each duyet mang,
                 
                    event_data += `<div class="card">
                    <img src="${value.img}" alt="John" style="width:100%">
                    <br>
                    <h3><b>${value.firstname} ${value.lastname}</b></h3>
                    <p class="title">${value.username}</p>
                    <p>Phone: ${value.phone} </p>
                    <p>Address: ${value.address}</p>
                    <div style="margin: 24px 0;">
                     
                    </div>
                   
                  </div>`;
                });
                $("#content").append(event_data);//append la them
            },
            error: function (d) {
                /*console.log("error");*/
                alert("404. Please wait until the File is Loaded.");
            }
        });
    });
}
listUser();

