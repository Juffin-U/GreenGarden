<template>
  <div class="mainContainer">
    <div class="solidColumnContainer">
      <div class="imgContainer">
        <div class="separateColumnContainerI">
          <div class="mainHeader">
            <p class="mainHeaderText">Зеленый сад</p>
          </div>
          <div class="mainInfo">
            <p class="mainInfoText">Прекрасное место для вашего отдыха</p>
          </div>
        </div>
      </div>
      <div class="infoContainer">
        <div class="info">
          <div class="separateColumnContainer">
            <div class="separateColumnContainer">
              <p class="mainIntroductionToTheDescription">О нас</p>
              <p class="mainDescription">
                «Зеленый сад» — место, где можно отдохнуть у края соснового леса
                в пределах г. Барнаула. Восстановиться после тяжелых будней и
                получить огромное количество впечатлений! У нас можно провести
                запоминающийся и яркий праздник, который еще долго будет дарить
                вам теплые воспоминания!
              </p>
            </div>
            <div class="image-bgContainer">
              <div class="image-bg"></div>
            </div>
            <div class="sliderAndLinkContainer">
              <div class="mainIntroductionToTheDescription">Наши услуги</div>
              <div class="solidColumnContainerI">
                <div class="linkContainer">
                  <div class="lineImageContainer">
                    <div class="nameAndImageService">
                      <div class="mainIntroductionToTheDescriptionT">Досуг</div>
                      <router-link
                        class="imgLeisure"
                        @mouseover="indexOfSection = 0"
                        to="/leisure"
                      ></router-link>
                      <div class="empty"></div>
                    </div>
                    <div class="nameAndImageService">
                      <div class="mainIntroductionToTheDescriptionT">
                        Банкет
                      </div>
                      <router-link
                        class="imgFood"
                        @mouseover="indexOfSection = 1"
                        to="/food"
                      ></router-link>
                      <div class="empty"></div>
                    </div>
                    <div class="nameAndImageService">
                      <div class="mainIntroductionToTheDescriptionT">
                        Проживание
                      </div>
                      <router-link
                        class="imgLodging"
                        @mouseover="indexOfSection = 2"
                        to="/loodging"
                      ></router-link>
                      <div class="empty"></div>
                    </div>
                  </div>
                </div>
                <div class="sliderContainer">
                  <div style="height: 100%; background-size: cover">
                    <vueper-slides
                      arrows-inside
                      bullets-inside
                      transition-speed="250"
                      autoplay
                      :slide-content-outside="contentPosition"
                      :slide-ratio="0.65"
                    >
                      <vueper-slide
                        v-for="(imagePath, i) in arrOfIndex[indexOfSection]"
                        :key="i"
                        :image="imagePath"
                      />
                    </vueper-slides>
                  </div>
                </div>
              </div>
            </div>
            <div style="height: 10vh; width: 100%"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <basement-component></basement-component>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { VueperSlides, VueperSlide } from "vueperslides";
import "vueperslides/dist/vueperslides.css";
import BasementComponent from "@/components/Environment/BasmentComponent.vue";
import HatComponent from "@/components/Environment/HatCompomnent.vue";

export default defineComponent({
  name: "HomeView",
  components: { BasementComponent, VueperSlides, VueperSlide },
  data: () => ({
    slides: [
      {
        title: "Slide #1",
        content: "Slide 1 content.",
      },
      {
        title: "Slide #2",
        content: "Slide 2 content.",
      },
    ],
  }),

  setup() {
    let indexOfImage = ref(0);
    let indexOfSection = ref(0);

    let arrOfIndex: string[][] = [
      [
        require("@/assets/food2.webp"),
        require("@/assets/food3.webp"),
        require("@/assets/food5.webp"),
        require("@/assets/food6.webp"),
        require("@/assets/food9.webp"),
        require("@/assets/food10.webp"),
      ],
      [
        require("@/assets/leisure2.webp"),
        require("@/assets/leisure1.jpg"),
        require("@/assets/leisure5.webp"),
        require("@/assets/leisure6.webp"),
        require("@/assets/leisure9.webp"),
        require("@/assets/leisure10.webp"),
        require("@/assets/leisure12.webp"),
        require("@/assets/leisure13.webp"),
      ],
      [
        require("@/assets/Looding2.webp"),
        require("@/assets/Looding3.webp"),
        require("@/assets/Looding4.webp"),
        require("@/assets/Looding5.webp"),
        require("@/assets/Looding6.webp"),
        require("@/assets/Looding7.webp"),
        require("@/assets/Looding9.webp"),
      ],
    ];
    return {
      indexOfSection,
      arrOfIndex,
      indexOfImage,
    };
  },
});
</script>
<style lang="scss" scoped>
@media (max-width: 800px) {
  .empty {
    height: 7vh;
    width: 100%;
  }
  .lineImageContainer {
    display: flex;
    width: 92%;
    flex-direction: column;
    justify-content: space-between;
    height: auto;
    margin-top: 3.5%;
  }
}
.nameServis {
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: row;
  width: 80%;
}
.ex--center-mode {
  width: 600px;
  max-width: 100%;
  margin: auto;
}

.infoContainer {
  height: 40%;
  margin-top: -18%;
}
.info {
  height: auto;
  width: 90%;
  margin: auto;
}

.image-bg {
  width: 80px;
  height: 65px;
  /* Не повторяем */
  background-size: cover; /* Размер фона */
  /* Позиция картинкипо центру */
  background: url(../assets/logo.webp) no-repeat center;
}
.sliderAndLinkContainer {
  width: 85%;
  height: 50%;
  margin: auto auto 10%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
.linkContainer {
  height: auto;
  margin-top: -3%;
  margin-bottom: 5%;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
}
.mainInfoText {
  margin: auto;
}

.mainIntroductionToTheDescription {
  color: rgb(0, 166, 42);
  font-size: 40px;
  font-family: "Roboto", cursive;
}
.mainIntroductionToTheDescriptionT {
  color: rgb(0, 166, 42);
  font-size: 30px;
  font-family: "Roboto", cursive;
}
.mainHeaderText {
  margin: auto;
}
.mainHeader {
  font-size: 70px;
  line-height: 1.17;
  letter-spacing: 5px;
  font-family: "Roboto", cursive;
  height: 50%;
  display: flex;
  color: bisque;
  margin-top: 13%;
}

.mainInfo {
  height: 50%;
  font-size: 32px;
  line-height: 1.5;
  display: flex;
  color: bisque;
  font-family: "Roboto", cursive;
  font-weight: 300;
  margin-bottom: 35%;
}
.imgContainer {
  background: url("../assets/DSC02445-min.webp") no-repeat;
  background-size: cover;
  height: 100vh;
  width: 100%;
  align-items: center;
}
.image-bgContainer {
  margin: auto;
}
.solidColumnContainerI {
  height: auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.separateColumnContainer {
  height: auto;
  width: 80%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  margin: 15% auto auto;
}
@media (max-width: 800px) {
  .solidColumnContainerI {
    height: auto;
    width: 90vw;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .mainDescription {
    width: 100%;
    height: auto;
    font-family: "Roboto", cursive;
    font-size: 24px;
    display: flex;
    align-items: center;
  }
  .lineImageContainer {
    display: flex;
    width: 92%;
    flex-direction: column;
    justify-content: space-between;
    height: auto;
    margin-top: 3.5%;
  }
  .nameAndImageService {
    margin-top: 10%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    background-color: #faebd7;
    border-radius: 3vw;
  }
  .imgFood {
    background-size: cover;
    background: url(../assets/Food.jpg) no-repeat center;
    width: 70vw;
    height: 38vh;
  }
  .imgLeisure {
    background-size: cover;
    background: url(../assets/Leisure.png) no-repeat center;
    width: 70vw;
    height: 38vh;
  }
  .imgSlider {
    background-size: cover;
    background: url(../assets/Leisure.png) no-repeat center;
    width: 70vw;
    height: 50vh;
  }
  .imgLodging {
    background-size: cover;
    background: url(../assets/Looding3.webp) no-repeat center;
    width: 70vw;
    height: 38vh;
  }
  .sliderContainer {
    width: 70vw;
    height: 38vh;
    margin-top: 10%;
    background-size: cover;
  }
  .separateColumnContainerI {
    height: auto;
    width: 90vw;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-between;
    margin: -5vh 2vh auto;
  }
  .mainContainer {
    width: 100%;
    height: auto;
    display: flex;
    margin-top: 5vh;
    align-items: center;
    justify-content: center;
    margin-left: auto;
    margin-right: auto;
  }
}
@media (min-width: 800px) {
  .mainContainer {
    width: 100%;
    height: auto;
    display: flex;
    margin-top: -52vh;
    align-items: center;
    justify-content: center;
    margin-left: auto;
    margin-right: auto;
  }
  .solidColumnContainerI {
    height: auto;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .separateColumnContainerI {
    height: auto;
    width: 50vw;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-between;
    margin: 52vh 42vh auto;
  }
  .mainDescription {
    width: 40%;
    height: auto;
    font-family: "Roboto", cursive;
    font-size: 24px;
    display: flex;
    align-items: center;
  }
  .lineImageContainer {
    display: flex;
    width: 92%;
    flex-direction: row;
    justify-content: space-between;
    height: auto;
    margin-top: 3.5%;
  }
  .nameAndImageService {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 33%;
  }
  .imgFood {
    background-size: cover;
    background: url(../assets/Food.jpg) no-repeat center;
    width: 18vw;
    height: 28vh;
  }
  .imgLeisure {
    background-size: cover;
    background: url(../assets/Leisure.png) no-repeat center;
    width: 18vw;
    height: 28vh;
  }
  .imgSlider {
    background-size: cover;
    background: url(../assets/Leisure.png) no-repeat center;
    width: 56vw;
    height: 50vh;
  }
  .imgLodging {
    background-size: cover;
    background: url(../assets/Looding3.webp) no-repeat center;
    width: 18vw;
    height: 28vh;
  }
  .sliderContainer {
    width: 36vw;
    height: 30vh;
    margin-top: -1%;
    background-size: cover;
  }
}
</style>
