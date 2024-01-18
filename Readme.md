# Projeto StarWars

## Descrição

Nesse projeto foi criada uma aplicação que consulta uma API para recuperar dados dos planetas do universo de Star Wars. Com os dados retornados dessa API foi criada uma tabela com alguns filtros. Os planetas poderão ser filtrados por suas características, como população, período orbital, diâmetro e outras.


## Conteúdo

Os objetivos desse projeto são:

1. Utilizar Context API do React na aplicação.
2. Criar filtros para filtrar os dados retornados da API.
3. Desenvolver testes de coberturas da aplicação.

## Desenvolvimento do projeto

`Requisito 1`
Fazer uma requisição para o endpoint /planets da API de Star Wars e preencha uma tabela com os dados retornados, com exceção dos dados da coluna residents.

`Requisito 2`
Criar um filtro de texto para a tabela.

`Requisito 3`
Criar um filtro para valores numéricos.

`Requisito 4`
Implementar múltiplos filtros numéricos.
* Deverá ser possível adicionar múltiplos filtros numéricos. Todos os filtros adicionados devem funcionar de forma conjunta.

`Requisito 5`
Desenvolver testes para atingir 30% de cobertura total da aplicação.

`Requisito 6`
Não utilizar filtros repetidos. Deve-se usar Context API e Hooks para fazer o gerenciamento do estado da aplicação.
* Caso um filtro seja totalmente preenchido, um novo filtro de valores numéricos deve ser carregado.
Esse novo filtro não deve incluir quaisquer colunas que já tenham sido selecionadas em filtros de valores numéricos anteriores.
* Caso todas as colunas já tenham sido inclusas em filtros anteriores, não deve ser carregado um novo filtro.

`Requisito 8`
Desenvolva testes para atingir 60% de cobertura total da aplicação.

`Requisito 9`
Ordene as colunas de forma ascendente ou descendente.

`Requisito 10`
Desenvolva testes para atingir 90% de cobertura total da aplicação.
