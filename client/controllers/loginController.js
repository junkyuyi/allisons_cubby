app.controller('loginController', 
  ['$scope', 'sessionFactory', 'userFactory', '$location', '$routeParams', '$cookies', 
  function($scope, sessionFactory, userFactory, $location, $routeParams, $cookies) {
  
  /* Private Variables */
  
  /* Private Methods */

  /* Public Variables */

  /* Public Methods */
  $scope.login = function() {
    sessionFactory.login($scope.user, function(user) {
      $location.url('/dashboard');
      // $cookies.putObject('user',user);
    });
  }

  $scope.register = function() {
    sessionFactory.register($scope.newUser, function(user) {
      if( user.errmsg || user.errors ) {
        console.log( resData.errors, resData.errmsg );
      } else  {
        $location.url('/dashboard');
        // $cookies.putObject('user',user);
      }
    });
  }

  /* On Load */
}]); 