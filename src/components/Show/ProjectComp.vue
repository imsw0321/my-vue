<template>
    <div>
      <ProjectComp1 v-if="loggedIn" />
      <ProjectComp2 v-if="loggedIn" />
      <LoginComp v-else :id="id" :pwd="pwd" @changeId="changeId" @changePwd="changePwd" @onLogin="handleLogin" />
    </div>
  </template>
  
  <script>
  import { ref } from 'vue';
  import ProjectComp1 from '../Project/ProjectComp1.vue';
  import ProjectComp2 from '../Project/ProjectComp2.vue';
  import LoginComp from './LoginComp.vue';
  
  const setup = () => {
    const id = ref('');
    const pwd = ref('');
    const loggedIn = ref(false);
  
    const changeId = (e) => {
      id.value = e.target.value;
    };
  
    const changePwd = (e) => {
      pwd.value = e.target.value;
    };
  
    const handleLogin = () => {
      if (id.value === 'cbkim' && pwd.value === '1111') {
        loggedIn.value = true;
      }
    };
  
    return {
      id,
      pwd,
      loggedIn,
      changeId,
      changePwd,
      handleLogin,
    };
  };
  
  export default {
    components: {
      ProjectComp1,
      ProjectComp2,
      LoginComp,
    },
    setup,
  };
  </script>
  
  <style>
  /* 스타일 코드 여기에 둘 수 있음 */
  </style>
  