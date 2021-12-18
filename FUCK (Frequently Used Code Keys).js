// Tabs HTML Example
		// <ul id="menu-tabs" class="tabs">
		// 	<li class="t1"><a href="#"></a></li>
		// 	<li class="t2"><a href="#"></a></li>
		// 	<li class="t3"><a href="#"></a></li>
		// </ul>
		// <div class="tab-content">
		// 	<div class="t1 tab">
		// 		<div class="block">1grey \ blue</div>
		// 	</div>
		// 	<div class="t2 tab">
		// 		<div class="block">2grey \ blue</div>
		// 	</div>
		// 	<div class="t3 tab">
		// 		<div class="block">3grey \ blue</div>
		// 	</div>
		// </div>

//tabs #1
$('#menu-tabs li').click(function(){
	var thisClass = this.className.slice(0,2);
	$('div.t1').hide();
	$('div.t2').hide();
	$('div.t3').hide();
	$('div.' + thisClass).fadeIn(500);
	$('#menu-tabs li').removeClass('active');
	$(this).addClass('active');
	return false;
});
$('#menu-tabs li.t1').click();
//tabs #2 alt
$('#menu-tabs li').click(function(){
	$(".tab").hide();
	$(".tab." + this.className.slice(0,2);).fadeIn(500);
	$('#menu-tabs li').removeClass('active');
	$(this).addClass('active');
	return false;
});
$('#menu-tabs li.t1').click();

// reload window after resize
$(window).resize(function(){
	location.reload();
});

// перезагрузка  страницы при ресайзе браузера во всех платформах  кроме iOS
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

//клик раздел меню - скролл к разделу с таким же классом
$('ul.parts li').click(function(){
	$('header .drop').removeClass('open');
	var $anchor = $(".chapterwrap ." + this.className.split(" ")[0]).offset();
	$('html, body').animate({ scrollTop: $anchor.top },2000);
	return false;
});

//Якоря для навигации
$('nav li').click(function(){
	var $anchor = $("section." + this.className.split(" ")[0]).offset();
	$('html, body').animate({ scrollTop: $anchor.top },2000);
	return false;
});

// click arrow- first view to scroll to the next block
$( '.arrow' ).click(function () {
	$('html, body').animate({
		// scrollTop: $(".list h3 ").next().offset().top
		scrollTop: $("header").offset().top,
	}, 1000);
});

// Ищем в родителе что-то на клик (он же аккордеон в данном случае)
$('.lang').click(function(){
	ext = $(this).parent();
	ext.find('.drop').slideToggle('1000', function() {
		// $(this).parent().find('.drop').slideToggle('fast', function() {});
		// $(this).sibling('.drop').slideToggle('fast', function() {});
		$('.obj3').css('color','#ff0000');
		$('.obj3').css('font-size','20px');
		$('.obj3').toggleClass('active');
	});
	return false;
});

// Анимация чего-либо
$('.obj1').click(function(){
	$('.obj2').animate({
		color: 'ivory2',
		opacity:1,
	}, 1000, function() {
		$('.obj3').css('font-size','20px');
		// Сюда можно загнать следующий этап анимации, точно так же, создавая что-то вроде ступенчатой анимации или цикла
	});
});

// Запуск какой-либо лабуды спустя некое время от загрузки страницы
setTimeout(function(){
	$('.object').animate({
		//например
		opacity: 1,
		marginTop: 0,
	}, 1000, function(){});
},
2000 );// последнее значение "2000" - время таймаута

// Удобный ховер
$(".header").hover(
	function () {
		$('footer').addClass('animation');
	},
	function () {
		// $(".footer").removeClass('hover-active');
		//код, который будет исполняться, когда ушло
		$('footer').removeClass('animation');
	}
);

//compare width window mob\pc
if ($(window).width() < 768) {
	$('#wrapper').addClass('.mob');
}
else {
	$('#wrapper').removeClass('.mob');
}

//header fixed after scroll
$(window).scroll(function () {
	var sc = $(window).scrollTop()
	if (sc > 1) {
		$("header").addClass("fixed")
	} else {
		$("header").removeClass("fixed")
	}
});

// Выполняется код, если есть некий класс на искомом объекте
$(".obj1").click(function() {
	if ($(".obj2").hasClass('active')) { // условие выполнено, идем дальше
		$(this).removeClass('active');
	}
	else {
		// условие не выполнено - отрабатывает код, что здесь, либо вообще ничего, если здесь пусто
	}
});

// отступ на высоту \ ширину вышестоящего блока и центрирование
var marginHeight = $('.top-block').outerHeight();
$('.bottom-block').css('margin-top', marginHeight );

var layoutWidth = $('.layout').outerWidth();
var screenWidth = $('html, body').outerWidth();
var marginWidth = screenWidth - layoutWidth;
var halfMarginWidth = marginWidth / 2;
$('.arrowtop').css('margin-right', halfMarginWidth );

var childHeight = $('.child').outerHeight();
var screenHeight = $('html, body').outerHeight();
var marginHeight = screenHeight - childHeight;
var halfMarginHeight = marginHeight / 2;
$('.arrowtop').css('margin-top', halfMarginHeight );

// Параллакс всегда использовать готовые плагины
$(window).bind('scroll',function(e){
	parallaxScroll();
});
function parallaxScroll(){
$('.parallax_obj').css('top','+'+(($(window).scrollTop()*0.5))+'px');

//accordion
$('.accordion_title').click(function(e) {
	e.preventDefault();
	var $this = $(this);
	if ($this.next().hasClass('show')) {
		$this.next().removeClass('show');
		$this.next().hide('middle');
	} else {
		$this.parent().parent().find('.accordion_content').removeClass('show');
		$this.parent().parent().find('.accordion_content').hide('middle');
		$this.next().toggleClass('show');
		$this.next().show('middle');
		$('html, body').animate({
			scrollTop: $("header ").offset().top
		}, 0);
	}
});

//anchor charter
$(window).scroll(function() {
	var anchb = $('.anchor1');
	var top_of_element = anchb.offset().top;
	var bottom_of_element = anchb.offset().top + anchb.outerHeight();
	var bottom_of_screen = $(window).scrollTop() + window.innerHeight;
	var top_of_screen = $(window).scrollTop();
	if((bottom_of_screen > top_of_element) && (top_of_screen < bottom_of_element)){
		$('.block1').addClass('fadeInUp show');
	}
	else {
		$('.block1').removeClass('fadeInUp show');
	}
});

//contact map image
	var lFollowX = 0,
	lFollowY = 0,
	x = 0,
	y = 0,
	friction = 1 / 30;
	function moveBackground() {
		x += (lFollowX - x) * friction;
		y += (lFollowY - y) * friction;
		translate = 'translate(' + x + 'px, ' + y + 'px) scale(1.1)';
		$('.bg-map').css({
			'-webit-transform': translate,
			'-moz-transform': translate,
			'transform': translate
		});
		window.requestAnimationFrame(moveBackground);
	}
	$(window).on('mousemove click', function(e) {
		var lMouseX = Math.max(-100, Math.min(100, $(window).width() / 2 - e.clientX));
		var lMouseY = Math.max(-100, Math.min(100, $(window).height() / 2 - e.clientY));
		lFollowX = (20 * lMouseX) / 100; // 100 : 12 = lMouxeX : lFollow
		lFollowY = (10 * lMouseY) / 100;
	});
	moveBackground();
