//fixHeader
var scrollPos = 0;
scrollPos = $(document).scrollTop();
fixHeader();

$(window).on('scroll resize', function () {
    scrollPos = $(document).scrollTop();
    fixHeader();
});

/*fixHeader함수만들기*/
function fixHeader(){
    if(scrollPos >150)
        $('header').addClass('on');
    else {
        $('header').removeClass('on');
    }
}

//.top-visual 이미지슬라이드
    $(function() {
        $(".visual .slide").slick({
            arrows: true, //화살표
            dots: false, //인디케이터 해제
            fade: true, //페이드인 효과
            autoplay: true, //자동재생
            autoplaySpeed: 4000, //재생시간
            pauseOnHover:false, //마우스 오버, 포커스시 멈추는것 해제
          pauseOnFocus:false
        });
    }); 
