# Express API Typescript template

## Description

This is a template for an Express API using Typescript.

## Structure

The project is structured as follows:

```text

├── README.md
├── package.json
├── src
│   ├── app.ts
│   ├── bin
│   │   └── www.ts
│   │   └── www.common.ts
│   │   └── www-test.ts
│   ├── hello-world (feature)
│   │   └── controller.base.ts
│   │   └── hello-world.controller.ts
│   │   └── hello-world.service.ts
│   │   └── hello-world.schema.ts (zod schema)
│   ├── middlewares
│   │   └── validation.middleware.ts
│   ├── utils
│   │   └── index.ts
│   │   └── test.utils.ts
├── tsconfig.json
├── jest.config.ts
├── Dockerfile
├── package.json
└── yarn.lock

```

## Features

- [x] Typescript
- [x] Express
- [x] Jest
- [x] Docker
- [x] Zod
- [x] Supertest
- [x] http-request-mock
- [ ] Prettier
- [ ] Eslint
- [ ] Husky
- [ ] Lint staged
