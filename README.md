# TypeScript Node.js Project Setup

This README provides step-by-step instructions on how to set up a TypeScript Node.js project using npm.

## Prerequisites

Ensure you have Node.js and npm installed on your system.

## Setup Instructions

1. Create a new project directory and navigate to it:

   ```bash
   mkdir my-typescript-project
   cd my-typescript-project
   ```

2. Initialize a new npm project:

   ```bash
   npm init -y
   ```

3. Install TypeScript and Node.js type definitions:

   ```bash
   npm install --save-dev typescript @types/node
   ```

4. Create a TypeScript configuration file:

   ```bash
   npx tsc --init
   ```

5. Update `tsconfig.json` with the following content:

   ```json
   {
     "compilerOptions": {
       "target": "es2016",
       "module": "commonjs",
       "outDir": "./dist",
       "rootDir": "./src",
       "strict": true,
       "esModuleInterop": true,
       "skipLibCheck": true,
       "forceConsistentCasingInFileNames": true
     }
   }
   ```

6. Create a `src` directory for your TypeScript files:

   ```bash
   mkdir src
   ```

7. Create a sample TypeScript file `src/index.ts`:

   ```typescript
   console.log("Hello, TypeScript!");
   ```

8. Update `package.json` with the following content:

   ```json
   {
     "name": "my-typescript-project",
     "version": "1.0.0",
     "description": "",
     "main": "dist/index.js",
     "scripts": {
       "build": "tsc",
       "start": "node dist/index.js",
       "dev": "ts-node src/index.ts"
     },
     "keywords": [],
     "author": "",
     "license": "ISC",
     "devDependencies": {
       "@types/node": "^14.14.31",
       "ts-node": "^9.1.1",
       "typescript": "^4.2.2"
     }
   }
   ```

9. Install `ts-node` for development:

   ```bash
   npm install --save-dev ts-node
   ```

## Usage

After setup, you can use the following npm commands:

- `npm run build`: Compiles TypeScript to JavaScript
- `npm start`: Runs the compiled JavaScript
- `npm run dev`: Runs the TypeScript code directly using ts-node

## Project Structure

```
my-typescript-project/
├── src/
│   └── index.ts
├── package.json
└── tsconfig.json
```

After building, a `dist/` directory will be created with the compiled JavaScript files.

## Contributing

Feel free to submit issues and pull requests.

## License

This project is open source and available under the [ISC License](LICENSE).