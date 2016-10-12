app.controller('dashboardController', 
  ['$scope', 'topicFactory', 'userFactory', 'sessionFactory', '$location', '$routeParams', '$cookies',
  function($scope, topicFactory, userFactory, sessionFactory, $location, $routeParams, $cookies) {
  
  
  /* Private Variables */
  
  /* Private Methods */
  var index = function() {
  	$scope.currentUser = $cookies.getObject('dashboardsession');
  	topicFactory.getTopics( function( topics ) {
  		$scope.topics = topics;
  	});
  	topicFactory.getCategories( function(cats) {
  		$scope.categories = cats;
  	});
  }

  /* Public Variables */

  /* Public Methods */
  $scope.addTopic = function() {
  	$scope.newTopic._user = $scope.currentUser._id;
    topicFactory.addTopic($scope.newTopic, function(topic) {
      console.log(topic)
      $scope.newTopic = {};
      index();
    });
  }

  // $scope.register = function() {
  //   userFactory.create($scope.newUser, function(res) {
  //     var resData = res.data;
  //     if( resData.errmsg || resData.errors ) {
  //       console.log( resData.errors, resData.errmsg );
  //     } else  {
  //       $location.url('/dashboard');
  //     }
  //   });
  // }

  // $scope.printCookie = function() {
  //   console.log($cookies.get('token'));
  // }

  /* On Load */
  index();

}]); 