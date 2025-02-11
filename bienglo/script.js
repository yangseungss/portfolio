
// 헤더 메뉴들


window.onload = function () {
    let navList = document.querySelector(".nav>ul");

    navList.addEventListener("mouseover", () => {
        navList.querySelectorAll(".submenu").forEach(sub => {
            sub.style.height = "240px";
        });
        document.getElementById("header").classList.add("on");
    });

    // 헤드 전체 배경 바탕이 내려오게 하는 것


    navList.addEventListener("mouseout", () => {
        navList.querySelectorAll(".submenu").forEach(sub => {
            sub.style.height = "0px";
        });
        document.getElementById("header").classList.remove("on");
    });
}





// 홈슬라이드

var swiper = new Swiper(".home_Swiper", {
    // spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },

});




// jQuery 코드 -텍스트 효과

// elements 배열을 정의합니다.
// 이 배열에는 여러 HTML 요소와 그에 대한 스타일 변화의 정보가 담겨 있습니다.
const elements = [


    // 세 번째 요소: 오른쪽에서 왼쪽으로 이동하는 스크롤 텍스트
    {
        $element: $('.scroll_txt.type_right'),
        initTranslateX: 0, // 초기 X축 이동 거리 (px)
        finalTranslateX: 200, // 최종 X축 이동 거리 (px)
    },
    //네번째 요소 : 왼쪽으로 이동하는 스크롤
    {
        $element: $('.scroll_txt.type_left'),
        initTranslateX: 0, // 초기 X축 이동 거리 (px)
        finalTranslateX: -200, // 최종 X축 이동 거리 (px)
    },
];

// 기본값 설정: 속성이 정의되지 않은 경우 기본값을 할당합니다.
elements.forEach(element => {
    element.opacity = element.opacity || 60;
    element.initScale = element.initScale || 100;
    element.finalScale = element.finalScale || 100;
    element.initTranslateX = element.initTranslateX || 0;
    element.finalTranslateX = element.finalTranslateX || 0;
    element.initTranslateY = element.initTranslateY || 0;
    element.finalTranslateY = element.finalTranslateY || 0;
});

$(window).scroll(() => {
    const windowHeight = window.innerHeight; // 브라우저 창의 높이
    const scrollHeight = document.documentElement.scrollHeight; // 문서 전체의 높이
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop; // 현재 스크롤 위치

    // elements 배열의 각 요소에 대해 스크롤에 따른 스타일 변화를 적용합니다.
    elements.forEach(({ $element, opacity, finalScale, initScale, initTranslateX, finalTranslateX, initTranslateY, finalTranslateY }) => {
        const opacityThreshold = windowHeight * opacity / 100; // 불투명도 적용 임곗값 계산

        $element.each(function () {
            const elemTop = this.getBoundingClientRect().top; // 요소의 상단 위치
            const distance = Math.max(0, windowHeight - elemTop); // 요소와 창 하단 사이의 거리
            let opacity, scale, translateX, translateY;

            // 스크롤 위치에 따라 스타일을 조정합니다.
            if (distance >= opacityThreshold || scrollTop + windowHeight >= scrollHeight) {
                // 불투명도와 변환을 최종값으로 설정
                opacity = 1;
                scale = finalScale / 100;
                translateX = finalTranslateX;
                translateY = finalTranslateY;
            } else if (distance > 0) {
                // 거리에 따라 불투명도와 변환을 점진적으로 조정
                const distanceRatio = distance / opacityThreshold;
                opacity = distanceRatio;
                scale = (distanceRatio * (finalScale - initScale) + initScale) / 100;
                translateX = distanceRatio * (finalTranslateX - initTranslateX) + initTranslateX;
                translateY = distanceRatio * (finalTranslateY - initTranslateY) + initTranslateY;
            } else {
                return;
            }

            // 계산된 스타일을 적용합니다.
            $(this).css({
                opacity: opacity.toFixed(2),
                transform: `translateX(${translateX}px) translateY(${translateY}px) scale(${scale.toFixed(2)})`
            });
        });
    });
});



// 제품 슬라이드

var swiper = new Swiper(".pr_Swiper", {
    slidesPerView: 4.6,
    spaceBetween: 50,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
        loop: false,  //슬라이드 반복 여부
        loopAdditionalSlides: 1,
    },
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
