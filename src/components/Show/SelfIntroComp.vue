<template>
  <div class="SelfIntroContainer">
    <div class="SefIntro_Subvar">
      <button class="SelfIntroButton" @click="showSelfIntro1">나의 정보</button>
      <button class="SelfIntroButton" @click="showSelfIntro2">자기소개서</button>
    </div>
    <div v-if="selectedContent" class="SelectedContent">
      <!-- 변경된 부분: 컴포넌트 직접 렌더링 -->
      <component :is="selectedContent" />
    </div>
  </div>
</template>

<script>
import SelfIntroComp1 from '@/components/Introduce/SelfIntroComp1.vue';
import SelfIntroComp2 from '@/components/Introduce/SelfIntroComp2.vue';


export default {
  data() {
    return {
      selectedContent: null,
    };
  },
  mounted() {
    this.showSelfIntro1();
  },
  methods: {
    showSelfIntro1() {
      this.selectedContent = SelfIntroComp1;
    },
    showSelfIntro2() {
      this.selectedContent = SelfIntroComp2;
    },
  },
};
</script>

<style>
.Maincontent_SelfIntro {
    padding: 5% 10% 5% 10%;
    display: flex;
    flex-wrap: wrap; 
    justify-content: center;
}

.Intro_box_self {
    /*background-image: url('../../Component/background_image_url.png');*/
    padding: 20px;
    margin-right: 15px; 
    border-radius: 8px;
    box-shadow: 0 0 20px rgb(129, 129, 129);
    width: 350px;
    white-space: pre-wrap;
    margin-bottom: 20px;
}

.Intro_box_self p {
    white-space: pre-line;
    margin: 0;
    line-height: 2.0;
    font-size: 18px;
}
.SefIntro_Subvar {
    text-align: center;
}

.SelfIntroButton {
    margin-right: 5px;
    font-size: 20px;
    cursor: pointer;   
    background-color: white;
    border-radius: 10px;

}

.SelfIntroButton:hover {
    transform: scale(1.05);  
}



</style>
