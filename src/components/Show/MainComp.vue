<template>
    <div class="Maincontent_SelfIntro_Main">
      <div>
        <img class="sw_img" src="@/assets/image_sw.jpg"  alt="sw" />

      </div>

      <div class="Intro_box_Main">
        
        <h1> 데이터 분석가가 되고 싶은 김선우입니다.</h1>
        <p>
          전화번호: 010-7211-4634<br />
          이메일: imsw0321@gachon.ac.kr
        </p>
        <br />
        <div class="Logo_image">
          <img
            class="site_img"
            src="@/assets/instagram.png"
            alt="instagram"
            @click="() => openWindow('https://www.instagram.com/_sunuuoo_')"
            style="cursor: pointer"
          />
          <img
          class="site_img"
            src="@/assets/github.png"
            alt="github"
            @click="() => openWindow('https://github.com/imsw0321')"
            style="cursor: pointer"
          />
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    methods: {
      openWindow(url) {
        window.open(url, '_blank', 'width=600,height=600');
      },
    },
  };
  </script>
  
  <style scoped>
  .Maincontent_SelfIntro_Main{
    padding: 5% 10% 5% 10%;
    display: flex;
    flex-direction: row;
    
}
.Intro_box_Main{
    background-color: #fff;
	padding: 20px;
	margin-bottom: 15px;
	border-radius: 8px;
	box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
    border-radius: 15px;
    float: left;
    margin-left:8%;
    white-space: nowrap;
    line-height: 1.5; 
      
}
.Logo_image img {
    margin-right: 10px; 
}
.sw_img{
  width: 250px;
  height: 300px;

}
.site_img{
  width:40px;
  height:40px;
}
  </style>
  