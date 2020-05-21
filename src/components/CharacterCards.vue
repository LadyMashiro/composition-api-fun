<template>
  <div>
    <div>
      Order by
      <button class="ui blue button" @click="setOrderKey('name')">Name</button>
      <button class="ui orange button" @click="setOrderKey('id')">Id</button>
    </div>
    <div class="ui divider"></div>
    <div class="ui container cards">
      <div v-for="character in charactersOrdered" :key="character.id" class="ui card">
        <div class="image">
          <img :src="character.image" />
        </div>
        <div class="content">
          <span class="header">{{character.name}}</span>
          <div class="meta">
            <span class="date">Status: {{character.status}}</span>
          </div>
        </div>
        <div class="extra content">{{character.species}}</div>
      </div>
    </div>

    <div v-if="loadingState === 'loading'">
      Loading characters...
      <img src="/spinner.svg" alt="loading" />
    </div>
  </div>
</template>

<script>
import axios from "axios";
import orderBy from "lodash.orderby";
import { ref, computed } from "@vue/composition-api";

const useFetchAllCharacters = () => {
  const characters = ref([]);
  const loadingState = ref(null);
  const fetchAllCharacters = () => {
    loadingState.value = "loading";
    axios.get("https://rickandmortyapi.com/api/character").then(response => {
      setTimeout(() => {
        loadingState.value = "success";
        characters.value = response.data.results;
      }, 1000);
    });
  };
  return {
    characters,
    loadingState,
    fetchAllCharacters
  };
};

const useOrdering = elements => {
  const orderKey = ref('id')
  const setOrderKey = (key) => {
    orderKey.value = key
  }
  const orderedElements = computed(() => orderBy(elements.value, orderKey.value))
  return {
    orderedElements,
    orderKey,
    setOrderKey
  };
};

export default {
  setup () {
    const {loadingState, characters, fetchAllCharacters} = useFetchAllCharacters()
    const {orderedElements: charactersOrdered, setOrderKey} = useOrdering(characters)
    return {loadingState, characters, fetchAllCharacters, charactersOrdered, setOrderKey}
  },
  data() {
    return {
    };
  },
  computed: {
  },
  methods: {
  },
  created() {
    this.fetchAllCharacters();
  }
};
</script>

<style scoped>
</style>
