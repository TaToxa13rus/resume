app.controller('MainController', ['$scope', 'resume', function($scope, resume) {
  resume.then(function(data) {
    $scope.dataFromJson = data;
	$scope.questions = data.values;
/* 	for (var prop in $scope.questions) {
		console.log("obj." + prop + " = " + obj[prop]);
	} */
	
	
	$scope.questions.sort(compareAge);
	
	console.log($scope.questions);
  });
  
    function compareAge(personA, personB) {
		return personA.order - personB.order;
	}
  
}]);
