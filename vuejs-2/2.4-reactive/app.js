new Vue({
  el: '#app',
  data: {
    counter: 0,
    other: 0
  },
  computed: {
    output: function() {
      console.log('Computed');
      return this.counter > 5 ? 'Greater than 5' : 'Smaller than 5';
    }
  },
  watch: {
    counter: function(value) {
      var vm = this;
      setTimeout(function() {
        console.log('Clearing.')
        vm.counter = 0;
      }, 2000);
    }
  },
  methods: {
    result: function() {
      console.log('Method');
      return this.counter > 5 ? 'Greater than 5' : 'Smaller than 5';
    }
  }
});
