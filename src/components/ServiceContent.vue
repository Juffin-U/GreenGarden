<template>
  <div class="contentCont">
    <div class="infoCont">
      <ServiceText :headerText="headerText" :content="content" />
    </div>
    <div class="sliderAndPrice">
      <div class="sliderCont">
        <vueper-slides
          arrows-inside
          bullets-inside
          class="no-shadow"
          transition-speed="250"
          :slide-ratio="0.7"
        >
          <vueper-slide
            v-for="(imagePath, i) in imagePaths"
            :key="i"
            :image="imagePath"
          />
        </vueper-slides>
        <p class="discription">{{ description }}</p>
        <router-link to="/callBack" style="text-decoration: none">
          <button type="button" class="btn btn-success">
            <p class="price">Арендовать за {{ price }}</p>
          </button>
        </router-link>
        <ul>
          <li class="addition" v-for="item in arrayComponentsLust" :key="item">
            {{ item }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import ServiceText from "@/components/Loodging/ServiceText";
import { VueperSlides, VueperSlide } from "vueperslides";
import "vueperslides/dist/vueperslides.css";

export default {
  name: "ServiceContent",
  components: {
    ServiceText,
    VueperSlides,
    VueperSlide,
  },
  props: {
    headerText: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    content: {
      type: Array[String],
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    imagePaths: {
      type: Array,
      required: true,
    },
    arrayComponentsLust: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped lang="scss">
.discription {
  text-align: start;
  width: 100%;
}
.addition {
  text-align: start;
  font-size: 70%;
  font-style: italic;
  font-weight: bold;
  color: black;
}
@media (max-width: 800px) {
  .btn.btn-success {
    display: flex;
    width: 100%;
    padding: 10px 0 0 0;
    align-items: center;
    justify-content: center;
  }
  .price {
    display: flex;
    font-size: 90%;
  }
}
@media (min-width: 800px) {
  .btn {
    display: flex;
    width: 100%;
    padding: 10px 0 0 0;
    align-items: center;
    justify-content: center;
  }
  .price {
    display: flex;
  }
}
</style>
