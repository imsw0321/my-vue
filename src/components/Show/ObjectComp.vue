<template>
    <div>
        <ObjectComp1 />
        <ObjectComp2 />
    </div>
</template>
  
<script>


import ObjectComp1 from '@/components/Object/ObjectComp1.vue';
import ObjectComp2 from '@/components/Object/ObjectComp2.vue';

export default {
    components: {
        ObjectComp1,
        ObjectComp2,
    },
};

</script>
  
<style>

.Maincontent_Object {
  padding: 5% 10% 5% 10%;
  display: flex;
  flex-direction: row;
  justify-content: center; /* 가운데 정렬 추가 */
}

.Intro_box_object {
  width: 1000px;
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
  border-radius: 15px;
  white-space: nowrap;
}
.Intro_box_object p {
  white-space: pre-line; /* 텍스트의 줄바꿈을 유지하고, 여러 개의 공백도 유지함 */
  margin: 0; /* 기본 마진 제거 */
  line-height: 2.0;
  font-size: 18px;
}
.Checklist li {
    list-style: none; 
}
.Checklist li {
    list-style: none;
    margin-bottom: 10px; /* 각 항목 사이 간격 조절 */
  }
  
  .Checklist li input[type="checkbox"] {
    display: none;
  }
  
  .Checklist li label {
    display: block;
    padding-left: 25px;
    position: relative;
    cursor: pointer;
  }
  
  .Checklist li label:before {
    content: '';
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 20px;
    height: 20px;
    border: 1px solid #6f6f6f; /* 체크박스 테두리 스타일 지정 */
    background-color: #fff;
  }
  
  .Checklist li input[type="checkbox"]:checked + label:before {
    content: '✔';
    text-align: center;
    line-height: 20px;
    font-size: 16px;
    color: #6f6f6f; /* 체크 마크 색상 지정 */
  }
  
</style>
  