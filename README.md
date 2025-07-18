# 🧮 Dividio

**Dividio** — это приложение для финансового планирования, помогающее визуализировать и распределять доходы по различным категориям: необходимость, сбережения, инвестиции, хотелки и другие.

## 🚀 Возможности

- Регистрация и вход через JWT (access + refresh токены)
- Интерфейс с авторизацией через cookie
- Разделение бюджета по категориям
- Просмотр в виде списка и диаграммы
- Темная и светлая тема
- Смена языка (мультиязычность)
- Отзывчивый дизайн
- Модульная архитектура (FSD)

## 🛠️ Технологии

### Frontend

- [React](https://reactjs.org/) + [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/) (сборщик)
- [Tailwind CSS](https://tailwindcss.com/) (стилизация)
- [React Icons](https://react-icons.github.io/react-icons) (иконки)
- [Framer Motion](https://www.framer.com/motion/) (анимации)
- [Recharts](https://recharts.org) (графики)
- [Sonner](https://sonner.emilkowal.ski) (уведомления)
- [i18n](https://www.i18next.com) (мультиязычность)
- [Redux Toolkit](https://redux-toolkit.js.org) (глобальное состояние)
- [RTK Query](https://redux-toolkit.js.org) (запросы к API)
- [Zod](https://zod.dev/) + [React Hook Form](https://react-hook-form.com/) (валидация + работа с формами)

### Backend

- [NestJS](https://nestjs.com/) + [Prisma ORM](https://www.prisma.io/)
- [MySQL](https://www.mysql.com/) (база данных)
- Авторизация через JWT (access + refresh)
- Cookie httpOnly + защита от XSS/CSRF

## 📦 Установка
```bash
yarn install
```

#### 🚀 Запуск
```bash
yarn dev
```
