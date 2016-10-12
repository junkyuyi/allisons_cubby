app.controller('selectController', 
    ['$scope',
     '$location',
    function($scope,
             $location) {

    /* Private Variables */

    /* Private Methods */
   
    /* Public Variables */

    /* Public Methods */
    $scope.openTicTacToe = function() {
    	$location.url('/games/tictactoe');
    }

    /* On Load */

}]); 