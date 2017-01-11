<template>
  <div id="app">
    <button @click.prevent="openModal('modalOne')">Open modal one</button>
    <hex-modal ref="modalOne">
      <h1>Lorem ipsum</h1>
    </hex-modal>

    <button @click.prevent="openModal('modalTwo')">Open modal two</button>
    <hex-modal ref="modalTwo">
      <h1>Dolor sit amet</h1>
    </hex-modal>


    <hr>


    <button @click.prevent="openModals('modals')">Open modals</button>
    <button @click.prevent="openModal('specificModalInGroup')">Open specific modal in group</button>
    <hex-modals ref="modals">
      <hex-modal>
        <h1>Consectetur adipisicing elit</h1>
      </hex-modal>

      <hex-modal ref="specificModalInGroup">
        <h1>Sed do eiusmod tempor incididunt</h1>
      </hex-modal>

      <hex-modal>
        <h1>Ut labore et dolore magna aliqua</h1>
      </hex-modal>
    </hex-modals>
  </div>
</template>


<script>
  import HexModals from './HexModals.js';

  vex.defaultOptions.className = 'vex-theme-default';

  export default {
    name: 'app',

    mixins: [HexModals.Mixin],

    components: {
      HexModals: HexModals.HexModals,
      HexModal:  HexModals.HexModal,
    },
  };
</script>
