<template>
  <v-container>

    <v-row>
      <v-col>
        <Timeline ref="timeline" :items="items" :groups="groups" :options="options"></Timeline>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
      </v-col>
      <v-col>
        <Picker></Picker>
      </v-col>
    </v-row>

  </v-container>
</template>

<script>
import {Timeline} from 'vue-visjs'
import {ref} from '@vue/composition-api'
import {groups, items, options, setTimeline} from "@/state";

import Picker from './Picker'

export default {
  name: 'HelloWorld',
  setup() {
     // start
    // zoomMax 31536000000
    //  min: new Date(Date.now() + 1000 * 60 *60 * 24 * 30 * 600),
    // console.log(Timeline.methods.getItemRange) // .moveTo(new Date())
    // .moveTo(new Date(Date.now() - 1000 * 60 * 60 * 400)));

    return {groups, items, options}
  },
  data: () => ({
    test: ""
  }),
  components: {
    Timeline,
    Picker
  },
  mounted() {
    setTimeline(this.$refs.timeline);
    // console.log("hallo ", );
    // setInterval(() => {
    //   this.$refs.timeline.moveTo(new Date(Date.now() - 1000 * 60 * 60 * 24 * 200));
    // }, 3000)
  }
}
</script>

<style>
.vis-point .rood {
  border-color: red;
}
.vis-point .zwart {
  border-color: black;
}
</style>