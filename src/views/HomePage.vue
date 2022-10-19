<template>
  <div class="mainCont">
    <div class="image"></div>
    <hat-component></hat-component>
    <div class="navigatePanel">
      <div class="discriptionAndLogo">
        <div class="header"><h1>О нас</h1></div>
        <div class="discription">{{ navigateData.discription }}</div>
        <input type="image" class="logo" :src="require(`@/assets/logo.png`)" />
      </div>
      <div class="slider"></div>
    </div>
    <card-comp
      v-for="item in cardData"
      :key="item"
      :text="item.text"
      :images="item.images"
      :name="item.name"
      :color="item.color"
    ></card-comp>
    <card-comp></card-comp>
    <BasmentComponent></BasmentComponent>
  </div>
</template>

<script>
import CardComp from "@/components/CardComp";
import HatComponent from "@/components/Environment/HatCompomnent";
import BasmentComponent from "@/components/Environment/BasmentComponent";
export default {
  name: "HomePage",
  components: { BasmentComponent, HatComponent, CardComp },
  data: () => {
    return {
      navigateData: {
        discription:
          "«Зеленый сад» — место, где можно отдохнуть у края соснового леса в пределах г. Барнаула. Восстановиться после тяжелых будней и получить огромное количество впечатлений! У нас можно провести запоминающийся и яркий праздник, который еще долго будет дарить вам теплые воспоминания!",
      },
      cardData: [
        {
          name: "Досуг",
          color: "rgba(4,194,36,0.25)",
          text: "В Зелёном саду вы, ваша семья и ваши друзья можете отлично провести время позабыв о проблемах, бущуих за стенами этого прекрасного места",
          images: [
            require("@/assets/food2.webp"),
            require("@/assets/food3.webp"),
            require("@/assets/food5.webp"),
            require("@/assets/food6.webp"),
            require("@/assets/food9.webp"),
            require("@/assets/food10.webp"),
          ],
        },
        {
          name: "Банкет",
          color: "rgba(4,194,36,0.18)",
          text: "В Зелёном саду вы, ваша семья и ваши друзья можете отлично провести время позабыв о проблемах, бущуих за стенами этого прекрасного места",
          images: [
            require("@/assets/leisure2.webp"),
            require("@/assets/leisure1.jpg"),
            require("@/assets/leisure5.webp"),
            require("@/assets/leisure6.webp"),
            require("@/assets/leisure9.webp"),
            require("@/assets/leisure10.webp"),
            require("@/assets/leisure12.webp"),
            require("@/assets/leisure13.webp"),
          ],
        },
        {
          name: "Проживание",
          color: "rgba(4,194,36,0.15)",
          text: "Мы предоставляем комфортабельные и раскошные аппартамнты из наивысших сортов тёмного дуба, обставленные по последнему слову современного дизайна и мебелированные фешенебельной мебелью",
          images: [
            require("@/assets/Looding2.webp"),
            require("@/assets/Looding3.webp"),
            require("@/assets/Looding4.webp"),
            require("@/assets/Looding5.webp"),
            require("@/assets/Looding6.webp"),
            require("@/assets/Looding7.webp"),
            require("@/assets/Looding9.webp"),
          ],
        },
      ],
    };
  },
};
</script>

<style scoped scss>
.mainCont {
  display: flex;
  width: 100%;
  flex-direction: column;
}
.image {
  width: 100vw;
  height: 100vh;
  background: url("../assets/DSC02445-min.webp") no-repeat;
  background-size: cover;
}
.navigatePanel {
  height: 70vh;
  display: flex;
  flex-direction: column;
}

.discription {
  padding: 0 20% 0 20%;
  height: 50%;
  font-size: 115%;
  text-align: center;
}
.logo {
  width: 30%;
  height: 30%;
  margin-bottom: 10%;
}
.header {
  height: 20%;
  display: flex;
  align-items: center;
}

@media (max-width: 800px) {
  .navigatePanel {
    height: auto;
    display: flex;
    flex-direction: column;
  }
  .discriptionAndLogo {
    display: flex;
    padding-top: 10%;
    width: 100%;
    height: auto;
    flex-direction: column;
    align-items: center;
  }
  .slider {
    display: flex;
    width: 100%;
    height: auto;
  }
}
@media (min-width: 800px) {
  .navigatePanel {
    height: 70vh;
    display: flex;
    flex-direction: row;
  }
  .discriptionAndLogo {
    display: flex;
    width: 50%;
    height: 100%;
    flex-direction: column;
    align-items: center;
  }
  .slider {
    display: flex;
    width: 50%;
    height: 100%;
  }
}
</style>
