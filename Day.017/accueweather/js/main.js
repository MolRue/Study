
var cityList = ["seoul", "incheon", "busan", "gwangju", "jeju", "jeonju"];

// = forEach
$(".temp").each(function(i){
    var temp = getCurrentTemp(cityList[i])
    var iconURL = "https://openweathermap.org/img/wn/"    
    $(this).text(temp.celsius + "℃")
    $(this).prev().children().attr("src", iconURL + temp.icon + ".png")
    //jQuery에서 this는 현재 이벤트가 일어날 개체! (여기서는 temp)
})

$(".location").on({
    "click" : function(){
        var q = $(this).children(".q").attr("id")
        var redirectURL = "pages/weather_location.html?q=" + q
        location.href = redirectURL
    }
})