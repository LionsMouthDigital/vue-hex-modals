(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.hexModals = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(_dereq_,module,exports){
var HexModals  = _dereq_('./components/HexModals.vue');
module.exports = HexModals;

},{"./components/HexModals.vue":2}],2:[function(_dereq_,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  props: {
    active: {
      type: Number,
      default: 1
    },

    carousel: Boolean,

    dismissible: Boolean,
    visible: Boolean
  },

  watch: {
    active: function active() {
      this.activateModal(this.active);
    },
    visible: function visible() {
      this.toggleBodyClass();

      if (this.visible) {
        this.activateModal(this.active);
      }
    }
  },

  computed: {
    show: function show() {
      return this.visible;
    }
  },

  methods: {
    activateModal: function activateModal(i) {
      i = parseInt(i);

      var last = this.$children.length;
      for (var j = 0; j < this.$children.length; j++) {
        this.$children[j].visible = false;
      }

      i = i > last ? 1 : i;
      i = i < 1 ? last : i;

      this.active = i;
      this.$children[this.active - 1].visible = true;
    },
    showModal: function showModal(i) {
      this.active = i;
      this.visible = true;
    },
    toggleBodyClass: function toggleBodyClass() {
      var body = document.querySelector('body');

      if (this.visible && body.className.indexOf('modal-open') < 0) {
        body.className += ' modal-open';
      } else {
        body.className = body.className.replace(/modal-open/, '');
      }
    }
  },

  events: {
    dismissed: function dismissed() {
      this.visible = false;
    }
  },

  compiled: function compiled() {
    var _this = this;

    this.activateModal(this.active);

    if (this.visible) {
      this.toggleBodyClass();
    }

    if (this.dismissible) {
      for (var i = 0; i < this.$children.length; i++) {
        this.$children[i].dismissible = true;
      }
    }

    document.addEventListener("keyup", function (e) {
      if (_this.visible && e.keyCode == 27) {
        _this.visible = false;
      }
    });
  }
};
if (module.exports.__esModule) module.exports = module.exports.default
;(typeof module.exports === "function"? module.exports.options: module.exports).template = "\n<div class=\"modal-overlay\" v-show=\"show\">\n  <slot></slot>\n\n  <div class=\"carousel-pager\" v-if=\"carousel\">\n    <button @click=\"this.active--\">Previous</button>\n    <button @click=\"this.active++\">Next</button>\n  </div>\n</div>\n"
if (module.hot) {(function () {  module.hot.accept()
  var hotAPI = _dereq_("vue-hot-reload-api")
  hotAPI.install(_dereq_("vue"), true)
  if (!hotAPI.compatible) return
  var id = "/Users/curtisblackwell/Sites/hex/vue-hex-modals/src/components/HexModals.vue"
  if (!module.hot.data) {
    hotAPI.createRecord(id, module.exports)
  } else {
    hotAPI.update(id, module.exports, (typeof module.exports === "function" ? module.exports.options : module.exports).template)
  }
})()}
},{"vue":undefined,"vue-hot-reload-api":undefined}]},{},[1])(1)
});