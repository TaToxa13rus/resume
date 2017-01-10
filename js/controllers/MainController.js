app.controller('MainController', ['$scope', 'resume', function($scope, resume) {
  resume.then(function(data) {
    $scope.dataFromJson = data;
	
	var questionsArr = [];
	
 	for (var prop in data.values) {
		questionsArr[prop] = data.values[prop];
	} 
	
	questionsArr.sort(function(a, b) {
		return parseFloat(a.order) - parseFloat(b.order);
	});
		
	
	console.log(questionsArr);
	console.log(data.values);
	
	var obj = {};
	$.extend(obj, questionsArr);
	
	$scope.questions = obj;
	console.log($scope.questions);
  });
}]);