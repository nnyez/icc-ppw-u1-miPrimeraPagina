# Programación y Plataformas Web (PPW)

---

# Práctica 1 – Explorando los Estándares Web con HTML, CSS y JavaScript

**Asignatura:** Programación y Plataformas Web  
**Unidad:** 1.2 – Estándares Web  
**Estudiante:** Geovanni Zúñiga  
**Repositorio:** [https://github.com/nnyez/icc-ppw-u1-miPrimeraPagina](https://github.com/nnyez/icc-ppw-u1-miPrimeraPagina)  
**Página desplegada (GitHub Pages):** [https://nnyez.github.io/icc-ppw-u1-miPrimeraPagina/](https://nnyez.github.io/icc-ppw-u1-miPrimeraPagina/)

---

## 🧱 Estructura HTML utilizada

| Componente         | Descripción                                | Implementación                   |
| ------------------ | ------------------------------------------ | -------------------------------- |
| `<!DOCTYPE html>`  | Declaración del documento HTML5            | Línea 1                          |
| `<html lang="es">` | Idioma del documento                       | Español                          |
| `<header>`         | Encabezado principal                       | Contiene el título y subtítulos  |
| `<section>`        | Agrupa contenido relacionado               | Secciones con tablas y ejemplos  |
| `<table>`          | Muestra las etiquetas estudiadas           | Con `<thead>`, `<tbody>`, `<tr>` |
| `<aside>`          | Contenedor de contenido lateral secundario | Panel de navegación simulado     |
| `<figure>`         | Contiene una imagen representativa         | Muestra la imagen de Santa Claus |
| `<footer>`         | Pie de página                              | Autor y asignatura               |

---

## 🧩 Nuevas etiquetas exploradas

| Etiqueta   | Descripción                                      | Implementación                             |
| ---------- | ------------------------------------------------ | ------------------------------------------ |
| `<aside>`  | Contenedor secundario con información adicional  | Panel lateral dentro de la segunda sección |
| `<figure>` | Muestra una imagen dentro de un bloque semántico | Imagen de Santa Claus (`santa.png`)        |

**Código usado:**

```html
<aside id="navigation-panel">
  <h2>*Aside*</h2>
  <h3>En construcción...</h3>
  <p>Próximamente una navegación para cada repositorio.</p>
</aside>

<figure>
  <img id="santa-img" src="./santa.png" alt="imagen de santa" />
</figure>
```

---

# Práctica 2 – Adición de CSS y JavaScript

---

## 1. Archivos agregados

| Archivo      | Descripción                                                                                 | Ubicación                 |
| ------------ | ------------------------------------------------------------------------------------------- | ------------------------- |
| `global.css` | Contiene los estilos visuales del sitio (colores, fuentes, márgenes, botones, tablas, etc.) | Carpeta raíz del proyecto |
| `global.js`  | Define las funciones e interacciones dinámicas con el DOM                                   | Carpeta raíz del proyecto |

Estructura final del proyecto:

``` 
📁icc-ppw-u1-miPrimeraPagina
    ├── global.css
    ├── global.js
    ├── index.html
    ├── README.md
    └── santa.png
```

---

### 2. Implementación en HTML

Los nuevos archivos se enlazaron dentro del documento `index.html` de la siguiente forma:

**En el `<head>` (para el CSS):**

```html
<link rel="stylesheet" href="./global.css" />
```

**Antes de cerrar el `<body>` (para el JavaScript):**

```html
<script src="./global.js"></script>
```

---

### 3. Estilos aplicados con CSS

| Elemento         | Estilo implementado                                         | Descripción                                         |
| ---------------- | ----------------------------------------------------------- | --------------------------------------------------- |
| `body`           | `margin: 0; font-family: "roboto", sans-serif;`             | Elimina márgenes y aplica fuente principal Roboto   |
| `header, footer` | `background-color: #062726; color: #a06cd5;`                | Fondo oscuro y texto violeta                        |
| `table, th, th`          | `border: 0.1rem solid #6cd4ff; padding: 0.5rem; font-size: 1.1rem;`               | Mejora la visualización de la tabla                       |
| `button`         |  `border-radius: 1rem; padding: 1rem; background-color: #a06cd5;`         | Crea un botón decorativo      |
| `section`        | `background-color: #6247aa; border: 0.2rem solid #6cd4ff;`  | Contenedor resaltado para separar bloques de contenido |
| `aside`          | `background-color: #062726; border: 0.3rem dashed #6cd4ff;` | Resalta un panel lateral                            |

**Ejemplo en el código:**

```css
header,
footer {
  padding: 2rem;
  text-align: center;
  background-color: #062726;
  color: #a06cd5;
}

table {
  margin: 1rem;
  color: #e2cfea;
}

thead {
  font-family: "montserrat";
  font-size: 1.2rem;
}

td,
th {
  border: 0.1rem solid #6cd4ff;
  padding: 0.5rem;
  font-size: 1.1rem;
}

aside {
  height: 40rem;
  width: 30%;
  padding: 1rem;
  background-color: #062726;
  color: #e2cfea;
  border: 0.3rem dashed #6cd4ff;
}
```

---

### 4. Interactividad agregada con JavaScript

El archivo `global.js` incorpora dos acciones principales:

1. **Cambiar el tamaño de la imagen al presionar el botón “Navidad”**

   ```javascript
   const button = document.getElementById("btnNavidad");
   button.addEventListener("click", () => {
     const img = document.getElementById("santa-img");
     if (img.style.width === "15rem") {
       img.style.width = "17rem";
     } else {
       img.style.width = "15rem";
     }
   });
   ```

2. **Cambiar el color y tamaño del título al pasar el mouse**

   ```javascript
   const tittle = document.getElementById("title");
   const pColor = window.getComputedStyle(tittle).color;
   const fSize = window.getComputedStyle(tittle).fontSize;
   tittle.addEventListener("mouseover", () => {
     tittle.style.color = "orange";
     tittle.style.fontSize = "2.3rem";
   });
   tittle.addEventListener("mouseout", () => {
     tittle.style.color = pColor;
     tittle.style.fontSize = fSize;
   });
   ```

---

## 📸 Capturas de pantalla del proyecto final

- **Versión sin CSS/JS:** Estructura HTML simple y etiquetas semánticas.

![Sin CSS/JS](<./not-styled.jpeg>)

- **Versión con CSS/JS:** Interfaz estilizada, con colores, fuentes, botones e interacciones dinámicas.

![Con CSS/JS](<./styled.jpeg>)

### Comparación

![Resultadis](<./results.png>)
