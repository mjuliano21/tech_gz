# Desafio FullStack - Gazin<Tech>

Este é o meu projeto de resolução do desafio FullStack da Gazin<Tech>. Consiste em uma aplicação de cadastro de desenvolvedores associados a níveis, com um backend desenvolvido em Node.js utilizando o framework Express.js e um frontend em React.

# Funcionalidades

O projeto possui as seguintes funcionalidades:

# Backend
Listar níveis existentes: O backend fornece um endpoint que retorna uma lista de todos os níveis cadastrados no sistema.
Cadastrar, editar e remover níveis: O backend disponibiliza endpoints para realizar as operações de criação, edição e remoção de níveis.
Listar desenvolvedores existentes: O backend possui um endpoint para listar todos os desenvolvedores registrados no sistema.
Cadastrar, editar e remover desenvolvedores: O backend oferece endpoints para realizar as operações de cadastro, edição e remoção de desenvolvedores.

# Frontend
O frontend foi desenvolvido como uma Single Page Application (SPA) utilizando o React. Ele consome os endpoints disponibilizados pelo backend e oferece uma interface amigável para interagir com as funcionalidades do sistema.

## Tecnologias Utilizadas

### Backend

- Node.js
- Express.js
- Prisma - ORM (Object Relational Mapping) para Node.js, utilizado para lidar com o banco de dados, nesse projeto utilizei apenas para subir o banco no container.
- Docker
- PostgreSQL
- Yarn

### Frontend

- React
- Styled Components
- Babel
- Docker
- Yarn

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
  ├── api/
  │   ├── src/
  │   │   ├── controllers/
  │   │   ├── models/
  │   │   ├── routes/
  │   │   └── ...
  │   ├── Dockerfile
  │   ├── package.json
  │   └── ...
  ├── app/
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
## Distribuições das portas

As portas foram  configurado da seguinte forma:
Frontend: 3000;
Backend: 5000;
Postgre: 5432 (padrão);
PgAdmin: 5050 (padrão) -- adicionado aos container para facilitar a verificação da persistencia dos dados.

## Considerações Finais

Este desafio foi uma oportunidade para aprender e explorar tecnologias como React e Node.js. Vale ressaltar que, por ser minha primeira experiência com React(Buscando migrar para outras linguagens), pode haver espaço para melhorias e utilização de padrões mais avançados.

Sinta-se à vontade para explorar o código e fornecer qualquer feedback ou sugestões de melhorias.

Agradeço a oportunidade e consideração.
