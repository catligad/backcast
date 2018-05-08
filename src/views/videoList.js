var VideoListView = Backbone.View.extend({
  el: '.list',

  initialize: function(){
    this.videos = new Videos(window.exampleVideoData);
  },

  render: function() {
    this.$el.html(this.template());

    this.videos.forEach( video => {
      console.log(video)
      $('.video-list').append(new VideoListEntryView({model: video}).el
      );
    });

    return this;
  },

  template: templateURL('src/templates/videoList.html')

});
