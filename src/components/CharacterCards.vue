

<template>
  <div>
    <h1 class="text-3xl mb-3">Rick & Morty Characters and Locations</h1>
    <div>
      <i
        class="italic text-gray-600"
      >By clicking any key except for Space, the first character will be removed.</i>
    </div>
    <div>
      Order by
      <button
        :class="[orderKey === 'name'? 'bg-gray-400 text-gray-900':'bg-gray-200 text-gray-600', 'm-3 rounded-sm px-3 py-1 focus:outline-none focus:shadow-outline']"
        @click="orderElements('name')"
      >Name</button>
      <button
        :class="[orderKey === 'id'? 'bg-gray-400 text-gray-900':'bg-gray-200 text-gray-600', 'rounded-sm px-3 py-1 focus:outline-none focus:shadow-outline']"
        @click="orderElements('id')"
      >Id</button>
    </div>

    <div class="grid grid-cols-2 gap-3">
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 mb-6">
        <div
          v-for="character in charactersOrdered"
          :key="character.id"
          class="rounded border-xl border-gray-300 shadow-md relative"
        >
          <img :src="character.image" class="rounded-t-md" />
          <div class="p-3">
            <p class="font-medium">{{character.name}}</p>
            <p class="text-gray-700 text-sm">Status: {{character.status}}</p>
            <p class="text-gray-700 text-sm">Species: {{character.species}}</p>
          </div>
          <div
            class="absolute bottom-0 rounded-tl rounded-br right-0 h-5 text-center w-8 bg-gray-200 text-xs text-gray-600"
          >
            <p class="relative align-center">#{{character.id}}</p>
          </div>
        </div>
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 mb-6">
        <div
          v-for="location in locationsOrdered"
          :key="location.id"
          class="rounded border-gray-300 shadow-md relative"
        >
          <div class="bg-gray-200 rounded-t">
            <p class="px-3 py-1 font-medium">{{location.name}}</p>
          </div>
          <div class="p-3">
            <p class="text-gray-700 text-sm">Type: {{location.type}}</p>
            <p class="text-gray-700 text-sm">Dimension: {{location.dimension}}</p>
          </div>
          <div
            class="absolute bottom-0 rounded-tl rounded-br right-0 h-5 text-center w-8 bg-gray-200 text-xs text-gray-600"
          >
            <p class="relative align-center">#{{location.id}}</p>
          </div>
        </div>
      </div>
    </div>
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