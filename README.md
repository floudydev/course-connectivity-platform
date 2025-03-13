# Course Connectivity Platform

Course Connectivity Platform - это платформа для онлайн-обучения, предоставляющая современные программы обучения, разработанные экспертами в торгово-экономической сфере.

## Структура проекта

```
.gitignore
bun.lockb
components.json
eslint.config.js
index.html
package.json
postcss.config.js
tailwind.config.ts
tsconfig.app.json
tsconfig.json
tsconfig.node.json
vite.config.ts
public/
    favicon.ico
    og-image.png
    placeholder.svg
src/
    App.css
    App.tsx
    index.css
    main.tsx
    vite-env.d.ts
    components/
        AboutSection.tsx
        CartDropdown.tsx
        ContactForm.tsx
        CourseCard.tsx
        CourseFilters.tsx
        CourseList.tsx
        FeaturedCourses.tsx
        Footer.tsx
        Hero.tsx
        ...
    contexts/
    hooks/
    lib/
    pages/
```

## Установка

1. Клонируйте репозиторий:

```sh
git clone https://github.com/your-username/course-connectivity-platform.git
```

2. Перейдите в директорию проекта:

```sh
cd course-connectivity-platform
```

3. Установите зависимости:

```sh
npm install
```

## Запуск проекта

Для запуска проекта в режиме разработки выполните:

```sh
npm run dev
```

Проект будет доступен по адресу `http://localhost:3000`.

## Сборка проекта

Для сборки проекта выполните:

```sh
npm run build
```

Собранные файлы будут находиться в директории `dist`.

## Структура кода

- `src/components/` - Компоненты пользовательского интерфейса.
- `src/contexts/` - Контексты для управления состоянием.
- `src/hooks/` - Пользовательские хуки.
- `src/lib/` - Библиотеки и утилиты.
- `src/pages/` - Страницы приложения.

## Основные страницы

- `src/pages/Index.tsx` - Главная страница.
- `src/pages/Checkout.tsx` - Страница оформления заказа.

## Используемые технологии

- React
- TypeScript
- TailwindCSS
- Vite

## Лицензия

Этот проект лицензирован под лицензией MIT. Подробности см. в файле [LICENSE](LICENSE).