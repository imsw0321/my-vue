<template>
    <div class="Project">
      <div class="Project_name">Project3</div>
      <div class="Project_guide">아래를 눌러주세요.</div>
      <div class="Project_box" @click="openModal">
        <img src="@/assets/image_project3_main.png" width="800px" height="500px" alt="sw" />
      </div>
      <ModalComp :isOpen="isOpen" @close="closeModal">
        <div class="Project_contents">
          <h2>개인 포트폴리오</h2>
          <p>
            이 프로젝트는 고급웹프로그래밍 과제로 만들었던 프로젝트입니다.
            해당 프로젝트는 React를 활용하였습니다.
            2023년 2학기 개인 포트폴리오를 만들었습니다. 해당 프로젝트는 내가 앞으로 가고자 하는 진로의 방향 및 지금까지 진행했던 프로젝트에 대해 소개하는
            개인 포트폴리오입니다. 해당 포트폴리오를 통해 내가 대학생활동안 진행했던 모든 것들을 담을 수 있었던 좋은 프로젝트였습니다.
          </p>
          <div>
            <img class="project_I" src="@/assets/github.png" alt="github" @click="openWindow('https://imsw0321.github.io/Myproject/')" style="cursor: pointer;" />
          </div>
          <div class="Project_image_photo">
            <img class="project_II" src="@/assets/image_project3_web1.png"  />
            <img class="project_II" src="@/assets/image_project3_web2.png">
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
  transform: scale(1.05); 
}

.Project_contents{
  font-size: 20px;
}
.project_II{
    width: 500px;
    height: 400px;
}
.project_I{
  width:25px; 
  height:25px;
}
  </style>
  