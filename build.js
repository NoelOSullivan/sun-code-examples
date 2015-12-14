var cprf = require("cprf");
var async = require("async");
var fs = require("fs");
var babel = require("babel");
var cssnext = require("cssnext");
var rimraf = require("rimraf");
var browserify = require("browserify");
var babelify = require("babelify");
var cpAsync = require("./lib/cpAsync");
var conversions = require("./lib/conversions");

var debug = false;

var things = [

  function(cb){
    rimraf("release", cb);
  },

  function(cb){
    async.eachSeries([
      "release",
      "release/common",
      "release/busgame",
      "release/budget",
      "release/walkinged",
      "release/faragepints",
      "release/flappypm",
      "release/debategraph",
      "release/polldaddy",
      "release/memegenerator",
      "release/eggheads",
      "release/counter",
      "release/quizzes"
//      "release/quizzes/data"
    ], fs.mkdir, cb);
  },

  function(cb) {
    var name = "busgame";
    cpAsync(name, "release/"+name, {
      js: function(file, callback) {
        var item = babel.transform(file.data);
        callback(null, [
          { name: file.name + ".js", data: item.code },
          //{ name: file.name + ".ast", data: item.ast },
          { name: file.name + ".map", data: item.map }
        ]);
      },
      css: function(file, callback) {
        var output = [
          { name: file.path, data: cssnext(file.data) }
        ];
        callback(null, output);
      },
      db: function(file, callback) {
        callback(null, []);
      }
    }, cb);
  },

  function(cb) {
    var name = "walkinged";
    cpAsync(name, "release/"+name, {
      js: function(file, callback) {
        callback(null, []);
      },
      css: function(file, callback) {
        var output = [
          { name: file.path, data: cssnext(file.data) }
        ];
        callback(null, output);
      },
      db: function(file, callback) {
        callback(null, []);
      }
    }, cb);
  },
  function(cb) {
    var name = "faragepints";
    cpAsync(name, "release/"+name, {
      js: function(file, callback) {
        callback(null, []);
      },
      css: function(file, callback) {
        var output = [
          { name: file.path, data: cssnext(file.data) }
        ];
        callback(null, output);
      },
      db: function(file, callback) {
        callback(null, []);
      }
    }, cb);
  },
  function(cb) {
    var name = "flappypm";
    cpAsync(name, "release/"+name, {
      js: function(file, callback) {
        callback(null, []);
      },
      css: function(file, callback) {
        var output = [
          { name: file.path, data: cssnext(file.data) }
        ];
        callback(null, output);
      },
      db: function(file, callback) {
        callback(null, []);
      }
    }, cb);
  },
    function(cb) {
    var name = "debategraph";
    cpAsync(name, "release/"+name, {
      js: function(file, callback) {
        callback(null, []);
      },
      css: function(file, callback) {
        var output = [
          { name: file.path, data: cssnext(file.data) }
        ];
        callback(null, output);
      },
      db: function(file, callback) {
        callback(null, []);
      }
    }, cb);
  },
  function(cb) {
    var name = "budget";
    cpAsync(name, "release/"+name, {
      js: function(file, callback) {
        var item = babel.transform(file.data);
        callback(null, [
          { name: file.name + ".js", data: item.code },
          //{ name: file.name + ".ast", data: item.ast },
          { name: file.name + ".map", data: item.map }
        ]);
      },
      css: function(file, callback) {
        var output = [
          { name: file.path, data: cssnext(file.data) }
        ];
        callback(null, output);
      },
      db: function(file, callback) {
        callback(null, []);
      }
    }, cb);
  },
  function(cb) {
    var name = "polldaddy";
    cpAsync(name, "release/"+name, {
      js: function(file, callback) {
        var item = babel.transform(file.data);
        callback(null, [
          { name: file.name + ".js", data: item.code },
          //{ name: file.name + ".ast", data: item.ast },
          { name: file.name + ".map", data: item.map }
        ]);
      },
      css: function(file, callback) {
        var output = [
          { name: file.path, data: cssnext(file.data) }
        ];
        callback(null, output);
      },
      db: function(file, callback) {
        callback(null, []);
      }
    }, cb);
  },
  function(cb) {
    var name = "memegenerator";
    cpAsync(name, "release/"+name, {
      js: function(file, callback) {
        var item = babel.transform(file.data);
        callback(null, [
          { name: file.name + ".js", data: item.code },
          //{ name: file.name + ".ast", data: item.ast },
          { name: file.name + ".map", data: item.map }
        ]);
      },
      css: function(file, callback) {
        var output = [
          { name: file.path, data: cssnext(file.data) }
        ];
        callback(null, output);
      },
      db: function(file, callback) {
        callback(null, []);
      }
    }, cb);
  },
  function(cb) {
    var name = "eggheads";
    cpAsync(name, "release/"+name, {
      js: function(file, callback) {
        var item = babel.transform(file.data);
        callback(null, [
          { name: file.name + ".js", data: item.code },
          //{ name: file.name + ".ast", data: item.ast },
          { name: file.name + ".map", data: item.map }
        ]);
      },
      css: function(file, callback) {
        var output = [
          { name: file.path, data: cssnext(file.data) }
        ];
        callback(null, output);
      },
      db: function(file, callback) {
        callback(null, []);
      }
    }, cb);
  },
  function(cb) {
    var name = "counter";
    cpAsync(name, "release/"+name, {
      js: function(file, callback) {
        var item = babel.transform(file.data);
        callback(null, [
          { name: file.name + ".js", data: item.code },
          //{ name: file.name + ".ast", data: item.ast },
          { name: file.name + ".map", data: item.map }
        ]);
      },
      css: function(file, callback) {
        var output = [
          { name: file.path, data: cssnext(file.data) }
        ];
        callback(null, output);
      },
      db: function(file, callback) {
        callback(null, []);
      }
    }, cb);
  },

  function(cb){
    cpAsync("common", "release/common", {}, cb);
  },

  function(cb) {
    async.eachSeries(['ukip','labour','green','libdem','tory', 'snp', 'plaid', 'hopkins', 'brand', 'boris', 'labourmanifesto', 'torymanifesto', 'greenmanifesto', 'sturgeon', 'clarkson', 'barton', 'miliband', 'voting', 'farage', 'royalbaby', 'cameron', 'galloway','sugar','charles','morgan','queen','bercow','church'], function(name,cb) {
      buildQuiz(name,cb);
    }, function(err) {
      cb(err);
    });
  },

  function(cb) {
    var pipe = browserify({
      entries: './budget/main.js',
      debug: debug
    })
    .transform(babelify)
    .bundle();
    pipe.on("end", function(){
      console.log("budget main.js")
      cb();
    });
        pipe.on("error", function(err){
      cb(err);
    });
    pipe.pipe(fs.createWriteStream("release/budget/main.js"));
  },

  function(cb) {
    var pipe = browserify({
      entries: './quizzes/main.js',
      debug: debug
    })
    .transform(babelify)
    .bundle();
    pipe.on("end", function(){
      console.log("quiz app.js")
      cb();
    });
        pipe.on("error", function(err){
      cb(err);
    });
    pipe.pipe(fs.createWriteStream("release/quizzes/app.js"));
  },

  function(cb) {
    var pipe = browserify({
      entries: './busgame/app.js',
      debug: debug
    })
    .transform(babelify)
    .bundle();
    pipe.on("end", function(){
      console.log("busgame app.js")
      cb();
    });
    pipe.on("error", function(err){
      cb(err);
    });
    pipe.pipe(fs.createWriteStream("release/busgame/app.js"));
  },
  function(cb) {
    var pipe = browserify({
      entries: './walkinged/app.js',
      debug: debug
    })
    .transform(babelify)
    .bundle();
    pipe.on("end", function(){
      console.log("walkinged app.js")
      cb();
    });
    pipe.on("error", function(err){
      cb(err);
    });
    pipe.pipe(fs.createWriteStream("release/walkinged/app.js"));
  },
  function(cb) {
    var pipe = browserify({
      entries: './faragepints/app.js',
      debug: debug
    })
    .transform(babelify)
    .bundle();
    pipe.on("end", function(){
      console.log("faragepints app.js")
      cb();
    });
    pipe.on("error", function(err){
      cb(err);
    });
    pipe.pipe(fs.createWriteStream("release/faragepints/app.js"));
  },
  function(cb) {
    var pipe = browserify({
      entries: './memegenerator/app.js',
      debug: debug
    })
    .transform(babelify)
    .bundle();
    pipe.on("end", function(){
      console.log("memegenerator app.js")
      cb();
    });
    pipe.on("error", function(err){
      cb(err);
    });
    pipe.pipe(fs.createWriteStream("release/memegenerator/app.js"));
  },
  function(cb) {
    var pipe = browserify({
      entries: './eggheads/app.js',
      debug: debug
    })
    .transform(babelify)
    .bundle();
    pipe.on("end", function(){
      console.log("eggheads app.js")
      cb();
    });
    pipe.on("error", function(err){
      cb(err);
    });
    pipe.pipe(fs.createWriteStream("release/eggheads/app.js"));
  },
  function(cb) {
    var pipe = browserify({
      entries: './counter/app.js',
      debug: debug
    })
    .transform(babelify)
    .bundle();
    pipe.on("end", function(){
      console.log("counter app.js")
      cb();
    });
    pipe.on("error", function(err){
      cb(err);
    });
    pipe.pipe(fs.createWriteStream("release/counter/app.js"));
  },
  function(cb) {
    var pipe = browserify({
      entries: './flappypm/app.js',
      debug: debug
    })
    .transform(babelify)
    .bundle();
    pipe.on("end", function(){
      console.log("flappypm app.js")
      cb();
    });
    pipe.on("error", function(err){
      cb(err);
    });
    pipe.pipe(fs.createWriteStream("release/flappypm/app.js"));
  },
  function(cb) {
    var pipe = browserify({
      entries: './debategraph/app.js',
      debug: debug
    })
    .transform(babelify)
    .bundle();
    pipe.on("end", function(){
      console.log("debategraph app.js")
      cb();
    });
    pipe.on("error", function(err){
      cb(err);
    });
    pipe.pipe(fs.createWriteStream("release/debategraph/app.js"));
  }

];

function prepareQuizFolder(name, cb) {

  fs.mkdirSync('release/quiz-'+name);

  var transform = {
      css: function(file, callback) {
        var output = [
          { name: file.path, data: cssnext(file.data) }
        ];
        callback(null, output);
      },
      db: function(file, callback) {
        callback(null, []);
      }
    };

    cpAsync("quizzes", "release/quiz-"+name, transform, { ignore: "data" }, function(err,result){
      if (err) return cb(err);
      fs.mkdirSync('release/quiz-'+name+"/data");
      fs.mkdirSync('release/quiz-'+name+"/data/"+name);

      cpAsync("quizzes/data/"+name, "release/quiz-"+name+"/data/"+name, transform, { ignore: "data" }, function(err,result){
        if (err) return cb(err);


        var pipe = browserify({
          entries: './quizzes/main.js',
          debug: debug
        })
        .transform(babelify)
        .bundle();
        pipe.on("end", function(){
          console.log("quiz app.js")
          cb();
        });
            pipe.on("error", function(err){
          cb(err);
        });
        pipe.pipe(fs.createWriteStream("release/quiz-"+name+"/app.js"));

      });
    });

}

function buildQuiz(name, cb) {
  console.log("Quiz: " + name);
  prepareQuizFolder(name,function(err,result){
    if (err) return cb(err);
    conversions.quizHtml(name,function(err,html){
      if (err) return cb(err);
      fs.writeFile("release/quiz-"+name+"/index-"+name+".html", html, function(err,result){
        if (err) return cb(err);
        conversions.quizCss(name,function(err,css){
          if (err) return cb(err);
          fs.writeFile("release/quiz-"+name+"/main-"+name+".css", css, function(err,result){
            if (err) return cb(err);
            conversions.quizJs(name,debug,function(err,stream){
              if (err) return cb(err);
              stream.on("end", function(){
                cb();
              });
              stream.on("error", function(e){
                cb(e);
              });
              var pipe = stream.pipe(fs.createWriteStream("release/quiz-"+name+"/data/"+name+"/config.js"));
  //            pipe.end();
            });
          });
        });
      });
    });
  });
}
process.stdin.resume();
async.series(things, function(err){
  if (err) {
    console.error(err);
  }
  console.log("ALL DONE");
});


