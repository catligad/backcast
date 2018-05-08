var AppView = Backbone.View.extend({

  el: '#app',

  initialize: function() {
    this.render();
    this.videoList = new VideoListView().render();
    console.log(this.videoList);
    
  },


  render: function() {
    this.$el.html(this.template);
  },

  template: templateURL('src/templates/app.html')

});
