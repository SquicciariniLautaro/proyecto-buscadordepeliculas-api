#  Buscador de Peli's - Movie Search App

Este es un buscador de películas profesional que consume la API de **The Movie Database (TMDB)**. El proyecto fue desarrollado con un enfoque especial en la **lógica de programación con JavaScript Vanilla**, priorizando la experiencia de usuario (UX) y el manejo robusto de errores.

---

##  Características Principales

- **Búsqueda en Tiempo Real:** Conexión asíncrona con la API de TMDB para obtener resultados actualizados.
- **Validación Inteligente:** Uso de la librería **SweetAlert2** para notificar al usuario si intenta buscar con el campo vacío.
- **Manejo de Errores y Casos Borde:**
  - **Resultados Vacíos:** Mensaje personalizado si la búsqueda no arroja resultados.
  - **Imágenes de Respaldo (Fallback):** Lógica implementada para detectar si una película no tiene póster y reemplazarlo por una imagen por defecto generada dinámicamente.
- **Estado de Carga:** Indicador visual ("Cargando...") para mejorar la UX durante la espera de la respuesta de la API.
- **Interfaz Moderna:** Diseño adaptable (Responsive) con CSS Grid y efectos visuales de tarjetas.

---

##  Tecnologías Utilizadas

- **HTML5 & CSS3:** Estructura y diseño moderno (estética oscura tipo Netflix).
- **JavaScript (ES6+):** - `async/await` para el manejo de asincronía.
  - Manipulación avanzada del DOM.
  - Eventos de teclado (`keydown`) y prevención de comportamientos por defecto (`e.preventDefault()`).
- **TMDB API:** Fuente de datos para el catálogo de películas.
- **SweetAlert2:** Para alertas de usuario elegantes y modernas.
- **Placehold.co:** Para la generación de pósters de reemplazo.

---

##  Desafíos Técnicos y Lógica Implementada

Uno de los mayores aprendizajes en este proyecto fue el manejo de la **Lógica Defensiva**. 

### 1. El Freno de Mano (`return`)
Implementé una validación para evitar llamadas innecesarias a la API. Si el usuario no escribe nada, la función se detiene inmediatamente usando un `return`, ahorrando recursos.

### 2. Control de Datos Nulos
Aprendí que las APIs no siempre entregan datos perfectos. Creé una lógica con `if/else` para interceptar los `poster_path === null` y asignar una URL de imagen alternativa antes de renderizar el HTML.

### 3. El Problema del Enter
Resolví el problema de la recarga automática del navegador al presionar "Enter" mediante `e.preventDefault()`, logrando que la aplicación se sienta fluida y profesional.

---

##  Demo en Vivo

Puedes probar la aplicación funcionando en tiempo real haciendo clic en el siguiente enlace:

👉 **[VER PROYECTO AQUÍ](https://squicciarinilautaro.github.io/proyecto-buscadordepeliculas-api/)**
