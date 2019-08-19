(function() {
  var controller = new ScrollMagic.Controller();
  var video1 = document.getElementById('video1');
  var video2 = document.getElementById('video2');
  var video3 = document.getElementById('video3');
  var video4 = document.getElementById('video4');

  new ScrollMagic.Scene({triggerElement: "#header"})
    .setClassToggle("#video1", "visible")
    .addTo(controller);
  new ScrollMagic.Scene({triggerElement: "#sec1"})
    .on("start", function() {
      video1.currentTime = 0;
    })
    .addTo(controller);
  new ScrollMagic.Scene({triggerElement: "#sec2"})
    .setClassToggle("#video2", "visible")
    .on("start", function() {
      video1.currentTime = 0;
      video2.currentTime = 0;
    })
    .addTo(controller);
  new ScrollMagic.Scene({triggerElement: "#sec3"})
    .setClassToggle("#video3", "visible")
    .on("start", function() {
      video2.currentTime = 0;
      video3.currentTime = 0;
    })
    .addTo(controller);
  new ScrollMagic.Scene({triggerElement: "#sec4"})
    .setClassToggle("#video4", "visible")
    .on("start", function() {
      video3.currentTime = 0;
      video4.currentTime = 0;
    })
    .addTo(controller);
})();

(function() {
  var sidebar = document.getElementById('sidebar');
  var sidebarClose = document.getElementById('sidebarClose');
  var sidebarOpen = document.getElementById('sidebarOpen');

  sidebarOpen.addEventListener('click', function() {
    sidebar.classList.add('visible');
  })

  sidebarClose.addEventListener('click', function() {
    sidebar.classList.remove('visible');
  })

})();
