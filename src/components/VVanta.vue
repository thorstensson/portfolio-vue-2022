<template>
  <v-vanta effect="trunk" :options="options"></v-vanta>
</template>
 
<script>
import VVanta from "vue-vanta";
import * as p5 from "p5";
export default {
  components: { VVanta },

  data() {
    return {
      options: {
        backgroundColor: 0xfffaeb,
        color: 0x7B6D8D,
        minHeight: 200.0,
        minWidth: 200.0,
        opacity:.2,
        p5: p5,
      },
    };
  },
};
</script>