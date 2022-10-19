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
      :key="item"
      :headerText="item.name"
      :description="item.discript"
      :content="item.arrayComponents"
      :arrayComponentsLust="item.arrayComponentsLust"
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
import Food from "@/views/Food";
import HatCompomnent from "@/components/Environment/HatCompomnent";
import { useMeta } from "vue-meta";

const slides = [
  [
    require("@/assets/leisure1.jpeg"),
    require("@/assets/leisure2.webp"),
    require("@/assets/leisure3.webp"),
    require("@/assets/leisure4.webp"),
  ],
  [
    require("@/assets/leisure6.webp"),
    require("@/assets/leisure7.webp"),
    require("@/assets/leisure8.webp"),
    require("@/assets/leisure9.webp"),
  ],
  [
    require("@/assets/leisure10.webp"),
    require("@/assets/leisure11.webp"),
    require("@/assets/leisure12.webp"),
    require("@/assets/leisure13.webp"),
  ],
];

export default {
  name: "LeisurePage",
  setup() {
    useMeta({ title: "Досуг" });
  },
  data: () => {
    return {
      serviceData: [
        {
          name: "Русская баня на дровах",
          discript: "Уютная баня с обеденной зоной для вашего праздника!",
          arrayComponents: [
            ["Вместимость за столом до 12 человек;", "humans"],
            ["Украшенная печь в парной;", "hot"],
            ["Можно париться веником;", "hand"],
            ["Теплый пол;", "heat"],
            ["Туалет;", "toilet"],
            ["Душевая;", "shower"],
            ["Стол, лавочки;", "bench"],
            ["Музыкальная колонка со светомузыкой;", "music"],
            ["Чайник;", "teapot"],
            ["Микроволновка;", "oven"],
            ["Холодильник;", "refrigerator"],
            ["Посуда;", "dishes"],
            ["Телевизоров со смарт-тв;", "TV"],
          ],
          price: "1250₽/час до 5 человек",
          arrayComponentsLust: [
            "Свыше 5-ти человек + 100 рублей / час за каждого последующего человека",
            "Минимальное время аренды бани 3 часа",
          ],
          humans: 5,
          imagePaths: slides[0],
        },
        {
          name: "Аренда беседки с большой печью барбекю и кондиционером",
          discript:
            "Большая тёплая уютная беседка вместимостью до 36 человек, с возможностью готовить на открытом огне на мангале и в казане",
          arrayComponents: [
            ["Светомузыка;", "io"],
            ["музыкальная колонка;", "music"],
            ["Холодильник;", "refrigerator"],
            ["микроволновка;", "oven"],
            ["чайник;", "teapot"],
            ["Телевизор с подключением караоке;", "microphone"],
            ["Печь барбекю;", "bbq"],
            ["Мангал, шпажки и решётки;", "kebab"],
            ["Казан - 10 и 22 литра;", "pot"],
            ["В беседке витражные окна;", "home"],
            ["Комфортные стулья;", "bench"],
            ["Туалет;", "toilet"],
            ["Гигиенический душ и раковина;", "shower"],
          ],
          price: "1500₽/час до 15 человек",
          arrayComponentsLust: [
            "Свыше 15 человек + 100 рублей/час за каждого последующего человека;",
            "Минимальное время аренды беседки 5 часов.",
          ],
          humans: 15,
          imagePaths: slides[1],
        },
        {
          name: "Аренда караоке зала",
          discript:
            "Караоке зал с мягкими диванами и столиками на 30 посадочных мест, с мангальной зоной на улице",
          arrayComponents: [
            ["Светомузыка;", "io"],
            ["Музыкальные колонки;", "music"],
            ["Караоке с проектором и большим экраном на стене;", "microphone"],
            ["Холодильник;", "refrigerator"],
            ["Чайник;", "teapot"],
            ["Вход в караоке зал отдельный с отдельный санузлом;", "toilet"],
          ],
          price: "1500₽/час до 15 человек",
          arrayComponentsLust: [
            "Свыше 15 человек + 100 рублей/час за каждого последующего человека;",
            "Минимальное время аренды зала 5 часов.",
          ],
          humans: 15,
          imagePaths: slides[2],
        },
      ],
      HeadData: [
        {
          description:
            "В Зелёном саду вы, ваша семья и ваши друзья можете отлично провести время позабыв о проблемах, бущуих за стенами этого прекрасного места",
          name: "Досуг",
          image: "leisure1.jpg",
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

<style lang="scss"></style>
