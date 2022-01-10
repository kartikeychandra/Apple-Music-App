console.log("Welcome to Apple Music");
let index = 0
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById("masterPlay");
let myProgressBar = document.getElementById("myProgressBar");
let gif = document.getElementById("gif")
let songName = document.getElementById("songName")


masterPlay.addEventListener('click', ()=> {
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
        songName.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
        songName.style.opacity = 0;
    }
})
audioElement.addEventListener('timeupdate', ()=> {
    console.log('timeupdate');
    progress = parseInt((audioElement.currentTime/audioElement.duration)* 100)
    console.log(progress);
    myProgressBar.value = progress;
})
myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
}) 
const makeAllPlays = () =>{
    Array.from(document.getElementsByClassName("songItemPlay")).forEach((Element)=>{
        Element.classList.remove('fa-pause-circle');
        Element.classList.add('fa-play-circle');
    })    
}
Array.from(document.getElementsByClassName("songItemPlay")).forEach((Element)=>{
    Element.addEventListener('click', (e)=>{
        makeAllPlays();
        index = parseInt(e.target.id)
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `songs/${index}.mp3`;
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle')
        gif.style.opacity = 1
        
    })
})
document.getElementById('forward').addEventListener('click', ()=>{
    if(index>10){
        index= 0
    }
    else{
        index += 1;
    }
    audioElement.src = `songs/${index}.mp3`;
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle')
        gif.style.opacity = 1
})
document.getElementById('backward').addEventListener('click', ()=>{
    if(index<1){
        index= 10
    }
    else{
        index -= 1;
    }
    audioElement.src = `songs/${index}.mp3`;
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle')
        gif.style.opacity = 1
})