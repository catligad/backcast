var AppView = Backbone.View.extend({

  el: '#app',

  collection: function(input) {
    let videos = [];
    input.forEach( data => {
      let video = new Video(data);
      videos.push(video);
    });
    this.videos = new Videos(videos);
    return this.videos;
  },

  initialize: function(input) {
    this.render();
    this.videoList = new VideoListView().render(this.collection(input));
    this.videoPlayer = new VideoPlayerView().render(this.collection(input).models[0]);
    this.search = new SearchView().render();
  },


  render: function() {
    this.$el.html(this.template);
  },

  template: templateURL('src/templates/app.html')

});
