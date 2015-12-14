var $ = require('cheerio');
var fs = require("fs");
var cssnext = require("cssnext");
var browserify = require("browserify");
var babelify = require("babelify");

module.exports = {

  quizHtml: function(quizName, callback) {
      // Load a config file and inject all the og metadata etc.
      var config = require('../quizzes/data/'+quizName+"/build");
      // Load and parse page with jquery.
      $page = $.load(fs.readFileSync("quizzes/index.html"));
      $page("#ConfigScript").attr("src", "data/"+quizName+"/config.js");
      $page("#PartyStyle").attr("href", "main-"+quizName+".css");
      $page("meta[property='og:url']").attr("content",config.targetUrl);
      $page("meta[property='fb:app_id']").attr("content","1428351830791950");//1429534027340397");
      
      $page("meta[property='og:title']").attr("content",config.title);
      $page("meta[property='og:description']").attr("content","Take SunNation's '"+config.title+"' quiz");
      $page("meta[property='og:title']").attr("content",config.title);
      $page("meta[property='og:image']").attr("content","http://www.sunnation.co.uk/sunnation/games/quizzes/data/"+quizName+"/cover-pic.png");
      $page("meta[property='sn-quizzes:test_factor']").attr("content",config.subject);
      callback(null, $page.html());
  },

  quizCss: function(quizName, callback) {
    if (!fs.existsSync("quizzes/data/"+quizName)) {
      return callback("No quiz");
    }

    // Concatenate the CSS include containing colour variables
    var vars = fs.readFileSync("quizzes/data/"+quizName+"/style.css");
    var text = fs.readFileSync("quizzes/main.css");
    var css = cssnext(vars + text);
    callback(null,css);
  },

  quizJs: function(quizName, debug, callback) {

    try {
      var stream = browserify({
        entries: './quizzes/data/' + quizName + '/config.js',
        debug: debug
      })
      .transform(babelify)
      .bundle();
      callback(null, stream);
    }
    catch(e) {
      callback(e);
    }
  }

};