

// <!-- Initialize Swiper -->

// var swiper = new Swiper(".mySwiper", {
//     slidesPerView: 2.17,
//     spaceBetween: 20,

// });




var swiper = new Swiper(".mySwiper", {
    // 기본 옵션
    slidesPerView: 1,
    spaceBetween: 10,
    // 반응형 옵션
    breakpoints: {
        // 768px 이상에서는 2개의 슬라이드를 보여줌
        768: {
            slidesPerView: 2,
            spaceBetween: 20
        },
        // 1024px 이상에서는 2.17개의 슬라이드를 보여줌
        1024: {
            slidesPerView: 2.17,
            spaceBetween: 10
        }
    }
});








//탑 버튼
$(document).ready(function () {

    // Top 버튼 특정 스크롤높이에서만 보이기 / 숨기기
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('#top-btn').fadeIn();
        } else {
            $('#top-btn').fadeOut();
        }
    });

    // Top 버튼 클릭시 페이지 상단으로 이동
    $('#top-btn').click(function () {
        $('html, body').animate({ scrollTop: 0 }, 800);
        return false;
    });

});


//  햄버거 버튼