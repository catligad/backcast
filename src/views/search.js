var SearchView = Backbone.View.extend({

  initialize: function() {

  },

  render: function() {
    $('.search').html(this.template());
    $('.btn').on('click', function() { 
      let query = $('input').val();
      $.ajax({
        method: 'GET',
        url: 'https://www.googleapis.com/youtube/v3/search',
        data: {
          'q': `${query}`, 
          'maxResults': 5,
          'videoEmbeddable': true,
          'key': window.YOUTUBE_API_KEY,
          'type': 'video',
          'part': 'snippet'
        },
        success: function(data) {
          new AppView(data.items);
        }
      });
    });
  },

  template: templateURL('src/templates/search.html')

});
