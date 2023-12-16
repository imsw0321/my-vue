<template>
  <div>
    <header>
      <div>
        <img class="Main_img" src="./assets/LoGo.png" alt="logo" />
      </div>
    </header>
    <div>
      <nav class="Navbar">
        <ul>
          <li><router-link to="/Main" class="menulink">Main</router-link></li>
          <li><router-link to="/SelfIntro" class="menulink">Introduce</router-link></li>
          <li><router-link to="/Project" class="menulink">Project</router-link></li>
          <li><router-link to="/Object" class="menulink">Object</router-link></li>
        </ul>
      </nav>
      <main class="Maincontent">
        <router-view v-if="isLoggedIn"></router-view>
        <div v-else>
          <div class="LoginContainer">
            <h2>LOGIN</h2>
            <form class="LoginForm" @submit.prevent="handleLogin">
              <table>
                <tr>
                  <td><label for="username">아이디</label></td>
                  <td><input type="text" v-model="loginForm.username" required /></td>
                </tr>
                <tr>
                  <td><label for="password">비밀번호</label></td>
                  <td><input type="password" v-model="loginForm.password" required /></td>
                </tr>
                <tr>
                  <td colspan="2" class="LoginButtonContainer">
                    <button type="submit" class="LoginButton">Login</button>
                  </td>
                </tr>
              </table>
            </form>
          </div>
        </div>
      </main>
    </div>
    <footer>
      <div class="Footer">Copyright 2023. Kim Sun Woo all rights reserved. </div>
    </footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isLoggedIn: false,
      username: "",
      loginForm: {
        username: "",
        password: "",
      },
    };
  },
  methods: {
    login() {
      this.isLoggedIn = true;
      this.username = "cbkim";
    },
    logout() {
      this.isLoggedIn = false;
      this.username = "";
    },
    handleLogin() {

      if (this.loginForm.username === "cbkim" && this.loginForm.password === "1111") {
        this.login();
      } else {
        alert("다시 입력하세요.");
      }
    },
  },
};
</script>

<style>
header {
  margin-bottom: 1.5%;
  display: flex;
  justify-content: center;
}

.Main_img {
  width: 100px;
  height: 80px;
}

.Navbar {
  display: flex;
  height: 4em;
  justify-content: space-evenly;
  padding: 0;
}
.Navbar li {
  display: inline;
  margin: 0 50px;
  font-size: 25px;
}
ul,
li {
  margin: 0;
  padding: 0;
}

.Navbar a {
  text-decoration: none;
  color: black;
  cursor: pointer;
}

.Navbar a:hover {
  text-decoration: underline;
}

.Maincontent {
  background-color: rgb(240, 240, 240);
  padding: 5% 10% 5% 10%;
  border-radius: 15px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.25);
}
.Footer {
  padding-left: 38%;
  border-radius: 10px;
  padding-top: 1%;
  padding-bottom: 1%;
}

.LoginContainer {
  text-align: center;
  margin-top: 30px;
}

.LoginForm {
  width: 27%;
  margin: 0 auto; 
  border: 1px solid #ccc;
  padding: 10px;
  background-color: #ffffff;
  border-radius: 20px;
}

.LoginForm td {
  padding: 10px;
  font-size: 20px;
  
}

.LoginButton {
  background-color: #d4d4d4;
  padding: 10px 20px;
  border: none;
  border-radius: 10px;
  cursor: progress;
  font-size: 16px;
  display: block; 
  margin: 15px auto; 
}

.LoginButton:hover {
  background-color: #a5a5a5;
  color: white;
}

</style>
