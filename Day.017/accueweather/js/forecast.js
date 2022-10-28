var url = "https://api.openweathermap.org/data/2.5/weather?"
url += "appid=b1e93888425bc4d1ae07038666f33882"
url += "&units=metric"
url += "&lang=kr"
url += "&q="

// 현재 날씨의 모든 정보 얻어오기
function getCurrentWeather(city){
    var dataObj;
    var openWeatherAPI = url

    $.ajax({
        type: "GET", 
        // ↑ 서버에 GET방식으로 데이터를 요청한다.
        url: openWeatherAPI += city,
        dataType: "JSON",
        // ↑ 받는 데이터를 JSON방식으로 받겠다. 이건 API서버마다 제공방식이 다를수 있다.    
        async: false,  // false >> 비동기 → 동기 (결과데이터를 리턴시키기 위해서)
        // ↑ async : 비동기? false라면 동기화를 하지 않겠다?
        // 비동기 : 응답상태와는 상관없이 반응을 가져온다?
        // ajax는 기본적으로 비동기 이다. 
        success: function(data) { // 성공적으로 데이터가 들어왔을 경우
            // console.log(data.weather[0].description)
            // console.log(data.dt)
            // console.log(data.weather[0].icon)
            // console.log(data)
            dataObj = data
        },
        error: function(requset, status, error) {  // 데이터를 불러오는데 실패했을 경우
            console.log(requset, status, error)
        }

    })
    return dataObj
}




// 지역별 현재 온도 얻어오기
function getCurrentTemp(city){
    var temp = {};
    var openWeatherAPI = url
    
    $.ajax({
        type: "GET", 
        url: openWeatherAPI += city,
        dataType: "JSON",   
        async: false,  
        success: function(data) {
            temp.celsius = data.main.temp.toFixed()   
            temp.icon = data.weather[0].icon  // icon : 아이콘! 날씨에 따라서 서버에서 제공한 아이콘을 보여준다.
        },
        error: function(requset, status, error) { 
            console.log(requset, status, error)
        }
    })
    return temp
}    


