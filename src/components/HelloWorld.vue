<template>
  <div class="hello">
    <h1 class="ui header">{{ msg }}</h1>
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
  props: {
    msg: String
  },
  data () {
    return {
      ids: [99]
    }
  }
}
</script>
