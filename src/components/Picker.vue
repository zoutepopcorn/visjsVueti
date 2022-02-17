<template>
  <v-container>
    <v-date-picker v-model="picker"></v-date-picker>
    {{picker}}
  </v-container>
</template>


<script>
import { picker } from '../state/index'

export default {
  setup () {
    return {
      picker,
    }
  },
}
</script>