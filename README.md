# Mi Servidor Puppeteer

Este proyecto es un servidor de Node.js que utiliza la biblioteca Puppeteer para generar archivos PDF a partir de una URL que se pasa a través del cuerpo de una solicitud HTTP.

## Requisitos

- Node.js
- npm

## Instalación

1. Clona este repositorio en tu máquina local.
2. Navega hasta el directorio del proyecto.
3. Ejecuta `npm install` para instalar las dependencias del proyecto.

## Uso

1. Inicia el servidor ejecutando `npm start`.
2. Envía una solicitud POST a `http://localhost:3000/pdf` con un cuerpo JSON que contenga una propiedad `url`. Por ejemplo:

```json
{
    "url": "http://example.com"
}
```

El servidor responderá con un archivo PDF generado a partir de la URL proporcionada.

## Notas

- El servidor está configurado para escuchar en el puerto 3000. Si necesitas cambiar esto, puedes modificar el archivo `src/index.js`.
- La generación de PDF puede tardar un poco, dependiendo de la complejidad de la página web y la velocidad de tu conexión a Internet. Por favor, ten paciencia.# puppeterTest
