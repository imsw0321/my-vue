

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
  
  </style>
  