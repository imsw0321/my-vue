<template>
  <header>
    <div>

      <img class="Main_img" src="./assets/LoGo.png" alt="logo" />
    </div>
  </header>
  <div>
  <nav class="Navbar">
    <ul>
    <li><router-link to="/"  class="menulink"></router-link></li>
    <li><router-link to="/Main"  class="menulink">Main</router-link></li>
    <li><router-link to="/SelfIntro"  class="menulink">Introduce</router-link></li>
    <li><router-link to="/Project"  class="menulink">Project</router-link></li>
    <li><router-link to="/Object"  class="menulink">Object</router-link></li>
  </ul>
</nav>  
  <main class="Maincontent">
      <router-view></router-view>
    </main>
  </div>
  
  <footer>
    <div className="Footer">Copyright 2023. Kim Sun Woo all rights reserved. </div>
  </footer>
</template>

<script>

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
  /*background-color: rgb(221, 221, 221);*/
 
  padding: 0;
}
.Navbar li {
  display: inline;
  margin: 0 50px; 
  font-size: 25px;

  /*background-color: rgb(255, 255, 255);*/
}
ul, li {
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
.Footer{
  padding-left: 38%;
  border-radius: 10px;
  padding-top: 1%;
  padding-bottom: 1%;
}

</style>
