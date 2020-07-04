# Descrição: 
Projeto **CRUD** de criação e visualização de artigos classificados por categorias(também criadas pelo usuário), contendo sistema de permissões(administração) e login/registro.

### Principais pacotes/tecnologias - Backend: 
- **Banco relacional(PostgreSQL)**: Responsável por armazenar usuários, artigos e categorias. 
- **Banco não relacional(MongoDB)**: Responsável pelo armazenamento das estátiscas do dashboard. 
- **KNEX**: Usado para conectar com o PostgreSQL.
- **Mongoose**: Usado para conectar com o MongoDB.
- **Express**: Responsável pela criação das Rotas.
- **JWT**: Responsável por checar a validação do Token do usuário.
- **node-schedule**: Responsável pela atualização das estátiscas.

### Principais pacotes/tecnologias - Frontend: 
- **Vue**: Responsável pela estrutura de toda a parte frontend com seu sistema de componentes. 
- **vue-router**: Responsável pelas rotas. 
- **vuex**: Usado para o padrão de gerenciamento de estados da aplicação.
- **vue-mq**: Usado para auxiliar na responsividade do Menu.
- **liquor-tree**: Responsável por criar opções em formato de árvore.
- **vue-toasted**: Responsável pelas mensagens de error ou success conforme as operações realizadas.

# Requisitos: 
para executar o projeto, será necessário instalar: 
- NodeJS
- PostgreSQL
- MongoDB
- Instalar dependências: `npm install ou yarn install`

# Inicialização:
- Iniciar backend em modo de desenvolvimento: `npm start`
- Iniciar backend em modo de produção: `npm run production`
- Iniciar MongoDB: `mongod`
- Iniciar frontend: `npm run serve`









