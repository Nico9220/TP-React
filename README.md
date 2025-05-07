Correcciones

- Cumple con todas las funcionalidades pedidas.
- Codigo bien modularizado. Componentes simples y reutilizables. 
- Buen uso de localstorage y useState

observaciones:
Borren archivos vacios, logs y assets que no usan antes de entregar. 
Hay botones que no tienen accion, no funcionan.
Usar prettier para mantener un estilo de codigo a lo largo de todo el proyecto
Eviten hacer carpetas de componentes dentro de componentes (como en la carpeta peliculas).

Nota: 9.


# TP React – Gestor de Películas y Series 🎬

## 👨‍💻 Integrantes del grupo
- FAI-3147	Almiron Abigail Juliana
- FAI-1440	Avila Dante
- FAI-4393	Caretta Nicolás

## 📝 Descripción de la aplicación
Aplicación desarrollada en React para gestionar películas y series por ver y ya vistas. Permite agregar, editar, eliminar, marcar como vista y aplicar filtros de búsqueda, género, tipo y ordenamiento por año o rating. Todos los datos se guardan en `localStorage`.

---

## 📁 Explicación de archivos principales

- `index.js`: Punto de entrada de la aplicación React. Renderiza el componente `<App />` dentro del DOM.
- `App.js`: Componente raíz donde se define la estructura principal de la app y se renderizan las páginas.
- `index.css`: Archivo de estilos globales para toda la aplicación.
- `package.json`: Archivo que define las dependencias del proyecto, scripts disponibles, nombre, versión, etc.

---

## ⚙️ Instalación y ejecución

1. Clonar el repositorio:
   ```bash
   git clone https://github.com/Nico9220/TP-React.git
   cd TP-React

## ⚙️ Link a Vercel

https://tp-react-hazel.vercel.app/

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript and enable type-aware lint rules. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
