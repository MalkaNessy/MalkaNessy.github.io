

app.controller('MainController', ['$scope', function($scope) { 
  $scope.sitetitle = 'Malka Korets';
  $scope.sitedescription = 'Junior front-end developer';

  /*  $scope.over = function (clickId) {
	  $scope.overview = $scope.cartoons[clickId];
	  console.log($scope.overview);
	}; */
  
  $scope.over = function (clickId) {
	  console.log("$scope.over began");
	  $scope.projview = $scope.projects[clickId]; 
	  console.log(clickId);
  }  
	
	
 
  
    
  $scope.projects = 
   [ 
      { 
	  clickId: 0,
        name: 'Lectures', 
        craft: 'Malka Korets',
        basedon: 'HTML/CSS3, JavaScript, QJuery, PHP, MySQL' ,
		imageprev: 'img/lectures.jpg',
        description1:  'Site for the lecturer to store some educational materials.',
        description2:  '',
		linktosite: 'http://www.test1.ru/Lectur/index.php'
      }, 
     { 
	 clickId: 1,
        name: "Copywriter's portfolio", 
        craft: 'Malka Korets',
        basedon: 'HTML/CSS3, JavaScript, QJuery, PHP, MySQL' ,
		imageprev: 'img/copywriter.jpg',
        description1:  "Portfolio of my copywriter's works",
        description2:  '',
		linktosite: 'href="http://www.test1.ru/Copywriter/index.php" ' 
      } ,
   	  { 
	  clickId: 2,
        name: "Cartoons gallery", 
        craft: 'Malka Korets',
        basedon: 'HTML/CSS,JavaScript, JQuery, Angular' ,
		imageprev: 'img/cartoons.jpg',
        description1:  'On this site you can watch YouTube video or click on link to watch video on another site',
        description2:  '',
		linktosite: 'file:///Z:/home/test1.ru/www/Cartoons/index.html '
      },
   	  { 
	  clickId: 3,
        name: "Black Jack", 
        craft: 'Malka Korets',
        basedon: 'HTML/CSS,JavaScript' ,
		imageprev: 'img/blackjack.jpg',
        description1:  'Black Jack card game',
        description2:  '',
		linktosite: 'file:///Z:/home/test1.ru/www/BlackJack/index.html '
      },
	  {
		  clickId: 4,
        name: "Dragon Poker", 
        craft: 'Malka Korets',
        basedon: 'HTML/CSS,JavaScript' ,
		imageprev: 'img/dragon.jpg',
        description1:  'Card game',
        description2:  '',
		linktosite: 'file:///Z:/home/test1.ru/www/DragonPoker/index.html '
      }
    ];
	
$scope.projview = $scope.projects[1];  	
  
  
   
/* function blogpost(){
var i;
for (i = 0; i < projects.length; i++) {
	if(projects[i].name=="Forth project"){
	  var unit = projects[i];
  }
}
return unit;
} */
 


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
