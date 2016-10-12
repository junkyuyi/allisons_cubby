app.controller('ticTacToeController', 
    ['$scope',
     '$location',
    function($scope,
             $location) {

    /* Private Variables */
    var moves;

    /* Private Methods */
    var gameInit = function() {
        $scope.grid = [[0,0,0],                             // reset the grid
                [0,0,0],
                [0,0,0]];
        $scope.turn = Math.floor( Math.random() * 2 ) + 1;  // randomize turn between 1 or 2
        $scope.message = `Player ${$scope.turn}'s turn!`;   // output turn indicator message
        moves = 0;                                          // reset total move count
        $scope.gameOver = false;                            // reset "game over" status
        clearBoard();
    }

    var clearBoard = function() {
        for(var i=0; i<3; i++) {
            for(var j=0; j<3; j++) {
                var elem = document.getElementById(`col-${i}-row-${j}`)
                angular.element( elem )
                    .removeClass(`player-1-shape`)
                    .removeClass(`player-2-shape`);
            }
        }
    }
   
    var checkWin = function(col,row) {
        // check horizontal
        for(var h=0; h<3; h++){
            if($scope.grid[row][h] != $scope.turn) {
                break;
            }
            if( h == 2 ){
                return true;
            }
        }
        // check vertical
        for(var v=0; v<3; v++){
            if($scope.grid[v][col] != $scope.turn) {
                break;
            }
            if ( v == 2 ){
                return true;
            }
        }
        // check diagonal
        for(var d=0; d<3; d++){
            if($scope.grid[d][d] != $scope.turn) {
                break;
            }
            if ( d == 2 ) {
                return true;
            }
        }
        // check anti-diagonal
        for(var ad=0; ad<3; ad++){
            if($scope.grid[ad][2-ad] != $scope.turn) {
                break;
            }
            if ( ad == 2 ) {
                return true;
            }
        }
    }
    /* Public Variables */

    /* Public Methods */
    $scope.fillGrid = function(col,row,elem) {
        if (!$scope.gameOver) {
            if ($scope.grid[row][col]) {
                $scope.message = "Spot already taken";
            }
            else {
                $scope.grid[row][col] = $scope.turn;
                angular.element( elem.target )
                    .addClass(`player-${$scope.turn}-shape`);
                
                moves++;
                if (checkWin(col,row)) {
                    $scope.message = `Player ${$scope.turn} WINS!`;
                    $scope.gameOver = true;
                } else if (moves > 8) {
                    $scope.message = `It's a draw!!!`;
                    $scope.gameOver = true;
                }

                if (!$scope.gameOver) {
                    $scope.turn = ($scope.turn % 2) + 1;
                    $scope.message = `Player ${$scope.turn}'s turn!`;
                }   
            } 
        }
    }

    $scope.resetGame = function() {
        gameInit();
    }

    /* On Load */
    gameInit();
}]); 