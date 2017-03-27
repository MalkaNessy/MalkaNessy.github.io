

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
        name: 'Lectures', 
        craft: 'Malka Korets',
        basedon: 'HTML/CSS3, JavaScript, QJuery, PHP, MySQL' ,
		imageprev: 'img/lectures.jpg',
        description1:  'Site for the lecturer to store some educational materials.',
        description2:  '',
		linktosite: 'http://www.test1.ru/Lectur/index.php'
      }, 
     { 
        name: "Copywriter's portfolio", 
        craft: 'Malka Korets',
        basedon: 'HTML/CSS3, JavaScript, QJuery, PHP, MySQL' ,
		imageprev: 'img/copywriter.jpg',
        description1:  "Portfolio of my copywriter's works",
        description2:  '',
		linktosite: 'href="http://www.test1.ru/Copywriter/index.php" ' 
      } ,
   	  { 
        name: "Cartoons gallery", 
        craft: 'Malka Korets',
        basedon: 'HTML/CSS,JavaScript, JQuery, Angular' ,
		imageprev: 'img/cartoons.jpg',
        description1:  'On this site you can watch YouTube video or click on link to watch video on another site',
        description2:  '',
		linktosite: 'file:///Z:/home/test1.ru/www/Cartoons/index.html '
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
