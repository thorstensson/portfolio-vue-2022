<template>
  <div>
    <div id="hero" class="hero-home is-fullheight">
      <v-vanta></v-vanta>

      <div class="hero-body">
        <div class="container container-home">
          <p class="title is-3 is-size-3-mobile is-size-3-tablet is-size-2-desktop">
            Hi, I'm Thomas
          </p>
          <h2 class="subtitle is-size-1-mobile is-size-1-tablet is-size-1-desktop">
            A <del>freelance</del><br />Developer<br class="rwd-break" />
            & Designer<br />
            from an island.
          </h2>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
import VVanta from "@/components/VVanta";

export default {
  name: "home",

  components: {
    VVanta,
  },
};
</script>

