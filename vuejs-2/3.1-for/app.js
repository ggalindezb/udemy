new Vue({
  el: '#app',
  data: {
    ingredients: ['meat', 'fruit', 'cookies'],
    colas: [
      {name: 'Colas', age: 28, color: 'black'},
      {name: 'Otro Colas', age: 3, color: 'pink'}
    ],
    inputIngredient: ''
  },
  methods: {
    setIngredient: function(event) {
      this.inputIngredient = event.target.value;
    },
    addIngredient: function() {
      if(this.inputIngredient) {
        this.ingredients.push(this.inputIngredient);
      }
    }
  }
});
