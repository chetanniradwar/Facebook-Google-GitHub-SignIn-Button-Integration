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
function signOut()
{
    gapi.load('auth2', function () {
        gapi.auth2.init();
         
   if( gapi.auth2.getAuthInstance().isSignedIn.get())
    {
      google_signOut();
    }
});

window.fbAsyncInit = function () {
    FB.init({
      appId: '367986131263200',
      cookie: true,
      xfbml: true,
      version: 'v10.0'
    });

    FB.getLoginStatus(function (response){
    if(response.status ==='connected')
        fb_logout();
    });
}
// google sign out
function google_signOut() {

  

        var auth2 = gapi.auth2.getAuthInstance();
        auth2.signOut().then(function () {
            console.log('User signed out.');
        });

    window.open('index.html','_self');
  
   
}

// facebook sign out
function fb_logout()
{
FB.logout(function(response) {
    window.open('index.html','_self');
 });
}