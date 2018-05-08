var VideoListView = Backbone.View.extend({
  el: '.list',

  initialize: function(){
    // var videoList = [];
    
  },

  render: function() {
    this.$el.children().detach();
    window.exampleVideoData.forEach( data => {
      let video = new Video(data);
      let superVideo = new VideoListEntryView(video);
      console.log(superVideo.render(video));
      this.$el.find('.video-list').append(superVideo.render(video));
    })
    this.$el.html(this.template());
    this.$el.find('.video-list').append(window.exampleVideoData)
  },

  template: templateURL('src/templates/videoList.html')

});
