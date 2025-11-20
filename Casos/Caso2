
✈️ CASO 2 – Boeing 737 MAX (2018–2019)
Tema: Fallo del sistema MCAS que provocó dos accidentes fatales
Industria: Aviación / Sistemas Críticos
Severidad: ☠️ Catastrófica (346 vidas perdidas)
Costo estimado: Más de US$20.000 millones
________________________________________
Tabla de Contenidos
1.	Resumen Ejecutivo
2.	Datos Clave
3.	Timeline del Incidente
4.	Descripción Técnica
5.	Análisis de Causa Raíz
6.	Impacto
7.	Respuesta de Boeing y Autoridades
8.	Pruebas que Pudieron Prevenir el Desastre
9.	Lecciones Aprendidas
10.	Casos Similares
11.	Referencias
________________________________________
1. Resumen Ejecutivo
Entre 2018 y 2019, dos aviones Boeing 737 MAX 8 (Lion Air 610 y Ethiopian Airlines 302) se estrellaron minutos después del despegue, causando la muerte de 346 personas. Ambos accidentes se vincularon directamente al sistema MCAS (Maneuvering Characteristics Augmentation System), un software diseñado para estabilizar la aeronave.
El MCAS dependía de un solo sensor de ángulo de ataque (AoA).
Cuando este sensor entregó datos erróneos, el sistema asumió que el avión estaba entrando en pérdida y empujó repetidamente la nariz hacia abajo, sin intervención clara del piloto.
Los pilotos NO fueron informados de la existencia del MCAS en los manuales del MAX, y el sistema podía activarse múltiples veces sin control.
El MAX fue posteriormente retirado del servicio mundial por 20 meses, en la prohibición más grande de la aviación moderna.
________________________________________
2. Datos Clave
Atributo	Valor
Accidente 1	Lion Air 610 (Indonesia), 29 oct 2018
Accidente 2	Ethiopian Airlines 302, 10 mar 2019
Vidas perdidas	346 personas
Sistema culpable	MCAS
Causa técnica	Lectura errónea de un solo sensor
Problema organizacional	Omisión intencional en manuales y entrenamiento
Pérdidas económicas	> US$20.000 millones
Tiempo en tierra del MAX	20 meses (2019–2021)
________________________________________
3. Timeline del Incidente
✈️ Vuelo Lion Air 610 – Indonesia (2018)
Tiempo	Evento
6:20 AM	Despegue desde Yakarta
+1 min	El sensor AoA izquierdo registra valores erróneos
+2 min	MCAS se activa automáticamente y baja la nariz del avión
+3–10 min	MCAS se activa más de 20 veces
+11 min	Pilotos luchan contra el sistema → pérdida de control
6:31 AM	Impacto en el mar de Java
________________________________________
✈️ Vuelo Ethiopian Airlines 302 – Etiopía (2019)
Tiempo	Evento
8:38 AM	Despegue desde Addis Abeba
+30 s	Lecturas incorrectas del AoA
+1 min	Activación de MCAS
+3 min	Pilotos intentan desactivar el sistema
+6 min	Pérdida de control → impacto a alta velocidad
8:44 AM	Accidente fatal → 157 víctimas
________________________________________
🛑 Después del Accidente
Fecha	Evento
Mar 2019	Se bloquea el Boeing 737 MAX a nivel mundial
Nov 2020	FAA aprueba el retorno del MAX tras modificaciones
2021	Aerolíneas reinician operaciones con entrenamiento nuevo
________________________________________
4. Descripción Técnica
🛠️ Sistema Afectado: MCAS
MCAS fue diseñado para evitar que el avión entrara en pérdida (stall) corrigiendo automáticamente la inclinación.
¿Qué hacía MCAS?
•	Empujaba la nariz hacia abajo cuando detectaba un AoA muy alto.
•	Se activaba sin intervención del piloto.
•	Podía activarse repetidamente.
❌ El Problema Crítico
MCAS dependía de un solo sensor AoA.
Si ese sensor fallaba (algo común), MCAS empujaba la nariz aunque el avión estuviera volando normalmente.
________________________________________
🖥️ Arquitectura Simplificada del Error
        ┌──────────────────────────┐
        │   Sensor AoA Izquierdo   │   ❌ Lectura incorrecta
        └──────────────┬───────────┘
                       │
                       ▼
               ┌──────────────┐
               │     MCAS     │   ❌ Empuja nariz abajo
               └──────┬───────┘
                      │
                      ▼
           ┌──────────────────────┐
           │ Superficie del Estabilizador │
           │       (trim)         │
           └──────────────────────┘
________________________________________
5. Análisis de Causa Raíz
🔹 Causas Inmediatas
1.	Dependencia de un solo sensor
Sin redundancia → fallo unipunto crítico.
2.	Activaciones repetidas del MCAS
Un solo error generaba múltiples correcciones.
3.	Falta de información a los pilotos
Manuales y simuladores NO explicaban MCAS.
________________________________________
🔹 Causas Subyacentes
1. Diseño defectuoso del sistema
MCAS tenía autoridad suficiente para forzar el avión hacia el suelo.
2. Suposiciones incorrectas
Boeing asumió que:
•	Los pilotos reaccionarían adecuadamente
•	El sistema sería “transparente”
Estas suposiciones nunca fueron probadas.
3. Pruebas insuficientes
•	No se simuló fallo de sensor AoA
•	No se midió la fuerza real que MCAS aplicaba
•	No se hicieron pruebas piloto–máquina de estrés
________________________________________
🔹 Causas Organizacionales
•	Competencia con Airbus (A320neo) → presión por acelerar el MAX
•	Evitar costos de entrenamiento en simuladores
•	FAA delegó certificación a Boeing
•	Cultura interna de ocultar problemas técnicos
________________________________________
6. Impacto
💀 Impacto Humano
•	346 muertos (dos vuelos)
•	Trauma para familias y comunidades enteras
•	Histórica pérdida de confianza en Boeing
________________________________________
💸 Impacto Económico
Tipo	Monto
Compensaciones a familias	> US$2.500 millones
Pruebas y rediseño MCAS	> US$1.000 millones
Pérdidas por aviones en tierra	> US$5.000 millones
Pérdida de pedidos	> US$10.000 millones
Multas (DOJ)	US$2.5 mil millones
Total estimado: US$20.000 millones
________________________________________
🏢 Impacto Organizacional
•	Despidos masivos
•	Crisis interna en Boeing
•	Reestructuración FAA–Boeing
•	Reentrenamiento global obligatorio para pilotos del MAX
________________________________________
7. Respuesta de Boeing y Autoridades
🛫 Acciones de Boeing
•	Parche del MCAS
•	Se añadieron dos sensores AoA
•	Limitación de autoridad del MCAS
•	Entrenamiento obligatorio en simulador
•	Reescritura del manual de vuelo
🏛️ Acciones de la FAA
•	Investigación federal
•	Nuevos requisitos para certificaciones
•	Restricción de delegación interna
________________________________________
8. Pruebas que Pudieron Prevenir el Desastre
1. Pruebas de Failover y Redundancia
Validación de múltiples sensores AoA.
2. Pruebas de Integración Piloto–Máquina
Simular escenarios donde MCAS se activaba erróneamente.
3. Pruebas de Falla del Sensor
Simulaciones repetidas con lecturas extremas:
AoA = 74°  # imposible en despegue
MCAS → activar ❌
4. Pruebas de Usabilidad (Human Factors)
Evaluar si los pilotos entendían:
•	Qué era MCAS
•	Cómo desactivarlo
5. Pruebas de Seguridad Crítica (DO-178C)
Obligatorias para software aeronáutico nivel A.
________________________________________
9. Lecciones Aprendidas
Para desarrolladores
•	Redundancia SIEMPRE en sistemas críticos
•	Nunca depender de un solo sensor
•	Diseño centrado en el usuario (pilotos)
Para testers
•	Probar fallas improbables pero posibles
•	Simular escenarios de estrés
•	Validar decisiones automáticas vs humanas
Para organizaciones
•	Transparencia salva vidas
•	La certificación nunca puede delegarse completamente
•	La seguridad no es negociable
________________________________________
10. Casos Similares
Caso	Relación
Air France 447 (2009)	Lecturas erróneas de sensores críticos
Therac-25	Automatizaciones peligrosas sin control humano
Ariane 5 (1996)	Reutilización de software sin pruebas adecuadas
________________________________________
11. Referencias
Basadas en tu documento:
•	FAA Return-to-Service Report (2020)
•	Boeing MCAS Technical Documentation
•	Ethiopian Air Crash Final Report (2020)
•	Lion Air JT610 Accident Report (2019)

