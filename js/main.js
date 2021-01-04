$(function(){
    init()
    console.log("Main loaded");
});

function init(){
    console.log("init()");
    // boardInit();
    board = new Board(ROW_LEN_1, COL_LEN_1);
    board.boardInit();
}

// disable scrolling on mobile, taken from 
// https://stackoverflow.com/questions/10592411/disable-scrolling-in-all-mobile-devices
window.addEventListener("scroll", preventMotion, false);
window.addEventListener("touchmove", preventMotion, false);
function preventMotion(event) {
    window.scrollTo(0, 0);
    event.preventDefault();
    event.stopPropagation();
}