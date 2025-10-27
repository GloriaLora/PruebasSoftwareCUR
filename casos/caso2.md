# Caso 2 — Y2K Bug (2000)

Resumen

El famoso problema del año 2000 (Y2K) afectaba sistemas que representaban el año con dos cifras. Al pasar
del 31 de diciembre de 1999 al 1 de enero de 2000 existía el riesgo de interpretar "00" como 1900, lo que
podría generar cálculos erróneos en vencimientos, intereses y pagos automáticos.

Causas raíz

- Dependencia de formatos de fecha antiguos en sistemas legados.
- Falta de testing con escenarios temporales límite y datos históricos.

Pruebas que faltaron

- Análisis de regresión sobre formatos de fechas en sistemas legados.
- Pruebas unitarias y de integración con fechas límite y valores extremos.
- Verificación cruzada de cálculos en sistemas dependientes de fecha.

Impacto

- Costes masivos en prevención y corrección (estimaciones públicas > $100 mil millones en gasto preventivo).
- Alto esfuerzo de auditoría y actualización de sistemas legados.

Lecciones

- Considerar escenarios temporales y límites como parte habitual de las pruebas.
- Mantener código legado documentado y auditable.

Fuentes
https://www.eset.com/latam/blog/cultura-y-seguridad-digital/y2k-el-dia-que-el-mundo-temio-un-colapso-tecnologico/
