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
      :price="item.price"
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
import Food from "@/views/Food";
import { useMeta } from "vue-meta";

const slides = [
  [
    require("@/assets/Food.jpg"),
    require("@/assets/food1.webp"),
    require("@/assets/food6.webp"),
    require("@/assets/Looding2.webp"),
  ],
  [
    require("@/assets/Looding2.webp"),
    require("@/assets/Looding3.webp"),
    require("@/assets/Looding4.webp"),
    require("@/assets/Looding5.webp"),
  ],
  [
    require("@/assets/Looding7.webp"),
    require("@/assets/Looding3.webp"),
    require("@/assets/Looding8.webp"),
    require("@/assets/Looding9.webp"),
  ],
];

export default {
  name: "LodgingPage",
  setup() {
    useMeta({ title: "Аренда жилья" });
  },
  data: () => {
    return {
      serviceData: [
        {
          name: "Аренда Коттеджа",
          discript: "2-х этажный коттедж 500 м² на участке 20 соток",
          arrayComponents: [
            ["Банкетный зал на 65 человек;", "humans"],
            ["музыкальные колонки;", "music"],
            ["светомузыка;", "io"],
            ["телевизор с большим экраном со Smart TV;", "TV"],
            ["Большая печь барбекю c решетками;", "bbq"],
            ["Мангал c шпажками;", "kebab"],
            ["Казан на 10 - 22 литров;", "pot"],
            ["Кухня со всем необходимым оборудованием; ", "oven"],
            ["2 санузла;", "toilet"],
            ["Гардероб;", "wardrobe"],
            ["Большой караоке зал с мягкими диванами;", "bench"],
            ["Гостиничные номера люкс;", "home"],
            ["Чайник;", "teapot"],
            ["Холодильник;", "refrigerator"],
            ["Всего 17 спальныхмест;", "humans"],
            ["кондиционеры;", "conditioner"],
          ],
          price: "50000₽/сутки",
          imagePaths: slides[0],
        },
        {
          name: "Аренда однокомнатного Гостиничного номера Люкс",
          discript: "Однокомнатный гостиничный люкс с 2-х спальной кроватью",
          arrayComponents: [
            ["Кондиционер;", "conditioner"],
            ["Телевизор со Smart TV;", "TV"],
            ["Чайник;", "teapot"],
            ["Холодильник;", "refrigerator"],
            ["обственный санузел;", "toilet"],
            ["Душевая;", "shower"],
          ],
          price: "2000₽/сутки",
          imagePaths: slides[1],
        },
        {
          name: "Аренда двухкомнатного Гостиничного номера Люкс",
          discript:
            "Двухкомнатный гостиничный люкс с двумя 2-х спальными кроватями",
          arrayComponents: [
            ["Кондиционер;", "conditioner"],
            ["Телевизор со Smart TV;", "TV"],
            ["Чайник;", "teapot"],
            ["обственный санузел;", "toilet"],
            ["Душевая;", "shower"],
          ],
          price: "4000₽/сутки",
          imagePaths: slides[2],
        },
      ],
      HeadData: [
        {
          description:
            "Мы предоставляем комфортабельные и раскошные аппартамнты из наивысших сортов тёмного дуба, обставленные по последнему слову современного дизайна и мебелированные фешенебельной мебелью",
          name: "Проживание",
          image: "Looding3.webp",
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
