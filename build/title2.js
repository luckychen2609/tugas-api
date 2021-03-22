$.getJSON(
  "https://api-filmapik.herokuapp.com/search?q=Sentinelle",
  function(data){
      console.log(data);

      var thumbnailPotrait = data.result[0].thumbnailPotrait;
      var title = data.result[0].title;
      var genre = data.result[0].detail.genre;
      var quality = data.result[0].quality;
      var rating = data.result[0].rating;
      var description = data.result[0].detail.description;
      var trailer = data.result[0].detail.trailer;

      $(".thumbnailPotrait").attr("src", thumbnailPotrait);
      $(".title").append(title);
      $(".genre").append(genre);
      $(".quality").append(quality);
      $(".rating").append(rating);
      $(".description").append(description);
      $(".trailer").append(trailer);
  }
);
