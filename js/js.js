$('.btn-launch').click(function(){
  event.preventDefault();
  $('.lead-text, .lead-button, .cover-heading').removeClass('animation-entry').addClass('animation-exit');
  $('.lead-button').one(animationEvent,
              function(event) {
    // Scene 2
    $('.inner.cover').css('display', 'none');
    // $('.main-content').css('display', 'block');
    $('.site-wrapper, .site-wrapper-inner').addClass('transit-wrapper change-background');
    $('.masthead, .mastfoot').css('position', 'static').css('display', 'none');
    $('.logo, .prose').addClass('animation-entry2');
    $('g#Layer_1 path').attr('fill', 'white');
    $('.main-content').addClass('main-content-scene2');
    $('.logo').addClass('logo-scene2');
    $('.right-column').addClass('right-column-scene2');

  });
});

// Function from David Walsh: http://davidwalsh.name/css-animation-callback
function whichanimationEvent(){
  var t,
      el = document.createElement("fakeelement");

  var animations = {
    "animation"      : "animationend",
    "Oanimation"     : "oanimationEnd",
    "Mozanimation"   : "animationend",
    "Webkitanimation": "webkitanimationEnd"
  };

  for (t in animations){
    if (el.style[t] !== undefined){
      return animations[t];
    }
  }
}

var animationEvent = whichanimationEvent();
