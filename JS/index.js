function onSignIn(googleUser) {
  user_detail= window.open('user_details.html', '_self');
 
 
  var profile = googleUser.getBasicProfile();
  var name,profilepic,email;
 name=profile.getName();
 profilepic=profile.getImageUrl();
 email=profile.getEmail();
 
  //  alert('Name: ' + profile.getName());
  //  alert('Image URL: ' + profile.getImageUrl());
  //  alert('Email: ' + profile.getEmail());
localStorage.setItem("username",name);
localStorage.setItem("picture",profilepic);
localStorage.setItem("email",email);


}

  // Facebook login
  window.fbAsyncInit = function() {
    FB.init({
      appId      : '367986131263200',
      cookie     : true,
      xfbml      : true,
      version    : '10.0'
    });
      
    FB.AppEvents.logPageView();   
      
  };

  (function(d, s, id){
     var js, fjs = d.getElementsByTagName(s)[0];
     if (d.getElementById(id)) {return;}
     js = d.createElement(s); js.id = id;
     js.src = "https://connect.facebook.net/en_US/sdk.js";
     fjs.parentNode.insertBefore(js, fjs);
   }(document, 'script', 'facebook-jssdk'));