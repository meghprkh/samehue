var Manager=new function ()
{
    this.state; //not started/playing/paused/over
    this.size=7;
	this.steps=95;
	this.moves=0;
	this.posnx;
	this.posny;
    this.board;

    this.init = function () {
        Input.gamebind();
        Display.init();
        this.changeState(0);
    }
    
    this.changeState = function (state) {
        this.state=state;
        Display.stateChanged();
    }
    
    this.new = function () {
        this.changeState(1);
      	this.moves = 0 ;
        Board.init();
        Display.new();
        Generate();
        Board.print();
    }

	this.isSolved = function () {
		var tx,ty,theno=this.board[0][0];
		for(tx=0;tx<this.size;tx++)
			for(ty=0;ty<this.size;ty++)
				{if(this.board[tx][ty]!=theno) return false;}
		return true;
	}

	this.playMove = function (x) {
		var invalid=false;
		Board.removeCursor();
		switch(x) {
			case 'up':case 0:
				if(this.posny!=0) this.posny--;
				else invalid=true;
				break;
			case 'left':case 3:
				if(this.posnx!=0) this.posnx--;
				else invalid=true;
				break;
			case 'down':case 2:
				if(this.posny!=this.size-1) this.posny++;
				else invalid=true;
				break;
			case 'right':case 1:
				if(this.posnx!=this.size-1) this.posnx++;
				else invalid=true;
				break;
		}

		if(!invalid){
			if(this.board[this.posnx][this.posny]!=0)
				this.board[this.posnx][this.posny]--;
			else this.board[this.posnx][this.posny]=5;
			this.moves++;
			Board.updateSquare();
		}

		Board.addCursor();
		Display.updateScore();

		if(this.isSolved()) {
			alert("Solved in "+this.moves+" moves instead of "+this.steps+" moves.");
            this.changeState(3);
        }
	}
}
