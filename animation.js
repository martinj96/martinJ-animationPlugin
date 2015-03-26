$(function(){
	$(".anim").addClass("animated").on({
		mouseenter: function () {
			$(this).removeClass("tada");
			$(this).addClass("swing");
			
			
		},
		mouseleave: function () {
			$(this).removeClass("swing");
			$(this).addClass("tada");
		}
	});				
});