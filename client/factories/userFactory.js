app.factory('userFactory', ['$http', function($http) {
  var users = [];
  var user = [];

  return {
    index : function(callback) {
      $http.get('/users').then( function(returned_data){
        if (typeof(callback) === 'function') {
          users = returned_data.data;
          callback(users);
        }
      });
    },
    create : function(newUser, callback) {
      $http.post('/users', newUser).then(function(response){
        if (typeof(callback) === 'function') {
          callback(response);
        }
      });
    },
    show : function(idx, callback) {
      $http.get(`/users/${idx}`).then(function(returned_data){
        if (typeof(callback) === 'function') {
          user = returned_data.data;
          callback(user);
        }
      });
    },
    update : function(updateUser, idx, callback) {
      $http.put(`/users/${idx}`, updateUser).then(function(returned_data){
        if (typeof(callback) === 'function') {
          user = returned_data.data;
          users[idx] = returned_data.data;
          callback(user);
        }
      });
    },
    delete : function(idx, callback) {
      $http.delete(`/users/${idx}`).then(function(returned_data){
        if (typeof(callback) === 'function') {
          callback(returned_data);
        }
      });
    },
    getUser : function() {
      return user;
    }
  }
}]);