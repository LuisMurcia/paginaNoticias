$(document).ready(function(){
	$("#descripcion").hover(function(){
    	$("#titulo").css("filter", "sepia(70%)");
    	}, function(){
    	$("#titulo").css("filter", "sepia(0%)");
	});

	$("#boton").hover(function(){
    	$("#noticias").css("transform", "scale(1.03)");
    	}, function(){
    	$("#noticias").css("transform", "scale(1)");
	});

});

var n_json = 1;

$(window).scroll(function(){
	if($(window).scrollTop() + $(window).height() + 4 >= $(document).height()){
		if (n_json < 4) {

			$.getJSON("https://rawgit.com/LuisMurcia/paginaNoticias/master/json/carga" + n_json + ".json", function (jsonObject){
				buildCol(jsonObject);
			}); n_json++;
		}
	}
});


function buildCol(json){
	$.each(json, function (x, item){
		$("#contenido").append('<div class="col-sm-6">' + 
			'<div class="thumbnail" id="noticias">' + 
			'<img src="' + item.img + '" alt="Noticia">' + 
			'<div class="caption">' + 
			'<h2 class="text-center">' + item.titulo + '</h2>' + '</div>' + 
			'<div class="caption">' + 
			'<p class="text-justify">' + item.descripcion + '</p>' + 
			'<div class="card-footer">' + 
			'<a href="#" class="btn btn-primary">More Info</a>' + 
			'</div>' + '</div>' + '</div>' + '</div>')
	})
};