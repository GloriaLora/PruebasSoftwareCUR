# Caso 4 — HSBC Cobros Duplicados (2020)

Resumen

Una actualización en los sistemas de pagos de HSBC provocó cobros duplicados a clientes por una mala
gestión de transacciones en cola. El error se propagó antes de ser detectado, causando reclamos masivos y
reembolsos.

Causas raíz

- Falta de pruebas de regresión al cambiar el procesamiento de colas.
- Ausencia de validaciones de duplicidad y reconciliación continua.

Pruebas que faltaron

- Pruebas de regresión automatizadas tras actualizaciones en el motor de pagos.
- Validación de duplicidad y consistencia de datos en flujos concurrentes.
- Pruebas de estrés en módulos de procesamiento concurrente.

Impacto

- Miles de clientes afectados y costes operativos por reembolsos y atención al cliente.

Lecciones

- Implementar reconciliación y validaciones automáticas en sistemas de pagos.
- Monitorizar y alertar sobre patrones inusuales de transacciones.

Fuentes

- (Añadir enlaces a comunicados oficiales y artículos)
