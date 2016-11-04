$(document).ready(function(){
	$("#template").load("/templates/headerTemplate.html #templateHome",function(){
    	var template = document.getElementById('template').innerHTML;
        var output = Mustache.render(template);
        $("#template").html(output);
	});
});