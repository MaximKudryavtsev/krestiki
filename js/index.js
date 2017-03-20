var app = angular.module('app', []);
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
    this.checkInputData = function(first, second, length){
        if ((first == null) || (second == null) || (length == null)) {
            alert('not all fields are filled or out interval of "side length"')
        }
        else {
            this.gameInfo(first, second, length);
            this.initCanvas();
        }

    };
    this.statementTemplate = function () {
        if (this.information.station == 'play'){
            return 'tmpl/play.html'
        }
        else {
            return 'tmpl/create.html'
        }
    };
    this.back = function(){
        this.statementTemplate = function () {
            return 'tmpl/create.html'
        };
    };
    this.initCanvas = function() {
        var example = document.getElementById("game"),
            ctx     = example.getContext('2d');
        example.width  = WIDTH;
        example.height = HEIGHT;
        ctx.font = "100px Arial";
        ctx.fillText("hi world", 100, 100);
    }
});

