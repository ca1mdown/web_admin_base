<template>
  <div id="app">
    <router-view class="app-router-view"></router-view>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss">
  html {
    font-size: 10px;
    width: 100%;
    height: 100%;
  }

  body {
    width: 100%;
    height: 100%;
    touch-action: none;
  }

  #app {
    position: relative;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    width: 100%;
    height: 100%;

    .app-router-view {
      position: absolute;
      width: 100%;
      height: 100%;
      left: 0;
      top: 0;
      background: #f5f5f5;
      overflow-y: auto;
    }
  }

  * {
    padding: 0;
    margin: 0;
    font-family: not specified;
    font-size: 16px;
    box-sizing: border-box;
  }
</style>