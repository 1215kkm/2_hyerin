//main 제이쿼리

$(document).ready(function(){
	$(".hamburger").animate({right:'38px'});
	$(".hamburger-b").animate({right:'68px'});
	$(".hamburger-a").animate({right:'-10px'});

	$(".h3t1").animate({top:'200px',opacity:'1'});
	$(".h3t2").animate({top:'315px',opacity:'1'});
	$(".h3t3").animate({top:'300px',opacity:'1'});
	$("h2").delay(2000).fadeIn(3000);
	$("#dot").delay(3000).fadeIn(1000);
	$("h1").delay(3000).fadeIn(1000);
	$(".porttext").delay(3000).fadeIn(500);
	$(".scrolltext").delay(3000).fadeIn(500); 
	$(".linktext").delay(3000).fadeIn(500);   
	$(".scrollline").delay(3000).fadeIn(2000);

})



$(document).ready(function(){
    $('.ham').animate({right:'40px'});
    $('.ham-b').animate({right:'-20px'});
    $('.ham-a').animate({right:'-6px'});

    $("h2").fadeIn(2000);
    $(".symbol02").delay(2000).fadeIn(500);
    $(".menu-text").delay(2500).fadeIn(3000);

    $(".porttext").delay(3500).fadeIn(500);  
    $(".front-p").delay(3500).fadeIn(500); 
})


//메뉴클릭 클릭이벤트
$(document).ready(function() {
    $(".hamburger").click(function(){
		$("#menu01").show();

	})

})

$(document).ready(function() {
    $("#menu01").click(function(){
		$("#menu01").hide();

	})

})






//about 제이쿼리

$(window).scroll(function(){
	var winT = $(window).scrollTop();
	var aboutT = $('#about').offset().top;
	var scrT = $(window).scrollTop();

	if (scrT > aboutT-700) {
		$('.gradtext').css({top:'150px',opacity:'1'})
	} else {
		$('.gradtext').css({top:'',opacity:''})
	};

	if (scrT > aboutT-700) {
		$('h4').css({top:'210px',opacity:'1'})
	} else {
		$('h4').css({top:'',opacity:''})
	};

	if (scrT > aboutT-300) {
		$('.star,.stitle,.starline').css({top:'',opacity:'1'})
	} else {
		$('.star,.stitle.starline').css({top:'',opacity:''})
	};
	if (scrT > aboutT-80) {
		$('.stitle').css({marginTop:'0',opacity:'1'})
	} else {
		$('.stitle').css({marginTop:'',opacity:''})
	};
})

//web 제이쿼리

$(window).scroll(function(){
	var winT = $(window).scrollTop();
	var webwrapT = $('#webwrap').offset().top;

	if (winT > webwrapT-800) {
		$('#webwrap > h6 ').css({top:'0px',opacity:'1'})
	} else {
		$('#webwrap > h6 ').css({top:'',opacity:''})
	};

	if (winT > webwrapT+100) {
		$('#webwrap > .subtitle01').css({top:'930px',opacity:'1'})
	} else {
		$('#webwrap > .subtitle01').css({top:'',opacity:''})
	};

	if (winT > webwrapT+400) {
		$('#webwrap > .subtitle02').css({top:'1030px',opacity:'1'})
	} else {
		$('#webwrap > .subtitle02').css({top:'',opacity:''})
	};

	
})

//app 제이쿼리 텍스트 무브

$(window).scroll(function(){
	var winT = $(window).scrollTop();
	var appwrapT = $('.appwrap').offset().top;

	if (winT > appwrapT-800) {
		$('.appwrap > .subtitle01 ').css({top:'50px',opacity:'1'})
	} else {
		$('.appwrap > .subtitle01 ').css({top:'',opacity:''})
	};

	if (winT > appwrapT-100) {
		$('.appwrap > .subtitle02').css({top:'750px',opacity:'1'})
	} else {
		$('.appwrap > .subtitle02').css({top:'',opacity:''})
	};

	
})

//app 제이쿼리 클릭이벤트
$(document).ready(function() {
    $(".appwrap > .arowright,.app-view").click(function(){
		$(".appwrap > .arowright,.mobile02").hide();
		$(".appwrap > .arowright-after").show();
		$(".appwrap > .subtitle03").show();
		$(".appwrap > .subtitle04").show();
		$(".c-move,.mobile01,.app-slide").show();
	})

})

$(document).ready(function() {
    $(".appwrap > .arowleft").click(function(){
		$(".appwrap > .arowright,.mobile02").show();
		$(".appwrap > .arowright-after").hide();
		$(".appwrap > .subtitle03").hide();
		$(".appwrap > .subtitle04").hide();
		$(".c-move,.mobile01,.app-slide").hide();
	})

})


$(document).ready(function() {
    $(".c-move li a").click(function(){
		$(".app-slide img").attr("src",$(this).attr("href")).attr("title",$(this).text()); return false;

	})
})


//app 슬라이드

$(function(){
	$('#slides').slides({
		preload: true,
		preloadImage: 'images/loading.gif',
		play: 5000,
		pause: 2500,
		hoverPause: true
	});

	$(".prev").mouseover(function(){
		$(".prev img").attr("src","images/button_01_o.png");
	});
	$(".prev").mouseout(function(){	
		$(".prev img").attr("src","images/button_01.png");
	});
	$(".next").mouseover(function(){
		$(".next img").attr("src","images/button_02_o.png");
	});
	$(".next").mouseout(function(){	
		$(".next img").attr("src","images/button_02.png");
	});

});

//app 슬라이드 이벤트













//design 제이쿼리

$(window).scroll(function(){
	var winT = $(window).scrollTop();
	var designwrapT = $('.designwrap').offset().top;

	if (winT > designwrapT-800) {
		$('.designwrap > h6 ').css({top:'80px',opacity:'1'})
	} else {
		$('.designwrap > h6 ').css({top:'',opacity:''})
	};

	if (winT > designwrapT-800) {
		$('.designwrap > .and').css({top:'150px',opacity:'1'})
	} else {
		$('.designwrap > .and').css({top:'',opacity:''})
	};

	if (winT > designwrapT-700) {
		$('.designwrap > .orange').css({top:'330px',opacity:'1'})
	} else {
		$('.designwrap > .orange').css({top:'',opacity:''})
	};

	if (winT > designwrapT) {
		$('.designwrap > .boook').css({top:'950px',opacity:'1'})
	} else {
		$('.designwrap > .boook').css({top:'',opacity:''})
	};
	if (winT > designwrapT) {
		$('.designwrap > .bug').css({top:'947px',marginLeft:'-490px',opacity:'1'})
	} else {
		$('.designwrap > .bug').css({top:'',marginLeft:'',opacity:''})
	};

	if (winT > designwrapT+200) {
		$('.designwrap > .double').css({top:'1220px',opacity:'1'})
	} else {
		$('.designwrap > .double').css({top:'',opacity:''})
	};

	if (winT > designwrapT+400) {
		$('.designwrap > .bnb').css({top:'1050px',opacity:'1'})
	} else {
		$('.designwrap > .bnb').css({top:'',opacity:''})
	};


	if (winT > designwrapT-500) {
		$('.designwrap > .subtitle05').css({top:'400px',opacity:'1'})
	} else {
		$('.designwrap > .subtitle05').css({top:'',opacity:''})
	};
	if (winT > designwrapT-600) {
		$('.designwrap > .subtitle05s').css({top:'450px',opacity:'1'})
	} else {
		$('.designwrap > .subtitle05s').css({top:'',opacity:''})
	};
	if (winT > designwrapT) {
		$('.designwrap > .subtitle06').css({top:'680px',opacity:'1'})
	} else {
		$('.designwrap > .subtitle06').css({top:'',opacity:''})
	};
	if (winT > designwrapT) {
		$('.designwrap > .subtitle06s').css({top:'730px',opacity:'1'})
	} else {
		$('.designwrap > .subtitle06s').css({top:'',opacity:''})
	};
	if (winT > designwrapT+100) {
		$('.designwrap > .subtitle07').css({top:'960px',opacity:'1'})
	} else {
		$('.designwrap > .subtitle07').css({top:'',opacity:''})
	};
	if (winT > designwrapT+100) {
		$('.designwrap > .subtitle07s').css({top:'1010px',opacity:'1'})
	} else {
		$('.designwrap > .subtitle07s').css({top:'',opacity:''})
	};
	if (winT > designwrapT+300) {
		$('.designwrap > .subtitle08').css({top:'1170px',opacity:'1'})
	} else {
		$('.designwrap > .subtitle08').css({top:'',opacity:''})
	};
	if (winT > designwrapT+300) {
		$('.designwrap > .subtitle08s').css({top:'1250px',opacity:'1'})
	} else {
		$('.designwrap > .subtitle08s').css({top:'',opacity:''})
	};	
	if (winT > designwrapT+500) {
		$('.designwrap > .subtitle09').css({top:'1350px',opacity:'1'})
	} else {
		$('.designwrap > .subtitle09').css({top:'',opacity:''})
	};
	if (winT > designwrapT+500) {
		$('.designwrap > .subtitle09s').css({top:'1420px',opacity:'1'})
	} else {
		$('.designwrap > .subtitle09s').css({top:'',opacity:''})
	};





})





$(window).scroll(function(){
	var winT = $(window).scrollTop();
	var worldT = $('#world').offset().top;

	if (winT > worldT-300) {
		$('.code01 li').css({marginTop:'0px',opacity:'1'})
	} else {
		$('.code01 li').css({marginTop:'',opacity:''})
	};
	if (winT > worldT-400) {
		$('.code02').css({opacity:'1',top:'450px' })
	} else {
		$('.code02').css({opacity:'',top:''})
	};
	if (winT > worldT) {
		$('.worldwrap02 > h6 ').css({opacity:'1',top:'0px' })
	} else {
		$('.worldwrap02 > h6 ').css({opacity:'',top:''})
	};
	
	if (winT > worldT+400) {
		$('.subtitle10').css({opacity:'1',top:'350px' })
	} else {
		$('.subtitle10').css({opacity:'',top:''})
	};

	if (winT > worldT+500) {
		$('.subtitle10s').css({opacity:'1',top:'460px' })
	} else {
		$('.subtitle10s').css({opacity:'',top:''})
	};

	if (winT > worldT+800) {
		$('.subtitle11').css({opacity:'1',top:'1150px' })
	} else {
		$('.subtitle11').css({opacity:'',top:''})
	};

	if (winT > worldT+900) {
		$('.subtitle11s').css({opacity:'1',top:'1200px' })
	} else {
		$('.subtitle11s').css({opacity:'',top:''})
	};
	
	if (winT > worldT+1700) {
		$('.subtitle12').css({opacity:'1',top:'1500px' })
	} else {
		$('.subtitle12').css({opacity:'',top:''})
	};

	if (winT > worldT+1720) {
		$('.subtitle12s').css({opacity:'1',top:'1550px' })
	} else {
		$('.subtitle12s').css({opacity:'',top:''})
	};
})


$(window).scroll(function(){
	var winT = $(window).scrollTop();
	var contactT = $('#contactwrap').offset().top;

	if (winT > contactT-800) {
		$('#contactwrap > h6 ').css({opacity:'1',top:'250px' })
	} else {
		$('#contactwrap > h6 ').css({opacity:'',top:''})
	};
	
})




$(window).scroll(function(){
	// $('.circle2').text($('.circle2').offset().top); 위치확인
	
	var scrT = $(window).scrollTop();
	var htmlT = $('html,body').offset().top;
	var circle2P = $('.circle2').offset().top;



	if (scrT > circle2P-500)	{
		$('.circle2').addClass('action') 
	} else {$('.circle2').removeClass('action')}




	//<script src="script/jquery-animate-css-rotate-scale.js">위에있는 요거로 rotate 가능
	// if (scrT > circle2P-1000)
	// {
	// 	$('.circle2').rotate(-scrT+"deg") 
	// 	//1) 그냥 scrT 이면 0도부터 시계방향으로 회전/
	// 	//2) scrT*-1.1 이면 180도부터 반시계방향으로 회전/
	// 	//3) scrT*1.1 이면 180도부터 시계방향으로 회전/
	// 	//4) -scrT 이면 0도부터 반시계방향으로 회전/
	// 	//5) -scrT 이면 -0도부터 시작/
	// } else {$('.circle2').rotate('0deg')}


})

//현재위치 표시 사이드네비
$(window).scroll(function(){


	if($(".mainwrap").offset().top <= $(window).scrollTop()+200) {
		$("#dot li").eq(0).addClass("on");
		$("#dot li:not(:eq(0))").removeClass("on");
	} else {
		$("#dot li").eq(0).removeClass("on");
	}



	if($("#about").offset().top <= $(window).scrollTop()+200) {
		$("#dot li").eq(1).addClass("on");
		$("#dot li:not(:eq(1))").removeClass("on");
	} else {
		$("#dot li").eq(1).removeClass("on");
	}



	if($("#webwrap").offset().top <= $(window).scrollTop()+200) {
		$("#dot li").eq(2).addClass("on");
		$("#dot li:not(:eq(2))").removeClass("on");
	} else {
		$("#dot li").eq(2).removeClass("on");
	}



	if($("#design01").offset().top <= $(window).scrollTop()+200) {
		$("#dot li").eq(3).addClass("on");
		$("#dot li:not(:eq(3))").removeClass("on");
	} else {
		$("#dot li").eq(3).removeClass("on");
	}


	if($("#world").offset().top <= $(window).scrollTop()+200) {
		$("#dot li").eq(4).addClass("on");
		$("#dot li:not(:eq(4))").removeClass("on");
	} else {
		$("#dot li").eq(4).removeClass("on");
	}

	if($("#contact").offset().top <= $(window).scrollTop()+200) {
		$("#dot li").eq(5).addClass("on");
		$("#dot li:not(:eq(5))").removeClass("on");
	} else {
		$("#dot li").eq(5).removeClass("on");
	}
})

				$(document).ready(function(){
					$('.subtitle10s > ul> li').mouseleave(function(){
						$('.number,.family,.ribbon,.reflet,.child,.teacher,.truth,.dontbe').hide()	
					})
			
					$('.subtitle10s > ul > li:nth-child(1)').mouseenter(function(){
						$('.family').show()	
					})
					$('.subtitle10s > ul > li:nth-child(3)').mouseenter(function(){
						$('.number').show()	
					})
					$('.subtitle10s > ul > li:nth-child(5)').mouseenter(function(){
						$('.ribbon').show()	
					})
					$('.subtitle10s > ul > li:nth-child(7)').mouseenter(function(){
						$('.reflet').show()	
					})
					$('.subtitle10s > ul > li:nth-child(9)').mouseenter(function(){
						$('.child').show()	
					})
					$('.subtitle10s > ul > li:nth-child(11)').mouseenter(function(){
						$('.truth').show()	
					})
					$('.subtitle10s > ul > li:nth-child(13)').mouseenter(function(){
						$('.teacher').show()	
					})
					$('.subtitle10s > ul > li:nth-child(15)').mouseenter(function(){
						$('.dontbe').show()	
					})
				})
				$(document).ready(function(){
					$('.subtitle11s > ul> li').mouseleave(function(){
						$('.mother,.s304,.star-child').hide()	
					})
					$('.subtitle11s > ul > li:nth-child(1)').mouseenter(function(){
						$('.mother').show()	
					})
					$('.subtitle11s > ul > li:nth-child(3)').mouseenter(function(){
						$('.s304').show()	
					})
					$('.subtitle11s > ul > li:nth-child(5)').mouseenter(function(){
						$('.star-child').show()	
					})
				})
				$(document).ready(function(){
					$('.subtitle12s > ul> li').mouseleave(function(){
						$('.writing').hide()	
					})
					$('.subtitle12s > ul > li:nth-child(1)').mouseenter(function(){
						$('.writing').show()	
					})
				})
			