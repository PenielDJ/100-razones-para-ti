# 100 razones para ti

Una plantilla romántica, estática y personalizable en HTML, CSS y JavaScript. No necesita dependencias, servidor de aplicaciones ni proceso de compilación.

## Verla localmente

Abre `index.html` en un navegador. Para probarla con un servidor local, ejecuta desde esta carpeta:

```powershell
python -m http.server 8000
```

Luego visita <http://localhost:8000>.

## Personalizarla

Edita el objeto `CONFIG` al inicio de `script.js`:

- `recipientName`: nombre de la persona destinataria.
- `yourName`: tu nombre.
- `title` y `subtitle`: título y frase de bienvenida.
- `letter`: texto de la carta. Usa `{{persona}}` y `{{tuNombre}}` para insertar los nombres automáticamente.
- `photos`: rutas y pies de foto. La plantilla trae seis espacios decorativos y no incluye fotografías.
- `music` y `musicLink`: son opcionales; el botón de música se oculta mientras ambos estén vacíos.

Las cien razones están en la constante `reasons`, inmediatamente después de `CONFIG`. Puedes cambiar sus textos, iconos y categorías.

## Añadir fotos

Pon hasta seis imágenes propias en `assets/photos/` con los nombres `photo1.jpg` a `photo6.jpg`, o cambia sus rutas en `CONFIG.photos`. Si una imagen no existe, se muestra una tarjeta decorativa.

## Añadir música

Puedes configurar `music` con una ruta a un archivo de audio propio o autorizado, como `./assets/music/tema.mp3`. Para una página pública, no publiques música protegida por derechos de autor sin autorización. También puedes configurar `musicLink` con un enlace público permitido; en el sitio publicado se abrirá en otra pestaña.

## Publicarla con GitHub Pages

Sube el contenido de esta carpeta a la rama `main` de un repositorio público y activa GitHub Pages desde **Settings → Pages**, seleccionando **Deploy from a branch**, rama `main` y carpeta `/ (root)`. La página quedará disponible en `https://<tu-usuario>.github.io/<nombre-del-repositorio>/`.

## Privacidad y funcionamiento

La página no usa analítica, formularios, almacenamiento remoto ni backend. El progreso se guarda solo en `localStorage` del navegador. Google Fonts carga la tipografía de forma opcional; si quieres evitar esa solicitud externa, elimina sus tres etiquetas `<link>` en `index.html` y se usarán las fuentes del sistema.

## Licencia

Este proyecto se publica bajo la licencia MIT. Consulta `LICENSE`.