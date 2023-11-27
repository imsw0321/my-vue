<template>
    <div class="Project">
      <div class="Project_name">Project2</div>
      <div class="Project_guide">아래를 눌러주세요.</div>
      <div class="Project_box" @click="openModal">
        <img src="@/assets/image_project2_main2.png" width="800px" height="500px" alt="sw" />
      </div>
      <ModalComp :isOpen="isOpen" @onClose="closeModal">
        <div class="Project_contents">
          <h2>POST-LIT</h2>
          <p>
            이 프로젝트는 학교에서 진행하는 학습공동체라는 프로그램을 통해 진행했습니다.
            학습공동체는 조를 만들고, 수강하는 과목을 정하여 함께 공부하자는 프로그램입니다.
            제가 함께한 조는 학습공동체 프로그램에서 고급웹프로그래밍 리액트를 가지고 하나의 개인 프로젝트를 만들자는 목표를 세웠습니다.
            이에 따라, 저는 리액트를 활용하여 Post와 List를 작성하는 사이트를 제작하고 싶었고, POST-LIT 이라는 이름으로 프로젝트를 진행했습니다.
          </p>
  
          <div class="Project_image_photo">
            <img src="@/assets/image_project2_web1.png" width="1000px" height="400px" alt="logo" />
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
  