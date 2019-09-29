function loadData() {

    var $body = $('body');
    var $header = $('#nytimes-header');
    var $element = $('#nytimes-articles');
    var $intro = $('#intro');
    $element.text("");
    var food = $('#food').val();
    var address = food;

    $intro.text('Wanna Know More About ' + address + '?');

    var nytimesUrl = 'http://api.nytimes.com/svc/search/v2/articlesearch.json?q=' + food + '&sort=newest&api-key=KPy5JG9ziKw1HNABXJqS5cOzXsWMhhfF'
    $.getJSON(nytimesUrl, function(data){
        $header.text('Here are some New York Times articles about ' + food);
        articles = data.response.docs;
        for (var i = 0; i < articles.length; i++) {
            var article = articles[i];
            $element.append('<li class="article">'+
                '<a href="'+article.web_url+'">'+article.headline.main+'</a>'+
                '<p>' + article.snippet + '</p>'+
                '</li>');
        };
    }).error(function(e){
        $header.text('Sorry we found nothing :( Try another food item?' );

    })


    return false;
};

$('#form-container').submit(loadData);
