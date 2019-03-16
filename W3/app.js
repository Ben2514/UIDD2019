window.onload=function() {
	$(".dog").effect("shake", {distance:25, times:7}, 6400);
	$(".dragon").effect("shake", {direction:"up", distance:50, times:4}, 4000);
	showOne(p, 3000);
}

var notag=true;	
var p=$(".words");
function showOne(obj, speed) {
	var texts = obj.html().split(""); 
	var s=speed/texts.length; 
	obj.html("").show();
	for (var i=0; i<texts.length; i++) {
		(function (index) {				
			setTimeout(function() {
				if (texts[index]=="<") {
					notag=false;
				}
				else if (texts[index]==">") {
					notag=true;
					obj.append("<br>")
				}
				else if (notag) {
					obj.append(texts[index]);
				}                    
			}, s*index);
		}(i));
	};
};

$(".menubutton").click(function () {
	$(".choice").slideToggle("300");
	$(".choice").css("display", "flex");
});

setTimeout(function() {
	$(".words").fadeOut(1000);
},4500);

setTimeout(function() {
	$(".dragon").animate({left:"52%", top:"32%"}, 1200);	
},5000);

setTimeout(function() {
	$(".island").animate({left:"30vw", top:"5vh", width:"34vw", height:"45vw"}, 7500);	
},6500);

setTimeout(function() {
	$(".dragonbag").animate({left:"25vw", top:"48vh", width:"22vw", height:"11vw"}, 1300);	
},6500);

setTimeout(function() {
	$(".dragonbag").animate({left:"30vw", top:"25vh", width:"24vw", height:"12vw"}, 1300);	
},7900);

setTimeout(function() {
	$(".dragonbag").animate({left:"50vw", top:"13vh", width:"26vw", height:"13vw"}, 1500);	
},8400);

setTimeout(function() {
	$(".dragonbag").animate({left:"38vw", top:"2vh", width:"30vw", height:"15vw"}, 1400);	
},10000);

setTimeout(function() {
	$(".dragonbag").animate({left:"30vw", top:"-8vh", width:"32vw", height:"16vw"}, 1400);	
},11400);

setTimeout(function() {
	$(".bag").animate({left:"50%", bottom:"-80%"}, 1300);	
},12200);

setTimeout(function() {
	$(".dragon").animate({left:"-28%", top:"55%"}, 2000);	
},13500);