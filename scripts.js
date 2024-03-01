const video = document.querySelector('.player');
const audio = document.querySelector('.snap');
const canvas = document.querySelector('.photo');
const ctx = canvas.getContext('2d');
const strip = document.querySelector('.strip');


function getVideo() {
    navigator.mediaDevices.getUserMedia({video: true, audio: false})
    .then(localMediaStream => {
        console.log(localMediaStream); /* this accesses the user video data so we can use it on the page) */
   
        video.srcObject = localMediaStream;

        video.play();
})

.catch(err => {
    console.error(`OH NO!!!`, err);
  });
}


function paintToCanvas() {
  
}

function takePhoto() {
    
}