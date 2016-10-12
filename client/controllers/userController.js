app.controller('userController', 
  ['$scope', 'userFactory', '$location', '$routeParams', '$cookies', 
  function($scope, userFactory, $location, $routeParams, $cookies) {
  
  /* Private Methods */
  var index = function() {
    $scope.currentUser = $cookies.getObject('dashboardsession');
    userFactory.show($scope.currentUser._id, function(user) {
      console.log(user);
      $scope.topics = user._topics;
      $scope.messages = user._messages;
      $scope.comments = user._comments;
    })

  }

  /* Public Variables */

  /* Public Methods */

  /* On Load */
  index();
}]); 