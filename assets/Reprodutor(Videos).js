AFRAME.registerComponent('video-marker', {
  schema: {
    videoId: { type: 'number' }
  },
  init: function() {
    const videoId = this.data.videoId;
    const video = document.querySelector(`#video${videoId}`);
    video.pause();
    this.el.addEventListener('markerFound', () => {
      video.play();
    });
    this.el.addEventListener('markerLost', () => {
      video.pause();
    });
  }
});
