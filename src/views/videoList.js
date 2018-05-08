var VideoListView = Backbone.View.extend({
  el: '.list',

  initialize: function(){

  },

  render: function(videos) {
    this.$el.html(this.template());
    videos.forEach( video => {
      $('.video-list').append(new VideoListEntryView({model: video}).el
      );
    });

    return this;
  },

  template: templateURL('src/templates/videoList.html')

});
