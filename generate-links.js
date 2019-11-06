var path = window.location.pathname;
var pathParts = path.split('/');
var door = pathParts[pathParts.length-3];
var subsection = pathParts[pathParts.length-1].replace(/\.html$/, '');
var textFilePath = '../../../list-of-links/' + door + '/' + subsection + '.txt';
fetch(textFilePath)
.then(function(response) {
  return response.text();
})
.then(function(text) {
  var links = text.split('\n').filter(function(line) {
    return line !== '';
  });
  links.forEach(function(link) {
    if (!link.startsWith('http://') && !link.startsWith('https://')) {
      link = 'https://' + link;
    }
    var a = document.createElement('a');
    a.setAttribute('href', link);
    a.setAttribute('target', '_blank');
    a.innerHTML = link;
    var p = document.createElement('p');
    p.appendChild(a);
    document.getElementsByTagName('main')[0].appendChild(p);
  });
  $('a').css({
    position: 'absolute',
    left: '-100%',
  });
  $('a').css('position', 'relative').animate({'left': 0}, 100);
});
