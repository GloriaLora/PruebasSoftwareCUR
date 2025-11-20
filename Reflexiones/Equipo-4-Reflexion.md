#Reflexión del Equipo 4 — Resumen colectivo

Como equipo (Yeison Roa, Sebastián Carvajal y Juan Diego Paz) investigamos tres casos emblemáticos de fallos de software en sistemas de transporte y aeroespaciales: el cohete Ariane 5 (1996), el Boeing 737 MAX (2018–2019) y el Metro de Shanghái Línea 10 (2011). A través de estos desastres comprendimos que en sistemas donde la vida humana depende del software, cada línea de código debe ser verificada, simulada y validada con el máximo rigor.

Nuestra principal conclusión es que las pruebas en tiempo real, la redundancia y la verificación cruzada son tan esenciales como el propio desarrollo. Los tres casos revelan que los errores más graves no se originan en el código en sí, sino en suposiciones no probadas, falta de validaciones de límites y actualizaciones sin control operativo.

Entre los aprendizajes colectivos destacamos que:
-Reutilizar código sin evaluar sus límites operacionales (como en Ariane 5) puede ser letal.

-Depender de un solo sensor (caso Boeing 737 MAX) contradice los principios de redundancia crítica.

-Actualizar software en operación activa (caso Metro de Shanghái) sin entornos simulados es una falla de gestión más que técnica.

Acciones que proponemos para futuros proyectos de desarrollo:

1.Implementar entornos de simulación y pruebas de estrés en tiempo real antes del despliegue.

2.Adoptar estándares como DO-178C y IEC 62290, que garantizan seguridad, trazabilidad y certificación.

3.Automatizar pruebas de regresión y verificación de redundancia entre sensores y módulos críticos.

4.Planificar despliegues controlados con rollback seguro y supervisión continua post-release.

Esta reflexión conjunta refuerza nuestra visión del software como una disciplina de responsabilidad ética, no solo técnica. En los sistemas críticos, probar no es un paso adicional: es la diferencia entre la confianza y la tragedia.
