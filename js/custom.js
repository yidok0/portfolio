$(function(){
    //로딩화면
    setTimeout(function() {
        $(".loading").fadeOut();
    }, 4000);


    // isotope 플러그인 시작 세팅
    $('.tabList').isotope({
        // options
        itemSelector: '.all',
        layoutMode: 'masonry',

    });
    // 버튼 클릭시 정렬기능 수행
    $(".tabBtn li").click(function(e){
        e.preventDefault(); //a태그 기본기능 중지

        let sorting = $(this).attr("data-filter");

        $(".tabList").isotope({ filter: sorting});

        $(".tabBtn li").removeClass("on");
        $(this).addClass("on");
    });

    //헤더 클릭시 해당 페이지로 이동
    $(".home").click(function(e){
        e.preventDefault(); //a태그 기본기능 중지

        let movePoint = $("#home").offset().top;
        
        $("html, body").stop().animate({"scrollTop":movePoint},1000);
    });
    $(".profile").click(function(e){
        e.preventDefault(); //a태그 기본기능 중지

        let movePoint = $("#profile").offset().top-30;
        
        $("html, body").stop().animate({"scrollTop":movePoint},1000);
    });
    $(".portfolio").click(function(e){
        e.preventDefault(); //a태그 기본기능 중지

        let movePoint = $("#portfolio").offset().top-30;
        
        $("html, body").stop().animate({"scrollTop":movePoint},1000);
    });

    //풀페이지
    $('#fullpage').fullpage({
        //options here
        menu: '#gnb',
        scrollBar: true,
        autoScrolling:true,
        scrollHorizontally: true,
        navigation: true,
	    navigationPosition: 'right',
    });

});
// AOS 추가
AOS.init();

// SWIPER 스와이퍼
const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    speed:1000,
    autoplay: {
        delay: 4000,
    },    
    // If we need pagination
    pagination: {
    el: '.swiper-pagination',
    },        
    // Navigation arrows
    navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
    },
});

// 스크롤하면 헤더 디자인 변경
const header = document.querySelector("#header"); //헤더 선택
const headerHeight = document.querySelector("#header").offsetHeight;
const topBtn = document.querySelector("#top_btn");

window.addEventListener("scroll",()=>{
    let scTop = window.scrollY; //스크롤 할때마다 스롤바의 위치값을 sctop 변수에 갱신해서 담아줌

    // 스크롤바의 위치값이 0보다 크면 헤더디자인 변경
    if(scTop>headerHeight) {
        //스크롤바의 위치가 두번째 구역 시작하는 위치쯤 왔을 때 헤더 디자인이 변경됬으면 좋겠음
        header.classList.add("on");
    }
    else { //그게 아니면 헤더 디자인은 원래대로 변경
        header.classList.remove("on");
    }
});

//top버튼 누르면 상단으로 이동
topBtn.addEventListener("click",(e)=>{
    e.preventDefault();
    var body = document.getElementsByTagName("body")[0];
    window.scroll({
        behavior:"smooth",
        left:0,
        top:body.offsetTop
    });
});
