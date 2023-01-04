<template>
  <div v-if="project">
    <section class="hero">
      <div class="hero-body">
        <div class="container" data-aos="zoom-in" data-aos-delay="300">
          <p class="title is-size-4-mobile is-size-3-tablet is-size-2-desktop">
            {{ project.title }}
          </p>
          <h2
            class="subtitle is-size-2-mobile is-size-1-tablet is-size-1-desktop"
          >
            {{ project.snippet }}
          </h2>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="columns">
          <div
            class="column is-two-fifths"
            data-aos="fade-in"
            data-aos-delay="300"
          >
            <vue-simple-markdown :source="project.body"></vue-simple-markdown>
          </div>

          <div class="column">
            <div class="columns is-multiline is-centered">
              <div
                class="column is-full"
                v-for="(image, id) in project.images.slice(1)"
                v-bind:key="id"
              >
                <div
                  v-if="
                    image.type.includes('jpeg') || image.type.includes('png')
                  "
                  data-aos="fade-in"
                  data-aos-delay="300"
                >
                  <img :src="image.url" />
                </div>

                <div
                  v-if="image.type.includes('mp4')"
                  data-aos="fade-in"
                  data-aos-delay="300"
                >
                  <video
                    autoplay
                    v-bind:id="id"
                    :src="image.url"
                    type="video/mp4"
                    @loadedmetadata="getVideoDimensions"
                    @ended="onEnd(id)"
                  ></video>

                  <div id="video_controls_bar">
                    <button
                      id="playpausebtn"
                      @click="onPlay($event, id)"
                    ></button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>


<script>
import ProjectsService from "@/services/ProjectsService";
export default {
  name: "project",
  data() {
    return {
      airtableResponse: [],
    };
  },

  mounted() {
    let self = this;
    async function getProject() {
      try {
        const response = await ProjectsService.getProject(
          self.$route.params.slug
        );
        self.airtableResponse = response.data.records;
      } catch (err) {
        console.log(err);
      }
    }
    getProject();
  },

  computed: {
    project() {
      let self = this;
      if (self.airtableResponse[0]) {

        console.log("image", self.airtableResponse[0].fields.Image);
        console.log("image", self.airtableResponse[0].fields.Title);
        let thisProject = {
          title: self.airtableResponse[0].fields.Title,
          snippet: self.airtableResponse[0].fields.Excerpt,
          images: self.airtableResponse[0].fields.Image,
          types: self.airtableResponse[0].fields.type,
          body: self.airtableResponse[0].fields.Body,
          id: self.airtableResponse[0].slug,
        };

        return thisProject;
      }
    },
  },

  methods: {
    log(item) {
      console.log(item);
    },

    getVideoDimensions(e) {
      document.querySelectorAll("video").forEach((vid) => {
        vid.height = e.target.videoHeight;
        vid.width = e.target.videoWidth;
        vid.pause();
      });
    },

    onPlay(btn, id) {
      console.log(btn.currentTarget.id, id);

      let vidd = document.getElementById(id);
      let playbtn = btn.currentTarget;

      vidd.btn = playbtn;

      if (vidd.paused) {
        vidd.play();
        playbtn.innerHTML = " ";
        playbtn.style.visibility = "hidden";
      }
    },

    onEnd(id) {
      let vidd = document.getElementById(id);
      vidd.pause();
      vidd.btn.innerHTML = " ";
      vidd.btn.style.visibility = "visible";
    },
  },
};
</script>
