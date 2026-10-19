# ARQ.LAB — Arquitectura monolítica

Guía educativa e interactiva en español para estudiantes de Ingeniería de Software. Incluye explicación por módulos, diagrama de una tienda, características, ventajas y desventajas, ejemplos, comparación con microservicios, reproductor de video configurable y cuestionario de 10 preguntas con resumen y revisión explicada.

## Ejecutar

Abre `index.html` en un navegador moderno. No requiere dependencias ni compilación. Para servir el sitio localmente:

```sh
python3 -m http.server 8000
```

Después visita <http://localhost:8000>.

## Configurar el video

Edita `VIDEO_CONFIG`, al inicio de `script.js`, y utiliza una de estas opciones:

```js
const VIDEO_CONFIG = {
  mp4Path: "video/arquitectura-monolitica.mp4",
  youtubeUrl: "",
};
```

Para un video local, copia el archivo MP4 dentro de la carpeta `video/` y asigna su ruta relativa a `mp4Path`. Para YouTube, deja `mp4Path` vacío y coloca una URL válida de YouTube en `youtubeUrl`. Si ambas opciones tienen valor, el MP4 tiene prioridad. Sin una fuente configurada se muestra un espacio preparado, no un video ficticio. El MP4 utiliza controles nativos y muestra su duración al cargar metadatos; YouTube incorpora sus propios controles.
