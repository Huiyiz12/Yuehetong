$(function(){
	$('.rnav>p.p2').hover(function(){
		$('.rnav .wxs').fadeIn();
	},function(){
		$('.rnav .wxs').fadeOut();
	})
	var a=$('.zsous').offset().top;
	$(window).scroll(function(){
		if($(this).scrollTop()>a){
			$('.rnav>p.p1').fadeIn();
		}else{
			$('.rnav>p.p1').fadeOut();
		}
	});
	$('.rnav>p.p1').click(function(){
		$('body,html').animate({
			'scrollTop':'0'
		},500);
	});
})