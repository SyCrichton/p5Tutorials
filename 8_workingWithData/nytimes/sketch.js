var url = 'https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=93cbcd2d42614ec88dfdf8020976df7d&q=porcupine';


function setup() {
  noCanvas();
  loadJSON(url, gotData);
}

function gotData(data) {
  var articles = data.response.docs;

  for (var i = 0; i < articles.length; i++) {
    createElement('h1', articles[i].headline.main);
    createP(articles[i].snippet);
  }
  print(data.response.docs[0].headline.main)
}


