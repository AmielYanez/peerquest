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
        $scope.timer = {
            display:'00:00:00',
            started: 0,
            intervalId:null

        };

        $scope.started = false;
        $scope.max_time = 60;
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
            resetCards();
            $scope.started = true;
            console.log('Start');
            startTimer();
        };
        $scope.restartMatch = function(){
            $scope.started = false;
            resetCards();
            $scope.attempts.success =0;
            $scope.attempts.fail =0;
            console.log('Re-Start');
        };

        // Logic
        var cards_playing = []; // only 2
        $scope.selectCard = function($event){
            if(!$scope.started){
                alert("You must start the game first!");
                return;
            }
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

        function resetCards(){
            cards_playing = _.map($('.card'),function(card){return $(card);});
            flushCardsPlaying();
            stopMatch();

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

        function stopMatch(){
            clearInterval($scope.timer.intervalId);
            $scope.timer.display = '00:00:00';
            $scope.timer.started= 0;
            $scope.started = false;
        }

        // TImer functions

        function startTimer(){
            var now=new Date();
            var timer = now.getTime() + ($scope.max_time * 1000); // Offset by one day;
            now.setTime( timer );
            $scope.timer.started = now;
            $scope.timer.intervalId = setInterval(getTimeRemaining ,1000);

        }

        function getTimeRemaining(){
            var t = $scope.timer.started.getTime() - Date.parse(new Date());
            console.log(t+": "+ (t/1000));
            var seconds = Math.floor( (t/1000) % 60 );
            var minutes = Math.floor( (t/1000/60) % 60 );
            var hours = Math.floor( (t/(1000*60*60)) % 24 );
            var days = Math.floor( t/(1000*60*60*24) );

            $scope.timer.display = hours+':'+minutes+':'+seconds;
            console.log($scope.timer.display);
            if(t <= 0){
                stopMatch();
                alert("Match finished");
            }

            return {
                'total': t,
                'days': days,
                'hours': hours,
                'minutes': minutes,
                'seconds': seconds
            };
        }

        //$scope.cards = service.loadCards($scope.level);

    }

})(angular);
