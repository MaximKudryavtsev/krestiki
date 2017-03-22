var app = angular.module('app', ['ngSanitize']);
app.controller('gameController', function(){
    this.information = {};
    this.gameInfo = function(first, second, length){
        this.information = {
            firstPlayer: first,
            secondPlayer: second,
            sideLength: length,
            station: 'play'
        };
    };
    this.setMap = function(length){
        this.map = {};
        for (var i = 0; i < length; i++){
            this.map[i] = {};
            for (var j = 0; j < length; j++){
                this.map[i][j] = i*j;
            }
        }
    };

    this.checkInputData = function(first, second, length){
        if ((first == null) || (second == null) || (length == null)) {
            //alert('not all fields are filled or out of interval of "side length"')
            this.wrongData = 'not all fields are filled or out of interval of "side length"';
        }
        else {
            this.gameInfo(first, second, length);
            this.setMap(this.information.sideLength);
        }
    };

    this.statementTemplate = function () {
        if (this.information.station == 'play'){
            return 'tmpl/play.html';
        }
        else {
            return 'tmpl/create.html'
        }
    };

    this.back = function(){
        this.cellWidth = Math.round($('#map').width() / this.information.sideLength);
        this.cellHeight = Math.round($('#map').height() / this.information.sideLength);
        $('.cell').css({
            'width': this.cellWidth + 'px',
            'height': this.cellHeight + 'px'
        });

    };

});




