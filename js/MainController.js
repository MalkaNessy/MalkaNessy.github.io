

app.controller('MainController', ['$scope', function($scope) { 
  $scope.sitetitle = 'Malka Korets';
  $scope.sitedescription = 'Web developer';

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
        description2:  'text editor, data base, admin panel without authorisation, no opportunity to add new article',
		linktosite: 'https://github.com/MalkaNessy/Lectures'
      }, 
     { 
	 clickId: 1,
        name: "Copywriter's portfolio", 
        craft: 'Malka Korets',
        basedon: 'HTML/CSS3, JavaScript, QJuery, PHP, MySQL' ,
		imageprev: 'img/copywriter.jpg',
        description1:  "Best works of my copywriter career",
        description2:  'Data base, CSS-dezign, admin panel without authorisation, no opportunity to add new article',
		linktosite: 'https://ownwriter.themalka.site/ ' 
      } ,
   	  { 
	  clickId: 2,
        name: "Cartoons gallery", 
        craft: 'Malka Korets',
        basedon: 'HTML/CSS,JavaScript, JQuery, Angular' ,
		imageprev: 'img/cartoons.jpg',
        description1:  'On this site you can watch YouTube video or click on link to watch video on another site',
        description2:  'Created for 5-year girl. None-commertial use only.',
		linktosite: 'http://themalka.site/cartoons/'
      },
   	  { 
	  clickId: 3,
        name: "Black Jack", 
        craft: 'Malka Korets',
        basedon: 'HTML/CSS,JavaScript' ,
		imageprev: 'img/blackjack.jpg',
        description1:  'Black Jack card game',
        description2:  'Simple game with overall UI look. For demonstration only',
		linktosite: 'http://blackjack.themalka.site/'
      },
	  {
		  clickId: 4,
        name: "Dragon Poker", 
        craft: 'Malka Korets',
        basedon: 'HTML/CSS,JavaScript' ,
		imageprev: 'img/dragon.jpg',
        description1:  "Card game based on Robert Asprin's books",
        description2:  "Game with changing rules. Cards value depends on today's date or week day. For demonsration only",
		linktosite: 'http://dragonpoker.themalka.site/ '
      },
	  
	  {
		  clickId: 5,
        name: "Time", 
        craft: 'Malka Korets, Yulia Tzukanova',
        basedon: 'HTML/CSS,JavaScript' ,
		imageprev: 'img/time.jpg',
        description1:  'Application for measuring your "individual minute" ',
        description2:  'Freelance project for Julia Tzukanova (psychologist in Ukraine). Allows to use special diagnostic method on-line',
		linktosite: 'http://time.themalka.site/ '
      } ,
	  {
		clickId: 6,
        name: "Come and back",
        craft: 'Malka Korets',
        basedon: 'HTML, Bootstrap 4, JavaScript, JQuery' ,
		imageprev: 'img/comeback.jpg',
        description1:  'Landing Bootstrap 4 page to distribute the book ',
        description2:  'I will send the book for person who lives his email',
		linktosite: 'https://comeback.themalka.site/ '
      }
	  ,
	  {
		clickId: 7,
        name: "Icon painter",
        craft: 'Malka Korets',
        basedon: 'HTML,CSS, Bootstrap 4, JavaScript, JQuery, PHP, SQL' ,
		imageprev: 'img/tsipina.jpg',
        description1:  'Site for the painter ',
        description2:  'Image gallery',
		linktosite: 'http://olga-icons.info/ '
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
