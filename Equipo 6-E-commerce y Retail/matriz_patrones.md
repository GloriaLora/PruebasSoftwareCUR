# Matriz de Patrones Comunes - Análisis Cross-Team

## Patrones Identificados Entre Todos Los Equipos

| # | Patrón | Tipo de Fallo | Consecuencia | Ejemplos de los Equipos | Magnitud | ¿Podría pasar en Hachiko? |
|---|--------|---------------|--------------|-------------------------|----------|---------------------------|
| 1 | **Ausencia de validación de límites críticos** | Validación | Ejecución de operaciones con valores fuera de rango aceptable | **Equipo 1:** Knight Capital sin límites en órdenes automáticas, Citibank transferencia de $900M sin validación<br>**Equipo 4:** Ariane 5 overflow no manejado en conversión de datos | Catastrófica ($440M-$900M, $370M respectivamente) | SÍ |
| 2 | **Testing desconectado de condiciones reales** | Testing | Sistema falla bajo cargas/condiciones operacionales reales no simuladas | **Equipo 1:** Knight Capital sin pruebas con market feeds reales, Nasdaq IPO sin simular alta demanda<br>**Equipo 6:** J.Crew, Nike, Costco sin load testing para Black Friday<br>**Equipo 4:** Metro Shanghai sin simulación completa antes de actualización | Alta ($775K en 5h, millones en ventas perdidas) | SÍ |
| 3 | **Eliminación de redundancias físicas/lógicas** | Arquitectura | Punto único de falla sin respaldo que causa colapso total | **Equipo 3:** Therac-25 eliminó controles físicos por "eficiencia"<br>**Equipo 4:** Boeing 737 MAX dependencia de sensor único<br>**Equipo 6:** British Airways sin redundancia geográfica de datacenters | Crítica (6 muertes Therac-25, 346 muertes Boeing, $100-190M British Airways) | SÍ |
| 4 | **Reutilización de código sin validación de contexto** | Desarrollo | Código legacy funciona en contexto original pero falla en nuevo escenario | **Equipo 1:** Knight Capital flags antiguos reactivados<br>**Equipo 4:** Ariane 5 reutilizó código de Ariane 4 sin validar nuevos límites operacionales | Catastrófica ($440M Knight, $370M Ariane) | SÍ |
| 5 | **Ausencia de circuit breakers y kill switches** | Resiliencia | Fallo se propaga sin control, sin mecanismo de detención automática | **Equipo 1:** Knight Capital sin kill switches automatizados en 45 minutos de desastre<br>**Equipo 6:** British Airways sistemas cayeron sin failover automático<br>**Equipo 4:** Metro Shanghai sin sistema de parada de emergencia automática | Catastrófica ($440M, $100-190M, 271 heridos) | SÍ |
| 6 | **Falta de preparación para eventos predecibles** | Planificación | Colapso en eventos de alta demanda conocidos con anticipación | **Equipo 6:** Black Friday fallas repetidas año tras año (Costco 2024, Nike 2022, Harvey Norman 2023) a pesar de ser fecha conocida<br>**Equipo 1:** Nasdaq IPO de Facebook sin preparación para volumen esperado | Alta (millones en ventas perdidas, eventos arruinados) | NO |
| 7 | **Testing solo en "happy path"** | Testing | Casos extremos, errores de usuario y condiciones adversas causan fallos | **Equipo 3:** Therac-25 nadie probó operador escribiendo rápido<br>**Equipo 1:** Citibank UI sin validación de montos absurdos<br>**Equipo 6:** United Airlines sin alertas para precios anómalos ($0 tickets) | Media a Alta (6 muertes, $900M, pérdidas millonarias) | SÍ |
| 8 | **Ausencia de monitoreo en tiempo real** | Observabilidad | Problemas no detectados hasta que causan daño masivo | **Equipo 1:** Knight Capital detección manual del problema<br>**Equipo 6:** British Airways sin alertas de fallo de energía, J.Crew sin detección de colapso<br>**Equipo 3:** Therac-25 sin logging de dosis administradas | Alta (minutos/horas de fallo sin detección) | SÍ |
| 9 | **Staging/Producción sin paridad** | Deployment | Configuraciones diferentes causan comportamiento impredecible en producción | **Equipo 1:** Knight Capital staging no reflejaba configuración real de producción<br>**Equipo 4:** Metro Shanghai actualizaciones en producción sin ambiente idéntico de prueba | Catastrófica ($440M Knight, 271 heridos Shanghai) | SÍ |
| 10 | **Falta de cultura de reporte de errores** | Organizacional | Errores menores no reportados escalan a catástrofes | **Equipo 3:** Therac-25 operadores reportaban "comportamientos extraños" pero eran ignorados<br>**Equipo 4:** Boeing 737 MAX pilotos reportaron problemas antes de crashes fatales | Crítica (346 muertes Boeing, 6 muertes Therac-25) | NO |
| 11 | **Decisiones de ahorro sobre seguridad** | Gerencial | Reducción de costos en testing/infraestructura causa pérdidas mayores | **Equipo 6:** Harvey Norman no invirtió en infraestructura (60% ventas perdidas), ingeniero QA $100K vs downtime $83K/minuto<br>**Equipo 4:** Boeing diseño deficiente por presión competitiva<br>**Equipo 3:** Zaragoza protocolo ignorado por "experiencia" | Crítica (vidas y millones de dólares) | SÍ |
| 12 | **Actualización en producción sin rollback plan** | Deployment | Cambios causan fallos críticos sin forma rápida de revertir | **Equipo 4:** Metro Shanghai actualización "rutinaria" causó accidente masivo<br>**Equipo 1:** Knight Capital deployment sin procedimiento de rollback<br>**Equipo 6:** British Airways cambio en datacenter sin plan de recuperación | Alta a Catastrófica (271 heridos, $440M, $100-190M) | SÍ |
| 13 | **Falta de idempotencia en operaciones críticas** | Diseño | Operaciones se ejecutan múltiples veces causando duplicidad | **Equipo 6:** 0.8-2% del volumen en cobros duplicados ($800K-2M anuales para empresa de $100M)<br>**Equipo 1:** HSBC transacciones duplicadas sin detección | Media ($800K-2M por empresa) | SÍ |
| 14 | **Seguridad como "adición posterior"** | Seguridad | Vulnerabilidades explotables porque seguridad no fue diseño fundamental | **Equipo 3:** Abbott marcapasos sin cifrado, ciberseguridad agregada después en 465,000 dispositivos<br>**Equipo 1:** Sistemas financieros con interfaces vulnerables | Alta (vidas en riesgo, vulnerabilidad masiva) | SÍ |
| 15 | **Sincronización y condiciones de carrera no testeadas** | Concurrencia | Timing issues causan comportamiento impredecible y peligroso | **Equipo 3:** Therac-25 error de concurrencia cuando operador escribía rápido<br>**Equipo 4:** Metro Shanghai fallo en sincronización de tiempo real entre sistemas<br>**Equipo 1:** Knight Capital race conditions en deployment | Crítica (6 muertes, 271 heridos, $440M) | SÍ |

## Resumen de Aplicabilidad a Hachiko

**Patrones aplicables: 13 de 15 (87%)**

Los patrones **NO aplicables** directamente:
- **#6 Falta de preparación para eventos predecibles:** Hachiko no tiene eventos de alta demanda tipo Black Friday
- **#10 Falta de cultura de reporte:** Proyecto estudiantil con equipo pequeño, no organización grande

Los patrones **MÁS CRÍTICOS** para Hachiko:
1. **#1 Validación de límites:** Sensores MPU-6050 y lecturas biométricas deben validarse
2. **#3 Redundancia:** Sistema de monitoreo emocional canino debe tener respaldos
3. **#5 Circuit breakers:** Fallo de sensor no debe colapsar todo el sistema
4. **#8 Monitoreo en tiempo real:** Detectar anomalías en lecturas de sensores
5. **#14 Seguridad por diseño:** Datos sensibles del perro/dueño deben protegerse desde el inicio
6. **#15 Condiciones de carrera:** Múltiples sensores leyendo simultáneamente requieren sincronización

## Lección Fundamental

**Los 15 patrones revelan una verdad universal: los desastres de software NO son eventos aleatorios, son el resultado predecible de decisiones conscientes de omitir pruebas, ignorar redundancias, y priorizar velocidad/costo sobre confiabilidad.**

Cada patrón representa una decisión donde alguien dijo "probablemente estará bien" en lugar de "déjame validar esto exhaustivamente". En Knight Capital, British Airways, Boeing, Therac-25, y miles de casos más, esa decisión costó vidas o fortunas.

Para Hachiko: **13 de estos 15 patrones podrían ocurrir en nuestro proyecto si no somos disciplinados con el testing desde el día uno.**
