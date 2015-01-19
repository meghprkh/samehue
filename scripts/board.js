var Board = new function () {


    const identifiers=["A","B","C","D","E","F"];

    this.init = function() {
        // Add Styles
        var x = Math.floor ( ( Display.width - 10 ) / Manager.size ) ;
        Display.sheet.insertRule(".current {   box-shadow: 0 0 0 "+Math.floor(x*0.1)+"px #FAF8EF inset;}", 0 );
        Display.sheet.insertRule("#tab span {height:"+x+"px;width:"+x+"px;font-size:"+Math.floor(x*0.5)+"px;}", 0 );
        Display.sheet.insertRule("#tab span > span {line-height:"+x+"px;}", 0 );

        // Add the table
        var table = Helpers.gei("tab");
        Helpers.gei("tab").innerHTML='';
        table.innerHTML='';
        var x="";
        for(var r=0;r<Manager.size;r++) {
            for(var c=0;c<Manager.size;c++) x+="<span id=\""+"c"+c.toString()+"r"+r.toString()+"\"><span></span></span>";
            x+="<br />";
        }
        table.innerHTML=x;
    }

    this.print = function () {
        var tx,ty;
        for(tx=0;tx<Manager.size;tx++) {
        for(ty=0;ty<Manager.size;ty++){
            var x=Helpers.gei(this.getid(tx,ty));
        	x.firstChild.innerHTML=identifiers[Manager.board[tx][ty]];
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
        element.firstChild.innerHTML =
                    identifiers[Manager.board[Manager.posnx][Manager.posny]];
    }
}
