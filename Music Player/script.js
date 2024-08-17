console.log("Welcome to TuneTwist");
// Initialize the Variable
let songIndex = 0;
let audioelement = new Audio("1.mp3");
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let songs =    [{songName:"Isq",filePath: "song/1.mp3",coverPath:  "cover/1.jpg"},
    {songName:"Isq",filePath: "song/1.mp3",coverPath:  "cover/1.jpg"},
    {songName:"Isq",filePath: "song/1.mp3",coverPath:  "cover/1.jpg"},
    {songName:"Isq",filePath: "song/1.mp3",coverPath:  "cover/1.jpg"}
]
masterPlay.addEventListener('click',()=>{
    if(audioelement.paused||audioelement.currentTime<=0){
        audioelement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;

    }
    else{
        audioelement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;

    }
})
// listen to Events
myProgressBar.addEventListener('timeupdate',()=>{
    console.log('timeupdate');
    //Update Seekbar
})

