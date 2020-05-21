import { ref } from "@vue/composition-api";
import axios from "axios";

export default url => {
  const elements = ref([]);
  const loadingState = ref(null);
  const fetchResource = () => {
    loadingState.value = "loading";
    axios.get(url).then(response => {
      setTimeout(() => {
        loadingState.value = "success";
        elements.value = response.data.results;
      }, 1000);
    });
  };
  return {
    elements,
    loadingState,
    fetchResource
  };
}