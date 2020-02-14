<template>
  <div class="results-list-wrapper">
    <ul>
      <li v-for="tweet in searchResults" :key="tweet.id">
        <Tweet :tweet="tweet"/>
      </li>
    </ul>
  </div>
</template>

<script>
import Tweet from "./Tweet";

export default {
  name: "ResultsList",
  props: {
    searchResults: null
  },
  components: {
    Tweet
  },
  data: function() {
    return {};
  },
  methods: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
ul {
  list-style-type: none;
  padding: 0;
}
</style>
