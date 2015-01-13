var Generate = function () {
    Manager.board=new Array(Manager.size);
    
    function rand() {
        return parseInt(Math.random()*100);
    }
    
    function possarr() {
    	var poss=[true,true,true,true];
        if(Manager.posnx==0) poss[3]=false;
        else if(Manager.posnx==Manager.size-1) poss[1]=false;
        if(Manager.posny==0) poss[0]=false;
        else if(Manager.posny==Manager.size-1) poss[2]=false;
        var p2=new Array();
        for(var x=0;x<4;x++) if(poss[x]) p2.push(x);
        return p2;
    }

    function possible() {
        var p2=possarr();
        var x=rand()%(p2.length);
        return p2[x];
    }

    function initloop() {
    	var p2=possarr();
        var p3=new Array();
        for(var c=0;c<(p2.length);c++)
        {
        switch(p2[c])
        {case 0:
            if(Manager.board[Manager.posnx][Manager.posny-1]==0) p3.push(p2[c]);break;
            case 1:
            if(Manager.board[Manager.posnx+1][Manager.posny]==0) p3.push(p2[c]);break;
            case 2:
            if(Manager.board[Manager.posnx][Manager.posny+1]==0) p3.push(p2[c]);break;
            case 3:
            if(Manager.board[Manager.posnx-1][Manager.posny]==0) p3.push(p2[c]);break;}}
        if(p3.length==0) return p2[rand()%(p2.length)];
        else{
            var x=rand()%(p3.length);
            return p3[x];}

    }
    
    var tx,ty;
	Manager.posnx=Manager.posny=0;

	for(tx=0;tx<Manager.size;tx++) {
		Manager.board[tx]=new Array(Manager.size);}
	var inino=rand()%6;
	for(tx=0;tx<Manager.size;tx++){for(ty=0;ty<Manager.size;ty++) {Manager.board[tx][ty]=inino;}}

	Manager.posnx=rand()%Manager.size; Manager.posny=rand()%Manager.size;

	for(var c=0;c<Manager.steps;c++)
	{
		Manager.board[Manager.posnx][Manager.posny]=(Manager.board[Manager.posnx][Manager.posny]+1)%6;
		var move=possible();
		//solution.soln.push(move);
		switch(move){
		case 0:
			Manager.posny--;break;
		case 1:
			Manager.posnx++;break;
		case 2:
			Manager.posny++;break;
		case 3:
			Manager.posnx--;break;	}}
}