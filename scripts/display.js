var Display = new function() {
    this.showSettings = function() {
        this.hideall();
        Helpers.gei("HelpAndSettings").style.display="block";
        Helpers.gei("settings").style.display="block";
    };
    this.showHelp = function() {
        this.hideall();
        Helpers.gei("HelpAndSettings").style.display="block";
        Helpers.gei("help").style.display="block";
    };
    this.showGame = function() {
        this.hideall();
        Helpers.gei("container").style.display="block";
    };
    this.confirmNewGame= function () {
        this.hideall();
        Helpers.gei("HelpAndSettings").style.display="block";
        Helpers.gei("confirmNewGame").style.display="block";
    }
    this.init = function() {
        var x=pad(Manager.steps,3);
        for(var c=0;c<x.length;c++) Helpers.gei("o"+c).innerHTML=x[c];
        this.showGame();
        this.updateScore();
    };
    
    this.hideall = function() {
        Helpers.gei("container").style.display="none";
        Helpers.gei("HelpAndSettings").style.display="none";
        Helpers.gei("help").style.display="none";
        Helpers.gei("settings").style.display="none";
        Helpers.gei("confirmNewGame").style.display="none";
    };

    this.updateScore = function () {
        var x=pad(Manager.moves,3);
        for(var c=0;c<x.length;c++) Helpers.gei("s"+c).innerHTML=x[c];
    };

    function pad(num, size) {
        var s = "000" + num;
        return s.substr(s.length-size);
    }


}
