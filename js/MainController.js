

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
		linktosite: 'https://github.com/MalkaNessy/Portfolio_copywriter" ' 
      } ,
   	  { 
	  clickId: 2,
        name: "Cartoons gallery", 
        craft: 'Malka Korets',
        basedon: 'HTML/CSS,JavaScript, JQuery, Angular' ,
		imageprev: 'img/cartoons.jpg',
        description1:  'On this site you can watch YouTube video or click on link to watch video on another site',
        description2:  'Created for 5-year girl. None-commertial use only.',
		linktosite: 'https://github.com/MalkaNessy/Cartoons_gallery'
      },
   	  { 
	  clickId: 3,
        name: "Black Jack", 
        craft: 'Malka Korets',
        basedon: 'HTML/CSS,JavaScript' ,
		imageprev: 'img/blackjack.jpg',
        description1:  'Black Jack card game',
        description2:  'Simple game with overall UI look. For demonstration only',
		linktosite: 'https://github.com/MalkaNessy/Black_Jack '
      },
	  {
		  clickId: 4,
        name: "Dragon Poker", 
        craft: 'Malka Korets',
        basedon: 'HTML/CSS,JavaScript' ,
		imageprev: 'img/dragon.jpg',
        description1:  "Card game based on Robert Asprin's books",
        description2:  "Game with changing rules. Cards value depends on today's date or week day. For demonsration only",
		linktosite: 'https://github.com/MalkaNessy/Dragon_Poker '
      },
	  {
		  clickId: 5,
        name: "MyBlog JS", 
        craft: 'Malka Korets',
        basedon: 'HTML/CSS,JavaScript' ,
		imageprev: 'img/js_blog.jpg',
        description1:  'Blog on JavaScript without data base',
        description2:  'CRUD actions,  JavaScript text editor, the overall UI look and navigation, local storage, JSON format',
		linktosite: 'https://github.com/MalkaNessy/JS_only_Blog '
      }
	  ,
	  {
		  clickId: 6,
        name: "Time", 
        craft: 'Malka Korets, Yulia Tzukanova',
        basedon: 'HTML/CSS,JavaScript' ,
		imageprev: 'img/time.jpg',
        description1:  'Application for measuring your "individual minute" ',
        description2:  'Freelance project for Julia Tzukanova (psychologist in Ukraine). Allows to use special diagnostic method on-line',
		linktosite: 'https://github.com/MalkaNessy/Tsukanov_time '
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
