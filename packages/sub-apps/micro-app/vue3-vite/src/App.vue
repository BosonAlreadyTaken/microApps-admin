<template>
  <div id="vue3-vite">
    <h1>vue3-vite应用</h1>
    <span class="info">
      在嵌入vite子应用时，micro-app的功能只负责渲染，其它的行为由应用自行决定，这包括如何防止样式、JS变量、元素的冲突。
    </span>
    <nav>
      <router-link to="/">首页</router-link> |
      <router-link to="/about">关于我们</router-link> |
      <router-link to="/contact">联系我们</router-link>
    </nav>
    <router-view />
  </div>
</template>

<style>
#vue3-vite {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.info {
  display: inline-block;
  margin-top: 20px;
  padding: 5px;
  background-color: #fdf6ec;
  color: #e6a23c;
}
nav {
  margin-top: 20px;
}
nav a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
  margin: 0 10px;
}
nav a.router-link-exact-active {
  color: #42b983;
}
</style>