Site = {}

$(document).ready( function(){
  // root size
  root_size = $(window).width() / 65;
  $('html').css({ 'font-size': root_size });
  $(window).resize(function(){
    changeRootFontSize();
    setupSlideshow();
  });

  $('#left').on('click', slideshowPrev);
  $('#right').on('click', slideshowNext);
  Site.container = $('.content');
  Site.content_container = $('#content_container');

  Site.position = 1;

  setupSlideshow();
  setupFirstPosition();

  $('#toggle_about').on('click', function(){
    $('.about').fadeToggle();
    $('#site').toggleClass('fix');
  })
})

changeRootFontSize = function() {
  root_size = $(window).width() / 65;
  $('html').css({ 'font-size': root_size });
}

setupSlideshow = function(){
  Site.content_container_width = Math.round($(window).height() * 0.99);
  Site.content_container_height = Math.round($(window).height() * 0.66);
  Site.container.css('width', Site.content_container_width + 'px');
  Site.container.css('height', Site.content_container_height + 'px');

  Site.slide_position = Site.content_container_width * Site.position * -1;
  Site.content_container.css('transform', 'translateX(' + Site.slide_position + 'px)');

}

setupFirstPosition = function () {
  Site.first_position = Site.content_container_width * -1;
  Site.content_container.css('transform', 'translateX(' + Site.first_position + 'px)')
  Site.content_container.addClass('animate');
}

slideshowNext = function(){
  Site.position = Site.position + 1;

  if (Site.position >= 3){
    Site.slide_position = Site.content_container_width * -3;
    Site.content_container.css('transform', 'translateX(' + Site.slide_position + 'px)');
    Site.position = 0;
    setTimeout(function(){
      Site.content_container.removeClass('animate');
      Site.content_container.css('transform', 'translateX(0px)');
      setTimeout(function(){
        Site.content_container.addClass('animate');
      }, 100);
    }, 300);
  } else {
    Site.slide_position = Site.content_container_width * Site.position * -1;
    Site.content_container.css('transform', 'translateX(' + Site.slide_position + 'px)');
  }

}

slideshowPrev = function(){
  Site.position = Site.position - 1;

  if (Site.position <= 0){
    Site.content_container.css('transform', 'translateX(0px)');
    setTimeout(function(){
      Site.content_container.removeClass('animate');
      Site.slide_position = Site.content_container_width * -3;
      Site.content_container.css('transform', 'translateX(' + Site.slide_position + 'px)');
      setTimeout(function(){
        Site.content_container.addClass('animate');
        Site.position = 3;
      }, 100);
    }, 300);
  } else {
    Site.slide_position = Site.content_container_width * Site.position * -1;
    Site.content_container.css('transform', 'translateX(' + Site.slide_position + 'px)');
  }
}

function preload(sources)
{
  console.log(sources);
  var images = [];
  for (i = 0, length = sources.length; i < length; ++i) {
    images[i] = new Image();
    images[i].src = sources[i];
  }
}