const app = () => {

const song = document.querySelector('.song');
	const sounds = document.querySelectorAll('.weather-change button');
const playbtn = document.querySelector('.play');
	const video = document.querySelector('video');
const timeDisplay = document.querySelector('.time-display');

	const outlinep = document.querySelector('.moving-outline circle');
	const outlineLength = outlinep.getTotalLength();
const timeSelect = document.querySelectorAll('.time-select div');
//Duration
let fakeDuration = 600;

outlinep.style.strokeDasharray = outlineLength;
	
//Choose other sounds

	sounds.forEach(sound => {
sound.addEventListener('click', function(){
song.src = this.getAttribute('data-sound');
	video.src = this.getAttribute('data-video');
	checkPlaying(song);
})

});
	
// Play btn sound
playbtn.addEventListener('click', function(){
checkIfPlaying(song);

});
	// Selecting the sound
timeSelect.forEach(function getp(option){ 
	option.addEventListener('click', function(){

fakeDuration = this.getAttribute('data-time');
	timeDisplay.textContent = `${Math.floor(fakeDuration / 60)}:${Math.floor(fakeDuration % 60)}`;
})
});


	const checkIfPlaying = song  => {
if(song.paused){
song.play();
	playbtn.src = './svg/pause.svg';
video.play();
}
else{
song.pause();
	video.pause();
	playbtn.src = './svg/play.svg';
}

	};
// Animating the circle
song.ontimeupdate = () => {
let curtime = song.currentTime;
	let elapsed = fakeDuration - curtime;
	let seconds = Math.floor(elapsed % 60);
let minutes = Math.floor( elapsed / 60);

	//Animation itself
let progress = outlineLength - (curtime / fakeDuration) * outlineLength
	outlinep.style.strokeDashoffset = progress;
timeDisplay.innerHTML = `${minutes}:${seconds}`;
	if(curtime >= fakeDuration){
song.pause();
		song.currentTime = 0;
		play.src = "./svg/play.svg";
		video.pause();
	}
}


let btnp = document.querySelectorAll('.weather-change button');

	for(let i = 0; i < btnp.length; i++){
console.log(btnp[i].getAttribute('data-video'));
	
	}


}



window.onload = () => {
app();
}
