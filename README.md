# ARQ.LAB — Arquitectura desacoplada y microservicios

Guía educativa e interactiva en español sobre arquitectura desacoplada para estudiantes de Ingeniería de Software. Incluye un diagrama seleccionable, comparación entre monolitos y microservicios, ventajas y costes, ejemplos y un cuestionario de 10 preguntas con revisión explicada.

## Ejecutar

Abre `index.html` en un navegador moderno. No se necesitan dependencias ni proceso de compilación. Para servirla localmente también puedes ejecutar:

```sh
python3 -m http.server 8000
```

Después visita `http://localhost:8000`.

## Configurar el video

En la parte superior de `script.js`, configura **una** de estas opciones en `VIDEO_CONFIG`:

```js
const VIDEO_CONFIG = {
  mp4Path: "videos/arquitectura-desacoplada.mp4",
  youtubeUrl: "",
};
```

Para YouTube, deja `mp4Path` vacío y asigna una URL válida de YouTube a `youtubeUrl` (por ejemplo, una URL `watch?v=...`, `youtu.be/...` o `/embed/...`). Si ambas opciones tienen valor, el MP4 tiene prioridad. Sin una fuente configurada se muestra un espacio preparado, no un video ficticio. El MP4 utiliza los controles nativos del navegador y muestra la duración al cargar sus metadatos; YouTube incluye sus propios controles y duración.
