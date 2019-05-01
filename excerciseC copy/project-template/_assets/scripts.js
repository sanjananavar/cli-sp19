$(document).ready(function(){
resizeDiv();
});

window.onresize = function(event) {
resizeDiv();
}

function resizeDiv() {
vpw = $(window).width();
vph = $(window).height();
$(‘#haitiparent’).css({‘height’: vph + ‘px’});
}
