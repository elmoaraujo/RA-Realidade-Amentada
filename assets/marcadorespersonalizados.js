const numMarcadores = 13;
const marcadores = [
  { url: "/markers/marcador1.patt", videoId: "video1" },
  { url: "/markers/marcador2.patt", videoId: "video2" },
  { url: "/markers/marcador3.patt", videoId: "video3" },
  { url: "/markers/marcador4.patt", videoId: "video4" },
  { url: "/markers/marcador5.patt", videoId: "video5" },
  { url: "/markers/marcador6.patt", videoId: "video6" },
  { url: "/markers/marcador7.patt", videoId: "video7" },
  { url: "/markers/marcador8.patt", videoId: "video8" },
  { url: "/markers/marcador9.patt", videoId: "video9" },
  { url: "/markers/marcador10.patt", videoId: "video10" },
  { url: "/markers/marcador11.patt", videoId: "video11" },
  { url: "/markers/marcador12.patt", videoId: "video12" },
  { url: "/markers/marcador13.patt", videoId: "video13" },
];

document.addEventListener("DOMContentLoaded", function() {
  for (let i = 0; i < numMarcadores; i++) {
    const marcador = marcadores[i];
    const videoId = marcador.videoId;

    const video = document.getElementById(videoId);
  
    const marker = document.createElement("a-marker");
    marker.setAttribute("type", "pattern");
    marker.setAttribute("url", marcador.url);
    marker.setAttribute("video-marker", `videoId: ${i + 1}`);
  
    const videoEl = document.createElement("a-video");
    videoEl.setAttribute("width", "1.5");
    videoEl.setAttribute("height", "1");
    videoEl.setAttribute("scale", "1 1 -1");
    videoEl.setAttribute("position", "0 0.5 0");
    videoEl.setAttribute("rotation", "-90 0 0");
    videoEl.setAttribute("class", "clickable");
    videoEl.setAttribute("gesture-handler", "");
    videoEl.setAttribute("src", `#${videoId}`);
  
    marker.appendChild(videoEl);
    document.querySelector("a-scene").appendChild(marker);
  }
  if ('xr' in navigator && 'isSessionSupported' in navigator.xr) {
    navigator.xr.isSessionSupported('immersive-ar').then((supported) => {
      if (supported) {
        // Dispositivo suporta WebXR
        document.querySelector("button#start-ar").addEventListener("click", startAR);
      } else {
        // Dispositivo não suporta WebXR
        console.log("Este dispositivo não suporta WebXR.");
      }
    });
  } else {
    // Navegador não suporta WebXR
    console.log("Este navegador não suporta WebXR.");
  }
  
  // Solicita acesso à câmera do dispositivo
  function startAR() {
    navigator.xr.requestSession('immersive-ar', {
      requiredFeatures: ['hit-test', 'dom-overlay'],
      optionalFeatures: ['dom-overlay'],
    }).then((session) => {
      // Inicie a experiência de AR
      // ...
    }).catch((error) => {
      console.log("Erro ao solicitar acesso à câmera:", error);
    });
  }
});