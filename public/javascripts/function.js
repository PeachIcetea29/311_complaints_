var getFilterValue = function(/*price, bedrooms, distance, complaints*/){
    /*
    var SELECT = "SELECT location ";
    var FROM = "FROM sf ";
    var WHERE = "WHERE price = " +price+ " bedrooms = " +bedrooms+ " distance = " +distance+ " complaints = " +complants+ " ";
    var etcSQL = "";

    var query += SELECT + FROM + WHERE + etcSQL + " ;" ;
    ReqQuery(query);
    */
    var result = new Object();
    result.select = 'location';
    result.from = 'sf';
    result.where = "";

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

var MyChoose = function(){

}