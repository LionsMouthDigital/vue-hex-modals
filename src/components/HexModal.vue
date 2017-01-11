<template>
  <div class="modal" v-show="false">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'HexModal',


    data() {
      return {
        // http://github.hubspot.com/vex/api/advanced/#vex-instance-api
        vexInstance: false,
      };
    },


    methods: {
      /**
       * Open this modal.
       */
      open() {
        if (!this.vexInstance || !this.vexInstance.isOpen) {
          this.vexInstance = vex.open({
            // Content
            unsafeContent: this.$el.innerHTML,

            // Classes
            className:        vex.defaultOptions.className + ' modal',
            overlayClassName: vex.defaultOptions.overlayClassName + ' modal-overlay',
            contentClassName: vex.defaultOptions.contentClassName + ' modal-content',
            closeClassName:   vex.defaultOptions.closeClassName + ' modal-close',

            // Hooks
            afterOpen() {
              // Add class to prevent scrolling outside of modal while it's open.
              document.querySelector('body').classList.toggle('modal-open');
            },

            afterClose() {
              // Remove class that prevents scrolling outside of modal while it's open.
              document.querySelector('body').classList.toggle('modal-open');
            }
          });
        }
      },
    },
  }
</script>
