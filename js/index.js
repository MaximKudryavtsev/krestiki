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
        for (var i = 1; i <= length; i++){
            this.map[i] = {};
            for (var j = 1; j <= length; j++){
                this.map[i][j] = null;
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
            return 'tmpl/play.html'
        }
        else {
            return 'tmpl/create.html'
        }
    };
    var state = "cross";
    this.step = function(x, y){
        var crossImg = "<img src='http://s.pikabu.ru/post_img/2013/07/08/4/1373253112_2035793701.png' width='50' height='50'/>";
        var zeroImg = "<img src='https://img-fotki.yandex.ru/get/9809/199839678.1a6/0_ce96d_e46def75_S' width='50' height='50'/>";
        if ((state == "cross") && (this.map[x][y] == null)) {
            angular.element(document.querySelector("#x"+x+"y"+y)).html(crossImg);
            this.map[x][y] = "cross";
            angular.element(document.querySelector(".turn")).text(this.information.secondPlayer);
            state = "zero";

            console.log("x"+x+"y"+y, state);
        } else if ((state == "zero") && (this.map[x][y] == null)) {
            angular.element(document.querySelector("#x"+x+"y"+y)).html(zeroImg);
            this.map[x][y] = "zero";
            angular.element(document.querySelector(".turn")).text(this.information.firstPlayer);
            state = "cross";
            console.log("x"+x+"y"+y, state);
        }

    };

    this.start = function(){
        this.cellWidth = Math.round($('#map').width() / this.information.sideLength);
        this.cellHeight = Math.round($('#map').height() / this.information.sideLength);
        $('.content').css({
           'width':  200 + this.cellWidth * this.information.sideLength + 'px',
           'height': this.cellHeight * this.information.sideLength + 'px'
        });
        $('.info-bar').css({
            'height': this.cellHeight * this.information.sideLength + 'px'
        });
        $('.map').css({
                'width': this.cellWidth * this.information.sideLength + 'px',
                'height': this.cellHeight * this.information.sideLength + 'px'
            }
        );
        $('.cell').css({
            'width': this.cellWidth + 'px',
            'height': this.cellHeight + 'px'
        });

        $('.start').css('display', 'none');
        angular.element(document.querySelector(".turn")).text(this.information.firstPlayer);
    };

});




