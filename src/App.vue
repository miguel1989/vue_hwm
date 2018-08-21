<template>
  <div id="app">
    <header>I am header</header>
    <main>
      <Board/>
    </main>
    <footer>I am footer</footer>
  </div>
</template>

<script>
  import Board from './components/Board'

  export default {
    name: 'App',
    components: {
      Board
    }
  }
</script>

<style>
  html, body {
    height: 100%;
    padding: 0;
    margin: 0;
  }

  #app {
    height: 100%;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    display: grid;
    grid-template-rows: 10% 80% 10%;
  }
</style>
