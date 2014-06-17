$(document).ready(function(){

    $("button").click(function(){
    	$("p").hide();
    });

	$("#addhost").click(function(){
		var hostname = $("#hostname").val();
		var ipaddress = "0.0.0.0";
		var rtt = 0;
		var success = 0;
		var failed = 0;
		var ttl = 0;
		var status = 0;

		var str = "<tr> <td> "+hostname+"</td> <td> "+ipaddress+"</td> <td> "+rtt+"</td> <td> "+success+"</td> <td> "+failed+"</td>	<td> "+ttl+"</td> <td> "+status+"</td> <td><img src='images/delete.png' class='btnDelete'/></td> </tr>";
		$("#iptable thead").append(str);
		$(".btnDelete").bind("click", Delete);


		$.get("php/command.php",function(data,status){
    			alert("Data: " + data + "\nStatus: " + status);
  		});

  	});

	$('#myTab a').click(function (e) {
	  e.preventDefault()
	  $(this).tab('show')
	});

});

function Delete(){ 
	var par = $(this).parent().parent(); 
	par.remove();
}; 
