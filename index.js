(function (){
	$(".row ul li").mouseover(function(){
		var $this = $(this);
        $this.addClass("hover")
             .children("a")
             .addClass("chcolor")
	}).mouseout(function(){
        $(this).removeClass("hover")
               .children("a")
               .removeClass("chcolor");
	});
    var src = "./img/content";
	$(".content-wrap .inline img").mouseover(function(){
		var $this = $(this)
		var num = $this.attr("data");
		$this.attr("src" , src + num + "-hover.png");
	}).mouseout(function(){
		var $this = $(this)
		var num = $this.attr("data");
		$(this).attr("src" , src + num +".png");
	})

	$(".row-13 .btn").mouseover(function(){
		$(this).css("background" , "#104E8B");
	}).mouseout(function(){
		$(this).css("background" , "#49CBCD")
	})
})()


















