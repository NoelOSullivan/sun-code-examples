// https://coderwall.com/p/4qpmfw/sharing-html5-canvas-images-to-directly-to-facebook

/*(function(d, s, id){
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) {return;}
  js = d.createElement(s); js.id = id;
  js.src = "//connect.facebook.net/en_US/sdk.js";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

window.fbAsyncInit = function() {
  FB.init({
    appId      : '948806798497744',
    xfbml      : true,
    version    : 'v2.3'
  });
};

// from: http://stackoverflow.com/a/5303242/945521
if ( XMLHttpRequest.prototype.sendAsBinary === undefined ) {
    XMLHttpRequest.prototype.sendAsBinary = function(string) {
        var bytes = Array.prototype.map.call(string, function(c) {
            return c.charCodeAt(0) & 0xff;
        });
        this.send(new Uint8Array(bytes).buffer);
    };
};*/

(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = "//connect.facebook.net/en_US/all.js";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

window.fbAsyncInit = function() {
    FB.init({
      appId  : "948806798497744",
      status : true, 
      cookie : true, 
      xfbml  : true  // parse XFBML
    });
};

// from: http://stackoverflow.com/a/5303242/945521
if ( XMLHttpRequest.prototype.sendAsBinary === undefined ) {
    XMLHttpRequest.prototype.sendAsBinary = function(string) {
        var bytes = Array.prototype.map.call(string, function(c) {
            return c.charCodeAt(0) & 0xff;
        });
        this.send(new Uint8Array(bytes).buffer);
    };
};

function postImageToFacebook( authToken, filename, mimeType, imageData, message )
{
    // this is the multipart/form-data boundary we'll use
    var boundary = '----ThisIsTheBoundary1234567890';   
    // let's encode our image file, which is contained in the var
    var formData = '--' + boundary + '\r\n'
    formData += 'Content-Disposition: form-data; name="source"; filename="' + filename + '"\r\n';
    formData += 'Content-Type: ' + mimeType + '\r\n\r\n';
    for ( var i = 0; i < imageData.length; ++i )
    {
        formData += String.fromCharCode( imageData[ i ] & 0xff );
    }
    formData += '\r\n';
    formData += '--' + boundary + '\r\n';
    formData += 'Content-Disposition: form-data; name="message"\r\n\r\n';
    formData += message + '\r\n'
    formData += '--' + boundary + '--\r\n';
    
    var xhr = new XMLHttpRequest();
    xhr.open( 'POST', 'https://graph.facebook.com/me/photos?access_token=' + authToken, true );
    xhr.onload = xhr.onerror = function() {
        console.log( xhr.responseText );
    };
    xhr.setRequestHeader( "Content-Type", "multipart/form-data; boundary=" + boundary );
    xhr.sendAsBinary( formData );
};

function shareToFacebook() {
  //var canvas = window.sharing.canvas;
  var canvas = $('#canvas-off-screen')[0];
  var message = $('#text-box')[0].value;
  var data = canvas.toDataURL("image/png");
  var encodedPng = data.substring(data.indexOf(',') + 1, data.length);
  var decodedPng = Base64Binary.decode(encodedPng);
  FB.getLoginStatus(function(response) {
    if (response.status === "connected") {
    postImageToFacebook(response.authResponse.accessToken, "eggheads.png", "image/png", decodedPng, message);
    } else if (response.status === "not_authorized") {
     FB.login(function(response) {
      postImageToFacebook(response.authResponse.accessToken, "eggheads.png", "image/png", decodedPng, message);
     }, {scope: "publish_actions"});
    } else {
     FB.login(function(response)  { 
      postImageToFacebook(response.authResponse.accessToken, "eggheads.png", "image/png", decodedPng, message);
     }, {scope: "publish_actions"});
    }
   });
}

function twitterFormData( filename, mimeType, imageData, message)
{
    // this is the multipart/form-data boundary we'll use
    var boundary = '----ThisIsTheBoundary1234567890';
    // let's encode our image file, which is contained in the var
    var formData = '--' + boundary + '\r\n'
    formData += 'Content-Disposition: form-data; name="status"\r\n\r\n';
    formData += message + '\r\n'
    formData += '--' + boundary + '\r\n';
    formData += 'Content-Disposition: form-data; name="media[]"; filename="' + filename + '"\r\n';
    formData += "Content-Transfer-Encoding: BASE64\r\n";
    formData += 'Content-Type: application/octet-stream\r\n\r\n';
    formData += imageData;
    //for ( var i = 0; i < imageData.length; ++i )
    //{
      //  formData += String.fromCharCode( imageData[ i ] & 0xff );
    //}
    formData += '\r\n';
    formData += '--' + boundary + '--\r\n';

    return formData;
};

function shareToTwitter() {

  var canvas = $('#canvas-off-screen')[0];
  var message = $('#text-box')[0].value;
  var data = canvas.toDataURL("image/png");
  var encodedPng = data.substring(data.indexOf(',') + 1, data.length);
  var decodedPng = Base64Binary.decode(encodedPng);

  OAuth.initialize('4wKij331zH26-jMf4OFAj2wF5aY')
  OAuth.popup('twitter').done(function(result) {

    //var formdata = new FormData();
    //formdata.append("status", message);
    //formdata.append("media[]", decodedPng, {filename: "meme.png" });
  var formdata = twitterFormData("eggheads.png", "image/png", encodedPng /* decodedPng */, message);

      result.post("https://api.twitter.com/1.1/statuses/update_with_media.json", {
        data:formdata,
        cache: false,
        contentType: "multipart/form-data; boundary=\"----ThisIsTheBoundary1234567890\"",
        processData: false
      }).done(function(result){
        // Successful
        // URL: "http://" + result.entities.media[0].display_url
          // var twitterLink = "http://" + result.entities.media[0].display_url;
          // $('#go-to-twitter')[0].href = twitterLink;
        }).fail(function(err) {
          // Error here (tweet too long?)
          alert("There was an error")
            console.log(err);
        });

  }).fail(function(){
    // Error completing oauth or user cancelled
  })

}

function captureCanvas(callback) {
  
  // Hide misc elements

  // Perform the capture

  html2canvas(document.getElementById("Stage")).then(function(canvas){

    var target = document.getElementById("Stage_PreviewTarget");
    target.innerHTML = "";
    target.appendChild(canvas);
    //$(canvas).attr("style","width:320px; height:190px");
    window.sharing.canvas = canvas;
    callback();

  }).error(function(e){
    alert('Sorry, there was an error saving your image. Please try again.');
    callback(e);
  });

}

window.sharing = {
  shareToFacebook: shareToFacebook,
  shareToTwitter: shareToTwitter,
  captureCanvas: captureCanvas
}