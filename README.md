# ConsumoAPIBlogs


### **README.md**


# API de Blogs

Este projeto é o scaffolding inicial de uma API de Blogs. Ele fornece a estrutura básica para o desenvolvimento de uma aplicação backend, utilizando Node.js, Express e Angular, para o consumo.

---

## Como rodar o projeto

### Pré-requisitos
- Node.js (v16 ou superior)
- npm ou yarn
- Angular
- Git (opcional)

### Passos para execução

1. Clone o repositório:
   
   git clone https://github.com/RaulOliveiraG/ConsumoAPIBlogs

2. Acesse a pasta do projeto:
   
   cd ConsumoAPIBlogs
   
3. Instale as dependências:
    npm install express
    npm install dotenv
    npm install swagger-jsdoc
    npm install swagger-ui-express
    npm install eslint --save-dev
    npm install prettier --save-dev
    npm install nodemon --save-dev
    npm install mongodb
   
4. Configure o arquivo `.env`:
   - Renomeie o arquivo `.env.example` para `.env`.
   - Defina a variável `PORT` no arquivo `.env` (opcional, o padrão é 3000).

5. Inicie o servidor em modo de desenvolvimento:
   npm run dev

6. Acesse a API:
   - A rota principal estará disponível em: `http://localhost:3000/api/`.
   - A documentação interativa (Swagger) estará disponível em: `http://localhost:3000/api-docs/`.

## Estrutura do Projeto

gestao-consultas-api/
├── app.js                           # Ponto de entrada da aplicação
├── index.hml                        # Conteudo da Home
├── post.hml                         # Conteudo do Post
├── style.css                        # Estilização
└── README.md                    # Documentação do projeto


## Como contribuir

1. Faça um fork do projeto.
2. Crie uma branch para sua feature (`git checkout -b feature/nova-feature`).
3. Commit suas mudanças (`git commit -m 'Adiciona nova feature'`).
4. Push para a branch (`git push origin feature/nova-feature`).
5. Abra um Pull Request.


## Licença

Este projeto não possui licença.

## Contato

Se tiver dúvidas ou sugestões, entre em contato:

- **Nome**: [Raul Oliveira Garcia]
- **E-mail**: [rauloliveiragarcia08@gmail.com]
- **GitHub**: [RaulOliveiraG](https://github.com/RaulOliveiraG)


### **Testar a Aplicação**
   - Acesse `http://localhost:3000` para executar o projeto.
   - Acesse `http://localhost:3000/api-docs/` para visualizar a documentação Swagger.
