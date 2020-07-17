$(document).ready(function(){

})
//click numebr for the search buttons gathers all users sold
$("#search").on("click", function(){
    var searchInput = $("#searchInput").val();
    var recordsNum = $("#recordsNum").val();
    var startInput = $("#startInput").val();
    var endInput = $("#endInput").val();
    console.log(searchInput);
    console.log(endInput);
    console.log(startInput);
    console.log(recordsNum);

    event.preventDefault();
});

$("#clear").on("click", function(){
   $(".input").empty();

})

function displayArticles () {
    $(".articles-body").empty();
    for (  i  = 0; i < recordsNum.length; i++) {
        var recordSelect = $("#recordsNum").val()
        
        var article = $("<div>").text();

        article.addClass("article");

        console.log(article);
    }

}

