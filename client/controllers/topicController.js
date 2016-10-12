app.controller('topicController', 
  ['$scope', 'topicFactory', 'userFactory', '$location', '$routeParams', '$cookies', 
  function($scope, topicFactory, userFactory, $location, $routeParams, $cookies) {
  
  /* Private Methods */
  var index = function() {
    $scope.currentUser = $cookies.getObject('dashboardsession');
    $scope.newComment = {};
    topicFactory.getTopic( $routeParams.id, function( topic ) {
      $scope.topic = topic;
      console.log(topic);
    });
  }

  /* Public Variables */

  /* Public Methods */
  $scope.addMessage = function () {
  	$scope.newMessage._user = $scope.currentUser._id;
  	topicFactory.addMessage($routeParams.id, $scope.newMessage, function(message){
      	$scope.newMessage = {};
      	index();
  	});
  }

  $scope.addComment = function (messageId) {
  	$scope.newComment[messageId]._user = $scope.currentUser._id;
  	topicFactory.addComment(messageId, $scope.newComment[messageId], function(comment){
      	$scope.newComment = {};
      	index();
  	});
  }

  /* On Load */
  index();
}]); 