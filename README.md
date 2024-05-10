# Car Catalog API

## Requisitos

- [Node.js](https://nodejs.org/en/download)
- [PostgreSQL](https://www.postgresql.org/download)

### Clonando o projeto
Executar no terminal:

```bash
git clone git@github.com:woliveira1728/car-catalog-api.git
```

### Instalando Dependências
Instalar as dependências de desenvolvimento e produção
```bash
cd car-catalog-api
npm install
```
### Variáveis de Ambiente
Duplicar o arquivo `.env.example` e renomear a cópia para `.env`, sobrescrevendo os valores das variáveis de ambiente do arquivo `.env` com as suas credeniais.

O projeto utiliza as seguintes variáveis de ambinete:

| Var Name | Description | Required |
|----------|-------------|----------|
| DATABASE_URL | Credenciais do banco de dados utilizado| obrigatório |
| JWT_SECRET_KEY | Chave secreta utilizada pela autenticação JWT | obrigatório |
| EXPIRES_IN | Tempo de expiração do Token JWT (1ms, 1m, 1h, 1d...) | obrigatório |

### Executando as migrações

Execute o comando abaixo na raiz do projeto:

```bash
npx prisma migrate dev
```

### Inicializando o Servidor
O servidor da API será executado, por padrão, na porta 3000:

```bash
npm run dev
```

Navege até http://localhost:3000 para acessar a API.

## Rotas

- Acesse a documentação das rotas em http://localhost:3000/docs.

- Baixe a documentação Swagger utilizando a rota http://localhost:3000/docs.json.