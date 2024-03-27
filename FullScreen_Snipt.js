javascript:(function() {
    var fullScreenButton = document.createElement('button');
    fullScreenButton.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-fullscreen" viewBox="0 0 16 16"><path d="M1.5 1a.5.5 0 0 0-.5.5v4a.5.5 0 0 1-1 0v-4A1.5 1.5 0 0 1 1.5 0h4a.5.5 0 0 1 0 1zM10 .5a.5.5 0 0 1 .5-.5h4A1.5 1.5 0 0 1 16 1.5v4a.5.5 0 0 1-1 0v-4a.5.5 0 0 0-.5-.5h-4a.5.5 0 0 1-.5-.5M.5 10a.5.5 0 0 1 .5.5v4a.5.5 0 0 0 .5.5h4a.5.5 0 0 1 0 1h-4A1.5 1.5 0 0 1 0 14.5v-4a.5.5 0 0 1 .5-.5m15 0a.5.5 0 0 1 .5.5v4a1.5 1.5 0 0 1-1.5 1.5h-4a.5.5 0 0 1 0-1h4a.5.5 0 0 0 .5-.5v-4a.5.5 0 0 1 .5-.5"/></svg>'; 
    fullScreenButton.classList.add('FulScrn');
    fullScreenButton.style.position = 'fixed';
    fullScreenButton.style.top = '10px';
    fullScreenButton.style.right = '10px';
    fullScreenButton.style.zIndex = '99999999999';
    fullScreenButton.style.touchAction = 'none'; // Disable default touch actions
    var touchStartX, touchStartY, buttonStartX, buttonStartY;

    function handleTouchStart(event) {
        touchStartX = event.touches[0].clientX;
        touchStartY = event.touches[0].clientY;
        buttonStartX = parseInt(fullScreenButton.style.right);
        buttonStartY = parseInt(fullScreenButton.style.top);
    }

    function handleTouchMove(event) {
        event.preventDefault(); // Prevent scrolling while dragging
        var touchX = event.touches[0].clientX;
        var touchY = event.touches[0].clientY;
        var offsetX = touchX - touchStartX;
        var offsetY = touchY - touchStartY;
        var newRight = buttonStartX - offsetX;
        var newTop = buttonStartY + offsetY;
        
        // Boundary checks to prevent the button from moving outside the body
        var maxX = document.body.clientWidth - fullScreenButton.offsetWidth;
        var maxY = document.body.clientHeight - fullScreenButton.offsetHeight;
        newRight = Math.min(Math.max(0, newRight), maxX);
        newTop = Math.min(Math.max(0, newTop), maxY);

        fullScreenButton.style.right = newRight + 'px';
        fullScreenButton.style.top = newTop + 'px';
    }

    fullScreenButton.addEventListener('touchstart', handleTouchStart, false);
    fullScreenButton.addEventListener('touchmove', handleTouchMove, false);

    fullScreenButton.addEventListener('click', function() {
        if (document.fullscreenElement || document.webkitFullscreenElement || document.mozFullScreenElement || document.msFullscreenElement) {
            if (document.exitFullscreen) {
                document.exitFullscreen();
            } else if (document.webkitExitFullscreen) {
                document.webkitExitFullscreen();
            } else if (document.mozCancelFullScreen) {
                document.mozCancelFullScreen();
            } else if (document.msExitFullscreen) {
                document.msExitFullscreen();
            }
        } else {
            var element = document.documentElement;
            if (element.requestFullscreen) {
                element.requestFullscreen();
            } else if (element.webkitRequestFullscreen) {
                element.webkitRequestFullscreen();
            } else if (element.mozRequestFullScreen) {
                element.mozRequestFullScreen();
            } else if (element.msRequestFullscreen) {
                element.msRequestFullscreen();
            }
        }
    });
    document.body.appendChild(fullScreenButton);
   let FulScrnStyle = document.createElement('style');
    FulScrnStyle.innerHTML = ".FulScrn{width:auto;height:auto;aspect-ratio:1/1;border:none;outline:none;padding:13px;border-radius:21px; background:rgba(41,41,41,1);box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;z-index:9999999999}.FulScrn svg{width:17px;height:17px;color:#eb2060;fill:#fff;aspect-ratio:1/1;}";
    document.body.appendChild(FulScrnStyle);
})();
          
