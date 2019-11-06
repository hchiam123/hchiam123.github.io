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

$('a, main p, h1').on('click', function() {
  var url = $(this).attr('href');
  var newTab = $(this).attr('target');
  $(this).removeAttr('href');
  $(this).css({
    transition: '0s',
    color: 'transparent',
  }).delay(100).queue(function(next) {
    $(this).css({
      'transition': '0.3s',
      'z-index': 900,
      'cursor': 'not-allowed !important',
      'text-decoration': 'none !important',
      'transform': 'scale(20)',
    });
    // next();
    if (!url) return;
    setTimeout(function() {
      if (newTab) {
        window.open(url, newTab);
      } else {
        window.location.href = url;
      }
    }, 290); 
  })
});

$('h2>a').on('click', function() {
  $('h2').animate({
    marginLeft: '+=500em',
    marginRight: '-=500em',
  });
});
