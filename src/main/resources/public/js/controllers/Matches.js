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

        $scope.started = false;
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



        $scope.startMatch = function(){
            $scope.started = true;
            console.log('Start');
        };
        $scope.restartMatch = function(){
            $scope.started = false;
            console.log('Re-Start');
        };

        // Logic
        var cards_playing = []; // only 2
        $scope.selectCard = function($event){
            var $card = $($event.currentTarget);
            var selected = $card.data('selected');
            if(selected){
                // Can not be played due to this was already selected
                return ;
            }

            if(cards_playing.length == 2){
                flushCardsPlaying();
            }

            faceUpCard($card);
            cards_playing.push($card);

            compareCards();

        }

        function faceUpCard($card){
            $card.removeClass('facedown');
            $card.data('selected',true);
        }
        function faceDownCard($card){
            $card.addClass('facedown');
            $card.data('selected',false);
        }

        function flushCardsPlaying(){
            _.each(cards_playing,faceDownCard);
            cards_playing = [];
        }

        function compareCards(){
            if(cards_playing.length<2) return;
            if(cards_playing[0].data('key') ==cards_playing[1].data('key') ){
                $scope.attempts.success++;
                cards_playing = []; // reset counter
            }else{
                $scope.attempts.fail++;
                setTimeout(flushCardsPlaying,400);
            }

        }

        //$scope.cards = service.loadCards($scope.level);

    }

})(angular);
