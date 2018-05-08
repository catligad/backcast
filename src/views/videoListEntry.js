var VideoListEntryView = Backbone.View.extend({

  initialize: function(video){
    this.render(video);
  },

  render: function(video) {
    this.$el.html(this.template(this.video.attributes));
    console.log(video, 'video')
    return this;
  },

  template: templateURL('src/templates/videoListEntry.html')

});
