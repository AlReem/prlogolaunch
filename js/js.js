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


// TimelineMax
var tl = new TimelineMax({repeat:-1});

tl.from('path#prlogo-pee', 2,  {
  opacity: 0,
  y:-20,
  scale: 2,
  ease:Elastic.easeOut
}, "pee")
.fromTo('path#prlogo-smallwave', 2,  {
  opacity: 0,
  x:-10,
  y:15,
  ease:Elastic.easeOut.config(1, 0.5),
  scale: 0.7
}, {
  opacity: 1,
  x:0,
  y:0,
  ease:Elastic.easeOut.config(1, 0.5),
  scale: 1
}, "pee+=0.4")
.fromTo('path#prlogo-bigwave', 2,  {
  opacity: 0,
  x:-10,
  y:15,
  ease:Elastic.easeOut.config(1, 0.5),
  scale: 0.7
}, {
  opacity: 1,
  x:0,
  y:0,
  ease:Elastic.easeOut.config(1, 0.5),
  scale: 1
}, "pee+=0.8")
.staggerFromTo('g#prlogotextgroup path', 1, {
  x:-20, y:5,
  scale: 0.8,
  ease:Elastic.easeIn.config(1, 0.5)
}, {
  opacity:1,
  x:0, y:0,
  scale: 1,
  ease:Elastic.easeIn.config(1, 0.5)
}, 0.05, "pee+=0.5")

/*delay*/

.to('', 6, {})

/*going back*/

.staggerTo($('g#prlogotextgroup path').get().reverse(), 1, {
  opacity: 0,
  x:20, y:0,
  scale: 1,
  ease:Elastic.easeIn.config(1, 0.5)
}, 0.05, "goingBack")

.to('path#prlogo-bigwave', 0.5,  {
  opacity: 0,
  x:20,
  y:-9,
  ease: Power4.easeInOut,
  scale: 1.2 },
   "-=0.25")
.to('path#prlogo-smallwave', 0.5,  {
  opacity: 0,
  x:20,
  y:-9,
  ease: Power4.easeInOut,
  scale: 1.2 },
  "-=0.25")
.to('path#prlogo-pee', 0.5,  {
  opacity: 0,
  x:20,
  y:-9,
  ease: Power4.easeInOut,
  scale: 1.2 },
  "-=0.25")
/*delay*/

.to('', 1, {});
