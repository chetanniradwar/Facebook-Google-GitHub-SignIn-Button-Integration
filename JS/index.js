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


// function statusChangeCallback(response) {  // Called with the results from FB.getLoginStatus().
//   console.log('statusChangeCallback');
//   console.log(response);                   // The current login status of the person.
//   if (response.status === 'connected') {   // Logged into your webpage and Facebook.
//     // testAPI(); 
//     fb_login();
//     // FB.login();


//   } else {                                 // Not logged into your webpage or we are unable to tell.
//     document.getElementById('status').innerHTML = 'Please log ' +
//       'into this webpage.';
//   }
// }

// function checkLoginState() {               // Called when a person is finished with the Login Button.
//   FB.getLoginStatus(function (response) {   // See the onlogin handler
//     statusChangeCallback(response);
//   });
// }
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
          FB.api('/me', function (response) {
            name = response.name;
            email = response.email;
            profilepic = response.public_profile;
            localStorage.setItem("username", name);
            localStorage.setItem("picture", profilepic);
            localStorage.setItem("email", email);
            user_detail = window.open('user_details.html', '_self');
          });
        }
      });


    }
  }, { scope: 'name,email,public_profile' });

}
// function testAPI() {                      // Testing Graph API after login.  See statusChangeCallback() for when this call is made.
//   console.log('Welcome!  Fetching your information.... ');
//   FB.api('/me', function (response) {
//     console.log('Successful login for: ' + response.name);
//     document.getElementById('status').innerHTML =
//       'Thanks for logging in, ' + response.name + '!' + response.public_profile + response.email;
//   });
// }




//  Video playback Speed


function PlayBack() {

  var vdo = document.getElementById("playback");
  //  alert(vdo.playbackRate);
  vdo.playbackRate = 0.5;
  // alert(vdo.playbackRate);
}




// window.fbAsyncInit = function () {
//   FB.init({
//     appId: '{your-app-id}',
//     cookie: true,
//     xfbml: true,
//     version: '{api-version}'
//   });

//   FB.AppEvents.logPageView();

// };

(function (d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) { return; }
  js = d.createElement(s); js.id = id;
  js.src = "https://connect.facebook.net/en_US/sdk.js";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));
