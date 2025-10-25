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
