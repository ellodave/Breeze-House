document.addEventListener('DOMContentLoaded', (event) => {
    
    let video = document.querySelector('#video-hero video');
    if (video) {
         video.onsuspend = (event) => {
          video.style.opacity = "0";
        };
        video.addEventListener('playing', (event) => {
          video.style.opacity = "1";
        });
    }
});
