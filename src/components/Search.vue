<template>
  <div>
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
    
          <b-button @click="$emit('search', searchValue)">Search</b-button>
          </div>
      </b-row>
    </b-container>
  </div>
</template>

<script>

export default {
name: "Search",
props: {
},
data: function() {
    return {
        searchValue: "",
    };
},
methods: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 20px 0 10px 0;
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
