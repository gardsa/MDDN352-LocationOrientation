function init(){
  if (window.DeviceOrientationEvent) {
    window.addEventListener('deviceorientation', deviceOrientationListener);
  }
  else {
    alert('This browser/device does not support device orientation');
  }


  // if(window.DeviceMotionEvent) {
  //   window.addEventListener('devicemotion', function(event) {
  //     var x = event.accelerationIncludingGravity.x;
  //     var y = event.accelerationIncludingGravity.y;
  //     var z = event.accelerationIncludingGravity.z;
  //     var r = event.rotationRate;
  //     var html = 'Acceleration:<br />';
  //     html += 'x: ' + x +'<br />y: ' + y + '<br/>z: ' + z+ '<br />';
  //     html += 'Rotation rate:<br />';
  //     if(r!=null) html += 'alpha: ' + r.alpha +'<br />beta: ' + r.beta + '<br/>gamma: ' + r.gamma + '<br />';
  //     dataContainerMotion.innerHTML = html;
  //   });
  // }
  // else {
  //   alert('This browser/device does not support device motion');
  // }
}

function deviceOrientationListener(event){
  var c = document.getElementById("orientation-canvas");
  var ctx = c.getContext("2d");

  ctx.clearRect(0, 0, c.width, c.height);
  ctx.fillStyle = "#F1F1F1";
  ctx.font = "16px Helvetica";
  ctx.beginPath();
  ctx.moveTo(180, 75);
  ctx.lineTo(210, 75);
  ctx.arc(180, 75, 60, 0, event.alpha * Math.PI / 180);
  ctx.fill();

  ctx.fillStyle = "#969696";
  ctx.beginPath();
  ctx.fillRect(90, 340, 180, event.beta);

  ctx.fillStyle = "#141414";
  ctx.fillText("Alpha: " + event.alpha, 10, 20);
  ctx.fillText("Beta: " + event.beta, 10, 140);
  ctx.fillText("Gamma: " + event.gamma, 10, 270);
  ctx.beginPath();
  ctx.fillRect(180, 150, event.gamma, 90);
}

document.addEventListener('DOMContentLoaded', function(){
  init();
});
