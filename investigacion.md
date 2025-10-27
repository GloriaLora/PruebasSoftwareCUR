# Investigación — Metodología y Fuentes

Este documento resume la metodología usada para seleccionar y analizar los casos presentados en
la página del equipo.

1. Alcance

- Se analizaron incidentes de software con impacto financiero identificado públicamente. Los casos
  incluyen fallos de despliegue, errores de validación, problemas de migración y errores humanos.

2. Fuentes y verificación

- Priorizar fuentes primarias y publicaciones periodísticas reconocidas y resúmenes técnicos cuando estén disponibles.
- En el HTML se incluyen enlaces de ejemplo (Wikipedia). Reemplaza por las URLs originales en `pagina/`.

3. Criterios de análisis

- Descripción del incidente (qué ocurrió y cuándo)
- Causa raíz técnica/procesal (despliegue, validación, integración, UI)
- Pruebas que faltaron (tipos concretos)
- Impacto (económico, regulatorio, reputacional)
- Lecciones y recomendaciones prácticas

4. Proceso de trabajo

- Recolectar fuentes → Resumir en `casos/casoX.md` → Actualizar `pagina/index.html` para coherencia
- Añadir referencias en cada ficha y en la sección de recursos

5. Cómo contribuir

- Para añadir un caso: crear `casos/casoN.md` con la plantilla usada en esta carpeta y actualizar
  `timelinePoints` en `pagina/index.html` (fecha, label, short, id).

6. Plantilla recomendada para fichas (usar en `casos/caso1.md`..):

```
# Título del caso (Año)

Resumen breve...

Causa(s) raíz:
- ...

Pruebas que faltaron:
- ...

Impacto:
- ...

Lecciones:
- ...

Fuentes:
- [Fuente 1](URL)
```

---

Archivo generado por el Equipo 1 — actualizar fuentes antes de la entrega final.
