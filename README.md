# 🏭 Dynamic Component Factory with Advanced Configuration

A React-based utility that dynamically renders components like **Button**, **Card**, and **Modal** based on a strongly typed configuration object. Built with **TypeScript** for full type safety and runtime flexibility.

## 🔗 [Live Demo](https://earnest-monstera-142e3a.netlify.app/)

## ✨ Features

- 🧱 Dynamically generate components using a factory pattern
- 🔐 Full **type safety** for component configuration using **TypeScript generics**
- 🧠 Smart prop inference based on component type
- ⚛️ Clean and reusable UI components: `Button`, `Card`, and `Modal`

## 🧩 Components

### ✅ Button

```ts
{
  type: 'button',
  label: 'Click Me',
  onClick: () => alert('Clicked!'),
  disabled: false
}
```

### 📦 Card

```ts
{
  type: 'card',
  title: 'Card Title',
  content: 'Some content here.',
  footer: 'Footer'
}
```

### 💬 Modal

```ts
{
  type: 'modal',
  header: 'Modal Header',
  content: 'This is the modal body.',
  footer: 'Close'
}
```

## 🏗️ How It Works

1. Define reusable components: `Button`, `Card`, `Modal`
2. Create a `ComponentConfig<T>` interface that maps component types to their props
3. Implement a type-safe `ComponentFactory` that:
   - Accepts a config object
   - Infers and validates prop types
   - Returns the appropriate component

## 🛠️ Tech Stack

- **React**
- **TypeScript**
- **Vite**
- **Tailwind CSS** (optional)

## 🚀 Getting Started

```bash
git clone https://github.com/abhijitmanna912001/Dynamic-Factory-Challenge
cd dynamic-factory-challenge
npm install
npm run dev
```

## 💡 Why Use This?

This pattern is perfect when you need to:

- Dynamically render UI components based on data
- Enforce strict prop validation with TypeScript
- Keep your codebase clean and scalable

## 📸 Preview

```
Click Me
Card Title
Some content here.
Footer
```

---

Feel free to fork, star, or contribute! 💫

---
