<template>
  <div class="stats-wrapper">
    <h4>Top Twenty Keywords Found</h4>
    <b-table hover :items="theList" class="stats-table"/>
  </div>
</template>

<script>
import { stopWordsService } from "../services/stopWords.service";

export default {
name: "Stats",
props: {
    tweetsText: null
},
data: function() {
    return {
    ready: false
    };
},
computed: {
    theList: function() {
    let tempList = {};
    let finalList = [];
    this.tweetsText.map(item => {
        item
        .toLowerCase()
        .split(" ")
        .map(word => {
            if (!stopWordsService.check(word)) {
            if (tempList[word] == null) {
                tempList[word] = 1;
            } else {
                tempList[word]++;
            }
            }
        });
    });

    let count = 0;
    while (finalList.length < 20) {
        count++;
        let highest = 0;
        let highestProp = null;
        for (const key in tempList) {
        if (tempList[key] > highest) {
            highest = tempList[key];
            highestProp = key;
        }
        }
        finalList.push({"rank": count, "keyword" :highestProp, "count": highest });
        delete tempList[highestProp];
    }
    return finalList;
    }
},
methods: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.stats-wrapper {
    padding-top: 20px;
    margin: auto
}
.stats-table{
    margin: auto
}
</style>
