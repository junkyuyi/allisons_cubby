app.factory('topicFactory', ['$http', function($http) {
  
  return {
    getCategories : function(callback) {
      $http.get('/categories').then( function(returned_data){
        if (typeof(callback) === 'function') {
          callback(returned_data.data);
        }
      });
    },
    getTopic : function(topicId, callback) {
      $http.get(`/topics/${topicId}`).then( function(returned_data){
        if (typeof(callback) === 'function') {
          callback(returned_data.data);
        }
      });
    },
    getTopics : function(callback) {
      $http.get('/topics').then( function(returned_data){
        if (typeof(callback) === 'function') {
          callback(returned_data.data);
        }
      });
    },
    getMessages : function(callback) {
      $http.get('/messages').then( function(returned_data){
        if (typeof(callback) === 'function') {
          callback(returned_data.data);
        }
      });
    },
    getComments : function(callback) {
      $http.get('/comments').then( function(returned_data){
        if (typeof(callback) === 'function') {
          callback(returned_data.data);
        }
      });
    },
    addTopic : function(newTopic, callback) {
      $http.post('/topics', newTopic).then( function(returned_data){
        if (typeof(callback) === 'function') {
          callback(returned_data.data);
        }
      });
    },
    addMessage: function(topicId, newMessage, callback) {
      $http.put(`/topics/${topicId}`, newMessage).then( function(returned_data){
        if (typeof(callback) === 'function') {
          callback(returned_data.data);
        }
      });
    },
    addComment: function(messageId, newComment, callback) {
      $http.put(`/messages/${messageId}`, newComment).then( function(returned_data){
        if (typeof(callback) === 'function') {
          callback(returned_data.data);
        }
      });
    }
  }
}]);