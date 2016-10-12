app.factory('sessionFactory', ['$http', function($http) {

  var currentUser;

  function SessionConstructor() {
    var _this = this;

    this.login = function(user, callback) {
      $http.post('/authenticate', user).then( function(res){
        if (res.data.errors){
          console.log(res.data.errors)
        } else {
          if (typeof(callback) === 'function') {
            currentUser = res.data;
            console.log(currentUser);
            callback(currentUser);
          }
        }
      });
    };

    this.register = function(newUser, callback) {
      $http.post('/register', newUser).then(function(res){
        if (res.data.errors){
          console.log(res.data.errors)
        } else {
          if (typeof(callback) === 'function') {
            currentUser = res.data;
            console.log(currentUser);
            callback(currentUser);
          }
        }
      });
    }

    this.getCurrentUser = function() {
      if(!currentUser) {
        
      }
      return currentUser;
    }
  }

  return (new SessionConstructor());
}]);