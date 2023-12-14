<template>
    <div class="Maincontent_Object">
      <div class="Intro_box_object">
        <p>
          <img class="object_i" src="@/assets/dream.png"  />
          데이터분석가 이루기 위한 목표
        </p>
        <hr />
        <ul class="Checklist">
          <li>
            <input type="checkbox" id="goal1" />
            <label for="goal1">파이썬, R코드 등과 같은 코딩 능력 늘리기</label>
          </li>
          <li>
            <input type="checkbox" id="goal2" />
            <label for="goal2">머신러닝, 딥러닝에 대해 공부하기</label>
          </li>
          <li>
            <input type="checkbox" id="goal3" />
            <label for="goal3">개인 포트폴리오, 데이터 분석 프로젝트 진행하기</label>
          </li>
          <li>
            <input type="checkbox" id="goal4" />
            <label for="goal4">동아리 및 서포터즈 가입 후 그룹 프로젝트 진행하기</label>
          </li>
          <li>
            <input type="checkbox" id="goal5" />
            <label for="goal5">SQLD 자격증 따기</label>
          </li>
          <li>
            <input type="checkbox" id="goal6" />
            <label for="goal6">빅데이터분석기사 자격증 따기</label>
          </li>
          <li>
            <input type="checkbox" id="goal7" />
            <label for="goal7">ADSP 자격증 따기</label>
          </li>
        </ul>
        <br />
        <img class="object_ii" src="@/assets/object_image.png"  />        
      </div>
    </div>
  </template>
  
  <script>
  export default {

  };
  </script>
  
  <style scoped>
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
  .object_i{
    width:40px; 
    height:28px;
  }
  .object_ii{
    width:800px; 
    height:300px;
  }
  </style>
  