<template>
    <div class="LoginContainer">
      <h2 align="center">LOGIN</h2>
      <table class="LoginForm" align="center">
        <tr>
          <td width="50%">아이디</td>
          <td>
            <input type="text" size="15" v-model="id" />
          </td>
        </tr>
        <tr>
          <td>비밀번호</td>
          <td>
            <input type="password" size="15" v-model="pwd" />
          </td>
        </tr>
      </table>
      <p>아이디 cbkim 비밀번호 1111로 확인해주세요</p>
      <button class="LoginButton" @click="onLogin">LOGIN</button>
    </div>
  </template>
  
  <script>
  export default {
    methods: {
  onLogin() {
    console.log('Login button clicked');
    if (this.id === 'cbkim' && this.pwd === '1111') {
      console.log('Login successful');
      this.$emit('onLogin'); // 부모 컴포넌트에 이벤트를 전달
    } else {
      console.log('Login failed');
      alert('아이디 또는 비밀번호가 올바르지 않습니다.');
    }
  },
},
};
  </script>
  
  <style scoped>
  
.LoginContainer {
    text-align: center;
    margin-top: 30px;
  }
  
  .LoginForm {
    width: 40%;
    border: 1px solid #ccc;   
    padding: 10px;
    background-color: #ffffff;
  }
  

  .LoginForm td {
    padding: 10px;
    font-size: 20px;
  }
  
  .LoginButton {
    background-color: #fff9f9;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;
  }
  
  .LoginButton:hover {
    background-color: #a5a5a5;
    color: white;
  }
  
  </style>
  