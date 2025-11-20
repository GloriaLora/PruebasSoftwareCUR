# ✈️ CASO 2 – Boeing 737 MAX (2018–2019)

**Tema:** Fallo del sistema MCAS que provocó dos accidentes fatales  
**Industria:** Aviación / Sistemas Críticos  
**Severidad:** ☠️ Catastrófica (346 vidas perdidas)  
**Costo estimado:** Más de US$20.000 millones  

---

## 📋 Tabla de Contenidos
1. Resumen Ejecutivo  
2. Datos Clave  
3. Timeline del Incidente  
4. Descripción Técnica  
5. Análisis de Causa Raíz  
6. Impacto  
7. Respuesta de Boeing y Autoridades  
8. Pruebas que Pudieron Prevenir el Desastre  
9. Lecciones Aprendidas  
10. Casos Similares  
11. Referencias  

---

## 1. Resumen Ejecutivo

Entre 2018 y 2019, dos aviones Boeing 737 MAX 8 (**Lion Air 610** y **Ethiopian Airlines 302**) se estrellaron minutos después del despegue, causando la muerte de **346 personas**.

La causa directa en ambos casos fue el sistema **MCAS (Maneuvering Characteristics Augmentation System)**, un software diseñado para estabilizar el avión.

El MCAS:

- Dependía de **un solo sensor** de ángulo de ataque (AoA).
- Al recibir datos erróneos, asumía que el avión estaba entrando en pérdida (*stall*).
- Empujaba repetidamente la nariz hacia abajo, incluso si el avión volaba normalmente.
- Podía activarse múltiples veces sin intervención clara del piloto.

Los pilotos **NO fueron informados** de la existencia del MCAS.

El Boeing 737 MAX fue retirado del servicio mundial por **20 meses**, en la prohibición más grande de la historia aeronáutica moderna.

---

## 2. Datos Clave

| Atributo | Valor |
|----------|--------|
| Accidente 1 | Lion Air 610 (Indonesia), 29 oct 2018 |
| Accidente 2 | Ethiopian Airlines 302, 10 mar 2019 |
| Vidas perdidas | **346 personas** |
| Sistema culpable | MCAS |
| Causa técnica | Lectura errónea de un solo sensor AoA |
| Problema organizacional | Omisión de información en manuales y entrenamiento |
| Pérdidas económicas | > US$20.000 millones |
| Tiempo en tierra del MAX | 20 meses (2019–2021) |

---

## 3. Timeline del Incidente

### ✈️ Vuelo Lion Air 610 – Indonesia (2018)

| Tiempo | Evento |
|--------|--------|
| 6:20 AM | Despegue desde Yakarta |
| +1 min | Sensor AoA izquierdo comienza a registrar valores incorrectos |
| +2 min | MCAS se activa automáticamente y baja la nariz |
| +3–10 min | MCAS se activa **más de 20 veces** |
| +11 min | Pilotos luchan contra el sistema → pérdida de control |
| 6:31 AM | Impacto en el mar de Java |

---

### ✈️ Vuelo Ethiopian Airlines 302 – Etiopía (2019)

| Tiempo | Evento |
|--------|--------|
| 8:38 AM | Despegue desde Addis Abeba |
| +30 s | Lecturas incorrectas del AoA |
| +1 min | Activación de MCAS |
| +3 min | Pilotos tratan de desactivar el sistema |
| +6 min | Pérdida de control a alta velocidad |
| 8:44 AM | **Accidente fatal** → 157 víctimas |

---

### 🛑 Después del Accidente

| Fecha | Evento |
|--------|--------|
| Mar 2019 | Bloqueo mundial del Boeing 737 MAX |
| Nov 2020 | FAA aprueba el retorno tras modificaciones |
| 2021 | Reinicio gradual con nuevo entrenamiento obligatorio |

---

## 4. Descripción Técnica

### 🛠️ Sistema Afectado: MCAS

El MCAS fue diseñado para evitar que el avión entrara en **pérdida aerodinámica (stall)**.

#### ¿Qué hacía MCAS?

- Empujaba automáticamente la nariz hacia abajo si el AoA era muy alto.
- Se activaba sin intervención del piloto.
- Podía activarse múltiples veces.

---

### ❌ El Problema Crítico

MCAS dependía de **un solo sensor AoA**.  
Si ese sensor fallaba → MCAS empujaba la nariz **aunque el avión estuviera estable**.

---

## 🖥️ Arquitectura Simplificada del Error

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
       ┌────────────────────────────┐
       │ Superficie del Estabilizador │
       │           (trim)             │
       └────────────────────────────┘

---

## 5. Análisis de Causa Raíz

### 🔹 Causas Inmediatas

1. **Dependencia de un solo sensor AoA**  
   → fallo unipunto crítico.  
2. **Activaciones repetidas del MCAS**  
   → un error generaba múltiples correcciones.  
3. **Falta de información a los pilotos**  
   → manuales sin MCAS, sin entrenamiento adecuado.

---

### 🔹 Causas Subyacentes

1. **Diseño defectuoso del MCAS**  
   → tenía autoridad suficiente para forzar el avión hacia el suelo.

2. **Suposiciones erróneas**  
   Boeing asumió que:
   - Los pilotos reaccionarían adecuadamente  
   - El sistema sería “transparente”  
   Ninguna suposición fue probada.

3. **Pruebas insuficientes**
   - No se simuló fallo de sensor AoA  
   - No se evaluó la fuerza real aplicada por MCAS  
   - No se probaron escenarios de estrés piloto–máquina  

---

### 🔹 Causas Organizacionales

- Competencia con Airbus (A320neo) → **presión por acelerar** el MAX  
- Evitar costos de entrenamiento en simuladores  
- FAA delegó certificación a Boeing  
- Cultura interna de ocultar problemas técnicos  

---

## 6. Impacto

### 💀 Impacto Humano
- **346 muertos**  
- Familias devastadas  
- Pérdida histórica de confianza en Boeing  

---

### 💸 Impacto Económico

| Tipo | Monto |
|------|--------|
| Compensaciones a familias | > US$2.500 millones |
| Rediseño MCAS + pruebas | > US$1.000 millones |
| Aviones en tierra | > US$5.000 millones |
| Pérdida de pedidos | > US$10.000 millones |
| Multas DOJ | US$2.5 mil millones |
| **Total estimado** | **US$20.000 millones** |

---

### 🏢 Impacto Organizacional

- Despidos masivos  
- Crisis reputacional  
- Reestructuración FAA–Boeing  
- Entrenamiento obligatorio mundial  

---

## 7. Respuesta de Boeing y Autoridades

### 🛫 Acciones de Boeing

- Parche del MCAS  
- Añadir **dos sensores AoA** (redundancia)  
- Limitar autoridad del MCAS  
- Entrenamiento obligatorio en simulador  
- Nuevos manuales de vuelo  

### 🏛️ Acciones de la FAA

- Investigación federal  
- Nuevos requisitos de certificación  
- Restricción en delegación de controles  

---

## 8. Pruebas que Pudieron Prevenir el Desastre

### 1. ✔ Pruebas de Failover y Redundancia  
Validar múltiples sensores AoA.

### 2. ✔ Pruebas de Integración Piloto–Máquina  
Simular activaciones erróneas del MCAS.

### 3. ✔ Pruebas de Falla del Sensor

```python
AoA = 74   # imposible en despegue
MCAS.activate()   # ❌ no debería hacerlo
### 4. ✔ Pruebas de Usabilidad (Human Factors)

Evaluar si los pilotos entendían:

- qué era **MCAS**
- cómo **desactivarlo**

---

### 5. ✔ Pruebas de Seguridad Crítica (DO-178C)

Obligatorias para software aeronáutico **Nivel A** (software cuyo fallo puede causar pérdida de la aeronave).

---

## 9. Lecciones Aprendidas

### 👨‍💻 Para desarrolladores
- Redundancia **SIEMPRE**
- Nunca depender de un solo sensor
- Diseño centrado en el usuario (piloto)

### 🧪 Para testers
- Probar fallas improbables pero posibles
- Simular escenarios de **estrés extremo**
- Validar decisiones automáticas vs intervención humana

### 🏢 Para organizaciones
- **La transparencia salva vidas**
- No delegar certificación crítica
- La seguridad **no es negociable**

---

## 10. Casos Similares

| Caso | Relación |
|------|----------|
| Air France 447 (2009) | Lecturas erróneas de sensores |
| Therac-25 | Automatizaciones peligrosas sin control humano |
| Ariane 5 (1996) | Reutilización de software sin pruebas adecuadas |

---

## 11. Referencias

Basadas en tu documento:

- **FAA Return-to-Service Report (2020)**
- **Boeing MCAS Technical Documentation**
- **Ethiopian Air Crash Final Report (2020)**
- **Lion Air JT610 Accident Report (2019)**


