var Display = new function() {
    this.sheet = (function() {
    	// Create the <style> tag
    	var style = document.createElement("style");
    
    	// Add a media (and/or media query) here if you'd like!
    	// style.setAttribute("media", "screen")
    	// style.setAttribute("media", "only screen and (max-width : 1024px)")
    
    	// WebKit hack :(
    	style.appendChild(document.createTextNode(""));
    
    	// Add the <style> element to the page
    	document.head.appendChild(style);
    
    	return style.sheet;
    })();
    this.width;
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
    };
    this.determineSize = function () {
        var width = Helpers.getWindowSize().width*0.95; //A little padding also.
        var height = Helpers.getWindowSize().height;
        if(height<width*1.5) { // Small width
            this.width = Math.floor( height / 1.5 );
        }
        else this.width = Math.floor(width);
    };
    this.init = function() {
        this.determineSize();
        this.sheet.insertRule(".body {width:"+ this.width +"px}" , 0 );
        this.sheet.insertRule(".body-without-border {width:"+( this.width - 10 )+"px}" , 0 );
        this.sheet.insertRule(".menu i {font-size:"+Math.floor( ( this.width - 10 ) / 9 )+"px}" , 0 );
        this.sheet.insertRule("#scorerow td {height:"+Math.floor( ( this.width - 10 ) / 6 ) +
                         "px;width:"+Math.floor( ( this.width - 10 ) / 6 )+"px;"+
                         "font-size:"+Math.floor( ( this.width - 10 ) / 12 )+"px;}" , 0 );
    };
    this.new = function () {
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
