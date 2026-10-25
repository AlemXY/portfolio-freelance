# Alex Cabana — Portafolio React

Portafolio web profesional para presentar servicios, proyectos y recibir consultas de potenciales clientes.

## Stack

- React 19 + TypeScript + Vite
- CSS modular con variables de diseño
- Lucide React
- Netlify Forms para consultas, sin backend propio

## Requisitos

- Node.js >= 20.19
- npm

## Instalar y ejecutar

```bash
npm install
npm run dev
```

Abrir la URL que muestre Vite (normalmente `http://localhost:5173`).

```bash
npm run typecheck
npm run build
npm run preview
```

## Estructura

```text
public/
  media/          # Imágenes exportadas y optimizadas (WebP)
  __forms.html    # Blueprint estático para detectar el formulario en Netlify
  privacidad.html # Información informativa, debe completarse antes de publicar
src/
  components/     # Cabecera, tarjetas, encabezados, contacto
  data/site.ts    # Datos del titular, servicios, enlaces y proyectos
  styles/         # Base, secciones, componentes, responsive
  App.tsx         # Composición de las secciones de la landing
  main.tsx        # Punto de entrada de React
netlify.toml      # Parámetros de despliegue y cabeceras
```

## Antes de publicar (obligatorio)

1. Revisar `src/data/site.ts`: nombre visible, GitHub, proyectos y demos externas. Los enlaces a proyectos fueron extraídos de conversaciones previas y deben comprobarse en el navegador.
2. Si deseas publicar correo o WhatsApp: editar `publicEmail` y `publicWhatsapp` en `site.ts`. Si están vacíos, **no se mostrará ningún enlace falso**.
3. Revisar el texto en `public/privacidad.html`, establecer retención y datos del responsable; consultar asesoramiento jurídico si corresponde. El texto de ejemplo **no certifica cumplimiento legal**.
4. Confirmar los derechos de uso de `hero-desarrollo.webp`, `sobre-desarrollo.webp`, `cerativerse.webp` y `elderburger.webp`. Son recursos adaptados a partir de archivos proporcionados para este trabajo; su licencia comercial no fue verificada.
5. Comprobar que Screenora y Cerativerse sigan operativos. Screenora depende de un backend externo que puede no estar disponible.
6. Personalizar los rangos de presupuesto del formulario a tus condiciones comerciales reales.

## Contacto con Netlify Forms

Esta web funciona sin servidor propio: el formulario usa **Netlify Forms**.

### Cómo activarlo

1. Subir este proyecto a GitHub.
2. En Netlify: **Add new project → Import existing project → GitHub**.
3. Seleccionar el repositorio y desplegar con `npm run build`, publicando `dist` (configuración también incluida en `netlify.toml`).
4. En el panel del sitio ir a **Forms → Enable form detection** y, si se activó después de desplegar, **volver a desplegar**.
5. Verificar que Netlify detecte el formulario llamado `solicitud-proyecto`.
6. Configurar notificaciones por correo en Netlify si deseas recibir alertas de consultas nuevas. El correo de notificaciones solo se configura en tu panel, no en el código público.
7. Hacer una prueba real desde la URL Netlify, revisar la pestaña Forms (y Spam si es necesario).

### Mantenimiento del formulario

- Campos actuales: `form-name`, `bot-field`, `nombre`, `email`, `servicio`, `presupuesto`, `mensaje`, `consentimiento`.
- Si agregas/cambias campos, mantén sincronizados **`src/components/ContactForm.tsx`** y **`public/__forms.html`**.
- Envía el formulario a `/__forms.html` mediante URL-encoded POST; `FormData` y `URLSearchParams` están en el componente.
- En `npm run dev` el formulario muestra un aviso de prueba local y **no finge enviar**.
- El formulario no requiere que publiques tu correo personal. Los mensajes se consultan en Netlify Forms.
- Si alojas el sitio en un proveedor distinto de Netlify, este formulario requiere adaptar el backend/proveedor de envío; no funcionará automáticamente.

## SEO y rendimiento

La página incluye HTML en español, descripción, Open Graph básica y assets WebP optimizados. Para una URL definitiva, añadir la URL absoluta del proyecto en los metadatos sociales/canonical. Probar Lighthouse y accesibilidad después del despliegue.

## Alcance comercial

Los proyectos destacados son de demostración, personales o académicos. No se atribuyen a clientes reales. No se anuncian años de experiencia inventados ni servicios móviles/tiendas con pagos no verificados.

## Control de calidad antes del lanzamiento

- [ ] Home renderiza en escritorio, tablet y móvil (320, 375, 768, 1440 px).
- [ ] Menú móvil abre/cierra y navega correctamente (incluida tecla Escape).
- [ ] Todos los enlaces externos abren el proyecto esperado.
- [ ] Formulario muestra aviso local en desarrollo.
- [ ] Netlify Forms registra una consulta real en producción.
- [ ] Página de privacidad revisada por el responsable.
- [ ] `npm run typecheck` y `npm run build` finalizan sin errores.
- [ ] Revisados derechos de uso de imágenes y descripciones de proyectos.

---

El código contiene comentarios técnicos útiles para futuros mantenedores; los contenidos comerciales se centralizan en `src/data/site.ts`.
