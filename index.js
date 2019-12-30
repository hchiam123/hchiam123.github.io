const express = require('express');
const app = express();
const fs = require('fs');

const port = process.env.PORT || 3000;

app.set('view engine', 'html');
app.use(express.static('.'));

app.get('/', function (req, res) {
  fs.readdir('./doors/', function (err, topics) {
    res.render('index.ejs', {
      topics: topics
    });
  });
});

app.get('/:topic', function (req, res) {
  var topic = req.params.topic;
  var url = './doors/' + topic.replace(/%20/g, ' ') + '/';
  fs.readdir(url, function (err, subsections) {
    const subsectionsList = subsections.map(function(subsection) {
      return subsection.replace('.txt', '');
    });
    res.render('topic.ejs', {
      topic: topic,
      subsections: subsectionsList
    });
  });
});

app.get('/:topic/:subsection', function (req, res) {
  var topic = req.params.topic;
  var subsection = req.params.subsection;
  res.render('subsection.ejs', {
    topic: topic,
    subsection: subsection
  });
});

app.listen(port, function () {
  console.log('Example app listening on port ' + port)
});
