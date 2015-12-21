/*
#############################
#   Main JS for ____________   #
#############################
*/

jQuery(document).ready(function($) {


  $('.gallery').each(function() { // the containers for all your galleries
      $(this).magnificPopup({
          delegate: 'a', // the selector for gallery item
          type: 'image',
          gallery: {
            enabled:true
          },
            callbacks: {
    
            buildControls: function() {
              // re-appends controls inside the main container
              this.contentContainer.append(this.arrowLeft.add(this.arrowRight));
                  }
            }
      });
  });

  $(function() {
    $( "#tabs" ).tabs();
  });



  $('.mainSlider').slick({
    autoplay: true,
    dots: true
  });

  $('.slider-big').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.slider-nav'
  });
  $('.slider-nav').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.slider-big',
    dots: false,
    centerMode: true,
    focusOnSelect: true
  });

/*-----------------------------------------------------------------*/  
  $('.magnific').magnificPopup({
    type: 'inline',

    fixedContentPos: false,
    fixedBgPos: false,

    overflowY: 'auto',
    modal: false,

    closeBtnInside: true,
    preloader: false,
    
    midClick: true,
    removalDelay: 300,
    mainClass: 'my-mfp-slide-bottom'
  });

  $(document).on('click', '.popup-modal-dismiss', function (e) {
    e.preventDefault();
    $.magnificPopup.close();
  });

});




