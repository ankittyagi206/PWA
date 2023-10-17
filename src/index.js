if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("sw.js")
    .then((registration) => {
      console.log("sw.js registration");
      console.log(registration);
    })
    .catch((error) => console.log(error));
}
