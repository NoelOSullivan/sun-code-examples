var fs = require("fs");
var async = require("async");

function cpAsync(path, target, filter, options, cb) {

  if (typeof cb === 'undefined') {
    cb = options;
    options = {};
  }

  fs.readdir(path, function(err, files) {
    if (err) return cb(err);
    async.eachSeries(files, function(fileName,cb){
      fs.stat(path+"/"+fileName, function(err,file){
        if (err) return cb(err);
        if (file.isDirectory()) {
          if (options.ignore && options.ignore === fileName) {
            return cb();
          }
          fs.mkdir(target + "/" + fileName, function(err,result){
            if (err) return cb(err);
            cpAsync(path + "/" + fileName, target + "/" + fileName, filter, cb);
          });
        }
        else {
          var ext = fileName.split('.').pop();
          if (filter.hasOwnProperty(ext)) {
            var name = fileName.split('.');
            name.pop();
            name = name.join('.');

            fs.readFile(path+"/"+fileName, function(err,data){
              if (err) return cb(err);
              console.log(path+"/"+fileName);
              filter[ext]({ name: name, ext: ext, data:data.toString(), path:fileName}, function(err,results){
                if (err) return cb(err);
                for (var i in results) {
                  console.log(target+"/"+results[i].name);
                  fs.writeFileSync(target+"/"+results[i].name, results[i].data);
                }
                cb();
              });
            });
          }
          else {
            console.log(target + "/" + fileName);
            fs.createReadStream(path+"/"+fileName).pipe(fs.createWriteStream(target + "/" + fileName));
            cb();
          }
        }
      });
    }, function(err,result) {
      cb(err,result);
    });
  });

};

module.exports = cpAsync;
