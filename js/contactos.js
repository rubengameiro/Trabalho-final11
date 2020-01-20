$(document).ready(function(){
	$.getJSON("js/contactos.json", function(data) {
		$("#email").html(data.email);
		$("#telefone").html(data.telefone);
		$("#morada").html(data.morada);
	})
});