
$.getJSON(
    "https://api-filmapik.herokuapp.com/country?search=france",
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

        var thumbnailPotrait1 = data.result[1].thumbnailPotrait;
        var title1 = data.result[1].title;
        var genre1 = data.result[1].detail.genre;
        var release1 = data.result[1].release;
        var quality1 = data.result[1].quality;
        var rating1 = data.result[1].rating;

        $(".thumbnailPotrait1").attr("src", thumbnailPotrait1);
        $(".title1").append(title1);
        $(".genre1").append(genre1);
        $(".release1").append(release1);
        $(".quality1").append(quality1);
        $(".rating1").append(rating1);

        var thumbnailPotrait2 = data.result[2].thumbnailPotrait;
        var title2 = data.result[2].title;
        var genre2 = data.result[2].detail.genre;
        var release2 = data.result[2].release;
        var quality2 = data.result[2].quality;
        var rating2 = data.result[2].rating;

        $(".thumbnailPotrait2").attr("src", thumbnailPotrait2);
        $(".title2").append(title2);
        $(".genre2").append(genre2);
        $(".release2").append(release2);
        $(".quality2").append(quality2);
        $(".rating2").append(rating2);
        
        var thumbnailPotrait3 = data.result[3].thumbnailPotrait;
        var title3 = data.result[3].title;
        var genre3 = data.result[3].detail.genre;
        var release3 = data.result[3].release;
        var quality3 = data.result[3].quality;
        var rating3 = data.result[3].rating;

        $(".thumbnailPotrait3").attr("src", thumbnailPotrait3);
        $(".title3").append(title3);
        $(".genre3").append(genre3);
        $(".release3").append(release3);
        $(".quality3").append(quality3);
        $(".rating3").append(rating3);

        var thumbnailPotrait4 = data.result[4].thumbnailPotrait;
        var title4 = data.result[4].title;
        var genre4 = data.result[4].detail.genre;
        var release4 = data.result[4].release;
        var quality4 = data.result[4].quality;
        var rating4 = data.result[4].rating;

        $(".thumbnailPotrait4").attr("src", thumbnailPotrait4);
        $(".title4").append(title4);
        $(".genre4").append(genre4);
        $(".release4").append(release4);
        $(".quality4").append(quality4);
        $(".rating4").append(rating4);
    }
);