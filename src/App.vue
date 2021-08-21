<template lang="pug">
#main
  img(alt="Vue logo", src="./assets/logo.png")
  h1 PTZ Camera Face Tracker

  form(@submit.prevent)
    label(for="camera-ip") PTZ Camera IP
    input(
      type="text",
      name="camera-ip",
      placeholder="192.168.0.1",
      v-model="cameraIP"
    )

    button(@click="connectToCamera") Connect

    button(@click="moveCam", v-if="showURI") Move Camera

  h2(v-if="showURI") {{ streamURI }}
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { Cam } from "onvif";
import cv from "./ts/cv";

let camera: Cam;

export default defineComponent({
  name: "App",
  setup() {
    // * Camera Discovery and Connection Logic
    // Given IP of camera from user, attempt to connect to camera and report status.
    const cameraIP = ref<string>("");
    const showURI = ref<boolean>(false);
    const streamURI = ref<string>("");

    const connectToCamera = () => {
      console.log("Connecting to Camera");

      // Instantiate a camera object and get it's URI for accessing the media.
      camera = new Cam(
        {
          hostname: cameraIP.value,
          username: "",
          password: "",
        },
        function (err) {
          if (err) {
            console.error(err);
          } else {
            this.absoluteMove({ x: 0.5, y: 0, zoom: 0.5 });
            this.getStreamUri(
              { protocol: "RTSP" },
              function (err, streamUriInfo): void {
                if (err) {
                  console.error(err);
                } else {
                  streamURI.value = streamUriInfo.uri;

                  // Display the URI on the app
                  showURI.value = true;
                }
              }
            );
          }
        }
      );
    };

    const moveCam = () => {
      console.log(camera);
      camera.connect(function (err) {
        if (err !== null) {
          throw err;
        } else {
          this.absoluteMove({ x: 0.7, y: 0.6 });
        }
      });
    };

    return {
      cameraIP,
      showURI,
      streamURI,
      connectToCamera,
      moveCam,
    };
  },
});
</script>

<style lang="scss">
#main {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
