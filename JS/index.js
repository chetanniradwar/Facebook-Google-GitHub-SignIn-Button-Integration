var name, profilepic, email;


// Google Login 
function onSignIn(googleUser) {
  user_detail = window.open('user_details.html', '_self');


  var profile = googleUser.getBasicProfile();

  name = profile.getName();
  profilepic = profile.getImageUrl();
  email = profile.getEmail();

  //  alert('Name: ' + profile.getName());
  //  alert('Image URL: ' + profile.getImageUrl());
  //  alert('Email: ' + profile.getEmail());
  localStorage.setItem("username", name);
  localStorage.setItem("picture", profilepic);
  localStorage.setItem("email", email);

}

// Facebook login

window.fbAsyncInit = function () {
  FB.init({
    appId: '367986131263200',
    cookie: true,
    xfbml: true,
    version: 'v10.0'
  });

  FB.getLoginStatus(function (response) {   // Called after the JS SDK has been initialized.
    statusChangeCallback(response);        // Returns the login status.
  });
};
function fb_login() {
  FB.login(function (response) {
    if (response.authResponse) {
      FB.getLoginStatus(function (response) {
        if (response.status === 'connected') {
          console.log("fetching info from facebook");
          FB.api('/me','GET',{fields:'name,email,picture'} ,function (response) {
            name = response.name;
            email = response.email;
            profilepic = response.picture.data.url;
            localStorage.setItem("username", name);
            localStorage.setItem("picture", profilepic);
            localStorage.setItem("email", email);
            alert(name + " "+ email + " "+profilepic);
            user_detail = window.open('user_details.html', '_self');
          });
        }
      });


    }
  }, { scope: 'email,public_profile' });

}

//  Video playback Speed

function PlayBack() {

  var vdo = document.getElementById("playback");
  //  alert(vdo.playbackRate);
  vdo.playbackRate = 0.5;
  // alert(vdo.playbackRate);
}

(function (d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) { return; }
  js = d.createElement(s); js.id = id;
  js.src = "https://connect.facebook.net/en_US/sdk.js";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));
