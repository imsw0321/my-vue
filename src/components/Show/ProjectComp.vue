

<template>
    <div>
      <ProjectComp1 @openModal="openModal" @closeModal="closeModal" />
      <ProjectComp2 @openModal="openModal" @closeModal="closeModal" />
      <ProjectComp3 @openModal="openModal" @closeModal="closeModal" />
    </div>
  </template>
  
  <script>
  import ProjectComp1 from '../Project/ProjectComp1.vue';
  import ProjectComp2 from '../Project/ProjectComp2.vue';
  import ProjectComp3 from '../Project/ProjectComp3.vue';
  
  export default {
    components: {
      ProjectComp1,
      ProjectComp2,
      ProjectComp3,
    },
    data() {
      return {
        isOpen: false,
      };
    },
    methods: {
      openModal() {
        this.isOpen = true;
      },
      closeModal() {
        this.isOpen = false;
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
  </style>
  