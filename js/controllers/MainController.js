app.controller('MainController', ['$scope', 'resume', function($scope, resume) {
  resume.then(function(data) {
    $scope.dataFromJson = data;
	$scope.questions = data.values;	
  });
  
    $scope.checkData = function() {		
		var qArr = [];
		var prop;
		//чекбокс
		var resultsOfCheckBoxValidation = [];
		var resultsOfCheckBoxValidationBool = true;
		//радио
		var resultsOfRadioBoxValidation = [];
		var resultsOfRadioBoxValidationBool = true;
		//textarea
		var resultsOfTextAreaValidation = [];
		var resultsOfTextAreaValidationBool = true;
		//not-slider
		var resultsOfNotSliderValidation = [];
		var resultsOfNotSliderValidationBool = true;
		//comment
		var resultsOfCommentValidation = [];
		var resultsOfCommentValidationBool = true;
		
		var arrayWithAnswers = [];

		for (prop in $scope.questions) {
			qArr[prop] = $scope.questions[prop];
			//checkboxes
			if (qArr[prop].answers_type == "0") 
			{ 
				resultsOfCheckBoxValidation[prop] = $("input[name='" + qArr[prop].subtitle + "']:checked").length;
				var obj = new Object();
				obj.subtitle = qArr[prop].subtitle;
				obj.reference = prop;
				var checkboxAnswers = [];
				$("input[name='" + qArr[prop].subtitle + "']:checked").each(function() 
				{				   
				   checkboxAnswers.push(this.value);
				});
				obj.value = checkboxAnswers;
				
				arrayWithAnswers.push(obj);
			}
			//radioboxes
			if (qArr[prop].answers_type == "1")
			{ 
				resultsOfRadioBoxValidation[prop] = $("input[name='" + qArr[prop].subtitle + "']:checked").length;
				var obj = new Object();
				obj.subtitle = qArr[prop].subtitle;
				obj.reference = prop;
				var radioboxAnswers;
				$("input[name='" + qArr[prop].subtitle + "']:checked").each(function() 
				{
				   radioboxAnswers = this.value;
				});
				obj.value = radioboxAnswers;
				
				arrayWithAnswers.push(obj);
			}
			//select
			if (qArr[prop].answers_type == "2")
			{ 
				var obj = new Object();
				obj.subtitle = qArr[prop].subtitle;
				obj.reference = prop;
				
				obj.value = $("select[name='" + qArr[prop].subtitle + "']").val();
				
				arrayWithAnswers.push(obj);
			}
			//textarea
			if (qArr[prop].answers_type == "3") 
			{ 
				resultsOfTextAreaValidation[prop] = $("textarea[name='" + qArr[prop].subtitle + "']").val();
				var obj = new Object();
				obj.subtitle = qArr[prop].subtitle;
				obj.reference = prop;
				
				obj.value = resultsOfTextAreaValidation[prop];
				
				arrayWithAnswers.push(obj); 
			}
			//not-slider
			if (qArr[prop].answers_type == "4") 
			{ 
				resultsOfNotSliderValidation[prop] = $("input[name='" + qArr[prop].subtitle + "']").val();
				var obj = new Object();
				obj.subtitle = qArr[prop].subtitle;
				obj.reference = prop;
				
				obj.value = resultsOfNotSliderValidation[prop];
				
				arrayWithAnswers.push(obj); 
			}
			//comment
			if (qArr[prop].comment == "0") 
			{ 
				resultsOfCommentValidation[prop] = $("input[class='comment']").val(); 
			}
		}
		
		for (prop in resultsOfCheckBoxValidation) {
			if (resultsOfCheckBoxValidation[prop] == 0) {
				resultsOfCheckBoxValidationBool = false;
			}
		}
		for (prop in resultsOfRadioBoxValidation) {
			if (resultsOfRadioBoxValidation[prop] == 0) {
				resultsOfRadioBoxValidationBool = false;
			}
		}
		for (prop in resultsOfTextAreaValidation) {
			if (resultsOfTextAreaValidation[prop] == "") {
				resultsOfTextAreaValidationBool = false;
			}
		}
		for (prop in resultsOfNotSliderValidation) {
			if (resultsOfNotSliderValidation[prop] == "") {
				resultsOfNotSliderValidationBool = false;
			}
		}
		for (prop in resultsOfCommentValidation) {
			if (resultsOfCommentValidation[prop] == "") {
				resultsOfCommentValidationBool = false;
			}
		}
		
		$().toastmessage({sticky : true, position: 'middle-center'});
		
		if (resultsOfCheckBoxValidationBool && resultsOfRadioBoxValidationBool && resultsOfTextAreaValidationBool && resultsOfNotSliderValidationBool && resultsOfCommentValidationBool) {
			console.log(arrayWithAnswers);
			resetFormFields ();
			$().toastmessage('showSuccessToast', 'Спасибо за Ваше мнение!');
		} else {
			$().toastmessage('showWarningToast', 'Пожалуйста, заполните все поля анкеты.');
		}
	}
	
	function resetFormFields () {
		$('form input[type=\'radio\']').removeAttr('checked');
		$('form input[type=\'checkbox\']').removeAttr('checked');
		$('form input[type=\'text\']').val('');
		$('form textarea').val('');
	}
}]);

app.filter('orderObjectBy', function(){
 return function(input, attribute) {
    if (!angular.isObject(input)) return input;

    var array = [];
    for(var objectKey in input) {
        array.push(input[objectKey]);
    }

    array.sort(function(a, b){
        a = parseInt(a[attribute]);
        b = parseInt(b[attribute]);
        return a - b;
    });
    return array;
 }
});