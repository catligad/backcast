var VideoListEntryView = Backbone.View.extend({

  initialize: function(video){
    this.render(video);
  },

  render: function() {
    this.$el.html(this.template(this.model.attributes));
    return this;
  },

  template: templateURL('src/templates/videoListEntry.html')

});
