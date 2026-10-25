# Control de calidad — Portafolio React

Fecha de preparación: octubre de 2026.

## Verificado en esta entrega

- Se extrajo y revisó el `Freelancer Page.zip` original (HTML, CSS e imágenes).
- Conservada la identidad de marca con azul oscuro, turquesa y logotipo original.
- Creada estructura React, TypeScript, Vite y CSS organizado.
- Los archivos `.ts` y `.tsx` superaron el análisis de sintaxis de TypeScript 5.9 disponible en el entorno.
- Los cuatro CSS superaron comprobaciones de sintaxis con `tinycss2`.
- Todas las referencias locales a imágenes `/media/...` se corresponden con archivos incluidos.
- El formulario React y el blueprint de Netlify contienen los mismos nombres de campo.
- Las imágenes se optimizaron a WebP, exceptuando el favicon y logotipo de marca.
- El ZIP se generó con estructura de directorios y archivos comprobados.

## No verificado en este entorno

- `npm install`, `npm run build` y ejecución real del navegador: no se pudo acceder al registro de npm. Ejecutar en un equipo con conexión a Internet.
- Recepción de formularios: depende de habilitar Netlify Forms, desplegar y probar desde la URL definitiva.
- Disponibilidad permanente de las URL externas de proyectos.
- Permisos/licencias comerciales de las imágenes originales.
- Auditorías Lighthouse, navegación por teclado completa y pruebas responsivas en navegadores reales.

## Antes de publicar

1. `npm install && npm run build`.
2. Comprobar 320, 375, 768 y 1440 px; revisar menú móvil y ancho horizontal.
3. Activar Netlify Forms y verificar recepción de una solicitud real.
4. Configurar notificaciones del formulario en Netlify.
5. Revisar `/privacidad.html` y completar política aplicable al responsable.
6. Verificar enlaces externos, contenido del portafolio y derechos de uso de las imágenes.
7. Confirmar que el repositorio no incluya `node_modules`, `dist` ni archivos privados.
