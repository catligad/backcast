var AppView = Backbone.View.extend({

  el: '#app',

  collection: function() {
    let videos = [];
    window.exampleVideoData.forEach( data => {
      let video = new Video(data);
      videos.push(video);
    });
    this.videos = new Videos(videos);
    return this.videos;
  },

  initialize: function() {
    this.render();
    this.videoList = new VideoListView().render(this.collection());
    this.videoPlayer = new VideoPlayerView().render();
  },


  render: function() {
    this.$el.html(this.template);
  },

  template: templateURL('src/templates/app.html')

});
