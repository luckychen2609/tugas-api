$.getJSON(
  "https://api-filmapik.herokuapp.com/search?q=Avengers:%20Age%20of%20Ultron",
  function(data){
      console.log(data);

      var thumbnailPotrait = data.result[0].thumbnailPotrait;
      var title = data.result[0].title;
      var genre = data.result[0].detail.genre;
      var release = data.result[0].release;
      var quality = data.result[0].quality;
      var rating = data.result[0].rating;

      $(".thumbnailPotrait").attr("src", thumbnailPotrait);
      $(".title").append(title);
      $(".genre").append(genre);
      $(".release").append(release);
      $(".quality").append(quality);
      $(".rating").append(rating);
  }
);

$.getJSON(
  "https://api-filmapik.herokuapp.com/search?q=Sentinelle",
  function(data){
      console.log(data);

var thumbnailPotrait1 = data.result[0].thumbnailPotrait;
      var title1 = data.result[0].title;
      var genre1 = data.result[0].detail.genre;
      var release1 = data.result[0].release;
      var quality1 = data.result[0].quality;
      var rating1 = data.result[0].rating;

      $(".thumbnailPotrait1").attr("src", thumbnailPotrait1);
      $(".title1").append(title1);
      $(".genre1").append(genre1);
      $(".release1").append(release1);
      $(".quality1").append(quality1);
      $(".rating1").append(rating1);


    }
    );

    $.getJSON(
      "https://api-filmapik.herokuapp.com/search?q=Bitcoin%20Heist",
      function(data){
          console.log(data);
    
          var thumbnailPotrait2 = data.result[0].thumbnailPotrait;
          var title2 = data.result[0].title;
          var genre2 = data.result[0].detail.genre;
          var release2 = data.result[0].release;
          var quality2 = data.result[0].quality;
          var rating2 = data.result[0].rating;
    
          $(".thumbnailPotrait2").attr("src", thumbnailPotrait2);
          $(".title2").append(title2);
          $(".genre2").append(genre2);
          $(".release2").append(release2);
          $(".quality2").append(quality2);
          $(".rating2").append(rating2);
      }
    );

    $.getJSON(
      "https://api-filmapik.herokuapp.com/search?q=My%20God!%20Father",
      function(data){
          console.log(data);
    
          var thumbnailPotrait3 = data.result[0].thumbnailPotrait;
          var title3 = data.result[0].title;
          var genre3 = data.result[0].detail.genre;
          var release3 = data.result[0].release;
          var quality3 = data.result[0].quality;
          var rating3 = data.result[0].rating;
    
          $(".thumbnailPotrait3").attr("src", thumbnailPotrait3);
          $(".title3").append(title3);
          $(".genre3").append(genre3);
          $(".release3").append(release3);
          $(".quality3").append(quality3);
          $(".rating3").append(rating3);
      }
    );

    $.getJSON(
      "https://api-filmapik.herokuapp.com/search?q=SAS:%20Red%20Notice",
      function(data){
          console.log(data);
    
          var thumbnailPotrait4 = data.result[0].thumbnailPotrait;
          var title4 = data.result[0].title;
          var genre4 = data.result[0].detail.genre;
          var release4 = data.result[0].release;
          var quality4 = data.result[0].quality;
          var rating4 = data.result[0].rating;
    
          $(".thumbnailPotrait4").attr("src", thumbnailPotrait4);
          $(".title4").append(title4);
          $(".genre4").append(genre4);
          $(".release4").append(release4);
          $(".quality4").append(quality4);
          $(".rating4").append(rating4);
      }
    );

    $.getJSON(
      "https://api-filmapik.herokuapp.com/search?q=The%20Abominable%20Bride",
      function(data){
          console.log(data);
    
          var thumbnailPotrait5 = data.result[0].thumbnailPotrait;
          var title5 = data.result[0].title;
          var genre5 = data.result[0].detail.genre;
          var release5 = data.result[0].release;
          var quality5 = data.result[0].quality;
          var rating5 = data.result[0].rating;
    
          $(".thumbnailPotrait5").attr("src", thumbnailPotrait5);
          $(".title5").append(title5);
          $(".genre5").append(genre5);
          $(".release5").append(release5);
          $(".quality5").append(quality5);
          $(".rating5").append(rating5);
      }
    );