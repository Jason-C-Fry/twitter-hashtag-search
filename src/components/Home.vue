<template>
  <div class="home-wrapper">
    <b-container class="search-wrapper" fluid>
      <b-row>
        <h3>Search for a hashtag on Twitter</h3>
      </b-row>
      <b-row>
        <div class="search">
         <span class="search-hash">#</span>
         <b-input 
            class="search-box"
            placeholder="Ex: IoT" 
            v-model="searchValue" />
    
          <b-button @click="search">Search</b-button>
          </div>
      </b-row>
    </b-container>
    
    
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
  margin: 20px 0 10px 0;
}
.stats-and-results {
  padding-top: 20px;
}
.search-wrapper {
  margin: auto;
  width: 400px;
}
.search{
  margin: auto;
  display: inline-flex;
}
.search-hash{
  font-size: 25px;
}
.search-box{
  width: 200px;
  margin-right: 10px;
  margin-left: 5px
}

</style>
