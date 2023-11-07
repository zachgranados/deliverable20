var video;
video = document.querySelector(".video");

window.addEventListener("load", function() {
	
	video.autoplay = false;
	video.loop = false;
	console.log("Good job opening the window");
});



document.querySelector("#play").addEventListener("click", function() {
	
	video.play();
	console.log("Play Video");

	var vol = document.querySelector("#slider").getAttribute("value");
	console.log(vol)

	document.querySelector("#volume").innerHTML = vol + "%";
});

document.querySelector("#pause").addEventListener("click", function(){
	video.pause();
});


var speed = 1;
document.querySelector("#slower").addEventListener("click", function(){

	speed = speed - (speed * .1) 
	video.playbackRate = speed; 
	console.log(speed);
});

document.querySelector("#faster").addEventListener("click", function(){
	speed = (speed *.1) + speed
	video.playbackRate = speed;
	console.log(speed);
});

var duration = video.duration;
document.querySelector("#skip").addEventListener("click", function(){

var current = video.currentTime;
current += 10;

	if (current > duration){
		video.currentTime = 0;
	}

	else{
		video.currentTime = video.currentTime + 10;
	}

	console.log(video.currentTime);


});


document.querySelector("#mute").addEventListener("click", function(){
	
	if(video.muted == false){
	video.muted = true;
	document.querySelector("#mute").innerHTML = "Unmute";
	}

	else {
		video.muted = false;
		document.querySelector("#mute").innerHTML = "Mute"
	}

	console.log(video.muted)
});

document.querySelector("#slider").addEventListener("input", function(){

	
	
	var newVol = document.querySelector("#slider").value;
	var videoVol = newVol / 100;
	video.volume = videoVol;

	// console.log(newVol);

 document.querySelector("#volume").innerHTML = newVol + "%";
});




document.querySelector("#vintage").addEventListener("click", function(){
	video.setAttribute("class", "oldSchool")
});

document.querySelector("#orig").addEventListener("click", function(){
	video.setAttribute("class", "video")
});








