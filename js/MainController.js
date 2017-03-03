

app.controller('MainController', ['$scope', function($scope) { 
  $scope.sitetitle = 'Malka Korets';
  $scope.sitedescription = 'Junior front-end developer';
  
  
  
  $scope.blog1 = function (valueToAdd) {
	  console.log("clicked blog1");
	  $scope.projview = $scope.projects[0]; 
   }
  
   $scope.blog2 = function (valueToAdd) {
	  console.log("clicked blog2");
	  $scope.projview = $scope.projects[1]; 
   }
   
    $scope.blog3 = function (valueToAdd) {
	  console.log("clicked blog3");
	  $scope.projview = $scope.projects[2]
   }
   
    $scope.blog4 = function (valueToAdd) {
	  console.log("clicked blog4");
	  $scope.projview = $scope.projects[3]
   }
  
    
  $scope.projects = 
   [ 
      { 
        name: 'First project', 
        craft: 'Malka Korets',
        basedon: 'HTML5, CSS3, JQuery, Angular' ,
        description1:  'Краткое описание в первом абзаце',
        description2:  'Краткое описание во втором абзаце',
		linktosite: 'https://www.w3schools.com/angular/angular_scopes.asp'
      }, 
     { 
        name: 'Second project', 
        craft: 'Malka Korets2',
        basedon: 'HTML5, CSS3, JQuery, Angular2' ,
        description1:  'Краткое описание в первом абзаце2',
        description2:  'Краткое описание во втором абзаце2',
		linktosite: 'href="#" ' 
      } ,
   	  { 
        name: 'Third project', 
        craft: 'Malka Korets3',
        basedon: 'HTML5, CSS3, JQuery, Angular3' ,
        description1:  'Краткое описание в первом абзаце3',
        description2:  'Краткое описание во втором абзаце3',
		linktosite: 'href="#" '
      }, 
     { 
        name: 'Forth project', 
        craft: 'Malka Korets4', 
        basedon: 'HTML5, CSS3, JQuery, Angular4' ,
        description1:  'Краткое описание в первом абзаце4',
        description2:  'Краткое описание во втором абзаце4',
		linktosite: 'href="#" '
      } 
    ];
	
	/* $scope.projview = $scope.projects[3]; */
  
  
   
function blogpost(){
var i;
for (i = 0; i < projects.length; i++) {
	if(projects[i].name=="Forth project"){
	  var unit = projects[i];
  }
}
return unit;
}
 


console.log('end of MainController definition')  
  
}]);


/* Выводит список в обратном порядке

<div ng-init="names=['Jani','Hege','Kai']">
  <p>Looping with ng-repeat:</p>
  <ul>
    <li ng-repeat="x in names | orderBy: 'created_at':true ">
      {{ x }}
    </li>
  </ul>
</div> */
