(function() {
  var controller = new ScrollMagic.Controller();
  new ScrollMagic.Scene({triggerElement: "#header"})
    .setClassToggle("#video1", "visible")
    .addTo(controller);
  new ScrollMagic.Scene({triggerElement: "#sec2"})
    .setClassToggle("#video2", "visible")
    .addTo(controller);
  new ScrollMagic.Scene({triggerElement: "#sec3"})
    .setClassToggle("#video3", "visible")
    .addTo(controller);
  new ScrollMagic.Scene({triggerElement: "#sec4"})
    .setClassToggle("#video4", "visible")
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
