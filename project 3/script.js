$('h2').css('cssText' , 'color: blue !important; font-size: 100px !important;');

$('img').html('<img src="https://i.ytimg.com/vi/8evdYCX7f8Q/hqdefault.jpg" />')

$('body').css('cssText' , 'background-color: #14ffbe !important;');
$('body').css('cssText' , 'color: #ef71a2 !important; font-family: "Arial", sans-serif;');
$('figure').html('<img src="https://i.ytimg.com/vi/8evdYCX7f8Q/hqdefault.jpg" />')


IDEA 2:

$('body').css('cssText' , 'background-image: url(background2.png) !important; background-repeat: repeat; !important; background-attachment: fixed; !important;');

$('h2').css('cssText' , 'color: #ceecec !important;');

$('body').css('cssText' , 'background-image: url(https://s3.amazonaws.com/spoonflower/public/design_thumbnails/0311/6227/r2142658_Polka_Dot_charm_plaid-1-2_shop_preview.png) !important; background-repeat: repeat; !important; background-attachment: fixed; !important;');

$('h2').css('cssText' , 'color: #ceecec !important;');


IDEA 3:

$('body').css('cssText' , 'background-color: #76fbc2 !important;');
$('h2').css('cssText' , 'color: #f56a93 !important;');
$('img').html('<img alt="" src="https://static.vecteezy.com/system/resources/previews/000/225/241/non_2x/hand-gesture-modern-pop-art-vector.jpg" />')


https://static.vecteezy.com/system/resources/previews/000/225/241/non_2x/hand-gesture-modern-pop-art-vector.jpg



$('body').css('cssText' , 'color: #f56a93 !important;');


$('h2').css('cssText' , 'color: #ceecec !important;');

TO REPLACE IMAGES:

var newSrc = 'https://i.ytimg.com/vi/8evdYCX7f8Q/hqdefault.jpg';
$('img').attr('src', newSrc);



var newSrc = 'background2.png';
$('img').attr('src', newSrc);


IDEA 4:

var newSrc = 'https://teaching.synopticoffice.com/course/s19_pucd_2125g/projects/navar/project3/images/postit.png';
$('img').attr('src', newSrc);

$('body').css('cssText' , 'background-color: #fff0f0 !important;');

$('body').append('<img src="https://teaching.synopticoffice.com/course/s19_pucd_2125g/projects/navar/project3/images/paper3holes2.png" style="position: absolute; z-index: 10; width: 900px; bottom: 5%; height: 1100px; left: 40%;" />, <img src="https://teaching.synopticoffice.com/course/s19_pucd_2125g/projects/navar/project3/images/stationary1.png" style="position: absolute; top: 70%; left: -20%; width: 900px;" />, <img src="https://teaching.synopticoffice.com/course/s19_pucd_2125g/projects/navar/project3/images/cutuppaper.png" style="position: absolute; z-index: 20; top: 120%; width: 800px; transform: rotate(-20deg); left: 5%;" />, <img src="https://teaching.synopticoffice.com/course/s19_pucd_2125g/projects/navar/project3/images/scribble1.png" style="position: absolute; top: -20%; width: 700px; left: -5%;" />, <img src="https://teaching.synopticoffice.com/course/s19_pucd_2125g/projects/navar/project3/images/thenewyorktimes.png" style="position: absolute; top: 80%; width: 200px; right: 3%;" />, <img src="https://teaching.synopticoffice.com/course/s19_pucd_2125g/projects/navar/project3/images/postitcollage2.png" style="position: absolute; top: 110%; width: 600px; right: 10%; z-index: 100;" />, <img src="https://teaching.synopticoffice.com/course/s19_pucd_2125g/projects/navar/project3/images/lines.png" style="position: absolute; top: 210%; width: 600px; right: 10%; z-index: 100; transform: rotate(20deg);" />, <img src="https://teaching.synopticoffice.com/course/s19_pucd_2125g/projects/navar/project3/images/lines2.png" style="position: absolute; top: 330%; width: 800px; left: 10%; z-index: 100;" />, <img src="https://teaching.synopticoffice.com/course/s19_pucd_2125g/projects/navar/project3/images/brochure2.png" style="position: absolute; top: 500%; width: 800px; left: 40%; z-index: 100; transform: rotate(-10deg);" />, <img src="https://teaching.synopticoffice.com/course/s19_pucd_2125g/projects/navar/project3/images/largepostits2.png" style="position: absolute; top: 600%; width: 900px; left: 20%; z-index: 100;" />, <img src="https://teaching.synopticoffice.com/course/s19_pucd_2125g/projects/navar/project3/images/notes.png" style="position: absolute; top: 830%; width: 400px; right: 2%; z-index: 100;" />, <img src="https://teaching.synopticoffice.com/course/s19_pucd_2125g/projects/navar/project3/images/stencilsgroup2.png" style="position: absolute; top: 700%; width: 1500px; left: 5%; z-index: 100;" />');

$('div > div').css('cssText', 'background-image: url(https://teaching.synopticoffice.com/course/s19_pucd_2125g/projects/navar/project3/images/rippeddiv.png) !important; background-size: cover !important;');

$('h2, h1').css('cssText', 'background-image: url(https://teaching.synopticoffice.com/course/s19_pucd_2125g/projects/navar/project3/images/rippeddiv3.png) !important; background-size: cover !important;');

$('h3').css('cssText', 'background-color: #f3a4c6 !important;');

$('h3').css('cssText', 'background-image: url(https://teaching.synopticoffice.com/course/s19_pucd_2125g/projects/navar/project3/images/rippeddiv2.png) !important; background-size: cover !important;');



var canvas = document.createElement('canvas');
document.body.appendChild(canvas);

document.body.style.margin = 0;
canvas.style.position = 'absolute';

var ctx = canvas.getContext('2d');
resize();


var pos = { x: 0, y: 0 };

window.addEventListener('resize', resize);
document.addEventListener('mousemove', draw);
document.addEventListener('mousedown', setPosition);
document.addEventListener('mouseenter', setPosition);

function setPosition(e) {
  pos.x = e.clientX;
  pos.y = e.clientY;
}


function resize() {
  ctx.canvas.width = window.innerWidth;
  ctx.canvas.height = window.innerHeight;
}

function draw(e) {

  if (e.buttons !== 1) return;

  ctx.beginPath();

  ctx.lineWidth = 5;
  ctx.lineCap = 'round';
  ctx.strokeStyle = '#c0392b';

  ctx.moveTo(pos.x, pos.y);
  setPosition(e);
  ctx.lineTo(pos.x, pos.y);

  ctx.stroke();
}















$('body').append('<img src="https://teaching.synopticoffice.com/course/s19_pucd_2125g/projects/navar/project3/images/paper3holes.png" style="position: fixed; bottom: 100px; left: 800px; z-index: 10; height: 1100px; width: 1000px;" />, <img src="https://teaching.synopticoffice.com/course/s19_pucd_2125g/projects/navar/project3/images/stationary1.png" style="position: fixed; top: 600px;" />, <img src="https://teaching.synopticoffice.com/course/s19_pucd_2125g/projects/navar/project3/images/cutuppaper.png" style="position: fixed; z-index: 20; top: 200px; height: 1000px; width: 800px; transform: rotate(-20deg); left: -100px;" />')
