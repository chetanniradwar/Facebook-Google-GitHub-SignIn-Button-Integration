document.addEventListener("DOMContentLoaded", () => {
    console.log("DOM ready!");
    var imgtag = document.getElementById("img-tag");
    var nametag = document.getElementById("user-name");
    var emailtag = document.getElementById("user-email");
   
    nametag.innerHTML = 'Name: ' + localStorage.getItem("username");
    emailtag.innerHTML = 'Email: ' + localStorage.getItem("email");
    if(localStorage.getItem("picture")!=null)
    imgtag.src = localStorage.getItem("picture");

    console.log("inside userdetails");
     gapi.load('auth2', function () {
        gapi.auth2.init();
          });
});


function signOut() {

    gapi.load('auth2', function () {
        gapi.auth2.init();
          });

        var auth2 = gapi.auth2.getAuthInstance();
        auth2.signOut().then(function () {
            console.log('User signed out.');
        });

    window.open('index.html','_self');
  
   
}