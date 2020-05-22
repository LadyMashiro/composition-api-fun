

<template>
  <div>
    <div class="ui container">
      <h1 class="ui header">Rick & Morty Characters and Locations</h1>

      <div class="ui column grid">
        <div class="column">
          Order by
          <button class="ui blue button" @click="orderElements('name')">Name</button>
          <button class="ui orange button" @click="orderElements('id')">Id</button>
        </div>
      </div>
      <div class="ui container cards">
        <div v-for="character in charactersOrdered" :key="character.id" class="ui card">
          <div class="image">
            <img :src="character.image" />
          </div>
          <div class="content">
            <i class="right floated">
              <div class="ui label">
                Id
                <div class="detail">{{character.id}}</div>
              </div>
            </i>
            <span class="header">{{character.name}}</span>
            <div class="meta">
              <span class="date">Status: {{character.status}}</span>
            </div>
          </div>
          <div class="extra content">{{character.species}}</div>
        </div>
      </div>
      <div v-if="loadingState === 'loading'">
        <h1 class="ui header centered">Loading characters...</h1>
        <div class="ui active centered inline loader"></div>
      </div>
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

      <div v-if="locationLoadingState === 'loading'">
        <h1 class="ui header centered">Loading locations...</h1>
        <div class="ui active centered inline loader"></div>
      </div>
    </div>
    <div class="ui divider"></div>
  </div>
</template>

<script>
import useFetchResource from "../use/useFetchResource";
import useOrdering from "../use/useOrdering";
import useGlobalEvent from "../use/useGlobalEvent";
import useChunkArray from "../use/useChunkArray";

export default {
  setup() {
    useGlobalEvent("keydown", () => {
      if (event.code !== "Space") {
        console.log("remove character");
        characters.value.shift();
      }
    });

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
    const {
      chunkArray: chunkCharacters,
      chunkedArray: chunkedCharacters
    } = useChunkArray(charactersOrdered, 2);

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
      setLocationOrderKey,
      chunkCharacters,
      chunkedCharacters
    };
  },
  created() {
    this.fetchAllCharacters();
    this.fetchAllLocations();
    this.chunkCharacters();
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