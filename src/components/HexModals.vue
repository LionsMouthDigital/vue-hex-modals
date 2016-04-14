<template>
  <div class="modal-wrapper" v-show="show">
    <slot></slot>
    <button v-if="carousel" @click="this.active--">Previous</button>
    <button v-if="carousel" @click="this.active++">Next</button>
  </div>
</template>

<script>
  export default {
    props: {
      active: {
        type:    Number,
        default: 1
      },
      // Set to true to show pager buttons.
      carousel:    Boolean,
      // Set this to true to make all child modals dismissible.
      dismissible: Boolean,
      visible:     Boolean,
    },

    watch: {
      /**
       * Show the appropriate modal when the active property is updated.
       *
       * @author Curtis Blackwell
       * @return {void}
       */
      active() {
        this.activateModal(this.active)
      },
      /**
       * Make sure the active modal is visible.
       *
       * @author Curtis Blackwell
       * @return {void}
       */
      visible() {
        if (this.visible) {
          this.activateModal(this.active)
        }
      },
    },

    computed: {
      /**
       * Determine wheter to show the modal wrapper.
       *
       * @author Curtis Blackwell
       * @return {boolean}
       */
      show() {
        return this.visible;
      },
    },

    methods: {
      /**
       * Set the active modal.
       *
       * Don't call this method directly. Doing so would end up calling it twice.
       * Instead, update `this.active`.
       *
       * NOTE The seemingly extra logic in this method exists to make sure everything still works
       * 			even if children are added/removed.
       *
       * @author Curtis Blackwell
       * @param  {integer|string} i Modal's index.
       * @return {integer}
       */
      activateModal(i) {
        i = parseInt(i);

        var last = this.$children.length;
        for (var j = 0; j < this.$children.length; j++) {
          this.$children[j].visible = false;
        }

        // Loops back to
        // the first modal if the index is too high or
        // the last  modal if the index is too low.
        i = (i > last) ? 1    : i;
        i = (i < 1)    ? last : i;

        this.active = i;
        this.$children[this.active - 1].visible = true;
      }
    },

    events: {
      /**
       * When a modal is dismissed, hide the modal wrapper.
       *
       * @author Curtis Blackwell
       * @return {void}
       */
      dismissed() {
        this.visible = false;
      },
    },

    /**
     * Make sure only one modal is active when loaded.
     *
     * @author Curtis Blackwell
     * @return {void}
     */
    compiled() {
      this.activateModal(this.active);

      if (this.dismissible) {
        for (var i = 0; i < this.$children.length; i++) {
          this.$children[i].dismissible = true;
        }
      }
    },
  }
</script>
