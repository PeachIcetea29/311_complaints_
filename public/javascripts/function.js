var mysql = require('mysql');

var con = mysql.createConnection({
  host: "35.189.146.14",
  user: "root",
  password: "311"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

var getFilterValue = function(){
    /*
    var SELECT = "";
    var FROM = "";
    var WHERE = "";
    var etcSQL = "";

    if( not selected ) {
        SELECT += ;
    }
    var query += SELECT + " " + FROM + " " + WHERE + " " + etcSQL + " ;" ;
    ReqQuery();
    */
}

var ReqQuery = function(){
    //var result = mysql.query(query);
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