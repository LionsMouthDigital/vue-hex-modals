<template>
  <div class="modals" v-show="false">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'HexModals',

    methods: {
      /**
       * Open all modals in this group.
       */
      open() {
        this.$children.forEach((modal) => {
          modal.open();
        });
      },
    },
  }
</script>
