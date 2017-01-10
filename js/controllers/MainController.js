app.controller('MainController', ['$scope', 'resume', function($scope, resume) {
  resume.then(function(data) {
    $scope.dataFromJson = data;
	$scope.questions = data.values;
	alert('1');
  });
}]);
