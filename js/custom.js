$(function(){
    //로딩화면
    setTimeout(function() {
        $(".loading").fadeOut();
    }, 2500);

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
});

// AOS 추가
AOS.init();
   
//포트폴리오 슬라이드
const swiper = new Swiper('.swiper', {
    effect: 'cube',
    loop:true,
    autoplay: {
      delay: 5000,
    },
    speed : 1000,
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
