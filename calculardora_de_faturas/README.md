# TESTE DE FRONT-END
O objetivo do desafio foi validar os seguintes tópicos:

*JavaScript
*React
*TypeScript.
*Componentização
*CSS-JS.
*Testes unitários
*Testes end-to-end

# API já existente no endereço abaixo. 
https://frontend-challenge-7bu3nxh76a-uc.a.run.app

Vercel Link => https://calculardora-de-faturas.vercel.app/


# Organização dos arquivos
assets  <!-- Banco de img utilizado na aplicação, mantive ela em PNG original por se tratar de uma aplicação com poucas features para carregar -->
src/
    Components/
        Formulario  <!-- Formulario onde o usuário insere os dados, que vão para Context/FormContext -->
        Resultados <!-- Resultados gerados em Hooks/FormContext-->
    Hooks/
        FormContext <!-- Requisições e tratamento da saída de dados do formulario, resultados vão para Components/Resultados -->
    service/
        api  <!-- Construção da base da API com axios -->
    validator/  <!-- formScheema que é usado em Components/Formulario -->
styled  <!-- Estilização através de styled-components para <Main> situada em App.tsx -->