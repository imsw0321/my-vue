<template>
    <div class="Project">
      <div class="Project_name">Project1</div>
      <div class="Project_guide">아래를 눌러주세요.</div>
      <div class="Project_box" @click="openModal">
        <img src="@/assets/image_project1_main11.png" width="800px" height="500px" alt="sw" />
      </div>
      <ModalComp :isOpen="isOpen" @onClose="closeModal">
        <div class="Project_contents">
          <h2>유기 동물 정보 사이트</h2>
          <p>
            이 프로젝트는 웹프로그래밍 과제로 만들었던 프로젝트입니다.
            해당 프로젝트는 HTML, CSS, Javascript를 활용하였습니다.
            저는 최근 유기견, 유기묘, 유기동물에 대한 사회적 문제가 심각해지면서, 이를 상기시킬 수 있는 프로젝트를 만들고 싶었습니다.
            저는 이에 따라 유기동물 정보, 입양 및 임보 절차, 애견 용품, 유기동물 보호단체의 정보를 제공하는 유기 동물 정보 사이트를 프로젝트로 진행하였습니다.
          </p>
          <div>
            <img src="@/assets/github.png" width="40px" height="40px" alt="github" @click="openWindow('https://imsw0321.github.io/')" style="cursor: pointer;" />
          </div>
          <div class="Project_image_photo">
            <img src="@/assets/image_project1_web1.png" width="500px" height="400px" alt="logo" />
            <img src="@/assets/image_project1_web2.png" width="500px" height="400px" alt="logo" />
          </div>
        </div>
      </ModalComp>
    </div>
  </template>
  
  <script>
  import ModalComp from './ModalComp.vue';
  
  export default {
    components: {
      ModalComp,
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
      openWindow(url) {
        window.open(url, '_blank', 'width=600,height=600');
      },
    },
  };
  </script>
  
  <style>
  .Project_guide{
  font-size: 15px;
  text-align: center;
  margin-bottom: 20px;
  font-weight: 100;
}
.Project_name{
  text-align: center;
  font-size: 25px;
  margin-bottom: 20px;
  font-weight: bold;
   
}

.Project_box {
  background-color: blanchedalmond;
  padding: 0% 10% 10% 10%;
  position: relative;
}

.container {
  width: 500px;
  height: 400px;
  background-color: #fff;
  border: 1px solid #ccc;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1000;
}

.close {
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 20px;
  cursor: pointer;
}

.Project_box {
  background-color: #fff;
  padding: 20px;
  margin-bottom: 15px;
  border-radius: 8px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
  border-radius: 15px;

  position: relative;
  overflow: hidden;
}



.Project_box:hover::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.5); /* 강조할 때 사용할 배경색 */
  z-index: 1;
}

.Project_box img {
  width: 100%;
  height: auto;
  transition: transform 0.3s ease; /* 이미지에 hover 효과를 추가하기 위한 트랜지션 */
}
.Project_box:hover{
  cursor: pointer;
}
.Project_box:hover img {
  transform: scale(1.05); /* hover 시 이미지를 조금 크게 확대 */
}

.Project_contents{
  font-size: 20px;
}

  </style>
  