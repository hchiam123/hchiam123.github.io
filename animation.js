$('h1').css({
  position: 'absolute',
  top: '-5em',
  left: '50%',
});
$('a').css({
  position: 'absolute',
  left: '-100%',
});
$('h1').css('position', 'relative').animate({'top': 0, 'left': 0}, 100);
$('a').css('position', 'relative').animate({'left': 0}, 100);
