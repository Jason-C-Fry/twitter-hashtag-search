<template>
  <div class="tweet-wrapper">
        <h2 class="tweeter-name">{{ tweet.user.name }} - {{ tweet.user.screen_name}}</h2>

        <div class="tweet">{{ tweet.full_text }}</div>
  </div>
</template>

<script>
export default {
name: "Tweet",
props: {
    tweet: null
},
data: function() {
    return {};
},
methods: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.tweeter-name {
    text-align: left;
    margin-bottom: 0px;
}
.tweet {
    text-align: left;
}
</style>
