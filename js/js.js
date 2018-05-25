$(document).ready(function(){

	//Hover que activa todo el thumbnail cuando pasa el raton por el botón que contiene el enlace
	$("#descripcion").hover(function(){
    	$("#titulo").css("filter", "sepia(70%)");
    	}, function(){
    	$("#titulo").css("filter", "sepia(0%)");
	});

	//Hover que activa todo el thumbnail cuando pasa el raton por el botón que contiene el enlace
	$("#boton").hover(function(){
    	$("#noticias").css("transform", "scale(1.03)");
    	}, function(){
    	$("#noticias").css("transform", "scale(1)");
	});

	//Boton para cargar noticias
	$("#botonCarga").click(function(){
		botonCargar();
	});

});

var n_json = 1;
var rows = 3;

$(window).scroll(function(){
	if($(window).scrollTop() + $(window).height() + 4 >= $(document).height()){
		if (n_json < 4) {

			$.getJSON("https://rawgit.com/LuisMurcia/paginaNoticias/master/json/carga" + n_json + ".json", function (jsonObject){
				buildCol(jsonObject);
			}); n_json++;
		}
	}
});


function botonCargar(){
	if(n_json < 4){
		
		$.getJSON("https://rawgit.com/LuisMurcia/paginaNoticias/master/json/carga" + n_json + ".json", function (jsonObject){
			buildCol(jsonObject);

		}); n_json++;
	}
};



function buildCol(json){

	$("#contenido").append(
        "<div class='row'></div>"
    );
	$.each(json, function (x, item){
		$(".row:last").append(
			'<div class="col-sm-6">' + 
			'<div class="thumbnail" id="noticias">' + 
			'<img src="' + item.img + '" alt="Noticia">' + 
			'<div class="caption">' + 
			'<h2 class="text-center">' + item.titulo + '</h2>' + '</div>' + 
			'<div class="caption">' + 
			'<p class="text-justify">' + item.descripcion + '</p>' + 
			'<div class="card-footer">' + 
			'<a href="#" class="btn btn-primary">More Info</a>' + 
			'</div>' + '</div>' + '</div>' + '</div>' + '</div>'
			);
	})
};