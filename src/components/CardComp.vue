<template>
  <div class="card" v-bind:style="{ backgroundColor: color }">
    <div class="sliderCont">
      <div class="slider">
        <vueper-slides
          arrows-inside
          bullets-inside
          class="no-shadow"
          transition-speed="250"
          :slide-ratio="0.7"
        >
          <vueper-slide
            v-for="(imagePath, i) in images"
            :key="i"
            :image="imagePath"
          />
        </vueper-slides>
      </div>
    </div>
    <div class="infoCard">
      <h2 class="header">{{ name }}</h2>
      <p class="text">{{ text }}</p>
    </div>
  </div>
</template>

<script>
import { VueperSlides, VueperSlide } from "vueperslides";
export default {
  name: "CardComp",
  components: { VueperSlides, VueperSlide },
  props: {
    text: {
      type: String,
      required: true,
    },
    images: {
      type: Array,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    color: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped lang="scss">
.slider {
  width: 100%;
  height: 100%;
}
.header {
  height: 20%;
  align-items: center;
}

@media (max-width: 800px) {
  .infoCard {
    display: flex;
    width: 80%;
    height: 75%;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
  }
  .sliderCont {
    width: 80%;
    height: 80%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .card {
    height: auto;
    width: 100vw;
    padding-top: 10%;
    color: rgb(0, 166, 42);
    display: flex;
    border: 0;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
  }
  .text {
    width: 80%;
    height: 100%;
    display: flex;
    align-items: start;
    justify-content: center;
    text-align: center;
  }
}
@media (min-width: 800px) {
  .infoCard {
    display: flex;
    width: 40%;
    height: 75%;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
  }
  .sliderCont {
    width: 38%;
    height: 80%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .card {
    height: 65vh;
    width: 100vw;
    color: rgb(0, 166, 42);
    display: flex;
    border: 0;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
  }
  .text {
    width: 20vw;
    height: 100%;
    display: flex;
    align-items: start;
    justify-content: center;
    text-align: center;
  }
}
</style>
