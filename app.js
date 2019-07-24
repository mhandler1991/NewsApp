var apiKey = "Qv3A0GLRWioFsVIsnGIWAqgCP3dqivTc";
var query = "trump";
var startYear, endYear = 1989;
var noOfArticles;
var queryURL = `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${query}&api-key=${apiKey}`;


$("button").on("click", function(){
    console.log("clicked button")
    // if(startYear != "" && endYear != ""){
    //     queryURL = `${queryURL}&fq=pub_year(`
    //     for(startYear; startYear <= endYear; ++startYear){
    //         queryURL = queryURL + startYear;
    //     }
    //     queryURL = queryURL + ")";

    //     console.log(queryURL);
    // }

    $.ajax({
        url: queryURL,
        method: "GET"
      })
      .then(function (response) {
        console.log(response);
        for(var article of response.response.docs){
            console.log(article.headline.main);
            var newDiv = $("<div>").addClass("carousel-item active")
                .append($("<h1>").addClass("d-block w-100").text(article.headline.main));
            $(".carousel-inner").append(newDiv)
            // var newArticle = $("<a>").attr("href", article.web_url).text(article.headline.main);
            // $("#test").prepend(newArticle);
        }
      });
});