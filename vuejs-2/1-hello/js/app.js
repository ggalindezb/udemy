new Vue({
  el: '#app',
  data: {
    title: 'Hello world!',
    link: 'https://etsy.com',
    html_link: '<a href="https://www.kichink.com/">Kichink</a>'
  },
  methods: {
    changeTitle: function(event) {
      this.title = event.target.value;
    }
  }
});
