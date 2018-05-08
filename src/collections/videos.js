var Videos = Backbone.Collection.extend({

  model: Video,

  search: function(query) {
    $.ajax({
      method: 'GET',
      url: 'https://www.googleapis.com/youtube/v3/search',
      key: window.YOUTUBE_API_KEY,
      data: {'q': `${query}`, 'maxResults': '5', 'videoEmbeddable': 'true' },
      success: function(data) {
        console.log(data);
      }
    });
  }

});
