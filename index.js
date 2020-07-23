//ease 효과 jQuery
jQuery.extend( jQuery.easing,
    {
        def: 'easeOutQuad',
        swing: function (x, t, b, c, d) {
            //alert(jQuery.easing.default);
            return jQuery.easing[jQuery.easing.def](x, t, b, c, d);
        },
        easeInQuad: function (x, t, b, c, d) {
            return c*(t/=d)*t + b;
        },
        easeOutQuad: function (x, t, b, c, d) {
            return -c *(t/=d)*(t-2) + b;
        },
        easeInOutQuad: function (x, t, b, c, d) {
            if ((t/=d/2) < 1) return c/2*t*t + b;
            return -c/2 * ((--t)*(t-2) - 1) + b;
        },
        easeInCubic: function (x, t, b, c, d) {
            return c*(t/=d)*t*t + b;
        },
        easeOutCubic: function (x, t, b, c, d) {
            return c*((t=t/d-1)*t*t + 1) + b;
        },
        easeInOutCubic: function (x, t, b, c, d) {
            if ((t/=d/2) < 1) return c/2*t*t*t + b;
            return c/2*((t-=2)*t*t + 2) + b;
        },
        easeInQuart: function (x, t, b, c, d) {
            return c*(t/=d)*t*t*t + b;
        },
        easeOutQuart: function (x, t, b, c, d) {
            return -c * ((t=t/d-1)*t*t*t - 1) + b;
        },
        easeInOutQuart: function (x, t, b, c, d) {
            if ((t/=d/2) < 1) return c/2*t*t*t*t + b;
            return -c/2 * ((t-=2)*t*t*t - 2) + b;
        },
        easeInQuint: function (x, t, b, c, d) {
            return c*(t/=d)*t*t*t*t + b;
        },
        easeOutQuint: function (x, t, b, c, d) {
            return c*((t=t/d-1)*t*t*t*t + 1) + b;
        },
        easeInOutQuint: function (x, t, b, c, d) {
            if ((t/=d/2) < 1) return c/2*t*t*t*t*t + b;
            return c/2*((t-=2)*t*t*t*t + 2) + b;
        },
        easeInSine: function (x, t, b, c, d) {
            return -c * Math.cos(t/d * (Math.PI/2)) + c + b;
        },
        easeOutSine: function (x, t, b, c, d) {
            return c * Math.sin(t/d * (Math.PI/2)) + b;
        },
        easeInOutSine: function (x, t, b, c, d) {
            return -c/2 * (Math.cos(Math.PI*t/d) - 1) + b;
        },
        easeInExpo: function (x, t, b, c, d) {
            return (t==0) ? b : c * Math.pow(2, 10 * (t/d - 1)) + b;
        },
        easeOutExpo: function (x, t, b, c, d) {
            return (t==d) ? b+c : c * (-Math.pow(2, -10 * t/d) + 1) + b;
        },
        easeInOutExpo: function (x, t, b, c, d) {
            if (t==0) return b;
            if (t==d) return b+c;
            if ((t/=d/2) < 1) return c/2 * Math.pow(2, 10 * (t - 1)) + b;
            return c/2 * (-Math.pow(2, -10 * --t) + 2) + b;
        },
        easeInCirc: function (x, t, b, c, d) {
            return -c * (Math.sqrt(1 - (t/=d)*t) - 1) + b;
        },
        easeOutCirc: function (x, t, b, c, d) {
            return c * Math.sqrt(1 - (t=t/d-1)*t) + b;
        },
        easeInOutCirc: function (x, t, b, c, d) {
            if ((t/=d/2) < 1) return -c/2 * (Math.sqrt(1 - t*t) - 1) + b;
            return c/2 * (Math.sqrt(1 - (t-=2)*t) + 1) + b;
        },
        easeInElastic: function (x, t, b, c, d) {
            var s=1.70158;var p=0;var a=c;
            if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
            if (a < Math.abs(c)) { a=c; var s=p/4; }
            else var s = p/(2*Math.PI) * Math.asin (c/a);
            return -(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
        },
        easeOutElastic: function (x, t, b, c, d) {
            var s=1.70158;var p=0;var a=c;
            if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
            if (a < Math.abs(c)) { a=c; var s=p/4; }
            else var s = p/(2*Math.PI) * Math.asin (c/a);
            return a*Math.pow(2,-10*t) * Math.sin( (t*d-s)*(2*Math.PI)/p ) + c + b;
        },
        easeInOutElastic: function (x, t, b, c, d) {
            var s=1.70158;var p=0;var a=c;
            if (t==0) return b;  if ((t/=d/2)==2) return b+c;  if (!p) p=d*(.3*1.5);
            if (a < Math.abs(c)) { a=c; var s=p/4; }
            else var s = p/(2*Math.PI) * Math.asin (c/a);
            if (t < 1) return -.5*(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
            return a*Math.pow(2,-10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )*.5 + c + b;
        },
        easeInBack: function (x, t, b, c, d, s) {
            if (s == undefined) s = 1.70158;
            return c*(t/=d)*t*((s+1)*t - s) + b;
        },
        easeOutBack: function (x, t, b, c, d, s) {
            if (s == undefined) s = 1.70158;
            return c*((t=t/d-1)*t*((s+1)*t + s) + 1) + b;
        },
        easeInOutBack: function (x, t, b, c, d, s) {
            if (s == undefined) s = 1.70158; 
            if ((t/=d/2) < 1) return c/2*(t*t*(((s*=(1.525))+1)*t - s)) + b;
            return c/2*((t-=2)*t*(((s*=(1.525))+1)*t + s) + 2) + b;
        },
        easeInBounce: function (x, t, b, c, d) {
            return c - jQuery.easing.easeOutBounce (x, d-t, 0, c, d) + b;
        },
        easeOutBounce: function (x, t, b, c, d) {
            if ((t/=d) < (1/2.75)) {
                return c*(7.5625*t*t) + b;
            } else if (t < (2/2.75)) {
                return c*(7.5625*(t-=(1.5/2.75))*t + .75) + b;
            } else if (t < (2.5/2.75)) {
                return c*(7.5625*(t-=(2.25/2.75))*t + .9375) + b;
            } else {
                return c*(7.5625*(t-=(2.625/2.75))*t + .984375) + b;
            }
        },
        easeInOutBounce: function (x, t, b, c, d) {
            if (t < d/2) return jQuery.easing.easeInBounce (x, t*2, 0, c, d) * .5 + b;
            return jQuery.easing.easeOutBounce (x, t*2-d, 0, c, d) * .5 + c*.5 + b;
        }
    });


//스크롤 시 화면 단위 이동

window.onload = function () {
    var elm = "section";
    $(elm).each(function (index) {
        // 개별적으로 Wheel 이벤트 적용
        $(this).on("mousewheel DOMMouseScroll", function (e) {
            e.preventDefault();
            var delta = 0;
            if (!event) event = window.event;
            if (event.wheelDelta) {
                delta = event.wheelDelta / 120;
                if (window.opera) delta = -delta;
            } 
            else if (event.detail)
                delta = -event.detail / 3;
            var moveTop = $(window).scrollTop();
            var elmSelecter = $(elm).eq(index);
            // 마우스휠을 위에서 아래로
            if (delta < 0) {
                if ($(elmSelecter).next() != undefined) {
                    try{
                        moveTop = $(elmSelecter).next().offset().top;
                    }catch(e){}
                }
            // 마우스휠을 아래에서 위로
            } else {
                if ($(elmSelecter).prev() != undefined) {
                    try{
                        moveTop = $(elmSelecter).prev().offset().top;
                    }catch(e){}
                }
            }
            // 화면 이동 0.5초(500)
            $("html,body").stop().animate({
                scrollTop: moveTop + 'px'
            }, {
                duration: 800, complete: function () {
                    jQuery.easing.def = "easeInOutQuart";
                }
            });
        });
    });
}

/* skip */
$('.skip a').on('focus', function(){
    $(this).stop().animate({"top":0, "opacity":1});
});
$('.skip a').on('click', function(){
    $(this).stop().animate({"top":"-40px", "opacity":0});
});
$('.skip a').on('focusout', function(){
    $(this).stop().animate({"top":"-40px", "opacity":0});
});

/* 메인 메뉴 마우스 오버 시 효과 */
$(".main-menu-list li a").hover(
    function(){
        var navMenu= $(this)
        var navWidth= $(this).width();
        var navUnderBar = $(this).parents().position().left + 15;
        
        hoveracticon()
        function hoveracticon(){
            $(navMenu).css({"color":"#0063cc", "transition":"all 0.2s ease-in-out"});
            $(".blue-bar").css({"position":"absolute", "left": navUnderBar, "bottom": "0", "width": navWidth , "border":"1px solid #0063cc", "transition":"all 0.3s ease-in-out"});            
        }
    },
    function(){
        $(this).css({"color":"#000", "transition":"all 0.2s ease-in-out"});
        $(".blue-bar").css({"width":"0px", "border":"0", "transition":"all 0.3s ease-in-out"});
    }
);

/* 배너 번호 마우스 오버 시 */
$(".banner-indicator li").hover(function(){
    $(this).children().children().css({"border-bottom": "1px solid #fff"});
}, function(){
    $(this).children().children().css({"border-bottom": "1px solid rgba(255, 255, 255, 0.0)"});
}
)

/*direct menu*/
$(".bot-btn li").hover(function(){
    $(this).children().children().css({"border-bottom": "1px solid rgba(255, 255, 255, 1)"});
},function(){
    $(this).children().children().css({"border-bottom": "1px solid rgba(255, 255, 255, 0.0)"});
}
)

/* 메인 배너 롤링 */
/* 배너 넘버 클릭 시 해당 번호의 배너 이미지 노출*/
// $('.banner-indicator li').click(function(){
//     var bannerIndex = $(this).index();
//     $(".banner-content-list li").css({"display" : "none"});
//     $(".banner-content-list li:eq(" + bannerIndex + ")").css({"display" : "block"});
// });


// var $imgList = $('.banner-content-list > li');
// var nImgCount = $imgList.length;	// 위에서 가져온 li의 개수
// var nDuration = 3000;					// 이미지를 변경할 시간
// var bAuto = true;						// 자동으로 변경할 지 여부
// var nIndex = 0;						// 변경할 이미지의 Index

// if(bAuto == true) {
// 	setInterval(autoSlide, nDuration);		// Javascript setInterval 함수 호출
// }

// function autoSlide() {
//     var bannerSum = $("banner-content-list .banner-content-item").each();
//     console.log(bannerSum);

// 	var next = (++nIndex % nImgCount);
// 	$($imgList.get(next - 1)).fadeOut(1000);
//     $($imgList.get(next)).fadeIn(1000);
// }


/* 정보공개 버튼 클릭 시 노출 메뉴 */
// $(".news-menu-list .popup-open").click(function(event){
//     event.preventDefault();
//     $(".disclosure-popup-wrap").css({"display":"block"});
//     $(".drop-menu:before").css({"border-top": "5px solid rgba(0,0,0,0)", "border-bottom": "5px solid rgba(102,102,102,1)"});
// })
// $(".close-btn a").click(function(){
//     event.preventDefault();
//     $(".disclosure-popup-wrap").css({"display":"none"});
// })


// 정보공개 메뉴 클릭 시 노출되는 툽팁팝업
$(".tooltip-btn").on("click", function(e){
    e.preventDefault();
    var $this = $(this);
    var target = $this.attr("href");
    
    if(!$this.hasClass("open")){
        tooltipControl("open", $this, $(target));
    }else{
        tooltipControl("close", $this, $(target));
    }
 // (!$this.hasClass("open")) ? tooltipControl("open") : tooltipControl("close");
})
function tooltipControl(status, $el, $target){
    if( status == "open"){
        $el.addClass("open");
        $target.css({"display":"block"});
    }else if(status == "close"){
        $el.removeClass("open");
        $target.css({"display":"none"});
    }
}
$(".tooltip-wrap .close-btn").on("click", function(e){
    e.preventDefault();
    var tooltipWrap = $(this).parent(".tooltip-wrap")
    var tooltipId = "#" + tooltipWrap.attr("id");
    tooltipWrap.css({"display":"none"});
    $(".tooltip-btn[href='"+ tooltipId +"']").removeClass("open");
})

// 배너 이동 버튼 연속 클릭 시 오류 방지
var clickFlag = true;
function doubleClickPrevent(){
    clickFlag = false;
    setTimeout(function(){
        clickFlag = true;
    }, 300)
}

// Special KDB의 카드배너 좌우 이동 버튼
$(".spcial-banner-wrap .right-btn").on("click", function(){
    if(clickFlag){
        var cardLength = $(".rolling-banner li").length;
        var cardWidth = $(".rolling-banner li").outerWidth();
        var bannerPosi = $(".rolling-banner").position().left;
        if( - (bannerPosi - cardWidth * 4) <= (cardWidth * cardLength)){
            $(".rolling-banner").animate({"left": bannerPosi - cardWidth}, 300);
            $(".right-btn button").css({"cursor":"pointer"});
            doubleClickPrevent();
        }else{
            $(".right-btn button").css({"cursor":"default"});
        }
    }
    
    
})

$(".spcial-banner-wrap .left-btn").on("click", function(){
    if(clickFlag){
        var cardLength = $(".rolling-banner li").length;
        var cardWidth = $(".rolling-banner li").outerWidth();
        var bannerPosi = $(".rolling-banner").position().left;
        if( - (bannerPosi - cardWidth * 5) >= (cardWidth * cardLength)){
            $(".rolling-banner").stop().animate({"left": bannerPosi + cardWidth}, 300);
            $(".left-btn button").css({"cursor":"pointer"});
            doubleClickPrevent();
            }
        else{
            $(".left-btn button").css({"cursor":"default"});
        }
    }
    
    
    
})

// Special KDB의 메뉴배너의 좌우 이동 버튼
$(".rolling-menu-wrap .right-btn").on("click", function(){
    if(clickFlag){
        var cardLength = $(".rolling-menu li").length;
        var cardWidth = $(".rolling-menu li").outerWidth();
        var bannerPosi = $(".rolling-menu").position().left;
        if( - (bannerPosi - cardWidth * 5) <= (cardWidth * cardLength)){
            $(".rolling-menu").stop().animate({"left": bannerPosi - cardWidth}, 300);
            $(".right-btn button").css({"cursor":"pointer"});
            doubleClickPrevent();
        }
        else{
            $(".right-btn button").css({"cursor":"default"});
        }
    }
})

$(".rolling-menu-wrap .left-btn").on("click", function(){
    if(clickFlag){
        var cardLength = $(".rolling-menu li").length;
        var cardWidth = $(".rolling-menu li").outerWidth();
        var bannerPosi = $(".rolling-menu").position().left;
        if( - (bannerPosi - cardWidth * 7) >= (cardWidth * cardLength)){
            $(".rolling-menu").stop().animate({"left": bannerPosi + cardWidth}, 300);
            $(".left-btn button").css({"cursor":"pointer"});
            doubleClickPrevent();
        }
        else{
            $(".left-btn button").css({"cursor":"default"});
        }
    }
})

// 메뉴 클릭 시 화면 이동
function scrolling(pos){
    jQuery.easing.def = "easeInOutQuart";
    $('html, body').stop().animate({scrollTop : $(pos).offset().top},1000);
}
scrolling();

//사이드 메뉴 스크롤시 효과
$(window).scroll(function(){ 
    var scrollValue = $(document).scrollTop(); 
    console.log(scrollValue);

    /*
    if($("html").scrollTop() >= $("#section0").offset().top){ 
        $(".scroll-menu-list li a span").css({"color" : "rgba(51,51,51,0.4)", "transition" : "all 0.2s ease-in-out"})
    } */
 });

// 기업금융정보 페이지
