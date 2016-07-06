<template>
  <div id="app">
    <h1>Hex Modals</h1>
    <h2>Visible by default</h2>
    <hex-modals v-ref:toggle visible>
      <hex-message dismissible>
        <h3>Greetings</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.
        </p>
      </hex-message>
    </hex-modals>


    <h2>Toggle with button</h2>
    <button @click="this.$refs.toggle.visible = !this.$refs.toggle.visible">
      Toggle modal
    </button>

    <hex-modals v-ref:toggle>
      <hex-message>
        <h3>Color me toggled</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.
        </p>
      </hex-message>
    </hex-modals>


    <h2>Carousel</h2>
    <button @click="this.$refs.carousel.visible = !this.$refs.carousel.visible">
      Toggle carousel modal
    </button>

    <hex-modals dismissible carousel v-ref:carousel>
      <hex-message>
        <h3>ºㅛº</h3>
        <p>
          &hellip;
        </p>
      </hex-message>

      <hex-message>
        <h3>You're still here?</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.
        </p>
      </hex-message>

      <hex-message>
        <h3>It's over!</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.
        </p>
      </hex-message>

      <hex-message>
        <h3>Go home!</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.
        </p>
      </hex-message>

      <hex-message>
        <h3>Go.</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.
        </p>
      </hex-message>
    </hex-modals>
  </div>
</template>

<script>
  import HexModals  from './components/HexModals.vue'
  import HexMessage from 'vue-hex-message'

  export default {
    components: {
      HexModals,
      HexMessage,
    },
  }
</script>

<style>
  body {
    font-family: Helvetica, sans-serif;
  }
</style>
