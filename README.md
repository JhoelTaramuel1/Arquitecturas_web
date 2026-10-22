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
  googleDriveUrl: "",
};
```

Para un video local, copia el archivo MP4 dentro de la carpeta `video/` y asigna su ruta relativa a `mp4Path`. Para YouTube, deja `mp4Path` vacío y coloca una URL válida de YouTube en `youtubeUrl`. Para Google Drive, deja las dos anteriores vacías y usa el enlace compartido de una carpeta o de un archivo en `googleDriveUrl`. Las carpetas se muestran como una vista navegable; los archivos se abren en el reproductor integrado de Drive. El MP4 tiene prioridad, luego YouTube y después Drive. Los archivos y carpetas de Drive deben permitir el acceso a las personas que visiten la página. Sin una fuente configurada se muestra un espacio preparado, no un video ficticio.
