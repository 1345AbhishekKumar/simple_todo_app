# 🛠️ Project Rules – Modern Full-Stack Blog App (Next.js)

This file defines the core rules and standards for maintaining code consistency, performance, and scalability in the blog app project built with the modern Next.js stack.

---

## 1. 📦 Framework Version & Dependencies

- **Next.js**: Use the latest **stable version (v14 or above)** with App Router and Server Components.
- **Language**: Use **TypeScript** (`^5.x`) throughout the project.
- **Styling**: Use **Tailwind CSS** with official plugins (Typography, Forms, Line Clamp, Aspect Ratio).
- **State Management**: Prefer **React Query** or **Zustand**. Avoid Redux unless the complexity justifies it.
- **ORM**: Use **Drizzle ORM** with **Neon** (PostgreSQL) for the database.
- **Authentication**: Must use **Clerk** for auth and session management.
- **Validation**: Use **Zod** for input validation and schema definitions.
- **Emails**: Use **Resend** for sending transactional emails.
- **Bundler**: Use **Bun** (preferred) or fallback to Node.js (≥ v18).
- **Deployment**: Recommended platform is **Vercel**.

---

## 2. 🧪 Testing Framework

- **Unit Testing**: Use **Vitest** for component and utility function testing.
- **E2E Testing**: Use **Playwright** for full end-to-end user flow tests.
- **Integration Testing**: Use **Testing Library** (`@testing-library/react`, `@testing-library/jest-dom`).
- **Test Coverage**: Maintain **≥80% code coverage** across all modules.
- **CI Integration**: Tests must automatically run on **GitHub Actions** on every pull request.

---

## 3. ❌ APIs & Practices to Avoid

- ❌ Do NOT use `getServerSideProps` or `getStaticProps` — prefer Server Components and React Query.
- ❌ Avoid `any` in TypeScript — use strict typing and inference.
- ❌ Do not access `window` or `document` in Server Components.
- ❌ Do not use `localStorage`/`sessionStorage` for authentication — use Clerk sessions and secure cookies.
- ❌ Do not write raw SQL queries — always use Drizzle ORM with safe query methods.

---

## ✅ Optional Enhancements

- Add **Husky** & **lint-staged** for pre-commit checks.
- Enforce formatting with **Prettier** and linting with **ESLint**.
- Set up **TurboRepo** for monorepo structure if multiple apps/services are added.
