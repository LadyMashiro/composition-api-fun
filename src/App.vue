<template>
  <div id="app" class="container mx-auto">
    <div class="left-0 top-0 bg-gray-300 rounded-b px-3 mb-6">
      <h1 class="text-3xl">Vue Composition API Workshop</h1>
    </div>
    
    <HelloWorld class="divide-y divide-gray-400"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'app',
  components: {
    HelloWorld
  }
}
</script>
