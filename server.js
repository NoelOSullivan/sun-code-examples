var express = require("express");
var cst = require("connect-static-transform");
var babel = require("babel");
var cssnext = require("cssnext");
var babelify = require("babelify");
var browserify = require('browserify');
var fs = require("fs");
var $ = require("cheerio");

var conversions = require('./lib/conversions');

var app = express();

var debug = true;

var transpiler = function(root) {
  return cst({
    root: root,
    match: /\.js$/,
    transform: function(path, text, send) {
      send(babel.transform(text).code, { "Content-Type": "text/javascript" });
    }
  });
};

var transpiler2 = function(root) {
  return cst({
    root: root,
    match: /\.css$/,
    transform: function(path, text, send) {
      send(cssnext(text), { "Content-Type": "text/css" });
    }
  });
};

app.use("/common", express.static("common"));
app.route("/busgame/app.js").get(function(req,res,next){
  try {
    browserify({
      entries: './busgame/app.js',
      debug: debug
    })
    .transform(babelify)
    .bundle()
    .pipe(res);
  }
  catch(e) {
    next(e);
  }
});
app.use("/busgame", transpiler("busgame"));
app.use("/busgame", transpiler2("busgame"));
app.use("/busgame", express.static("busgame"));
app.route("/walkinged/app.js").get(function(req,res,next){
  try {
    browserify({
      entries: './walkinged/app.js',
      debug: debug
    })
    .transform(babelify)
    .bundle()
    .pipe(res);
  }
  catch(e) {
    next(e);
  }
});
app.use("/walkinged", transpiler2("walkinged"));
app.use("/walkinged", express.static("walkinged"));
app.route("/faragepints/app.js").get(function(req,res,next){
  try {
    browserify({
      entries: './faragepints/app.js',
      debug: debug
    })
    .transform(babelify)
    .bundle()
    .pipe(res);
  }
  catch(e) {
    next(e);
  }
});
app.use("/faragepints", transpiler2("faragepints"));
app.use("/faragepints", express.static("faragepints"));

app.route("/flappypm/app.js").get(function(req,res,next){
  try {
    browserify({
      entries: './flappypm/app.js',
      debug: debug
    })
    .transform(babelify)
    .bundle()
    .pipe(res);
  }
  catch(e) {
    next(e);
  }
});
app.use("/flappypm", transpiler2("flappypm"));
app.use("/flappypm", express.static("flappypm"));

app.route("/debategraph/app.js").get(function(req,res,next){
  try {
    browserify({
      entries: './debategraph/app.js',
      debug: debug
    })
    .transform(babelify)
    .bundle()
    .pipe(res);
  }
  catch(e) {
    next(e);
  }
});
app.use("/debategraph", transpiler2("debategraph"));
app.use("/debategraph", express.static("debategraph"));

app.route("/memegenerator/app.js").get(function(req,res,next){
  try {
    browserify({
      entries: './memegenerator/app.js',
      debug: debug
    })
    .transform(babelify)
    .bundle()
    .pipe(res);
  }
  catch(e) {
    next(e);
  }
});
app.use("/memegenerator", transpiler2("memegenerator"));
app.use("/memegenerator", express.static("memegenerator"));

app.route("/eggheads/app.js").get(function(req,res,next){
  try {
    browserify({
      entries: './eggheads/app.js',
      debug: debug
    })
    .transform(babelify)
    .bundle()
    .pipe(res);
  }
  catch(e) {
    next(e);
  }
});
app.use("/eggheads", transpiler2("eggheads"));
app.use("/eggheads", express.static("eggheads"));

app.route("/counter/app.js").get(function(req,res,next){
  try {
    browserify({
      entries: './counter/app.js',
      debug: debug
    })
    .transform(babelify)
    .bundle()
    .pipe(res);
  }
  catch(e) {
    next(e);
  }
});
app.use("/counter", transpiler2("counter"));
app.use("/counter", express.static("counter"));

app.route("/budget/main.js").get(function(req,res,next){
  try {
    browserify({
      entries: './budget/main.js',
      debug: debug
    })
    .transform(babelify)
    .bundle()
    .pipe(res);
  }
  catch(e) {
    next(e);
  }
});
app.use("/budget", transpiler2("budget"));
app.use("/budget", express.static("budget"));

app.route("/quizzes/app.js").get(function(req,res,next){
  try {
    browserify({
      entries: './quizzes/main.js',
      debug: debug
    })
    .transform(babelify)
    .bundle()
    .pipe(res);
  }
  catch(e) {
    next(e);
  }
});

app.route("/quizzes/data/:name/config.js").get(function(req,res,next){
  conversions.quizJs(req.params.name, debug, function(err,stream){
    stream.pipe(res);
  });
});

app.route("/quizzes/index-:name.html").get(function(req,res,next){
  conversions.quizHtml(req.params.name, function(err,html){
    res.status(200).send(html);
  })
});

app.route("/quizzes/main-:name.css").get(function(req,res,next){
  conversions.quizCss(req.params.name, function(err,css){
    if (err) return next();
    res.header("Content-Type","text/css");
    res.end(css);//, { "Content-Type": "text/css" });
  });

});

app.use("/quizzes", express.static("quizzes"));
app.use("/games/release", express.static("release"));

app.use("/polldaddy", express.static("polldaddy"));

app.listen(3000);
console.log("Listening on 3000");