var VideoListEntryView = Backbone.View.extend({

  initialize: function() {
    this.render();
  },

  render: function() {
    this.$el.html(this.template(this.model.attributes));

  },

  events: {
    'click .video-list-entry-title': 'handleClick',
  }, 

  handleClick: function() {
    new VideoPlayerView().render(this.model);
  },


  template: _.template(
    `
    <div class="video-list-entry media">
      <div class="media-left">
        <img class="media-object" src="
        <%- snippet.thumbnails.default.url %>" />
      </div>
      <div class="media-body">
        <div class="video-list-entry-title"><%- snippet.title %></b></div>
        <div class="video-list-entry-detail"><%- snippet.description %></b></div>
      </div>
    </div>`)
  

});