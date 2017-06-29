var id;
var pw;

function login(){
    id = $('#user_id').val();
    pw = $('#user_pass').val();
    var params = {"id":  id,
                  "pw":  pw
    };
    $.ajax({
        type: "POST",
        dataType: "text",
        data: params,
        url: "../php/login.php",
        success: function(isok){
            if(isok == "ok") 
                showtable();
            else
                alert("login Failed!");
        }
    });
}
function showtable(){
    $('.mainfield').empty();
    loadtable();   
}
function loadtable(){
    $.ajax({
        type: "POST",
        dataType: "json",
        data: {"id":  id, "pw":  pw },
        url: "../php/load.php",
        success: function(query_res){
            loadtable_after(query_res);
        }
    });
}
function loadtable_after(data){
    var text = '';
	text+='<table>';
	text+='<tr class = "tablehead" >';
	text+="<th> Name </th>";
	text+="<th> ID </th>";
	text+="<th> PASS </th>";
	text+='</tr>';
	for(var i in data){
	    text+='<tr class = "list" >';
	    text+="<th>"+data[i].name+"</th>";
	    text+="<th>"+data[i].id+"</th>";
	    text+="<th>"+data[i].pass+"</th>";
	    text+='</tr>';
	}
    text+='</table>';
	$('.mainfield').append(text);
}