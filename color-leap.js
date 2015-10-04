$(document).ready(function(){
var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");
    ctx.fillStyle = '#0000ff';
    $("#blue").click(function() {
      		ctx.fillStyle = '#0000ff';
    });
    $("#red").click(function() {
      		ctx.fillStyle = '#ff0000';
    });
    $("#yellow").click(function() {
      		ctx.fillStyle = '#ffff00';
    });
    $("#green").click(function() {
      		ctx.fillStyle = '#008000';
    });
    $("#erase").click(function() {
      		ctx.fillStyle = '#ffffff';
    });
    $("#save").click(function() {
			var image = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream"); 
			window.location.href=image; 
    });

    Leap.loop({frameEventName: "animationFrame"}, function(frame) {

          frame.pointables.forEach(function(pointable) {
          var position = pointable.stabilizedTipPosition;
          var normalized = frame.interactionBox.normalizePoint(position);

          var x = ctx.canvas.width * normalized[0];
          var y = ctx.canvas.height * (1 - normalized[1]);
          ctx.beginPath();
          ctx.rect(x, y, 20, 20);
          ctx.fill();
        });
    });
});