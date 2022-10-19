<template>
  <h2 class="title">{{ headerText }}</h2>
  <div class="servicePanel">
    <div class="serviceItem" v-for="item in content" :key="item">
      <div class="imageCont">
        <input
          class="serviceImage"
          type="image"
          :src="require(`@/assets/icons/${item[1]}.png`)"
        />
      </div>
      <p class="serviceName">{{ item[0] }}</p>
    </div>
  </div>
  <div>{{ description }}</div>
</template>

<script>
export default {
  name: "ServiceText",
  props: {
    headerText: {
      type: String,
      required: true,
    },
    content: {
      type: Array[String],
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
  },
};
</script>

<style scoped lang="scss">
.serviceItem {
  width: 100%;
  height: auto;
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}
.serviceImage {
  display: flex;
  width: 30px;
  height: 30px;
}
.serviceName {
  width: 90%;
  font-size: 130%;
  text-align: start;
  height: auto;
  color: black;
}
.servicePanel {
  padding: 30px 0 0 0;
  width: 100%;
  height: 80%;
}
.title {
  color: rgb(0, 166, 42);
}
.imageCont {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 0 10px 0;
}
</style>
