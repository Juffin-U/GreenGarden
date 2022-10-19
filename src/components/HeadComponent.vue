<template>
  <div class="contentContH">
    <div
      class="sliderContI"
      style="background-size: cover"
      :style="{
        backgroundImage: 'url(' + require(`../assets/${image}`) + ')',
      }"
    ></div>
    <div class="infoContH">
      <div class="headInfoA">
        <h2 class="headText">{{ headText }}</h2>
      </div>
      <div class="textCont">
        {{ description }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HeadComponent",
  props: {
    headText: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped></style>
