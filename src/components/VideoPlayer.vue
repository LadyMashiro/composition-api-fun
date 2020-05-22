<template>
  <div class="mb-6">
    <h1 class="text-3xl mb-3">Cuteness overload</h1>
    <div class="grid grid-cols-2 gap-3">
      <div>
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
      <div class="flex flex-col items-center justify-center">
        <i
          class="italic text-gray-600"
        >Use Space or the button on the left to play or pause the video.</i>
        <button
          class="bg-gray-400 rounded-sm px-3 py-1 focus:outline-none focus:shadow-outline"
          @click="toggleVideo"
        >Click</button>
      </div>
    </div>
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