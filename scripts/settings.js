var Settings = new function () {
    var predefined = [[5,45],[6,70],[7,100]];
    
    this.applySettings = function () {
        Manager.size = Helpers.gei("size").value;
        Manager.steps = Helpers.gei("steps").value;
        Manager.new();
    }
    
    this.changeDifficulty = function (difficulty) {
        Helpers.gei("size").value=predefined[difficulty][0];
        Helpers.gei("steps").value=predefined[difficulty][1];
    }
}