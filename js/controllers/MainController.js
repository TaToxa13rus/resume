app.controller('MainController', ['$scope', 'resume', function($scope, resume) {
  resume.then(function(data) {
    $scope.questions = data;
  });
}]);
