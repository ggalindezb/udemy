new Vue({
  el: '#exercise',
  data: {
    effectClasses: {
      highlight: true,
      shrink: false
    },
    inputClass: '',
    toggleClass: '',
    showToggleClass: false,
    backgroundColor: '',
    progressWidth: 0
  },
  computed: {
    computedClass: function() {
      return {
        [this.toggleClass]: this.showToggleClass === 'true' ? true : false
      };
    },
    computedProperties: function() {
      return {
        height: '100px',
        width: '100px',
        backgroundColor: this.backgroundColor
      };
    },
    progressClasses: function() {
      return {
        height: '50px',
        width: this.progressWidth + 'px',
        backgroundColor: 'green'
      };
    }
  },
  methods: {
    click: function() {},
    toggleEffect: function() {
      var vm = this;
      setInterval(function() {
        vm.effectClasses.highlight = !vm.effectClasses.highlight;
        vm.effectClasses.shrink = !vm.effectClasses.shrink;
      }, 1000);
    },
    stepProgress: function() {
      var vm = this;
      setTimeout(function() {
        vm.progressWidth += 1;
        if(vm.progressWidth < 400) {
          vm.stepProgress();
        }
      }, 10);
    }
  }
});
