
function onSignIn(googleUser) {
  window.open('user_details.html', '_self');
  window.onload = function(){
  
    var profile = googleUser.getBasicProfile();
    var imgtag=document.getElementById("#user-img");
    var nametag= document.getElementById("#user-name");
   var emailtag= document.getElementById("#user-email");
   imgtag.src=profile.getImageUrl();
   nametag.innerHTML='Name: ' + profile.getName();
   emailtag.innerHTML='Email: ' + profile.getEmail();
    console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
    console.log('Name: ' + profile.getName());
    console.log('Image URL: ' + profile.getImageUrl());
    console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
  }
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