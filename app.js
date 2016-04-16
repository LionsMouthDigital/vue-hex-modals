var Vue = require('vue');

new Vue({
  el: 'body',

  components: {
    HexMessage: require('vue-hex-message') ,
    HexModals:  require('./src/component.js'),
  },
});
