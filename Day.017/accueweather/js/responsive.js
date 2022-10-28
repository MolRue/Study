// 모바일 햄버거 버튼
$(".hamburger").click(function(){
    $(".mobile.hamburger").hide()   // display를 none로 바꿔준다.
    $(".mobile.close").show()       // display를 block로 바꿔준다.

    $("#mobile_menu").empty();

    var nav = $(".nav").clone()
    $("#mobile_menu").append(nav)   // append : 선택한 요소의 하위로 집어넣는다.(여기서는 #mobile_menu의 하위태그로.)
    $("#mobile_menu").show()        // 
})

// 모바일 햄버거 닫기
    $(".close").click(function(){
    $(".mobile.hamburger").show()
    $(".mobile.close").hide() 
    $("#mobile_menu").hide()
})

// 브라우저 리사이징 될때, 모바일 메뉴 보이는 버그 방지.
$(window).resize(function(){
    var width = $(window).width()

    if(width >= 767) {
        if($("#mobile_menu").is(":visible")) {
            $(".mobile.hamburger").show()
            $(".mobile.close").hide() 
            $("#mobile_menu").hide() 
        }
    }
})