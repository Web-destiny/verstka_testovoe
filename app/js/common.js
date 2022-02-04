$(document).ready(function(){
    $("#menu").on("click","a", function (event) {
        event.preventDefault();
        let id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 500);
    });
});


const flkty = new Flickity( '.main-gallery', {
  // options
  cellAlign: 'left',
  contain: true
});
