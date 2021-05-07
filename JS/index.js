var name, profilepic, email;


// Google Login 
function onSignIn(googleUser) {
  user_detail = window.open('user_details.html', '_self');


  var profile = googleUser.getBasicProfile();

  name = profile.getName();
  profilepic = profile.getImageUrl();
  email = profile.getEmail();

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
          FB.api('/me', 'GET', { fields: 'name,email,picture' }, function (response) {
            name = response.name;
            email = response.email;
            profilepic = response.picture.data.url;
            localStorage.setItem("username", name);
            localStorage.setItem("picture", profilepic);
            localStorage.setItem("email", email);
            // alert(name + " " + email + " " + profilepic);
            user_detail = window.open('user_details.html', '_self');
          });
        }
      });


    }
  }, { scope: 'email,public_profile' });

}

(function (d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) { return; }
  js = d.createElement(s); js.id = id;
  js.src = "https://connect.facebook.net/en_US/sdk.js";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

// Gihub login via firebase

var firebaseConfig = {
  apiKey: "AIzaSyCRNvJ4nIreRVHvgG3NnWJNdYYm0qBCMas",
  authDomain: "chetan-s-sign-in-with-twitter.firebaseapp.com",
  projectId: "chetan-s-sign-in-with-twitter",
  storageBucket: "chetan-s-sign-in-with-twitter.appspot.com",
  messagingSenderId: "24657693139",
  appId: "1:24657693139:web:6a37646cb0c00317208726"
};
function github_login() {
  // alert("inside github_login")
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  } else {
    firebase.app(firebaseConfig); // if already initialized, use that one
  }
  // Start a sign in process for an unauthenticated user.
  var provider = new firebase.auth.GithubAuthProvider();
  // provider.addScope('repo');
  // firebase.auth().signInWithRedirect(provider);
  firebase
  .auth()
  .signInWithPopup(provider)
  .then((result) => {
    /** @type {firebase.auth.OAuthCredential} */
    var credential = result.credential;

    // The signed-in user info.
    var user = result.user;
    // ...
  name=user.displayName;
  profilepic=user.photoURL;
  email=user.email;
  localStorage.setItem("username", name);
  localStorage.setItem("picture", profilepic);
  localStorage.setItem("email", email);
  window.open('user_details.html','_self');
  
  }).catch((error) => {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;

    // ...
  });
}

//  Video playback Speed
function PlayBack() {

  var vdo = document.getElementById("playback");
  //  alert(vdo.playbackRate);
  vdo.playbackRate = 0.5;
  // alert(vdo.playbackRate);
}