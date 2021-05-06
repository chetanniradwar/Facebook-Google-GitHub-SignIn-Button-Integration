document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM ready!");
  var imgtag = document.getElementById("img-tag");
  var nametag = document.getElementById("user-name");
  var emailtag = document.getElementById("user-email");

  nametag.innerHTML = 'Name: ' + localStorage.getItem("username");
  emailtag.innerHTML = 'Email: ' + localStorage.getItem("email");
  if (localStorage.getItem("picture") != null)
    imgtag.src = localStorage.getItem("picture");

  console.log("inside userdetails");
  gapi.load('auth2', function () {
    gapi.auth2.init();
  });
});
function signOut() {
  gapi.load('auth2', function () {
    gapi.auth2.init();

    if (gapi.auth2.getAuthInstance().isSignedIn.get()) {
      google_signOut();
    }
  });
  FB.getLoginStatus(function (response) {   // See the onlogin handler
    statusChangeCallback(response);
  });


}
window.fbAsyncInit = function () {
  FB.init({
    appId: '367986131263200',
    cookie: true,
    xfbml: true,
    version: 'v10.0'
  });
}
function statusChangeCallback(response) {  // Called with the results from FB.getLoginStatus().
  console.log('statusChangeCallback');
  console.log(response);                   // The current login status of the person.
  if (response.status === 'connected')
    fb_logout();
}

// google sign out
function google_signOut() {
  var auth2 = gapi.auth2.getAuthInstance();
  auth2.signOut().then(function () {
    console.log('User signed out.');
  });

  window.open('index.html', '_self');

}

// facebook sign out
function fb_logout() {
  FB.logout(function (response) {
    window.open('index.html', '_self');
  });
}

window.onload = dothis();
function dothis() {
  var s = window.location.href;
  var index = s.search("code");
  if (index) {
    index = index + 5;
    var access_token = s.substr(index);
    console.log(access_token);
   var url = 'https://github.com/login/oauth/' + access_token;
    fetch( url
      , {
        method: 'POST',
        headers: {
          // 'Content-Type': 'application/json',
        
          'origin':'http//:127.0.0.1/5500/user_details.html',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          client_id: 'eef11ffcaa8e17a82171',
          client_secret: 'ca113141f1fe887f71b40efdf0f768dc1c83d4f6',
          code: access_token,
        })
      })
      .then(res => {
        return res.json()
      })
      .then(data => console.log(data))
  }
}