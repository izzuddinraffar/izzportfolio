<template>
  <v-clamp autoresize :max-lines="3">{{ elementHTML }}</v-clamp>
</template>

<script>
import VClamp from "vue-clamp";

export default {
  components: {
    VClamp
  },
  props: ["item"],
  data() {
    return {
      elementHTML: `<v-chip
                      :ripple="false"
                      v-bind:style="${item.style[ti]}"
                      v-for="(tech, ti) in item.tech"
                      :key="ti"
                      >{{ tech }}</v-chip
                    >`
    };
  }
};
</script>
