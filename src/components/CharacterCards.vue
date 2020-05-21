

<template>
  <div>
    <div class="ui container">
      Order by
      <button class="ui blue button" @click="orderElements('name')">Name</button>
      <button class="ui orange button" @click="orderElements('id')">Id</button>
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
    <div class="ui divider"></div>
    <div class="ui container cards">
      <div v-for="location in locationsOrdered" :key="location.id" class="ui card">
        <div class="content">
          <i class="right floated">
            <div class="ui label">
              Id
              <div class="detail">{{location.id}}</div>
            </div>
          </i>
          <span class="header">{{location.name}}</span>
          <div class="ui divider"></div>
          <div class="description">
            <div class="ui labels">
              <div class="ui yellow label">
                Type
                <div class="detail">{{location.type}}</div>
              </div>
              <div class="ui yellow label">
                Dimension
                <div class="detail">{{location.dimension}}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div v-if="loadingState === 'loading' || locationLoadingState === 'loading'">
      Loading characters...
      <img src="/spinner.svg" alt="loading" />
    </div>
  </div>
</template>

<script>
import useFetchResource from "../use/useFetchResource";
import useOrdering from "../use/useOrdering";
import useGlobalEvent from "../use/useGlobalEvent"

export default {
  setup() {
    useGlobalEvent('keydown', () => {
      if(event.code !== 'Space') {
        console.log('remove character')
        characters.value.shift()
      }
    })

    const {
      elements: characters,
      loadingState,
      fetchResource: fetchAllCharacters
    } = useFetchResource("https://rickandmortyapi.com/api/character");
    const {
      elements: locations,
      loadingState: locationLoadingState,
      fetchResource: fetchAllLocations
    } = useFetchResource("https://rickandmortyapi.com/api/location");
    const {
      orderedElements: charactersOrdered,
      orderKey,
      setOrderKey
    } = useOrdering(characters);
    const {
      orderedElements: locationsOrdered,
      orderKey: locationOrderKey,
      setOrderKey: setLocationOrderKey
    } = useOrdering(locations);

    return {
      characters,
      loadingState,
      fetchAllCharacters,
      charactersOrdered,
      orderKey,
      setOrderKey,
      locations,
      locationLoadingState,
      fetchAllLocations,
      locationsOrdered,
      locationOrderKey,
      setLocationOrderKey
    };
  },
  created() {
    this.fetchAllCharacters();
    this.fetchAllLocations();
  },
  methods: {
    orderElements(key) {
      this.setOrderKey(key);
      this.setLocationOrderKey(key);
    }
  }
};
</script>

<style scoped>
</style>