var Helpers = new function() {
    this.gei = function (id) {return document.getElementById(id);}
    
    this.getWindowSize = (function() {
        var docEl = document.documentElement,
          IS_BODY_ACTING_ROOT = docEl && docEl.clientHeight === 0;

        // Used to feature test Opera returning wrong values 
        // for documentElement.clientHeight. 
        function isDocumentElementHeightOff () { 
          var d = document,
              div = d.createElement('div');
          div.style.height = "2500px";
          d.body.insertBefore(div, d.body.firstChild);
          var r = d.documentElement.clientHeight > 2400;
          d.body.removeChild(div);
          return r;
        }

        if (typeof document.clientWidth == "number") {
         return function () {
           return { width: document.clientWidth, height: document.clientHeight };
         };
        } else if (IS_BODY_ACTING_ROOT || isDocumentElementHeightOff()) {
          var b = document.body;
          return function () {
            return { width: b.clientWidth, height: b.clientHeight };
          };
        } else {
          return function () {
            return { width: docEl.clientWidth, height: docEl.clientHeight };
          };
        }
    })();
};