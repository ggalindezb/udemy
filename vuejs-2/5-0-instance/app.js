vm1 = new Vue({
  el: '#app1',
  data: {
    title: 'A serious science viewer',
    loaded: false
  },
  methods: {
    loadArticle: function() {
      this.loaded = true;
    }
  },
  watch: {
    loaded: function() {
      this.$refs.description.innerText = 'Maybe not so serious...';
    }
  }
});

vm2 = new Vue({
  el: '#app2',
  computed: {
    loaded: function() {
      return vm1.loaded;
    }
  }
});

var data = {
  title: "The article's serious title"
};

// Don't do this.
vm3 = new Vue({
  data: data,
  computed: {
    loaded: function() {
      return vm2.loaded;
    }
  }
});
vm3.$data = data;
vm3.$mount(document.getElementById('app3'));
