<template>
  <div class="home-wrapper">
    <h3>Search for a hashtag on Twitter</h3>#
    <input 
      type="text" 
      placeholder="Ex: IoT" 
      v-model="searchValue" />
    
    <button @click="search">Search</button>
    
    <stats 
      v-if="ready" 
      :tweetsText="tweetsText" />
    
    <ResultsList :searchResults="twitterResults" />
  </div>
</template>

<script>
import { TwitterService } from "../services/twitterApi.service";
import Stats from "./Stats";
import ResultsList from "./ResultsList.vue";

export default {
  name: "Home",
  props: {
    msg: String
  },
  components: {
    ResultsList,
    Stats
  },
  data: function() {
    return {
      searchValue: "",
      twitterResults: [],
      ready: false
    };
  },
  computed: {
    tweetsText: function() {
      let tempArray = [];
      this.twitterResults.map(item => {
        tempArray.push(item.full_text);
      });
      return tempArray;
    }
  },
  methods: {
    search: function() {
      this.twitterResults = TwitterService.fetchData(this.searchValue);
      this.ready = true;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 20px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
