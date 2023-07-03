Ótimo! Agora tenho informações suficientes para criar o README do seu projeto. Aqui está um exemplo de como o README pode ser estruturado:

# Desafio FullStack - Gazin<Tech>

Este é o meu projeto de resolução do desafio FullStack da Gazin<Tech>. Consiste em uma aplicação de cadastro de desenvolvedores associados a níveis, com um backend desenvolvido em Node.js utilizando o framework Express.js e um frontend em React.

## Funcionalidades

- Listar níveis existentes
- Cadastrar, editar e remover níveis
- Listar desenvolvedores existentes
- Cadastrar, editar e remover desenvolvedores

## Tecnologias Utilizadas

### Backend

- Node.js
- Express.js
- Prisma
- Docker
- PostgreSQL

### Frontend

- React
- Styled Components
- Babel
- Docker

## Rodando a Aplicação

Certifique-se de ter o Docker instalado em sua máquina.

1. Clone o repositório:

```
git clone https://github.com/mjuliano21/tech_gz.git
```

2. Acesse a pasta raiz do projeto:

```
cd tech_gz
```

3. Execute o comando para iniciar a aplicação:

```
docker-compose up -d
```

4. Aguarde até que o Docker crie e execute os containers para o backend, frontend, PostgreSQL e PgAdmin.

5. Acesse a aplicação em seu navegador através do endereço: [http://localhost:3000](http://localhost:3000)

## Estrutura do Projeto

A estrutura do projeto está organizada da seguinte forma:

```
tech_gz/
  ├── backend/
  │   ├── src/
  │   │   ├── controllers/
  │   │   ├── models/
  │   │   ├── routes/
  │   │   └── ...
  │   ├── Dockerfile
  │   ├── package.json
  │   └── ...
  ├── frontend/
  │   ├── src/
  │   │   ├── components/
  │   │   ├── pages/
  │   │   ├── styles/
  │   │   └── ...
  │   ├── Dockerfile
  │   ├── package.json
  │   └── ...
  ├── docker-compose.yml
  └── ...
```

## Considerações Finais

Este desafio foi uma oportunidade para aprender e explorar tecnologias como React e Node.js. Vale ressaltar que, por ser minha primeira experiência com React, pode haver espaço para melhorias e utilização de padrões mais avançados.

Sinta-se à vontade para explorar o código e fornecer qualquer feedback ou sugestões de melhorias.

Agradeço a oportunidade e consideração.
