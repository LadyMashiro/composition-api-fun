import { ref } from '@vue/composition-api'

export default (array, size) => {
  var chunk = require('chunk')
  const chunkedArray = ref([])
  const chunkArray = () => {
    chunkedArray.value = chunk(array.value, size)
  }

  return {
    chunkArray, chunkedArray}
}