# Pokedex - Next.Js

---

## Tabla de contenidos

1. [Descripción del proyecto](#descripción)
2. [Estructura](#estructura)
3. [Tecnologías y prácticas de desarrollo](#estructura)
4. [Instalación](#instalación)
5. [Pruebas](#pruebas)
6. [Autor](#autor)

---
### Descripción

Este proyecto es una aplicación de búsqueda y visualización de información de Pokémon utilizando la [API](https://pokeapi.co/docs/v2) de PokeAPI. La aplicación permite buscar a un Pokémon por nombre o ID, ver detalles específicos de cada Pokémon, y navegar a través de una lista paginada de Pokémon.

__Características__

- Búsqueda de Pokémon por nombre o ID.
- Visualización detallada de estadísticas, habilidades y tipos.
- Paginación para explorar la lista completa de Pokémon.
- Temas personalizables (claro y oscuro).

---
### Estructura de directorios

📦 __src__
 ┣ 📂 __ __mocks__ __
 ┣ 📂 __ __tests__ __
 ┣ 📂 __adapters__
 ┣ 📂 __components__
 ┣ ┣ 📂 __ui__
 ┣ ┗ 📂 __pokemon__
 ┣ 📂 __constants__
 ┣ 📂 __context__
 ┣ 📂 __css__
 ┣ 📂 __hooks__
 ┣ 📂 __interfaces__
 ┣ 📂 __lib__
 ┣ 📂 __services__
 ┣ 📂 __utlis__
 ┣  📂 __app__
 ┃ ┣ 📜 page.tsx
 ┃ ┣ 📜 layout.tsx
 ┃ ┣ 📂 pokemon
 ┃ ┗ ┗ 📂 [id]
 ┗ ┗ ┗ ┗ 📜 page.tsx

- __mocks__: Contiene todos los datos necesarios para realizar las pruebas.

- __tests__: Contiene todos los tests relacionados con las páginas.

- __adapters__: Es el adaptador que cumple la función de aislar los cambios en la respuesta del servicio externo, de modo que no sea necesario modificar todos los datos en los lugares donde se utiliza la información de los pokemones.

- __components__: Tiene 2 subdirectorios. Uno es para almacenar todos los componentes que no están relacionados con los pokemones, sino que son simplemente componentes de la UI. El otro directorio es donde se almacenan los componentes relacionados con los pokemones.

- __constants__: Este directorio tiene como objetivo almacenar variables que no cambiarán.

- __context__: Es donde se maneja el estado global de la app y se proveen los datos y métodos necesarios al resto de los componentes y páginas.

- __css__: Aquí se guardan todos los archivos relacionados con los estilos aplicados con CSS.

- __hooks__: Los hooks son utilizados para hacer llamadas a los servicios necesarios para obtener o enviar información al backend.

- __interfaces__: Es donde se almacenan los contratos de los datos utilizados.

- __lib__: Aquí se guardan las bibliotecas para ser reutilizadas en la app.

- __services__: En este directorio se guardan todos los archivos relacionados con los servicios utilizados en la app.

- __utils__: Contiene todos los archivos necesarios que proveen a la app de funcionalidades que ayudan a hacerla más mantenible y legible a largo plazo.

- __app__: Es donde están las páginas que pueden ser visitadas por el usuario y sigue la estructura de Next.js con el App Router.

---
### Tecnologías y prácticas de desarrollo

- __React.Js__
- __Next.Js__
- __Typescript__
- __Tanstack Query__
- __Jest__
- __React Testing Library__
- __Tailwind__
- __DaisyUI__

En el directorio __ __test__ __ están todos los test relacionados a las páginas de la aplicación y replica el mismo arbol de directorios que la carpeta __app__.

Sin embargo, cada componente tiene su propio archivo de test ubicado en el mismo directorio que el componente. Esta estructura hace que los tests de los componentes sean más fáciles de encontrar, ya que están junto al código que prueban. Al mantener las pruebas cerca de los componentes, se mejora la legibilidad y mantenibilidad, lo que facilita la realización de modificaciones y la identificación de las pruebas correspondientes.

En el servicio utilicé el patrón de diseño Singleton para asegurar que solo exista una única instancia del cliente de la PokeApi durante la ejecución de la aplicación. Este patrón es muy útil cuando se necesita compartir una única instancia de una clase a través de diferentes partes de la aplicación.

Se agregaron los distintos tipos de variables de entorno .env.(ambiente) y se debería usar el correspondiente a cada entorno.

Si bien es una mala práctica subir las variables de entorno a un repositorio en este caso lo hice ya que es una api pública y no hay ningún dato sensible.

---
### Instalación

Para ejecutar este proyecto en tu entorno local a continuación se detallan los pasos:

1. Clonar el repositorio:
`git clone https://github.com/FerDom92/pokedex-nextjs.git`

2. Hacer build de la app:
`npm run build`

3. Iniciar el servidor
`npm run start`

(opcional): Si deseas iniciar el proyecto en modo de desarrollo tenes que ejecutar el comando:
`npm run dev`

---
### Pruebas

Para ejecutar las pruebas debes ejecutar los siguientes comandos:

- Ejecutar todas las pruebas:
`npm run test`

- Ejecutar el coverage de pruebas:
`npm run test:coverage`

- Hacer comprobación de sintaxis:
`npm run lint`
---
### Autor

Fernando Dominguez

- __Email__: fernando.dom1992@gmail.com
- __LinkedIn__: [/in/fernando-dominguez1992/](https://www.linkedin.com/in/fernando-dominguez1992/)