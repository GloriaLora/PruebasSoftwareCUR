# 🛰️ SISTEMAS CRÍTICOS – TRANSPORTE Y AEROESPACIAL

**Integrantes del equipo:**  
- Yeison Roa A  
- Sebastián Carvajal Ospina  
- Juan Diego Paz  

---

## 🚀 INTRODUCCIÓN

El software desempeña un papel vital en los sistemas de transporte, aviación y exploración espacial. Sin embargo, cuando falla, las consecuencias pueden ser catastróficas, afectando vidas humanas y causando pérdidas millonarias.  
Nuestro equipo investigó tres casos emblemáticos en los que errores de programación o pruebas insuficientes provocaron desastres tecnológicos: el **cohete Ariane 5 (1996)**, los **accidentes del Boeing 737 MAX (2018–2019)** y la **colisión del Metro de Shanghái Línea 10 (2011)**.  
Cada uno evidencia cómo los fallos en conversión de datos, sensores, sincronización o validaciones en tiempo real pueden desencadenar tragedias.  
El objetivo de este análisis es comprender qué pruebas faltaron, cómo se pudieron prevenir y qué enseñanzas dejan para el desarrollo de software crítico bajo estándares como **DO-178C** e **IEC 62290**, que garantizan seguridad, confiabilidad y rigor extremo en sistemas donde un error no es una opción.

---

## 🧭 TIMELINE DE CASOS INVESTIGADOS

- **1996 → Ariane 5:** explosión del cohete europeo por error de conversión numérica.  
- **2011 → Metro de Shanghái Línea 10:** colisión por fallo del sistema de control CBTC.  
- **2018–2019 → Boeing 737 MAX:** dos accidentes mortales causados por el software MCAS.  

---

## 🛰️ CASO 1 – Ariane 5 (1996)

![Ariane 5 Launch](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLifjztxmYfdbSQWLXDx40JOm7LkmQ6ZQtiw&s)

- **Pérdida estimada:** más de **US $370 millones** tras autodestrucción 37 s después del despegue.  
- **Error de software:** conversión errónea de un número en coma flotante de 64 bits a entero de 16 bits en el Sistema de Referencia Inercial (SRI).  
  El *overflow* provocó una excepción no manejada que apagó los dos sistemas inerciales.  
- **Pruebas faltantes:** pruebas de rango de valores, validación de excepciones y simulaciones en tiempo real.  
- **Lección:** nunca reutilizar código de otro sistema sin analizar sus límites operacionales y condiciones reales.

---

## ✈️ CASO 2 – Boeing 737 MAX (2018–2019)

![Boeing 737 MAX](https://s3.amazonaws.com/arc-wordpress-client-uploads/infobae-wp/wp-content/uploads/2019/03/14093650/Problemas-en-el-Boeing-737-MAX.jpg)

- **Accidentes:** Lion Air 610 (2018) y Ethiopian 302 (2019) → **346 fallecidos.**  
- **Fallo de software:** el sistema **MCAS** usaba datos de un solo sensor y, ante lecturas erróneas, forzaba el descenso automático del avión.  
- **Pruebas faltantes:** simulaciones de fallo de sensor, pruebas de redundancia, pruebas piloto-máquina y validación documental.  
- **Lección:** en sistemas críticos, la comunicación con el usuario (piloto) es tan esencial como el código.  
  El software debe prever fallos y garantizar control humano.

---

## 🚇 CASO 3 – Metro de Shanghái Línea 10 (2011)

![Shanghai Metro Crash](https://www.reuters.com/resizer/v2/https%3A%2F%2Farchive-images.prod.global.a201836.reutersmedia.net%2F2011%2F09%2F27%2F2011-09-27T185023Z_02_GM1E79R1CD501_RTRRPP_0_SHANGHAI-TRAINS.JPG?auth=7a5c9b7d1001d8515f135bd974d01ed8dd06bf74ec6a76c2f440d4e8f5ba33c3&quality=80&width=800)

- **Evento:** colisión entre dos trenes durante actualización del software CBTC; **271 heridos** y daños millonarios.  
- **Causa:** pérdida de sincronización en tiempo real entre trenes y centro de control, que activó un modo manual sin datos confiables.  
- **Pruebas faltantes:** test de integración en tiempo real, pruebas de conmutación de modos y rollback.  
- **Lección:** las actualizaciones en operación activa deben pasar por entornos simulados y certificaciones de seguridad como **DO-178C / IEC 62290**.

---

## 📊 ANÁLISIS COMPARATIVO

| **Caso** | **Tipo de error** | **Consecuencias** | **Pruebas que habrían prevenido** |
|-----------|------------------|-------------------|-----------------------------------|
| Ariane 5 (1996) | Conversión de datos / Overflow | Explosión – US $370 M | Pruebas de rango, manejo de excepciones |
| Boeing 737 MAX (2018–19) | Sensor único / Falta de redundancia | 346 muertes – pérdidas millonarias | Pruebas de redundancia, simulación humano-máquina |
| Metro Shanghái (2011) | Falla de sincronización en tiempo real | 271 heridos – daños millonarios | Pruebas de integración y conmutación de modos |

**Patrón común:** falta de validaciones en tiempo real y redundancia.  
Los tres casos evidencian carencias en pruebas de integración, manejo de errores y reutilización de código sin verificación.

<img width="707" height="365" alt="Image" src="https://github.com/user-attachments/assets/9c921da6-6896-459c-aa1b-9e04b928a793" />

<img width="718" height="400" alt="Image" src="https://github.com/user-attachments/assets/8dc874a8-65ed-4a93-8763-6a7b39b46e2b" />

<img width="780" height="175" alt="Image" src="https://github.com/user-attachments/assets/25999be8-f412-40f6-be24-7db171c2f2ea" />

---

## 💭 REFLEXIONES PERSONALES

### 🧑‍💻 Sebastián Carvajal
 
<img width="431" height="442" alt="Image" src="https://github.com/user-attachments/assets/04583afa-e875-4ab9-a524-b8df100f3db4" />

**Qué pensabas antes de la investigación:**  
Al principio creía que las fallas graves en sistemas críticos eran cosas del pasado o causadas por problemas mecánicos.  

**Qué piensas ahora:**  
Hoy sé que cada prueba omitida puede cambiar la historia. El caso del Ariane 5 me enseñó que reutilizar código sin probarlo puede causar desastres.  

**Qué te sorprendió:**  
Me impresionó cómo un error numérico destruyó un cohete entero y millones de dólares de inversión.  

**Cómo cambió tu visión:**  
Ahora veo las pruebas como un deber ético. La seguridad, trazabilidad y redundancia son esenciales. Cada descuido puede ser una tragedia.

---

### 👨‍🚀 Yeison Roa

<img width="366" height="447" alt="Image" src="https://github.com/user-attachments/assets/7099ee5c-21ee-4606-8ddf-d3ae5f742381" />

**Qué pensabas antes:**  
Veía las pruebas como un paso final para comprobar que el sistema funcionara, sin imaginar su impacto real.  

**Qué piensas ahora:**  
Aprendí que los errores de software crítico pueden costar vidas. El Boeing 737 MAX lo demuestra: depender de un solo sensor fue fatal.  

**Qué te impactó:**  
Comprendí que un fallo técnico también es un fallo ético cuando compromete vidas humanas.  

**Cómo cambió tu visión:**  
Ahora entiendo que las normas DO-178C no son burocracia, sino salvaguardas vitales. Programar es un acto de responsabilidad.

---

### 👨‍💼 Juan Diego Paz

<img width="450" height="525" alt="Image" src="https://github.com/user-attachments/assets/8a42ca34-08cb-477a-9530-c332fe63bd73" />

**Qué pensabas antes:**  
Creía que los errores en grandes sistemas eran inevitables y que bastaba con corregirlos rápido.  

**Qué piensas ahora:**  
El caso del Metro de Shanghái mostró que actualizar software sin simulación puede ser tan peligroso como un error de diseño.  

**Qué te sorprendió:**  
Ver que una simple actualización causó 271 heridos me hizo valorar la importancia de las pruebas en tiempo real.  

**Cómo cambió tu visión:**  
Ahora comprendo que el desarrollo responsable significa anticipar riesgos. Cada sistema debe ser seguro, probado y humano.

---
✅ A. Patrones Universales que se Repiten en TODAS las Industrias
🟦 Patrón 1 – Reutilizar código o configuraciones sin validar límites

Descripción:
Código heredado o configuraciones copiadas se usan en contextos nuevos sin evaluar si los valores, sensores o condiciones siguen siendo válidos.

Por qué es universal:
Ocurre en cualquier sistema donde hay presión por ahorrar tiempo: bancos, e-commerce, aviación, salud, videojuegos.

Ejemplos (3 equipos):

Equipo 4 (nosotros): Ariane 5 → overflow por código heredado del Ariane 4.

Equipo 3 (Salud): Therac-25 → código viejo no probado, causando dosis letales.

Equipo 5 (UX & Reputación): Cyberpunk 2077 → código antiguo usado en nuevas consolas sin optimizar.

🟦 Patrón 2 – Dependencia de un solo punto (sensor, módulo, API, usuario)

Descripción:
El sistema confía en un solo elemento crítico que, al fallar, provoca colapso completo.

Por qué es universal:
Se repite donde no hay redundancia: sistemas financieros, transportes, autenticación, salud.

Ejemplos:

Equipo 4: Boeing 737 MAX → MCAS dependía de un sensor AoA.

Equipo 1 (Financiero): Knight Capital → una sola librería defectuosa tomó control del trading.

Equipo 7 (Autenticación): Casos de bypass que dependen de un solo endpoint vulnerable.

🟦 Patrón 3 – Actualizaciones en producción sin pruebas ni rollback

Descripción:
Cambios lanzados directamente en sistemas en operación, sin staging, sin canary, sin rollback seguro.

Por qué es universal:
Toda empresa quiere rapidez sobre seguridad.

Ejemplos:

Equipo 4: Metro de Shanghái → actualización CBTC en hora pico → colisión.

Equipo 6 (E-commerce): Black Friday outages → cambios sin pruebas de carga.

Equipo 2 (Seguridad): Equifax → parche crítico no aplicado correctamente.

🟦 Patrón 4 – Falta de pruebas de escenarios extremos o no ideales

Descripción:
El sistema solo se prueba en condiciones “normales”, pero falla bajo estrés, valores fuera de rango, saturación o inputs raros.

Por qué es universal:
Probamos lo que esperamos… pero los desastres provienen de lo que no esperamos.

Ejemplos:

Equipo 4: Ariane 5 → nunca probaron velocidad horizontal real del nuevo cohete.

Equipo 1 (Financiero): Y2K en bancos → problema previsto, pero evitado porque sí se hicieron edge-case tests.

Equipo 6: Amazon Prime Day → tráfico extremo no probado → caída total.

🟦 Patrón 5 – Comunicación deficiente entre humanos y software (UX crítica)

Descripción:
El software no informa el error claramente o no permite que el usuario recupere control.

Por qué es universal:
La interacción humano-máquina falla en todas las industrias.

Ejemplos:

Equipo 4: Boeing 737 MAX → MCAS no informado a pilotos + warning confuso.

Equipo 3: Therac-25 → mensajes de error ambiguos llevaron a muertes.

Equipo 5: Snapchat redesign → pérdida masiva de usuarios por mala comunicación del cambio.

⭐ B.¿Qué hace que un desastre sea “catastrófico” vs “manejable”?
🟥 1. Nivel de automatización

Cuanta más autonomía → más catastrófico.
Ejemplo:

MCAS (737 MAX) toma control sin piloto → 346 muertos.

Amazon Prime Day solo colapsa la web → vergonzoso, pero no fatal.

🟥 2. Tiempo de reacción disponible

Sistemas críticos → milisegundos

E-commerce → minutos

Instituciones → horas o días

Ejemplo:

Ariane 5 → 37 segundos antes de explotar

Knight Capital → 45 minutos de caos financiero

Black Friday → horas de downtime sin víctimas

🟥 3. Consecuencia directa en vidas humanas

Fallo médico, aeronáutico o ferroviario → vidas en riesgo

Fallo en un e-commerce → pérdidas financieras

Ejemplo:

Therac-25 → muertes por radiación

Metro Shanghái → 271 heridos

Cyberpunk → quejas en redes

🟥 4. Cantidad de dependencias afectadas

Entre más integrado, más daño
Ejemplo:

Boeing 737 MAX → aerolíneas globales dejaron 400 aviones en tierra

Prime Day → afecta solo plataforma Amazon

Knight Capital → una sola empresa, pero destruye 440 millones en minutos

🟥 5. Visibilidad pública

Un fallo aéreo → titulares mundiales

Un bug en login → notas internas

Ejemplo:

737 MAX → prohibición mundial

SimCity 2013 → reputación dañada

WannaCry → titulares globales por hospitales paralizados

⭐ C. Tabla: Tipos de Prueba y Desastres que Habrían Prevenido
Tipo de Prueba	Desastres que habría prevenido	Cómo aplicarlo a nuestro proyecto (equipo 4)
Pruebas de carga	Amazon Prime Day, SimCity 2013	Simular cargas de telemetría en sistemas críticos
Pruebas de integración	HealthCare.gov, Target Canada	Validar sincronización tren-control en CBTC
Pruebas de seguridad	WannaCry, Twitter Hack	Validar autenticidad y redundancia de sensores
Pruebas de edge cases	Ariane 5, Therac-25, Mars Orbiter	Probar valores extremos en navegación aeroespacial
Pruebas de regresión	Knight Capital, Boeing 737 MAX	Asegurar que un update no rompa lógica previa
Pruebas de usabilidad	Therac-25, UK Post Office	Mejorar interacción piloto-máquina (alertas claras)
Code review	Toyota, Volkswagen	Revisar rigorosamente cada módulo crítico
Pruebas multiplataforma	Cyberpunk 2077	Verificar comportamiento en hardware diverso (simuladores, avionics)
⭐ D. ¿Cuál es el desastre más aterrador de OTRO equipo? (Para que cada miembro llene)
✈️ Miembro 1: (Nombre) – Caso elegido: Therac-25 (Equipo 3 – Salud)

Por qué me aterra más:
Porque demuestra que un mensaje de error mal diseñado puede matar a un paciente. Un fallo silencioso en un software médico es más letal que un bug visible.
Conexión con mi práctica: Nunca ignorar warnings, diseñar mensajes claros.

💰 Miembro 2: (Nombre) – Caso elegido: Knight Capital (Equipo 1 – Financiero)

Por qué me aterra más:
Un solo despliegue mal hecho quebró una empresa completa en 45 minutos.
Conexión con mi práctica: Jamás desplegar sin staging o sin rollback.

🔒 Miembro 3: (Nombre) – Caso elegido: Equifax 2017 (Equipo 2 – Seguridad)

Por qué me aterra más:
Porque un fallo de parcheo expuso los datos de 143 millones de personas.
Conexión con mi práctica: Actualizaciones críticas siempre deben verificarse.

## 📚 REFERENCIAS

**Casos investigados**  
- [European Space Agency (ESA). (1996). *Ariane 5 Flight 501 Failure Report.*](https://www.esa.int/Enabling_Support/Operations/Ariane_501_failure_report)  
- Lions, J. L., & ESA Inquiry Board. (1996). *Report on the Ariane 501 Failure.* Paris: ESA.  
- [Boeing Company (2020). *Boeing 737 MAX Flight Control System and MCAS Summary.*](https://www.boeing.com/commercial/737max/updates)  
- [Federal Aviation Administration (2020). *The Boeing 737 MAX Return to Service Report.*](https://www.faa.gov/aircraft/boeing737max)  
- [Ethiopian Civil Aviation Authority (2020). *Final Report: Ethiopian Airlines Flight 302.*](https://reports.ecaainfo.gov.et)  
- [Civil Aviation Authority of Indonesia (2019). *Final Report: Lion Air JT610 Accident.*](https://knkt.dephub.go.id)  
- [Reuters (2011). *Shanghai Metro crash injures 271 people after signal failure.*](https://www.reuters.com/article/us-china-shanghai-metro-idUSTRE78Q2BU20110927)  
- [The Guardian (2011). *Firemen in Shanghai rescue passengers after subway crash.*](https://www.theguardian.com/world/2011/sep/27/shanghai-subway-crash)  
- China State Council (2012). *Official Report on the Wenzhou and Shanghai Metro Accidents.* Beijing.  

**Estándares y fundamentos técnicos**  
- RTCA DO-178C (2011). *Software Considerations in Airborne Systems and Equipment Certification.* RTCA.  
- IEC 62290-1 (2014). *Railway Applications – Urban Guided Transport Systems.* IEC.  
- ISO/IEC/IEEE 29119-1 (2013). *Software Testing – Concepts and Definitions.* ISO.  
- IEEE Std 1012-2016. *System and Software Verification and Validation.* IEEE.  
- Kopetz, H. (2011). *Real-Time Systems.* Springer.  
- Knight, J. C. (2012). *Safety Critical Systems.* IEEE Computer.  
- Leveson, N. (2011). *Engineering a Safer World.* MIT Press.  

**Imágenes y recursos multimedia**  
- Reuters Images (2011). *Shanghai Metro Line 10 Crash.* https://www.reuters.com/article/us-china-shanghai-metro-idUSTRE78Q2BU20110927  
- Unsplash (2020). *Software Engineer at Work* by ThisisEngineering. https://unsplash.com/photos/5fNmWej4tAA  
- ESA Image Archive (1996). *Ariane 5 Flight 501 Launch.* https://www.esa.int/Enabling_Support/Operations/Ariane_5  

**Otros recursos**  
- [U.S. Department of Justice (2021). *Deferred Prosecution Agreement with The Boeing Company.*](https://www.justice.gov/opa/pr/boeing-agrees-pay-over-25-billion-resolve-criminal-charge)  
- [NASA Software Assurance Guidebook (2020). *Software Safety and Reliability Practices.*](https://safety.nasa.gov/software)  
- [Emirates 247 (2011). *Shanghai Subway Trains Crash – Hundreds Injured.*](https://www.emirates247.com/news/world/shanghai-subway-trains-crash-hundreds-injured-2011-09-27-1.420876)
