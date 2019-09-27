function loadData() {

    var $body = $('body');
    var $header = $('#nytimes-header');
    var $element = $('#nytimes-articles');
    var $intro = $('#intro');
    $element.text("");
    var city = $('#city').val();
    var address = city;

    $intro.text('Wanna Know More About ' + address + '?');

    var nytimesUrl = 'http://api.nytimes.com/svc/search/v2/articlesearch.json?q=' + city + '&sort=newest&api-key=KPy5JG9ziKw1HNABXJqS5cOzXsWMhhfF'
    $.getJSON(nytimesUrl, function(data){
        $header.text('Here are some New York Times articles about ' + city);
        articles = data.response.docs;
        for (var i = 0; i < articles.length; i++) {
            var article = articles[i];
            $element.append('<li class="article">'+
                '<a href="'+article.web_url+'">'+article.headline.main+'</a>'+
                '<p>' + article.snippet + '</p>'+
                '</li>');
        };
    }).error(function(e){
        $header.text('Sorry we found nothing :( Try another city?' );

    })


    return false;
};

$('#form-container').submit(loadData);
