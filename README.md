<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ yarn install
```

## Running the app

```bash
# development
$ yarn run start

# watch mode
$ yarn run start:dev

# production mode
$ yarn run start:prod
```

## Test

```bash
# unit tests
$ yarn run test

# e2e tests
$ yarn run test:e2e

# test coverage
$ yarn run test:cov
```

# Execute develop

1. Git clone ...
2. Execute

```
yarn install
```

3. Have Nest CLI installed

```
npm i -g @nestjs/cli
```

4. Up database

```
docker-compose up -d
```

5. Clone **.env.template** file and rename it to **.env**

6. fill the environment variables defined in the **.env**

7. Run API

```
yarn start:dev
```

8. Create seed data on database

```
localhost:3000/api/v2/seed
```

### Endpoints Documentation
```
https://documenter.getpostman.com/view/24255128/2s93Xwyizh
```

### STACK

- MongoDB
- Docker
- Nest
