var path = require('path');
var fs   = require('fs');
var ytdl = require('youtube-dl');

// Ezarri hemen non nahi duzun bideoak gordetzea
var dest = "/Users/ikerib/Downloads/JETXI";

var myArgs = process.argv.slice(2);
if (myArgs.length == 0) {
  console.log("Youtube helbidea zehaztea ahaztu zaizu.");
  return;
}
var url = myArgs[0];
console.log("URL:" + url);

var video = ytdl(url,
  // Optional arguments passed to youtube-dl.
  ['--max-quality=22']);


if (!fs.existsSync(dest)){
    fs.mkdirSync(dest);
}

var size = 0;
video.on('info', function(info) {
  size = info.size;
  console.log('Bideoa topatu da.');
  console.log(info.filename + ' gordetzen...');
  var output = path.join(dest, info.filename);
  video.pipe(fs.createWriteStream(output));
});

var pos = 0;
video.on('data', function(data) {
  pos += data.length;
  // `size` should not be 0 here.
  if (size) {
    var percent = (pos / size * 100).toFixed(2);
    process.stdout.cursorTo(0);
    process.stdout.clearLine(1);
    process.stdout.write(percent + '%');
  }
});

video.on('Amaitu dut.', function() {
  console.log();
});
