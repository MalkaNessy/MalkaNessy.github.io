

app.controller('MainController', ['$scope', function($scope) { 
  $scope.sitetitle = 'Malka Korets'; 
  
  $scope.blog1 = function (valueToAdd) {
	  console.log("clicked blog1");
	  $scope.prog1 = $scope.projects[0]; 
   }
  
   $scope.blog2 = function (valueToAdd) {
	  console.log("clicked blog2");
	  $scope.prog1 = $scope.projects[1]; 
   }
   
    $scope.blog3 = function (valueToAdd) {
	  console.log("clicked blog3");
   }
   
    $scope.blog4 = function (valueToAdd) {
	  console.log("clicked blog4");
   }
  
  $scope.prog1 = {
		name: 'temp', 
        craft: 'Malka Korets', 
        copywriter: 'Malka Korets', 
        basedon: 'HTML5, CSS3, JQuery, Angular' ,
        description1:  'Краткое описание в первом абзаце',
        description2:  'Краткое описание во втором абзаце',
  }
  
  $scope.projects = 
   [ 
      { 
        name: 'First project', 
        craft: 'Malka Korets', 
        copywriter: 'Malka Korets', 
        basedon: 'HTML5, CSS3, JQuery, Angular' ,
        description1:  'Краткое описание в первом абзаце',
        description2:  'Краткое описание во втором абзаце',
      }, 
     { 
        name: 'Second project', 
        price: 8, 
        pubdate: new Date('2013', '08', '01'), 
        cover: 'img/program-or-be-programmed.jpg',
        likes:  0,
        dislikes: 0 
      } ,
   	  { 
        name: 'Third project', 
        price: 20, 
        pubdate: new Date('2015', '06', '07'), 
        cover: 'img/the-book-of-trees.jpg',
        likes:  0,
        dislikes: 0 
      }, 
     { 
        name: 'Forth project', 
        price: 7, 
        pubdate: new Date('2016', '02', '04'), 
        cover: 'img/program-or-be-programmed.jpg',
        likes:  0,
        dislikes: 0
      } 
    ];
  
  
   
function blogpost(){
var i;
for (i = 0; i < projects.length; i++) {
	if(projects[i].name=="Forth project"){
	  var unit = projects[i];
  }
}
return unit;
}
 


  
  
}]);

app.directive("overName", function() {
    return {
        restrict : "C",
        template : "<p>Made by a directive!</p>"
    };
});


