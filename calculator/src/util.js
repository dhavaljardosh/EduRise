const fs = require("browserify-fs");

export const fileData = () => {
  //   fs.readFile("/src/seeme.txt", function(err, data) {
  //     console.log(err);
  //     console.log(data);
  //   });

  fs.mkdir("/dhaval.js", function(err, data) {
    console.log(data);
    fs.realpath("/dhaval.js", function(err, data) {
      console.log(err);
      console.log(data);
    });
  });
};
