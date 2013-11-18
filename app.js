var app = angular.module('FlattrNowApp', []);
 
app.controller('MainController', function($scope) {
    $scope.user_id = "Astro";
    $scope.url = "http://astro.github.io/flattrnow/";
    $scope.title = "FlattrNow";
    $scope.description = "Freely Flattr people without their consent!"
    $scope.language = 'en_GB';
    $scope.tags = "flattr,javascript";
    $scope.category = 'software';

    $scope.refresh = function() {
	console.log("$refresh");
	var params = {
	    user_id: $scope.user_id,
	    url: $scope.url
	};
	['title', 'description', 'language', 'tags', 'hidden', 'category'].forEach(function(k) {
	    if ($scope[k])
		params[k] = $scope[k];
	});

	// TODO: http://developers.flattr.net/api/resources/categories/

	var container = document.getElementById('button');
	while(container.firstChild) {
	    container.removeChild(container.firstChild);
	}
	var placeholder = document.createElement('div');
	container.appendChild(placeholder);
	FlattrLoader.render(params, placeholder, 'replace');
    };
});
