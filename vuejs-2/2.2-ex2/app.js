new Vue({
  el: '#exercise',
  data: {
    value: ''
  },
  methods: {
    alert: function() {
      alert('SPAM!');
    },
    store: function(event) {
      this.value = event.target.value
    }
  }
});
