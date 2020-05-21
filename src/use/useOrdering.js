import {ref, computed} from '@vue/composition-api'
import orderBy from 'lodash.orderby'

export default elements => {
  const orderKey = ref('id')

  const orderedElements = computed(() => {
    return orderBy(elements.value, orderKey.value)
  })

  const setOrderKey = key => {
    orderKey.value = key
  }

  return {orderedElements, orderKey, setOrderKey}
}