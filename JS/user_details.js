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

  // gapi.load('auth2', function () {
  //   gapi.auth2.init();
  // });
});
function signOut() {
  gapi.load('auth2', function () {
    gapi.auth2.init();

    if (gapi.auth2.getAuthInstance().isSignedIn.get()) {
      google_signOut();
    }
  });
  FB.getLoginStatus(function (response) {
    console.log(response.status); // See the onlogin handler
    statusChangeCallback(response);
  });
  github_signout();


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
var firebaseConfig = {
  apiKey: "AIzaSyCRNvJ4nIreRVHvgG3NnWJNdYYm0qBCMas",
  authDomain: "chetan-s-sign-in-with-twitter.firebaseapp.com",
  projectId: "chetan-s-sign-in-with-twitter",
  storageBucket: "chetan-s-sign-in-with-twitter.appspot.com",
  messagingSenderId: "24657693139",
  appId: "1:24657693139:web:6a37646cb0c00317208726"
};
function github_signout() {
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  } else {
    firebase.app(firebaseConfig); // if already initialized, use that one
  }
  firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
      // User is signed in.
      firebase.auth().signOut().then(() => {
        // Sign-out successful.
        // alert("github sign out")
        window.open('index.html', '_self');
      }).catch((error) => {
        // An error happened.
        alert(error);
      });


    }
    else {
      // No user is signed in.
      // alert("You are not signed in")
    }
  });

}
