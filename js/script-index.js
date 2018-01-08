$(document).ready( function(){
	//Eliminando icono black
	$("#back").remove();

});

	//Agregando texto NUEVAS RECETAS
	$("#recetas").append(function printNews() {
		$("#recetas").text("NUEVAS RECETAS")
	});




	//La variable "recipesArray" esta declarada en el archivo "data/recipes.js"
	//renderHighlightedRecipes(recipesArray);

/*
* Función que se encarga de pintar TODAS las recetas que tengan
* marcado el atributo "highlighted" como TRUE
*/
function renderHighlightedRecipes(recipesArray) {
	console.log('Recipes: ', recipesArray);
	for (var i = 0; i < recipesArray.length; i++) {
		if (recipesArray[i].highlighted == true) {
			renderRecipe(recipesArray[i]);
		};
	};
};

/*
* Función que se encarga de pintar UNA recetas que tenga
* marcado el atributo "highlighted" como TRUE
* Aqui se tiene que crear el HTML que esta en el
* archivo "templates/templates-recipe.html"
*/
function renderRecipe(recipe) {
	console.log('Voy a pintar la receta: ', recipe);
	var titulo = recipe.title
    var autor = recipe.source.name
    var url= recipe.url

    $(".list-recipes").append('<a class="item-recipe" href="#">' +
                          '<span class="attribution">' +
                          '<span class="title-recipe">' + titulo + '</span>' +
                          '<span class="metadata-recipe">' +
                          '<span class="author-recipe">' + autor + '</span>' +
                          '<span class="bookmarks-recipe">' +
                          '<span class="icon-bookmark">' +
                          '</span>' + '</span>' + '</span>' +  '</span>' +
                          '<img src= "img/recipes/320x350/' + url + '.jpg"/>' +
                          '</a>'
    );
}



/*
* Función que se encarga de pintar todas las actividades
*/
function renderActivities(activitiesArray) {
	console.log('Activities: ', activitiesArray);
}

/*
* Función que se encarga de pintar una actividad
* Aqui se tiene que crear el HTML que esta en el
* archivo "templates/templates-activity.html"
*/
function renderActivity(recipe) {

}
