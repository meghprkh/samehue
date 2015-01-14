var Input= new function()
{
    this.gamebind=function() {
        Mousetrap.bind('up',function(e) {Manager.playMove('up')});
        Mousetrap.bind('right',function(e) {Manager.playMove('right')});
        Mousetrap.bind('down',function(e) {Manager.playMove('down')});
        Mousetrap.bind('left',function(e) {Manager.playMove('left')});
        /*var hammertime = new Hammer(Helpers.gei("container"));
        hammertime.get('swipe').set({ direction: Hammer.DIRECTION_ALL,velocity:0.01 });
        hammertime.on('swipeup swipedown swipeleft swiperight',function(ev){Manager.playMove(ev.type.substring(5));});*/
        //touchinp();
    }
    function touchinp(){
        if (window.navigator.msPointerEnabled) {
            //Internet Explorer 10 style
            this.eventTouchstart    = "MSPointerDown";
            this.eventTouchmove     = "MSPointerMove";
            this.eventTouchend      = "MSPointerUp";
        } else {
            this.eventTouchstart    = "touchstart";
            this.eventTouchmove     = "touchmove";
            this.eventTouchend      = "touchend";
        }
        var touchStartClientX, touchStartClientY;
        var gameContainer = document.getElementById("container");

        gameContainer.addEventListener(this.eventTouchstart, function (event) {
            if ((!window.navigator.msPointerEnabled && event.touches.length > 1) ||
                event.targetTouches > 1) {
                    return; // Ignore if touching with more than 1 finger
                }

            if (window.navigator.msPointerEnabled) {
                touchStartClientX = event.pageX;
                touchStartClientY = event.pageY;
            } else {
                touchStartClientX = event.touches[0].clientX;
                touchStartClientY = event.touches[0].clientY;
            }

            event.preventDefault();
        });

        gameContainer.addEventListener(this.eventTouchmove, function (event) {
            event.preventDefault();
        });

        gameContainer.addEventListener(this.eventTouchend, function (event) {
            if ((!window.navigator.msPointerEnabled && event.touches.length > 0) ||
                event.targetTouches > 0) {
                    return; // Ignore if still touching with one or more fingers
                }

            var touchEndClientX, touchEndClientY;

            if (window.navigator.msPointerEnabled) {
                touchEndClientX = event.pageX;
                touchEndClientY = event.pageY;
            } else {
                touchEndClientX = event.changedTouches[0].clientX;
                touchEndClientY = event.changedTouches[0].clientY;
            }

            var dx = touchEndClientX - touchStartClientX;
            var absDx = Math.abs(dx);

            var dy = touchEndClientY - touchStartClientY;
            var absDy = Math.abs(dy);

            if (Math.max(absDx, absDy) > 10) {
                // (right : left) : (down : up)
                Manager.playMove( absDx > absDy ? (dx > 0 ? 1 : 3) : (dy > 0 ? 2 : 0));
    }});}
}
