$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri('com\michalvich\cucumber\selenium\example\GoogleSearch.feature');
formatter.feature({
  "id": "busca-no-google",
  "description": "Como usuário\nEu quero efetuar busca no Google\nEntão eu quero ver os resultados",
  "name": "Busca no Google",
  "keyword": "Funcionalidade",
  "line": 2,
  "comments": [
    {
      "value": "# language: pt",
      "line": 1
    }
  ]
});
formatter.scenario({
  "id": "busca-no-google;os-resultados-da-busca-são-mostrados",
  "description": "",
  "name": "Os resultados da busca são mostrados",
  "keyword": "Cenário",
  "line": 7,
  "type": "scenario"
});
formatter.step({
  "name": "que eu abra a página \"http://www.google.com\"",
  "keyword": "Dado ",
  "line": 8
});
formatter.step({
  "name": "eu busco por \"Cucumber\"",
  "keyword": "Quando ",
  "line": 9
});
formatter.step({
  "name": "o título da página deveria conter \"Cucumber\"",
  "keyword": "Então ",
  "line": 10
});
formatter.match({
  "arguments": [
    {
      "val": "http://www.google.com",
      "offset": 22
    }
  ],
  "location": "GoogleSearchScenario.the_page_is_open(String)"
});
formatter.result({
  "duration": 934684483,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Cucumber",
      "offset": 14
    }
  ],
  "location": "GoogleSearchScenario.I_search_for(String)"
});
formatter.result({
  "duration": 388619520,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Cucumber",
      "offset": 35
    }
  ],
  "location": "GoogleSearchScenario.a_browser_title_should_contains(String)"
});
formatter.result({
  "duration": 2439073,
  "status": "passed"
});
});