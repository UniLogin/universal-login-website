(function() {
  var controller = new ScrollMagic.Controller();
  new ScrollMagic.Scene({triggerElement: "#sec1"})
    .setClassToggle("#video1", "visible")
    .addIndicators()
    .addTo(controller);
  new ScrollMagic.Scene({triggerElement: "#sec2"})
    .setClassToggle("#video2", "visible")
    .addIndicators()
    .addTo(controller);
  new ScrollMagic.Scene({triggerElement: "#sec3"})
    .setClassToggle("#video3", "visible")
    .addIndicators()
    .addTo(controller);
  new ScrollMagic.Scene({triggerElement: "#sec4"})
    .setClassToggle("#video4", "visible")
    .addIndicators()
    .addTo(controller);

})();
