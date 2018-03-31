var getFilterValue = function(){
    var result = new Object();
    result.select = '*';
    result.from = 'home';
    result.where = "1=1 ";
    if( document.getElementById("a1").value == 1) result.where += " AND price >= 100000 AND price < 200000";
    else if( document.getElementById("a1").value == 2) result.where += " AND price >= 200000 AND price < 300000";
    else if( document.getElementById("a1").value == 3) result.where += " AND price >= 300000 AND price < 400000";

    if( document.getElementById("b1").value == 1) result.where += " AND numOfRoom = 2";
    else if( document.getElementById("b1").value == 2) result.where += " AND numOfRoom = 3";
    else if( document.getElementById("b1").value == 3) result.where += " AND numOfRoom = 4";

    if(document.getElementById("c1").value == 1) result.where += " AND distance >= 0 AND distance < 2";
    else if( document.getElementById("c1").value == 2) result.where += " AND distance >= 2 AND distance < 5";
    else if( document.getElementById("c1").value == 3) result.where += " AND distance >= 5";

    console.log(result.where);
   
    var httpRequest;
    if (window.XMLHttpRequest) { // 모질라, 사파리등 그외 브라우저, ...
        httpRequest = new XMLHttpRequest();
    } else if (window.ActiveXObject) { // IE 8 이상
        httpRequest = new ActiveXObject("Microsoft.XMLHTTP");
    }
    httpRequest.onreadystatechange = function(){
        if (httpRequest.readyState == 4 && httpRequest.status == 200){
            var res = JSON.parse(httpRequest.responseText);
            if(res.result == true){
                //PrintResult(res.data);
                console.log(res.data);
                ParsingData(res.data);
            } else{
                alert('!');
            }
        }
    };
    httpRequest.open('POST', location.origin + '/search', true);
    httpRequest.setRequestHeader("Content-type", "application/json");
    httpRequest.send(JSON.stringify(result));
}

var ReqQuery = function(query){
    var result = mysql.query(query);
    console.log(result);
}

var PrintResult = function(){
    /*
    var districts ='';
    var length = res.length;
    if(!length) districts = "<table class='result_list_table'><tr><th>찾는 결과가 없습니다</th></tr></table>";
    for(i = 0 ; i < length ; i++)
    {
        districts += "<div onclick='call_detail(this);'>";
        districts += "<table class='result_list_table'>" + "<tr><th style=\'width:80px;\'>Type</th><th>내용</th></tr>";
        districts += "<tr><td>공공장소명</td>" + "<td class='Pname'>"+ res[i].Pname +"</td></tr>";
        districts += "<tr><td>공공시설명</td>" + "<td class='Fname'>"+ res[i].Fname +"</td></tr>";
        districts += "<tr><td>위치</td>" + "<td class='Paddress'>"+ res[i].Paddress +"</td></tr>";    
        districts += "</table></div>";
    }
    document.getElementById("KeyResult").innerHTML = districts;*/
}

var getComplaints = function(){
    var result = new Object();
    result.select = 'location';
    result.from = 'sf';
    result.where = "";

    if(document.getElementById("d1").value == 1) result.where = "category = 'Noise Report'";
    else if( document.getElementById("d1").value == 2) result.where = "category = 'Street and Sidewalk Cleaning'";
    else if( document.getElementById("d1").value == 3) result.where = "category = 'Graffiti'";
    else if( document.getElementById("d1").value == 4) result.where = "category = 'Homeless Concerns'";

    console.log(result.where);
   
    var httpRequest;
    if (window.XMLHttpRequest) { // 모질라, 사파리등 그외 브라우저, ...
        httpRequest = new XMLHttpRequest();
    } else if (window.ActiveXObject) { // IE 8 이상
        httpRequest = new ActiveXObject("Microsoft.XMLHTTP");
    }
    httpRequest.onreadystatechange = function(){
        if (httpRequest.readyState == 4 && httpRequest.status == 200){
            var res = JSON.parse(httpRequest.responseText);
            if(res.result == true){
                //PrintResult(res.data);
                ParsingData(res.data);
                console.log(res.data);
            } else{
                alert('!');
            }
        }
    };
    httpRequest.open('POST', location.origin + '/search', true);
    httpRequest.setRequestHeader("Content-type", "application/json");
    httpRequest.send(JSON.stringify(result));
}

var MyChoose = function(){

}

var ParsingData = function(r){
    var lng = [];
    var lat = [];
    for(var i=0; i < r.length; i++){
        var comma = r[i].indexOf(",");
        lat.push(r[i].substring(1,comma));
        lng.push(r[i].substring(comma+2,r[i].length-1));
      }
    sessionStorage.setItem('lat', lat);
    sessionStorage.setItem('lng', lng);  
}

function setMark(){
    var features = [
      {
        position: new google.maps.LatLng(37.78, -120.429),
        type: 'house'
      }
    ];

    var iconBase = 'https://maps.google.com/mapfiles/kml/shapes/';
    var icons = {
      house: {
        icon: src="img/house.png"
      },
      library: {
        icon: iconBase + 'library_maps.png'
      },
      info: {
        icon: iconBase + 'info-i_maps.png'
      }
    };

    // Create markers.
    features.forEach(function(feature) {
      var marker = new google.maps.Marker({
        position: feature.position,
        icon: icons[feature.type].icon,
        map: map
      });
    });
    console.log("gg");
}