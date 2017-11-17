var movie = function(name, year, url, rating, reviews){
  this.name = name;
  this.year = year;
  this.url = url;
  this.rating = rating;
  this.reviews = reviews;
}

var movies = [];

$(function () {
  movies.forEach(function(movie) {
    $("#list").append('<div class="row"><div class="col-rank">' + movie.number + '</div><div class="col-Rating"><img src="img/fresh-16.png" alt="">' + movie.rating + '%</div><div class="col-title"><a href="' + movie.url + '">' + movie.name + '</a> (' + movie.year + ')</div><div class="col-reviews">' + movie.reviews + '</div></div>');
  });

  $("form").submit(function(event){
    event.preventDefault();
    var nameInput = $("input#name-input").val();
    var yearInput = parseInt($("input#year-input").val());
    var urlInput = $("input#url-input").val();
    var ratingInput = parseInt($("input#rating-input").val());
    var reviewsInput = parseInt($("input#reviews-input").val());
    var nameInput = new movie(nameInput, yearInput, urlInput, ratingInput, reviewsInput);
    movies.push(nameInput);
    sort();

  });
  var sort = function() {
    var number = 0;
    $("#output").empty();
    movies.forEach(function(movie) {
      number += 1;
      $("#output").append('<div class="row"><div class="col-rank">' + number + '</div><div class="col-Rating"><img src="img/fresh-16.png" alt="">' + movie.rating + '%</div><div class="col-title"><a href="' + movie.url + '">' + movie.name + '</a> (' + movie.year + ')</div><div class="col-reviews">' + movie.reviews + '</div></div>');
    });
  }
});
