if(!Modernizr.cssanimations) {
    //jQuery fallback
    $('.lead-text, .lead-button').css('opacity', '1');
    alert("This website will work only on the latest versions of browsers. Please upgrade your browser to view this website properly.  ഈ വെബ്‌സൈറ്റ് സന്ദർഷിക്കാൻ പുതിയ ബ്രൌസർ ആവശ്യമാണ്‌.  ");
    window.location.replace("http://peaceradio.com/register.html");
}

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
    $('.row').addClass('row-scene2');
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


// TweenMax
var repeatDelay = 3;  // seconds
var repeated = 100; // times

TweenMax.staggerFromTo('g#prlogotextgroup path', 2, {
  opacity:0,
  x:0, y:-10,
  scale: 1.5,
  ease:Elastic.easeIn,
  repeat: repeated,
  repeatDelay: repeatDelay,
  yoyo: true
}, {
  opacity:1,
  x:0, y:0,
  scale: 1,
  ease:Elastic.easeIn,
  repeat: repeated,
  repeatDelay: repeatDelay,
  yoyo: true
}, 0.05);

TweenMax.from('path#prlogo-pee', 2,  {
  opacity: 0,
  y:10,
  ease:Elastic.easeOut,
  repeat: repeated,
  repeatDelay: repeatDelay,
  yoyo: true
});

TweenMax.fromTo('path#prlogo-smallwave', 2,  {
  opacity: 0,
  x:-10,
  y:15,
  ease:Elastic.easeOut.config(1, 0.5),
  scale: 0.7,
  delay: 0.2,
  repeat: repeated,
  repeatDelay: repeatDelay,
  yoyo: true
}, {
  opacity: 1,
  x:0,
  y:0,
  ease:Elastic.easeOut.config(1, 0.5),
  scale: 1,
  delay: 0.2,
  repeat: repeated,
  repeatDelay: repeatDelay,
  yoyo: true
});

TweenMax.fromTo('path#prlogo-bigwave', 2,  {
  opacity: 0,
  x:-10,
  y:15,
  ease:Elastic.easeOut.config(1, 0.5),
  scale: 0.7,
  delay: 0.4,
  repeat: repeated,
  repeatDelay: repeatDelay,
  yoyo: true
}, {
  opacity: 1,
  x:0,
  y:0,
  ease:Elastic.easeOut.config(1, 0.5),
  scale: 1,
  delay: 0.4,
  repeat: repeated,
  repeatDelay: repeatDelay,
  yoyo: true
});
