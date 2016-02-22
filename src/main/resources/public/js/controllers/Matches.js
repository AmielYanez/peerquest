/**
 * Created by ayanez on 2/21/16.
 */
'use strict';
(function (angular) {

    angular
        .module(APP_NAME)
        .controller('MatchesController', MatchesController);

    MatchesController.$inject = ['$scope', '$rootScope','Api'];

    function MatchesController($scope, $rootScope,Api) {
        var service = angular.copy(Api);

        // TODO: get the users profile to know the proper level
        // TODO: get the level config/instructions
        $scope.level = 1;
        $scope.points = 0;
        $scope.max_points=0;
        $scope.percentage = 0;
        $scope.attempts = {
            max: 8,
            success:0,
            fail:0
        };

        $scope.max_time = 160;

        $scope.cards = {
            "Leonardo Carrasco":"/img/3",
            "Christian Bojorquez":"/img/26",
            "Christian Ruink":"/img/27",
            "Sandra Vázquez":"/img/20"
        };

        // Load cards
        service.loadCards = function(level){
            var result = this.get('play/match');
            console.log(result);
            return result;
        }

        function onStart(){

        }

        function onRestart(){

        }

        $scope.start_game = function(){
            console.log('Start');
        };
        $scope.restart_game = function(){
            console.log('Re-Start');
        };


        $scope.cards = service.loadCards($scope.level);
    }

})(angular);
