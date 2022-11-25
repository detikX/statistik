$(window).on("load", function () {
  $(".preloader").fadeOut(10000);
  $(".preloader").remove();
});
$(() => {
  new WOW().init();
  var mobile = $(".menu").addClass("mob");
  $(document).on("click", ".m-menu", () => {
    $(".menu").fadeIn("fast");
  });

  if ($(window).width() > 768) {

  }

});


$(".scroll-down").click(() => {
  $('html, body').animate({
    scrollTop: $("#first").offset().top
  }, 500);

})


$(".to-top-opt").click(()=>{
  $('html, body').animate({
    scrollTop: $(".semua").offset().top
  }, 500);
})

$(".to-up").click(()=>{
  $("html, body").animate({ scrollTop: 0 });
})

$.ajax({
  url: 'js/data.json',
  type: "GET",
  success:(response)=>{
    console.log(response)
    var a;
    for(a=0; a<response.length; a++) {
      var flag = response[a].flag;
      var negara = response[a].negara;
      var foto =response[a].img;
      var nama = response[a].nama; 
      var jabatan = response[a].jabatan; 
      var detail = response[a].detail; 
      var benefit = response[a].hewan;
      var h = ""
      benefit.map((a, i) => { h += `<li class="bubbles font-hewan">${a}</li>` });
      $(".slider-nav").append(`
        <div class="flag-img">
          <img src="${flag}" alt="${negara}" title="${negara}" loading="lazy">
        </div>
      `)

      $(".slider-single").append(`
      <div class="pemimpin-content">
        <div class="wraping">
          <div class="foto">
            <div class="image">
              <img src="${foto}" alt="${nama}" title="${nama}" loading="lazy">
            </div>
            <div class="helping">
              <div class="to-top">
                <h2 class="text-center font-bold">${nama}</h2>
                <h4 class="text-center">${jabatan} ${negara}</h4>
                <hr>
                <div class="text-center">
                  <b>Hewan Peliharaan:</b>
                  <ul class="peliharaan">
                    ${h}
                  </ul>
                </div>
              </div>
              
            </div>
          </div>
          <div class="isi">
            ${detail}
            <div class="isi__animasi">
              <img src="img/kaki.png" />
            </div>
          </div>
        </div>
      
      </div>
      `)
    }

    $('.slider-single').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      fade: true,
      adaptiveHeight: true,
      infinite: false,
     useTransform: true,
      speed: 400,
      cssEase: 'cubic-bezier(0.77, 0, 0.18, 1)',
    });
    
    $('.slider-nav')
      .on('init', function(event, slick) {
        $('.slider-nav .slick-slide.slick-current').addClass('is-active');
      })
      .slick({
        slidesToShow: 4.6,
        slidesToScroll: 2,
        dots: false,
        focusOnSelect: false,
        infinite: false,
        responsive: [{
          breakpoint: 1024,
          settings: {
            slidesToShow: 5,
            slidesToScroll: 5,
          }
        }, {
          breakpoint: 640,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 4,
         }
        }, {
          breakpoint: 420,
          settings: {
            slidesToShow: 2.3,
            slidesToScroll: 1,
       }
        }]
      });
    
    $('.slider-single').on('afterChange', function(event, slick, currentSlide) {
      $('.slider-nav').slick('slickGoTo', currentSlide);
      var currrentNavSlideElem = '.slider-nav .slick-slide[data-slick-index="' + currentSlide + '"]';
      $('.slider-nav .slick-slide.is-active').removeClass('is-active');
      $(currrentNavSlideElem).addClass('is-active');
    });
    
    $('.slider-nav').on('click', '.slick-slide', function(event) {
      event.preventDefault();
      var goToSingleSlide = $(this).data('slick-index');
    
      $('.slider-single').slick('slickGoTo', goToSingleSlide);
    });
  }
})

