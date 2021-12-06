var Display = new function() {
    this.showSettings = function() {
        this.hideall();
        Helpers.gei("settings").style.display="block";
    };
    this.showHelp = function() {
        this.hideall();
        Helpers.gei("help").style.display="block";
    };
    this.showGame = function() {
        this.hideall();
        Helpers.gei("container").style.display="block";
    }
    this.init = function() {
        var x=Manager.steps.toString().split("").reverse().join("");
        for(var c=0;c<x.length;c++) Helpers.gei("o"+c).innerHTML=x[c];
        this.showGame();
        
    };
    
    this.hideall = function() {
        Helpers.gei("container").style.display="none";
        Helpers.gei("help").style.display="none";
        Helpers.gei("settings").style.display="none";
    }

    this.updateScore = function () {
        var x=Manager.moves.toString().split("").reverse().join("");
        for(var c=0;c<x.length;c++) Helpers.gei("s"+c).innerHTML=x[c];
    }




}
