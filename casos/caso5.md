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
https://cnnespanol.cnn.com/2024/05/22/error-dedo-multan-citigroup-us-189-000-millones-acciones-accidente-trax#:~:text=error%20de%20dedo%20gordo%E2%80%9D%20(fat%2Dfinger%2C%20en%20ingl%C3%A9s)%2C,error%20acciones%20por%20un%20valor%20de%20US
