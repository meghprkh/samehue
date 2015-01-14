var Board = new function () {


    const identifiers=["A","B","C","D","E","F"];

    this.init = function() {
        // Add Styles
        var sheet = document.styleSheets[1];
        var width = Helpers.getWindowSize().width*0.95;
        var height = Helpers.getWindowSize().height;
        var x;
        if(width/Manager.size>120) x=80;
        else x=parseInt(width/Manager.size);
            sheet.insertRule(".current {   box-shadow: 0 0 0 "+parseInt(x*0.1)+"px #FAF8EF inset;}", 1);
            sheet.insertRule("#tab span {height:"+x+"px;width:"+x+"px;font-size:"+parseInt(x*0.5)+"px;}", 1);
            sheet.insertRule(".body {width:"+( x * Manager.size +10 )+"px}", 1);
            sheet.insertRule(".body-without-border {width:"+( x * Manager.size )+"px}", 1);
            sheet.insertRule("#scorerow td {height:"+parseInt(x*Manager.size/6)+
                             "px;width:"+parseInt(x*Manager.size/6)+"px;"+
                             "font-size:"+parseInt(x*0.5)+"px;}", 1);

        // Add the table
        var table = Helpers.gei("tab");
        Helpers.gei("tab").innerHTML='';
        table.innerHTML='';
        var x="";
        for(var r=0;r<Manager.size;r++) {
            for(var c=0;c<Manager.size;c++) x+="<span id=\""+"c"+c.toString()+"r"+r.toString()+"\"><span><p>A</p></span></span>";
            x+="<br />";
        }
        table.innerHTML=x;
    }

    this.print = function () {
        var tx,ty;
        for(tx=0;tx<Manager.size;tx++) {
        for(ty=0;ty<Manager.size;ty++){
            var x=Helpers.gei(this.getid(tx,ty));
        	x.firstChild.firstChild.innerHTML=identifiers[Manager.board[tx][ty]];
            x.classList.add("c"+Manager.board[tx][ty].toString());
        }}
        this.addCursor();
    }

    this.getid = function (x,y) {
        return "c"+x.toString()+"r"+y.toString();
    }

    this.removeCursor = function () {
        Helpers.gei(this.getid(Manager.posnx,Manager.posny))
        .classList.remove("current");
    }

    this.addCursor = function () {
        Helpers.gei(this.getid(Manager.posnx,Manager.posny))
        .classList.add("current");
    }

    this.updateSquare = function () {
        var element = Helpers.gei(this.getid(Manager.posnx,
                                                Manager.posny));
        element.className="";
        element.classList.add("c"+Manager.board[Manager.posnx][Manager.posny]
                                            .toString());
        element.firstChild.firstChild.innerHTML =
                    identifiers[Manager.board[Manager.posnx][Manager.posny]];
    }
}
