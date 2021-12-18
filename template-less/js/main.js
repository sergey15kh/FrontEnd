jQuery(function(){
	initTabs();
});

// tabs func
function initTabs() {
	$('.menu-tabs li').click(function(){
		var thisClass = this.className.slice(0,2);
		$('div.t1').hide();
		$('div.t2').hide();
		$('div.t3').hide();
		$('div.t4').hide();
		$('div.t5').hide();
		$('div.' + thisClass).fadeIn(500);
		$('.menu-tabs li').removeClass('active');
		$(this).addClass('active');
		return false;
	});
	$('li.t2').click();
}
