var init = ($facebookProvider, $locationProvider, config, TealiumProvider, ScaleProvider) => {

    // Facebook app ID
    $facebookProvider.setAppId(config.facebookAppId).setVersion('v2.2')
      .setPermissions("email,user_friends,publish_actions");

    TealiumProvider.gameName(config.gameName);

    ScaleProvider.initialize(); 

    (function(d, s, id) {
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) {
        return;
      }
      js = d.createElement(s);
      js.id = id;
      js.src = "//connect.facebook.net/en_US/sdk.js";
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));

  };
  
export default init;