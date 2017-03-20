var app = angular.module('app', []);
app.controller('inputController', function(){
    this.information = {};
    this.gameInfo = function(first, second, length){
        this.information = {
            firstPlayer: first,
            secondPlayer: second,
            sideLength: length,
            station: 'play'
        };
        return this.information;
    };
    this.checkInputData = function(first, second, length){
        if ((first == null) || (second == null) || (length == null)) {
            alert('not all fields are filled or out interval of "side length"')
        }
        else {
            this.gameInfo(first, second, length);
        }
    };

});