$(document).ready(function(){	
		
		var fontColors = ["#ff0000", "#ff9900", "#ffff00", "#33cc33", "#00ccff", "#0000ff", "#3333cc", "#6600cc"];
		var randomIndex = Math.floor(Math.random() * ((fontColors.length-1)));
		$('#header-wrapper').css('color', fontColors[randomIndex]);	

		setInterval(function(){
			do {
				var randomIndex2 = Math.floor(Math.random() * ((fontColors.length-1))); 
			} while (randomIndex == randomIndex2);
			 $('#header-wrapper').animate({color: fontColors[randomIndex2]}, 3000);	
		}, 1000);
		
					
});

