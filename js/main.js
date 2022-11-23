//스크립트 위로 튕기는것
$(document).on('click', 'a[href="#"]', function(e){
    e.preventDefault();
});

//fixHeader
var scrollFix = 0;
scrollFix = $(document).scrollTop();
fixHeader();

$(window).on('scroll resize', function(){
    scrollFix = $(document).scrollTop();
    fixHeader();
});


//fixHeader();
function fixHeader(){
    if(scrollFix > 150){
        $('header').addClass("on");
    }else{
        $('header').removeClass();
    }
}//fixHeader
var scrollFix = 0;
scrollFix = $(document).scrollTop();
fixHeader();

$(window).on('scroll resize', function(){
    scrollFix = $(document).scrollTop();
    fixHeader();
});

//fixHeader();
function fixHeader(){
    if(scrollFix > 150){
        $('header').addClass("on");
    }else{
        $('header').removeClass();
    }
}


//slide
$(function(){
    $('.Gallery .inner .slide').slick({
        arrows: false, //화살표
        dots: false, //인디케이터 해제
        autoplay: true,
        fade: false, //페이드인 효과
        pauseOnHover: true, //마우스 오버, 포커스시 멈추는것 해제
        pauseOnFocus: false,
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        scroll: true,
        draggable:true
    });
});


//visual.slide
//2.슬라이드
$(function() {
    $(".visual .slide").slick({ 
        arrows: false, //화살표 사용안함
        dots: false, //닷츠
        autoplay:true, //자동재생
        fade: true, //페이드인 효과        
        autoplaySpeed: 5000, //재생시간
        pauseOnHover:false, //마우스 오버시 슬라이드 멈춤 해제
       pauseOnFocus:false //포커스시 슬라이드 멈춤 해제
    });
}); 
//menuOpen
$(function(){
    $('.menuOpen button.open').on('click', function(){
        $('.menuOpen .menuWrap').addClass('on');
    });
        $('.menuOpen .menuWrap .close').on('click', function(){
            $('.menuOpen .menuWrap').removeClass('on');
        });
});

//풀페이지 스크롤
$(function(){
    $('#fullpage').fullpage({
           fingersonly: true,
			anchors:['firstPage', 'secondPage', 'thirdPage', 'fourthPage', 'fifthPage', 'sixthPage','seventhPage','eightPage'],
			menu: '.rightNav',
           afterLoad: function(anchorLink, index){
           }
    });
});
// 상단이동 부드럽게
$(function () {
    $(".goTop").on("click", function () {
        let top = $("body").offset().top;
        $("html, body").animate({ scrollTop: top }, 800);
    });
});


   


//.3.scroll 애니메이션
$(function() {
	$('.animate').scrolla({
		mobile: true, //모바일버전시 활성화
		once: false //스크롤시 딱 한번만 하고싶을땐 true
	});    
      }); 


//count
jQuery(document).ready(function($){
    $('.count').counterUp({
        delay:20,
        time:2000,
    });
});


jQuery(document).ready(function($){
    $('.count2').counterUp({
        delay:20,
        time:1000
    });
});



//2.circlBox SVGAni애니메이션
$(function(){
    $('.svgAni').find('path').each(function(i, path){
        var length =  path.getTotalLength();
        //alert(length);
    });
});

//2.bar SVGAni애니메이션
$(function(){
    $('.svgAni').find('line').each(function(i, path){
        var length =  line.getTotalLength();
        //alert(length);
    });
});

//반응형 웹 연결
function myFunction() {
    window.open("dopda/index.html", "_blank", "toolbar=yes,scrollbars=yes,resizable=yes,top=500,left=500,width=320,height=800");
}
function anyFunction() {
    window.open("crew/index.html", "_blank", "toolbar=yes,scrollbars=yes,resizable=yes,top=500,left=500,width=320,height=800");
}
function forFunction() {
    window.open("musign/index.html", "_blank", "toolbar=yes,scrollbars=yes,resizable=yes,top=500,left=500,width=320,height=800");
}
//details.dopda 반응형
function laptopFunction() {
    window.open("dopda/index.html", "_blank", "toolbar=yes,scrollbars=yes,resizable=yes,top=500,left=500,width=1100,height=1000");
}
function talbetFunction() {
    window.open("dopda/index.html", "_blank", "toolbar=yes,scrollbars=yes,resizable=yes,top=500,left=500,width=900,height=1000");
}
function mobileFunction() {
    window.open("dopda/index.html", "_blank", "toolbar=yes,scrollbars=yes,resizable=yes,top=500,left=500,width=320,height=1000");
}
//detils.crew 반응형
function laptopFunction1() {
    window.open("crew/index.html", "_blank", "toolbar=yes,scrollbars=yes,resizable=yes,top=500,left=500,width=1100,height=1000");
}
function talbetFunction2() {
    window.open("crew/index.html", "_blank", "toolbar=yes,scrollbars=yes,resizable=yes,top=500,left=500,width=900,height=1000");
}
function mobileFunction3() {
    window.open("crew/index.html", "_blank", "toolbar=yes,scrollbars=yes,resizable=yes,top=500,left=500,width=320,height=1000");
}
//detils.musign 반응형
function laptopFunction4() {
    window.open("musign/index.html", "_blank", "toolbar=yes,scrollbars=yes,resizable=yes,top=500,left=500,width=1100,height=1000");
}
function talbetFunction5() {
    window.open("musign/index.html", "_blank", "toolbar=yes,scrollbars=yes,resizable=yes,top=500,left=500,width=900,height=1000");
}
function mobileFunction6() {
    window.open("musign/index.html", "_blank", "toolbar=yes,scrollbars=yes,resizable=yes,top=500,left=500,width=320,height=1000");
}

//패럴렉스 Y축 세로방향

function castParallax() {

	window.addEventListener("scroll", function(event){

		var top = this.pageYOffset;

		var layers = document.getElementsByClassName("parallax");
		var layer, speed, yPos;
		for (var i = 0; i < layers.length; i++) {
			layer = layers[i];
			speed = layer.getAttribute('data-speed');
			var yPos = -(top * speed / 100);
			layer.setAttribute('style', 'transform: translate3d(0px, ' + yPos + 'px, 0px)');

		}
	});
}

castParallax();

//패럴렉스 X축 가로방향
function castParallax2() {

	window.addEventListener("scroll", function(event){

		var top = this.pageYOffset;

		var layers = document.getElementsByClassName("parallax2");
		var layer, speed, yPos;
		for (var i = 0; i < layers.length; i++) {
			layer = layers[i];
			speed = layer.getAttribute('data-speed');
			var yPos = -(top * speed / 100);
			layer.setAttribute('style', 'transform: translate3d( ' + yPos + 'px,0px, 0px)');

		}
	});
}

castParallax2();


//글자애니메이션  Splitting 데모사이트 그대로 작성 따라하기
$(function(){
    Splitting();
});

  