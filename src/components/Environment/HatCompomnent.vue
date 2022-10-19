<template>
  <div class="HatCont">
    <router-link
      class="router"
      v-for="item in this.navData"
      :key="item"
      :to="item[0]"
      >{{ item[1] }}</router-link
    >
  </div>
</template>

<script>
export default {
  name: "HatComponent",
  data: () => {
    return {
      navData: [
        ["/", "Главная"],
        ["/leisure", "Досуг"],
        ["/food", "Банкет"],
        ["/loodging", "Проживание"],
      ],
    };
  },
};
</script>

<style scoped lang="scss">
.HatCont {
  position: sticky;
  top: 0;
  width: 100%;
  height: 35px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  background-color: rgb(0, 166, 42);
  z-index: 10;
}
.router {
  text-decoration: none;
  color: white;
}
</style>
