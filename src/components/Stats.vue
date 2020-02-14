<template>
  <div class="stats-wrapper">
      <h4>Top Twenty Keywords Found</h4>
    <ul>
      <li v-for="(pairValue, index) of theList" :key="index">
        <b>{{ index +1 }}:</b>
        <span v-for="(item, key) of pairValue" :key="key">&nbsp;{{key}} {{item}}</span>
      </li>
    </ul>
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

    while (finalList.length < 20) {
        let highest = 0;
        let highestProp = null;
        for (const key in tempList) {
        if (tempList[key] > highest) {
            highest = tempList[key];
            highestProp = key;
        }
        }
        finalList.push({ [highestProp]: highest });
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
ul {
    list-style-type: none;
    padding: 0;
}
</style>
