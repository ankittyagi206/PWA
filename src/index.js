const cameraBtn = document.getElementById("camera");

const successCallback = () => {
  console.log("video success");
};

const errorCallback = () => {
  console.log("video error");
};

cameraBtn.addEventListener("click", async function init(e) {
  console.log("hello");
  try {
    const stream = await navigator.mediaDevices.getUserMedia(
      {
        audio: false,
        video: {
          mandatory: {
            minAspectRatio: 1.333,
            maxAspectRatio: 1.334,
            facingMode: "user",
          },
          optional: [
            { minFrameRate: 60 },
            { maxWidth: 640 },
            { maxHeigth: 480 },
          ],
        },
      },
      successCallback,
      errorCallback
    );

    const videoTracks = stream.getVideoTracks();
    const track = videoTracks[0];
    alert(`Getting video from: ${track.label}`);
    document.querySelector("video").srcObject = stream;
    document.querySelector("#camera").setAttribute("hidden", true);

    //The video stream is stopped by track.stop() after 3 second of playback.
    // setTimeout(() => {

    // }, 5 * 1000);
  } catch (error) {
    alert(`${error.name}`);
    console.error(error);
  }
});

if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("sw.js")
    .then((registration) => {
      console.log("sw.js registration");
      console.log(registration);
    })
    .catch((error) => console.log(error));
}
