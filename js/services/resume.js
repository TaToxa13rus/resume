app.factory('resume', ['$http', function($http) { 
    return $http.get('http://localhost:8080/data/feedbacks.json') 
            .then(function (response) {
				var data = response.data;

				console.log(data);
				return data;
			});
}]);