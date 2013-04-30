# language: pt
Funcionalidade: Busca no Google
  Como usuário
  Eu quero efetuar busca no Google
  Então eu quero ver os resultados

  Cenário: Os resultados da busca são mostrados
    Dado que eu abra a página "http://www.google.com"
    Quando eu busco por "Cucumber"
    Então o título da página deveria conter "Cucumber"