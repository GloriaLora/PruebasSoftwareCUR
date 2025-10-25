# Caso 5 — Citibank Fat Finger Error (2020)

Resumen

Un error humano en la interfaz de transferencias de Citibank resultó en una transferencia masiva por error
de aproximadamente $900 millones a acreedores de Revlon. Gran parte del dinero no fue recuperable.

Causas raíz

- Interfaz poco segura y ausencia de pasos de confirmación para operaciones sensibles.
- Falta de validaciones automáticas de límites en montos de transferencia.

Pruebas que faltaron

- Pruebas de usabilidad y flujos de confirmación múltiple.
- Validaciones automáticas de límites y controles en la API de pagos.
- Simulaciones de errores humanos en los procesos críticos.

Impacto

- Transferencia accidental de gran magnitud, pérdida parcial e impacto reputacional.

Lecciones

- Añadir confirmaciones múltiples y límites por defecto en operaciones sensibles.
- Diseñar interfaces que minimicen la posibilidad de errores humanos (UX research + pruebas).

Fuentes

- (Añadir enlaces a noticias y reportes legales)
