const path = window.location.pathname;
const pathParts = path.split('/');
const door = pathParts[pathParts.length-3];
const subsection = pathParts[pathParts.length-1].replace(/\.html$/, '');
const textFilePath = '../list-of-links/' + door + '/' + subsection + '.txt';
fetch(textFilePath)
.then(function(response) {
  return response.text();
})
.then(function(text) {
  const links = text.split('\n').filter(function(line) {
    return line !== '';
  });
  console.log(links);
  links.forEach(function(link) {
    if (!link.startsWith('http://') && !link.startsWith('https://')) {
      link = 'https://' + link;
    }
    const a = document.createElement('a');
    a.setAttribute('href', link);
    a.setAttribute('target', '_blank');
    a.innerHTML = link;
    const p = document.createElement('p');
    p.appendChild(a);
    document.getElementsByTagName('main')[0].appendChild(p);
  });
});
