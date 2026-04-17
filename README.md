![Banner Proyecto de Ejercicios de React](./banner2.png)

# Índice

- [Índice](#índice)
  - [Introducción](#introducción)
  - [Meta / Objetivos](#meta--objetivos)
  - [Créditos](#créditos)
  - [Verificaciones / Validaciones](#verificaciones--validaciones)
  - [Contenidos desarrollados](#contenidos-desarrollados)
  - [Cómo ejecutar los ejercicios](#cómo-ejecutar-los-ejercicios)
  - [Ejercicios](#ejercicios)

## Introducción

Este repositorio contiene una colección de ejercicios prácticos para aprender y practicar los conceptos básicos de ReactJS. Cada ejercicio está organizado en su propia carpeta numerada, permitiendo un aprendizaje progresivo y modular.

## Meta / Objetivos

- Aprender los fundamentos de ReactJS, incluyendo componentes, props, estado y JSX.
- Practicar el uso de hooks como useState.
- Desarrollar habilidades en la creación de interfaces de usuario interactivas.
- Implementar buenas prácticas en el desarrollo de aplicaciones React.

## Créditos

Desarrollado por Gaston Ariel Perrone como parte de un proyecto de práctica personal.

## Verificaciones / Validaciones

Cada ejercicio incluye una suite de pruebas automatizadas utilizando Jest y React Testing Library para validar la funcionalidad de los componentes.

## Contenidos desarrollados

- **React**: Biblioteca principal para la construcción de interfaces de usuario.
- **Vite**: Herramienta de desarrollo rápida para proyectos web.
- **ESLint**: Linter para mantener la calidad del código JavaScript.
- **CSS**: Estilos para la presentación de los componentes.
- **JavaScript**: Lenguaje de programación utilizado en los componentes y lógica.

## Cómo ejecutar los ejercicios

Cada ejercicio está en su propia carpeta numerada y es un proyecto independiente de Vite + React. Para ejecutar un ejercicio:

1. Navega a la carpeta del ejercicio deseado (ej: `cd 1-Lista-de-usuarios`).
2. Instala las dependencias: `npm install`.
3. Ejecuta el servidor de desarrollo: `npm run dev`.
4. Abre el navegador en la URL indicada (generalmente `http://localhost:5173`).

Para ejecutar las pruebas: `npm run test`.

## Ejercicios 

| Titulo de Ejercicio | Consignas | Temas desarrollados |
| ------------------- | --------- | ------------------- |
| Lista de Usuarios | Crear componentes Header, Main y UserCard para mostrar <br> una lista de tarjetas de cada usuario. | - Desestructuración <br> - Export default <br> - ArrayMethod: .map() <br> - Paso de props |
| Tarjetas de Precios | Crear componentes para mostrar tarjetas de productos con sus precios. | - Props <br> - JSX <br> - ArrayMethod: .map() <br> - Spread operator |
| Tarjeta de Noticia | Crear un componente Card reutilizable para mostrar una noticia con imagen, título y descripción. | - Componentes reutilizables <br> - Props children <br> - JSX |
| Lista de Productos | Crear componentes ProductList y ProductItem para mostrar una lista de productos. | - Componentes funcionales <br> - Props <br> - ArrayMethod: .map() |
| Suma, Resta, Multiplicación, División | Implementar una calculadora básica utilizando funciones importadas de un módulo utils. | - Import/Export de módulos <br> - Funciones JavaScript <br> - JSX expressions |
| Saludo | Crear un componente que muestre un saludo personalizado y un número aleatorio. | - Import named exports <br> - Funciones JavaScript <br> - JSX |
| Contador | Implementar un contador interactivo con botones para incrementar y decrementar. | - Hook useState <br> - Hook useEffect <br> - Eventos onClick <br> - Estado en React |


> [!NOTE]
> Por ahora esto ¡no lo es todo! A medida de avanzar con el curso se irán añadiendo más ejercicios para abordar cada tema.
