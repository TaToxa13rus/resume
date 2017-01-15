app.factory('resume', ['$http', function($http) { 
    return $http.get(document.location.href + '/data/feedbacks.json') 
            .then(function (response) {
				var data = response.data;

				return data;
			});
}]);