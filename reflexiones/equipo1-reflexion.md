# Reflexión del Equipo 1 — Resumen colectivo

Como equipo (Manuela, Luisa y Alexis) hemos trabajado en la identificación y análisis de cinco
incidentes representativos de fallos de software con impacto financiero. Esta investigación nos dejó
varias conclusiones compartidas:

- La calidad del proceso de despliegue y la gestión de cambios es tan importante como la calidad del
  código. Los casos muestran que fallos en release y falta de controles pueden causar daños inmediatos.
- Las pruebas deben cubrir no solo la funcionalidad en condiciones ideales, sino escenarios reales:
  carga pico, interacción con sistemas externos y errores humanos.
- Las validaciones preventivas (límites por defecto, comprobaciones de duplicidad, confirmaciones) son
  barreras de protección que evitan pérdidas enormes.

Acciones que proponemos para equipos de desarrollo (prácticas concretas):

1. Implementar canary deployments y feature flags con monitorización y rollback automático.
2. Automatizar suites de regresión y ejecutar pipelines que incluyan tests E2E y pruebas de carga.
3. Añadir pruebas de usabilidad y escenarios de errores humanos para funciones críticas.
4. Monitorización en tiempo real y alertas sobre patrones anómalos (picos de órdenes, duplicados).

Esta reflexión colectiva resume lo aprendido y servirá como punto de partida para mejorar las prácticas
de testing en proyectos futuros.
