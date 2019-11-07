$('*:not(h1)>a').css({
  position: 'absolute',
  left: '-100%',
});
$('*:not(h1)>a').css('position', 'relative').animate({'left': 0}, 100);

$('*:not(h2)>a').on('click', function() {
  var url = $(this).attr('href');
  var newTab = $(this).attr('target');
  $(this).removeAttr('href');
  $('h2').css('color', 'transparent');
  $(this).addClass('expand');
  $('a:not(.expand)').css({
    background: 'transparent',
    color: 'transparent',
  });
  $(this).css({
    transition: '0s',
    color: 'transparent',
    position: 'relative',
  }).delay(100).queue(function(next) {
    $(this).parent().css({
      'transition': '0.1s',
      'z-index': 900,
      'opacity': 0.5,
      'cursor': 'not-allowed !important',
      'text-decoration': 'none !important',
      'transform': 'scale(7)',
    });
    // next();
    if (!url) return;
    setTimeout(function() {
      if (newTab) {
        window.open(url, newTab);
      } else {
        window.location.href = url;
      }
    }, 500); 
  })
});

$('h2>a').on('click', function() {
  var url = $(this).attr('href');
  $(this).removeAttr('href');
  $('h2').animate({
    left: '100vw',
  }, 100);
  setTimeout(function() {
    window.location.href = url;
  }, 500); 
});
