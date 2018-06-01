/* navbar

function Scroll(){
var top = document.getElementById('my-navbar');
var ypos = window.pageYOffset;
if(ypos > 500) {
	top.style.opacity = "0";
}
else{
	top.style.opacity = "0.9";
	}
}
window.addEventListener("scroll",Scroll);

*/

/*
parallax
*/
var ypos,image;
function parallex () {
ypos = window.pageYOffset;
image = document.getElementById('background-container');
image.style.top = ypos * .8 +'px';
}
window.addEventListener('scroll',parallex);
/*
scroll parallex
*/
$(document).ready(function() {
    $(window).stellar();
});
$(document).ready(
  function() { 
    $("html").niceScroll({
        cursorcolor:"rgba(30,30,30,.5)",
        zindex:999,
        scrollspeed:100,
        mousescrollstep:50,
        cursorborder:"0px solid #fff",
    });
  }
);
