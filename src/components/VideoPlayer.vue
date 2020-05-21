<template>
  <div class="ui container">
    <video ref="video" loop muted playsinline src="/puppiness.mp4" width="600"></video>
    <button class="ui blue button" @click="toggleVideo">Click</button>
    <div class="ui divider"></div>
  </div>
</template>

<script>
import useGlobalEvent from "../use/useGlobalEvent";

export default {
  setup(props, context) {
    const toggleVideo = () => {
      const video = context.refs.video;
      video.paused ? video.play() : video.pause()
    }

    useGlobalEvent("keydown", e => {
      e.preventDefault();
      console.log(event.code)
      // keydown event
      if (e.code === "Space") {
        toggleVideo()
      }
    });
    return {toggleVideo}
  },
  computed: {
    videoPaused() {
      return this.$refs.video.paused ? true : false;
    }
  },
  methods: {
    /*toggleVideo() {
      const video = this.$refs.video;
      if (video.paused) {
        video.play();
      } else {
        video.pause();
      }
    }*/
  }
};
</script>

<style>
</style>