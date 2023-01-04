<template>
  <div class="post-card">
    <router-link :to="'/project/' + slug">
      <div class="card gamma-color-bg">
        <div class="card-image">
          <figure class="image is-square">
            <img :src="image" alt="Placeholder image" />
          </figure>
        </div>

        <div class="card-content">
          <div class="media">
            <div class="media-content">
              <h3 class="title theta-color is-6 is-weight-450 mb-1-imp">{{ title }}</h3>

              <div class="content">
                <p class="delta-color">{{ snippet }}</p>

                <div class="">
                  <a class="is-size-7"
                    >View Project <i class="fas fa-angle-double-right"></i
                  ></a>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "PostCard",
  props: {
    title: String,
    date: String,
    snippet: String,
    image: String,
    slug: String,
    type: String,
  },
};
</script>



