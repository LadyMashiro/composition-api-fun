<template>
  <div class="hello">
      <VideoPlayer />
      <CharacterCards />
  </div>
</template>

<script>
import CharacterCards from './CharacterCards'
import VideoPlayer from './VideoPlayer'

export default {
  name: 'HelloWorld',
  components: {
    CharacterCards,
    VideoPlayer
  },
  data () {
    return {
      ids: [99]
    }
  }
}
</script>
