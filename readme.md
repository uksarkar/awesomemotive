# Presentation for Awesomemotive

It's a basic blog application with SPA using `React` and `Express` for `REST` api.

## Technology and tools for this application

- **_Backend_**
  - Express
  - Typescript
  - Prisma ORM
  - Sql
- **_Frontend_**

  - React
  - Redux
  - Typescript
  - Bulma CSS

## Folder Structure

```bash
.
├── backend
│   ├── dist
│   └── src
│   ├── config
│   ├── controllers
│   ├── dtos
│   ├── exceptions
│   ├── interfaces
│   ├── logs
│   │   ├── debug
│   │   └── error
│   ├── middlewares
│   ├── prisma
│   │   └── migrations
│   │   └── 20220419130240_initial_data
│   ├── routes
│   ├── services
│   ├── tests
│   └── utils
└── frontend
    ├── public
    └── src
        ├── api
        ├── components
        ├── interfaces
        ├── pages
        │   ├── errors
        │   ├── home
        │   └── post
        └── stores
            ├── add_comment
            ├── create_post
            └── post_list
```

## Installations for frontend

### Run those command to `frontend` folder

        ```bash
            yarn add
            #or
            npm install
        ```

### Build front end

        ```bash
            yarn build
        ```

## Installations for Backend

Add database credentials to .env.development.local file.

### Run those command to `backend` folder

        ```bash
            yarn add
            #or
            npm install
        ```

### Run Migrations

```bash
    yarn prisma:migrate-dev
```

### Build front end

```bash
    yarn build
    #or
    yarn deploy:prod
```

### Or start the server

```bash
    yarn start
```
