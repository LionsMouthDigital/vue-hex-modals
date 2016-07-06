<template>
  <div
    class  = "modal-overlay"
    v-show = "show"
    @click = "hide($event.target.className.indexOf('modal-overlay') > -1)"
  >
    <div class="modals">
      <slot></slot>

      <div class="carousel-pager" v-if="carousel">
        <button @click="this.active--">Previous</button>
        <button @click="this.active++">Next</button>
      </div>
    </div>
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
        this.activate(this.active)
      },

      /**
       * Make sure the active modal is visible.
       *
       * @author Curtis Blackwell
       * @return {void}
       */
      visible() {
        this.toggleBodyClass();

        if (this.visible) {
          this.activate(this.active)
        }
      },
    },

    computed: {
      /**
       * Determine wheter to show the modal.
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
       * Don't call this method directly. Doing so would end up calling it twice, because it ensures
       * the passed index is neither too high nor low.
       *
       * Instead, use `this.showModal(i)`.
       *
       * NOTE The seemingly extra logic in this method exists to make sure everything still works
       * 			even if children are added/removed.
       *
       * @author Curtis Blackwell
       * @param  {integer|string} i Modal's one-based index.
       * @return {integer}
       */
      activate(i) {
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
      },

      /**
       * Hide the modal.
       *
       * If a non-boolean value is passed (passing nothing causes Vue to pass the event object),
       * the modal will be hidden.
       *
       * @author Curtis Blackwell
       * @param  {boolean} condition Whether to hide the modal.
       * @return {void}
       */
      hide(condition) {
        if (typeof condition === 'boolean' && condition) {
          this.visible = false;
        } else if (typeof condition !== 'boolean') {
          this.visible = false;
        }
      },

      /**
       * Show the modal of the passed index.
       *
       * @author Curtis Blackwell
       * @param  {integer} i Modals's one-based index.
       * @return {void}
       */
      showModal(i) {
        this.active  = i;
        this.visible = true;
      },

      /**
       * Toggle `.modal-open` on the `body`.
       *
       * This enables special styling when a modal is active.
       *
       * @author Curtis Blackwell
       * @return {void}
       */
      toggleBodyClass() {
        var body = document.querySelector('body');

        if (this.visible && body.className.indexOf('modal-open') < 0) {
          body.className += ' modal-open';

        } else {
          body.className  = body.className.replace(/modal-open/, '');
        }
      },
    },

    events: {
      /**
       * When a modal is dismissed, hide the modal overlay.
       *
       * @author Curtis Blackwell
       * @return {void}
       */
      dismissed() {
        this.visible = false;
      },
    },

    /**
     * Make sure settings are good before rendering.
     *
     * @author Curtis Blackwell
     * @return {void}
     */
    compiled() {
      // Make sure only one modal is active when loaded.
      this.activate(this.active);

      // Add the body class if necessary.
      if (this.visible) {
        this.toggleBodyClass();
      }

      // Conditionally ensure children are dismissible.
      if (this.dismissible) {
        for (var i = 0; i < this.$children.length; i++) {
          this.$children[i].dismissible = true;
        }
      }

      // Enable keyboard commands.
      document.addEventListener("keyup", (e) => {
        if (this.visible) {
          switch (e.keyCode) {
            // Dismiss modals with esc.
            case 27:
              this.visible = false;
              break;
            // Previous modal with left arrow or k.
            case 37:
            case 75:
              this.active--;
              break;
            // Next modal with right arrow or j.
            case 39:
            case 74:
              this.active++;
              break;
          }
        }
      });
    },
  }
</script>
