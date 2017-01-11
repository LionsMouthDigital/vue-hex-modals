<script>
  window.vex = require('vex-js');

  export default {
    methods: {
      /**
       * Open a modal.
       *
       * @param {String} Modal's `ref`.
       */
      openModal(ref) {
        this.$refs[ref].open();
      },

      /**
       * Open all modals in a group.
       *
       * @param {String} Modals' `ref`.
       */
      openModals(ref) {
        this.$refs[ref].open();
      }
    },
  };
</script>
