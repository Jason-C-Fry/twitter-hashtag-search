<template>
  <div class="home-wrapper">
  
    <Search @search="search" />
    
    <b-container class="stats-and-results" fluid>
      <b-row>
        <b-col cols="3">
          <stats 
            v-if="ready" 
            :tweetsText="tweetsText" />
        </b-col>
        <b-col>
          <ResultsList :searchResults="twitterResults" />
        </b-col>
      </b-row>
    </b-container>

  </div>
</template>

<script>
import { TwitterService } from "../services/twitterApi.service";
import Stats from "./Stats";
import ResultsList from "./ResultsList.vue";
import Search from "./Search";

export default {
  name: "Home",
  components: {
    ResultsList,
    Stats,
    Search
  },
  data: function() {
    return {
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
    search: function(searchString) {
      this.twitterResults = TwitterService.fetchData(searchString);
      this.ready = true;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.stats-and-results {
  padding-top: 20px;
}
</style>
