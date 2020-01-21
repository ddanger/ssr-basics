<template>
  <div>
    <!-- <nav class="top-nav">
      <nuxt-link to="/">🏠</nuxt-link>
      <nuxt-link to="/about">🤷</nuxt-link>
      <nuxt-link to="/directory">👤</nuxt-link>
      <nuxt-link to="/tasks">✅</nuxt-link>
      <nuxt-link to="/posts">📝</nuxt-link>
    </nav> -->

    <!-- <div class="main-container"> -->
    <nuxt />
    <!-- </div> -->
  </div>
</template>

<style>
/* .main-container {
  padding: 12px;
} */

.top-nav a {
  margin: 12px;
  font-size: 38px;
  text-decoration: none;
}

.nuxt-link-exact-active {
  background: powderblue;
}

html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
</style>
