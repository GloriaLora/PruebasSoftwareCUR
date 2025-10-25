# Caso 1 — Knight Capital (2012)

Resumen

Un despliegue en producción activó código y flags antiguos que generaron órdenes masivas erróneas durante
aproximadamente 45 minutos. El sistema ejecutó operaciones automáticas sin límites adecuados y la empresa
sufrió pérdidas cercanas a $440 millones.

Causas raíz

- Despliegue erróneo y falta de controles en el proceso de release.
- Ausencia de canary deployments y límites runtime para órdenes.

Pruebas que faltaron

- Pruebas de integración end-to-end con sistemas de mercado reales (market feeds, clearing).
- Regresión automatizada que detecte reactivación de código legacy/flags.
- Chaos testing / fault injection para validar rollbacks y kill switches.

Impacto

- Pérdida económica inmediata (~$440M).
- Daño reputacional y revisión de procesos de gestión de cambios.

Lecciones

- Paridad entre staging y producción.
- Implementar límites y circuit breakers en runtime.
- Desplegar con canary y monitorización en tiempo real.

Fuentes

- (Añadir enlaces a reportes técnicos y noticias)
