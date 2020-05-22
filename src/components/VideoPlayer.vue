<template>
  <div class="ui container">
    <h1 class="ui header">Cuteness overload</h1>
    <div class="ui two column grid">
      <div class="column">
        <video
          class="ui rounded"
          ref="video"
          loop
          muted
          playsinline
          src="/puppiness.mp4"
          width="600"
        ></video>
      </div>
      <div class="four column row">
        <div class="column">
          <button class="ui blue button" @click="toggleVideo">Click</button>
        </div>
        <div class="column">
          <i>Use Space or the button on the left to play or pause the video.</i>
        </div>
      </div>
    </div>
    <div class="ui divider"></div>
  </div>
</template>

<script>
import useGlobalEvent from "../use/useGlobalEvent";

export default {
  setup(props, context) {
    const toggleVideo = () => {
      const video = context.refs.video;
      video.paused ? video.play() : video.pause();
    };

    useGlobalEvent("keydown", e => {
      e.preventDefault();
      console.log(event.code);
      // keydown event
      if (e.code === "Space") {
        toggleVideo();
      }
    });
    return { toggleVideo };
  },
  computed: {
    videoPaused() {
      return this.$refs.video.paused ? true : false;
    }
  }
};
</script>

<style>
.rounded {
  border-radius: 10px;
}
</style>