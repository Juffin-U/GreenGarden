<template>
  <HatCompomnent></HatCompomnent>
  <div class="mainCont">
    <HeadComponent
      class="contentContH"
      v-for="item in HeadData"
      :key="item"
      :description="item.description"
      :head-text="item.name"
      :image="item.image"
    ></HeadComponent>
    <ServiceContent
      class="contentCont"
      v-for="item in serviceData"
      :addition="item.addition"
      :symbol="item.symbol"
      :key="item"
      :headerText="item.name"
      :description="item.discript"
      :content="item.arrayComponents"
      :contentLust="item.arrayComponentsLust"
      :price="item.price"
      :humans="item.humans"
      :image-paths="item.imagePaths"
    >
    </ServiceContent>
  </div>
  <BasementComponent></BasementComponent>
</template>

<script>
import ServiceContent from "@/components/ServiceContent";
import HeadComponent from "@/components/HeadComponent";
import BasementComponent from "@/components/Environment/BasmentComponent";
import HatCompomnent from "@/components/Environment/HatCompomnent";
import { useMeta } from "vue-meta";

const slides = [
  [
    require("@/assets/food1.webp"),
    require("@/assets/food2.webp"),
    require("@/assets/food3.webp"),
    require("@/assets/food4.webp"),
  ],
  [
    require("@/assets/food6.webp"),
    require("@/assets/food7.webp"),
    require("@/assets/food9.webp"),
    require("@/assets/food10.webp"),
  ],
  [
    require("@/assets/Food.jpg"),
    require("@/assets/food8.webp"),
    require("@/assets/leisure6.webp"),
  ],
];

export default {
  name: "FoodPage",
  metaInfo: {
    title: "Зелёный сад: Банкет",
  },
  setup() {
    useMeta({ title: "Банкет" });
  },
  data: () => {
    return {
      serviceData: [
        {
          name: "Аренда Банкетного зала",
          discript: "Банкетный зал, вместимостью до 65 человек",
          arrayComponents: [
            ["Кондиционеры;", "conditioner"],
            ["Светомузыка;", "io"],
            ["Музыкальные колонки;", "music"],
            ["Караоке;", "microphone"],
            ["Телевизор с большим экраном и Smart TV;", "TV"],
          ],
          price: "1500₽/сутки",
          arrayComponentsLust: [
            "Свыше 10 человек + 100 рублей/час за каждого последующего человека;",
            "Минимальное время аренды 5 часов",
          ],
          humans: 10,
          imagePaths: slides[0],
          addition: true,
        },
        {
          name: "Аренда веранды барбекю",
          discript: "Дополнительно к Банкетному залу",
          arrayComponents: [
            ["Печь барбекю;", "bbq"],
            ["Мангал, шпажки и решётки для шашлыка;", "kebab"],
            ["Казан - 10 и 22 литра.", "pot"],
          ],
          price: "3000₽/Весь банкет",
          arrayComponentsLust: [],
          humans: 10,
          imagePaths: slides[1],
          addition: false,
        },
        {
          name: "Аренда Кухни",
          discript: "Дополнительно к Банкетному залу",
          arrayComponents: [
            ["Оборудованнае для приготовления блюд;", "oven"],
            ["Повар;", "kok"],
          ],
          price: "2500₽/Весь банкет",
          arrayComponentsLust: [],
          humans: 10,
          imagePaths: slides[2],
          addition: false,
          symbol: "&#9733",
        },
      ],
      HeadData: [
        {
          description:
            "В Зелёном саду вы, ваша семья и ваши друзья можете отлично провести время позабыв о проблемах, бущуих за стенами этого прекрасного места",
          name: "Банкет",
          image: "food5.webp",
        },
      ],
    };
  },
  components: {
    BasementComponent,
    HeadComponent,
    ServiceContent,
    HatCompomnent,
  },
};
</script>

<style lang="scss">
.mainCont {
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: space-evenly;
  margin-left: auto;
  margin-right: auto;
}

.t4801__line {
  margin: auto;
  max-width: 65px;
  width: 100%;
  height: 3px;
  background-color: #666;
  display: block;
}
.t480__line {
  display: flex;
  align-items: center;
  max-width: 65px;
  width: 100%;
  height: 3px;
  background-color: #666;
}
.sliderCont {
  width: 40vw;
  margin: auto;
  background-size: cover;
  z-index: 2;
}
.sliderContI {
  height: 45vh;
  width: 35vw;
  margin: auto;
  background-size: cover;
  z-index: 2;
}
.textService {
  width: 70%;
}
.infoContH {
  height: 40%;
  width: 35%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 0 auto auto;
}
.headInfo {
  margin-right: auto;
  margin-left: auto;
  width: 80%;
  height: auto;
  display: flex;
  align-items: start;
  flex-direction: column;
}
.headInfoA {
  margin-right: auto;
  margin-left: auto;
  width: 80%;
  height: auto;
  display: flex;
  flex-direction: column;
}

.textCont {
  overflow: clip;
  font-family: "Roboto", cursive;
  text-align: left;
  margin: auto;
  height: auto;
  width: 95%;
  font-size: x-large;
  color: #000;
}

.headText {
  color: rgb(0, 166, 42);
  text-align: center;
  font-family: Arial, serif;
  font-size: 40px;
}
.text {
  text-align-all: left;
  font-family: "Roboto", cursive;
  font-size: 20px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  font-weight: 300;
  width: 100%;
  color: #000;
}

@media (max-width: 800px) {
  .btn.btn-success {
    width: 40vw;
    height: 4vh;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .sliderAndPrice {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
  .greenText {
    text-align-all: left;
    font-size: x-large;
    font-family: "Roboto", cursive;
    color: rgb(0, 166, 42);
    font-weight: bold;
  }
  .bigText {
    text-align: center;
    font-family: "Roboto", cursive;
    font-size: x-large;
    font-weight: 300;
    color: #000;
  }
  .infoCont {
    width: 90%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin: 0 auto auto;
  }
  .infoContH {
    height: 40%;
    width: 90%;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-between;
    margin: 0 auto auto;
  }
  .textCont {
    overflow: clip;
    align-items: center;
    text-align: center;
    justify-content: space-between;
    font-family: "Roboto", cursive;
    margin: auto;
    height: auto;
    width: 100%;
    font-size: x-large;
    color: #000;
  }
  .contentContH {
    width: 90%;
    height: auto;
    display: flex;
    align-items: center;
    flex-direction: column;
    margin: 7% auto;
    justify-content: center;
  }
  .contentCont {
    width: 90%;
    height: auto;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    margin: 5% auto 10%;
  }
  .sliderCont {
    width: 70vw;
    margin: auto;
    background-size: cover;
    z-index: 2;
  }
  .sliderContI {
    margin-top: 20%;
    margin-bottom: 4%;
    height: 45vh;
    width: 65vw;
    background-size: cover;
    z-index: 2;
  }
}
@media (min-width: 800px) {
  .sliderAndPrice {
    width: 50%;
    flex-direction: column;
  }
  .greenText {
    text-align-all: left;
    font-size: x-large;
    font-family: "Roboto", cursive;
    color: rgb(0, 166, 42);
    font-weight: bold;
  }
  .bigText {
    text-align: left;
    font-family: "Roboto", cursive;
    font-size: x-large;
    font-weight: 300;
    color: #000;
  }
  .infoCont {
    width: 45%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin: 0 auto auto;
  }
  .contentContH {
    width: 80%;
    height: auto;
    display: flex;
    flex-direction: row;
    margin: 7% 7%;
    justify-content: space-between;
  }
  .textCont {
    overflow: clip;
    font-family: "Roboto", cursive;
    text-align: left;
    margin: auto;
    height: auto;
    width: 95%;
    font-size: x-large;
    color: #000;
  }
  .contentCont {
    width: 90%;
    height: auto;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 5% auto 10%;
  }
  .sliderCont {
    width: 40vw;
    margin: auto;
    background-size: cover;
    z-index: 2;
  }
  .sliderContI {
    height: 45vh;
    width: 35vw;
    margin: auto;
    background-size: cover;
    z-index: 2;
  }
}
</style>
