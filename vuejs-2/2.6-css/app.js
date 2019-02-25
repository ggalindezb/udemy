new Vue({
  el: '#app',
  data: {
    attachRed: false,
    attachGreen: false,
    color: 'blue'
  },
  computed: {
    redColor: function() {
      return {
        red: this.attachRed
      };
    }
  }
});
