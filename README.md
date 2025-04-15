# Angular NestJS Project

This project is a full-stack application built with Angular for the frontend and NestJS for the backend, utilizing MySQL as the database. The frontend is styled using TailwindCSS.

## Project Structure

```
angular-nestjs-project
├── frontend
│   ├── src
│   │   ├── app
│   │   ├── assets
│   │   ├── environments
│   │   └── styles
│   ├── angular.json
│   ├── package.json
│   ├── tailwind.config.js
│   ├── tsconfig.json
│   └── README.md
├── backend
│   ├── src
│   │   ├── app.module.ts
│   │   ├── main.ts
│   │   ├── controllers
│   │   ├── services
│   │   └── entities
│   ├── package.json
│   ├── tsconfig.json
│   ├── ormconfig.json
│   └── README.md
└── README.md
```

## Frontend

The frontend is developed using Angular 17 and styled with TailwindCSS. It includes:

- **Main Application Component**: Located in `frontend/src/app/app.component.ts` and `frontend/src/app/app.component.html`.
- **Modules**: Defined in `frontend/src/app/app.module.ts`.
- **Environment Configurations**: Found in `frontend/src/environments/`.
- **Static Assets**: Stored in `frontend/src/assets/`.
- **TailwindCSS Styles**: Included in `frontend/src/styles/tailwind.css`.

To run the frontend, navigate to the `frontend` directory and use the following commands:

```bash
npm install
npm start
```

## Backend

The backend is built with NestJS and connects to a MySQL database. It includes:

- **Main Application Module**: Defined in `backend/src/app.module.ts`.
- **Entry Point**: Located in `backend/src/main.ts`.
- **Controllers and Services**: Found in `backend/src/controllers/` and `backend/src/services/`.
- **Entities**: Defined in `backend/src/entities/`.

To run the backend, navigate to the `backend` directory and use the following commands:

```bash
npm install
npm run start
```

## Database Configuration

The project uses MySQL as the database. Configuration settings can be found in `backend/ormconfig.json`.

## Conclusion

This project serves as a template for building full-stack applications using Angular and NestJS. Customize and extend it according to your needs.