var currentURL = location.href;  
// URL 주소를 가져옴
var urlObj = new URL(currentURL);

var params = urlObj.searchParams;
var q = params.get("q");
console.log(params);

var result = getCurrentWeather(q);
console.log(result);

$("#temp").text(result.main.temp + "℃");
$("#wind").text(result.wind.speed + "m/s");
$("#humidity").text(result.main.humidity + "%");