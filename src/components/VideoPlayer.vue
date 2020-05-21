<template>
<div class="ui container">
  <video ref="video" loop muted playsinline src="/puppiness.mp4" width="600"></video>
  <button class="ui blue button" @click="toggleVideo">Click</button>
  <div class="ui divider"></div>
</div>
</template>

<script>
export default {
/*setup () {
  const videoState = computed(() => {
    return this.$refs.video
  })
  return {
    videoState
  }
},*/
computed: {
  videoPaused () {
    return this.$refs.video.paused ? true : false
  }
},
methods: {
  toggleVideo() {
    const video = this.$refs.video
    if(video.paused) {
      video.play()
    } else {
      video.pause()
    }
  }
}
}
</script>

<style>

</style>