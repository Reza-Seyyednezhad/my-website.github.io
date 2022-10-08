AOS.init()
$('#hamburger-menu').on('click', function(){
    if($('#hamburger-menu').hasClass('is-active')){
        $('#hamburger-menu').removeClass('is-active');
        $('.header-nav-down').hide()
        $('main,footer').css('filter', 'brightness(100%)');
    }else{
        $('#hamburger-menu').addClass('is-active');
        $('.header-nav-down').show()
        $('main,footer').css('filter', 'brightness(50%)');
    }
    
})
$('.header-nav-down-menu-item-link').on('click', function(){
  $('#hamburger-menu').removeClass('is-active');
  $('.header-nav-down').hide()
  $('main,footer').css('filter', 'brightness(100%)');
})

$(window).scroll(function (event) {
  var scroll = $(window).scrollTop();
  if(Number(scroll) > 350){
    $('.up-to-summary').css('display', 'flex')
  }else{
    $('.up-to-summary').css('display', 'none')
  }
});
var swiper5 = new Swiper(".mySwiper5", {
  grabCursor: true,
  effect: "creative",
  creativeEffect: {
    prev: {
      shadow: true,
      translate: ["-125%", 0, -800],
      rotate: [0, 0, -90],
    },
    next: {
      shadow: true,
      translate: ["125%", 0, -800],
      rotate: [0, 0, 90],
    },
  },
});
tippy('#Linked-in',{
  content: 'LinkedIn',
})
tippy('#git-hub',{
  content: 'GitHub',
})
tippy('#insta',{
  content: 'Instagram',
})
tippy('#code-pen',{
  content: 'Codepen',
})