# Caso 3 — Nasdaq / Facebook IPO Glitch (2012)

Resumen

Durante la oferta pública inicial (IPO) de Facebook, el sistema de Nasdaq falló al procesar órdenes debido a
un error en el algoritmo de confirmación. Miles de operaciones quedaron sin ejecutar o duplicadas,
generando pérdidas económicas y demandas.

Causas raíz

- Implementación defectuosa en el sistema de manejo de órdenes.
- Falta de pruebas de carga y sincronización bajo condiciones de alta demanda.

Pruebas que faltaron

- Pruebas de carga y estrés con simulaciones de mercado real.
- Validación de sincronización de órdenes y tiempos de respuesta.
- Pruebas de contingencia ante caídas parciales del sistema.

Impacto

- Pérdidas económicas significativas y demandas legales.
- Pérdida de confianza de los participantes del mercado.

Lecciones

- Simular eventos de alta demanda antes de eventos críticos.
- Tener planes automáticos de contingencia para degradación controlada del servicio.

Fuentes
https://archive.nytimes.com/dealbook.nytimes.com/2012/08/02/knight-capital-says-trading-mishap-cost-it-440-million/
