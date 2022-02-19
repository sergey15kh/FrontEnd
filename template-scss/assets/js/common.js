//=================
//Menu
$(function () {
    $('.burger-menu').click(function (event) {
        $('.menu').toggleClass('active')
    }),
    $('.submenu__link, .menu__link').click(function (event) {
        $('.menu').removeClass('active')
    });
})
//=================
//Anchor
$(document).ready(function(){
	$("#menu").on("click","a", function (event) {
		//отменяем стандартную обработку нажатия по ссылке
		event.preventDefault();
		//забираем идентификатор бока с атрибута href
		var id  = $(this).attr('href'),
		//узнаем высоту от начала страницы до блока на который ссылается якорь
			top = $(id).offset().top;
		//анимируем переход на расстояние - top за 1500 мс
		$('body,html').animate({scrollTop: top}, 1500);
	});
});
//=================
//Scroll to top
var btn = $('#scrollToTop');
$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});
btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});
//=================
//LoadMore
$(function () {
  $(".loadmore__item").slice(0, 3).show();
  $("body").on('click touchstart', '.load-more', function (e) {
    e.preventDefault();
    $(".loadmore__item:hidden").slice(0, 3).slideDown();
    if ($(".loadmore__item:hidden").length == 0) {
      $(".load-more").css('visibility', 'hidden');
    }
    $('html,body').animate({
      scrollTop: $(this).offset().top
    }, 1000);
  });
});
//=================
//Перезагрузка  страницы при ресайзе браузера во всех платформах  кроме iOS
var iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
if (iOS){

}
else{
	$(function() {
		$(window).resize(function(){
			location.reload();
		});
	});
}
