# Simple Todo App

A modern todo application built with Next.js, TypeScript, and Drizzle ORM.

## Features

- Create, read, update, and delete todos
- Modern and responsive UI
- Type-safe with TypeScript
- Database operations with Drizzle ORM

## Tech Stack

- Next.js 14
- TypeScript
- Drizzle ORM
- Bun (Package Manager)
- Tailwind CSS

## Prerequisites

- Node.js (Recommended: Latest LTS version)
- Bun (Package Manager)

## Getting Started

1. Clone the repository
```bash
git clone <repository-url>
cd simple_todo_app
```

2. Install dependencies
```bash
bun install
```

3. Copy environment file
```bash
cp .env.example .env
```

4. Start the development server
```bash
bun run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the app.

## Project Structure

```
simple_todo_app/
├── src/                 # Source code
├── public/              # Static assets
├── components.json      # Component configuration
├── drizzle.config.ts    # Drizzle ORM configuration
├── next.config.ts       # Next.js configuration
└── package.json         # Project dependencies
```

## Environment Variables

Create a `.env` file in the root directory and add the following variables:

```env
DATABASE_URL="postgresql://user:password@localhost:5432/todo_db"
NEXT_PUBLIC_API_URL="http://localhost:3000/api"
```

## API Documentation

API endpoints are documented in `example.http` file.

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.
