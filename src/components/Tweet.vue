<template>
  <div class="tweet-wrapper">
        <h4 class="tweeter-name">{{ tweet.user.name }} - <a :href="tweeterUrl" target="_blank">@{{ tweet.user.screen_name}}</a></h4>
        <div class="tweet">{{ tweet.full_text }}&nbsp;<a :href="postUrl" target="_blank" title="View Full Post"><b-icon-box-arrow-up-right/></a></div>
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
methods: {},
computed: {
    tweeterUrl: function(){
        return "http://www.twitter.com/" + this.tweet.user.screen_name;
    },
    postUrl: function(){
        return "http://www.twitter.com/" + this.tweet.user.screen_name + "/status/" + this.tweet.id_str;
    }
}
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
