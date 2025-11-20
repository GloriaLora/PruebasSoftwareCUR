# CASO 1 – Ariane 5 (1996)

**Tema:** Explosión del cohete por error de software  
**Industria:** Aeroespacial / Sistemas Críticos  
**Severidad:** 🔥 Catastrófica (pérdida total)  
**Costo estimado:** > US$370 millones  
**Impacto humano:** Sin víctimas humanas, pero fracaso total de la misión

---

## Tabla de Contenidos

1. [Resumen Ejecutivo](#resumen-ejecutivo)
2. [Datos Clave](#datos-clave)
3. [Timeline del Incidente](#timeline-del-incidente)
4. [Descripción Técnica](#descripción-técnica)
5. [Análisis de Causa Raíz](#análisis-de-causa-raíz)
6. [Impacto](#impacto)
7. [Respuesta de la Agencia Espacial Europea](#respuesta-de-la-agencia-espacial-europea)
8. [Pruebas que Pudieron Prevenir el Desastre](#pruebas-que-pudieron-prevenir-el-desastre)
9. [Lecciones Aprendidas](#lecciones-aprendidas)
10. [Casos Similares](#casos-similares)
11. [Referencias](#referencias)

---

## 1. Resumen Ejecutivo

El 4 de junio de 1996, el primer lanzamiento del cohete Ariane 5 terminó en una explosión a los 37 segundos del despegue. El vehículo espacial se autodestruyó después de que su Sistema de Referencia Inercial (IRS) fallara simultáneamente en sus dos computadoras.

El error no fue mecánico, sino **100% de software**:

➡️ una conversión numérica incorrecta (de float de 64 bits a entero de 16 bits) generó un overflow, lo cual desactivó el sistema de navegación, dejando sin datos al control de vuelo.

Como resultado, el cohete recibió comandos inválidos, giró de manera brusca, perdió estabilidad y activó el sistema de autodestrucción.

Este es uno de los casos más emblemáticos de la historia porque demuestra cómo **UNA sola línea de código no probada puede destruir un proyecto de 10 años**.

---

## 2. Datos Clave

| Atributo | Valor |
|----------|-------|
| Fecha del incidente | 4 de junio de 1996 |
| Momento de la falla | 37 segundos después del lanzamiento |
| Costo total perdido | > US$370 millones |
| Sistema afectado | Sistema de Referencia Inercial (SRI/IRS) |
| Tipo de error | Overflow por conversión de datos |
| Código involucrado | Reutilizado del Ariane 4 |
| Vidas humanas | 0 |
| Resultado | Autodestrucción completa del vehículo |

---

## 3. Timeline del Incidente

### 🕓 4 de Junio de 1996 – Día del Lanzamiento

| Tiempo | Evento |
|--------|--------|
| T-0 | Despegue exitoso del Ariane 5 |
| T+36s | IRS detecta un valor fuera de rango (velocidad horizontal demasiado alta para Ariane 5) |
| T+36.7s | Conversión numérica provoca overflow en ambas computadoras inerciales |
| T+36.8s | El software se detiene y entrega un diagnostic dump como salida normal |
| T+37s | Cohete recibe datos inválidos → giro violento de 90° |
| T+39s | Pérdida completa de control |
| T+40s | Sistema de autodestrucción se activa automáticamente |
| T+41s | Explosión total del Ariane 5 y carga útil |

### 🔍 Después del Incidente

| Fecha | Acción |
|-------|--------|
| 5–10 jun | Equipo de investigación activado |
| Julio 1996 | Informe oficial preliminar publicado |
| Octubre 1996 | Informe final del Ariane 501 Inquiry Board |

---

## 4. Descripción Técnica

### 🔧 Sistema Afectado

- **Componente:** Sistema de Referencia Inercial (SRI)
- **Función:** Proveer velocidad, orientación y posición al ordenador de vuelo
- **Tecnología:** Software en ADA reutilizado del Ariane 4

### 🧨 El Error Técnico

El SRI intentó convertir un valor de velocidad horizontal (en coma flotante 64 bits) a un entero de 16 bits.

El resultado excedió el rango permitido → overflow → excepción → apagado.

**Peor aún:**
Los dos sistemas inerciales independientes hicieron la misma operación → los dos fallaron.

### 🖥️ Arquitectura Simplificada

```
┌────────────────────────┐
│  Sistema Inercial (SRI)│  ❌ Overflow al convertir datos
└─────────┬──────────────┘
          │ info inválida
          ▼
┌────────────────────────┐
│  Computador de Vuelo   │  ❌ interpreta datos basura
└─────────┬──────────────┘
          │ comandos incorrectos
          ▼
┌────────────────────────┐
│  Control de Motores    │  ❌ giros violentos
└─────────┬──────────────┘
          │
          ▼
💥 **Autodestrucción**
```

### ¿Qué causó el overflow?

- El valor de velocidad horizontal en Ariane 5 era mucho mayor que en Ariane 4.
- El software del Ariane 4 asumía que ese valor jamás excedería el rango de un entero de 16 bits.
- Nunca se probó el comportamiento para Ariane 5.

---

## 5. Análisis de Causa Raíz

### 🔹 Causas Inmediatas

#### 1. Conversión de datos incorrecta

```ada
Horizontal_Velocity : FLOAT64;
Velocity_Int16      : INTEGER16 := INTEGER(Horizontal_Velocity);
```

➡️ En Ariane 5, el valor era demasiado grande → overflow.

#### 2. Manejo de excepciones inexistente

El software estaba configurado para apagarse ante una excepción.
Esto era aceptable en Ariane 4, pero fatal en Ariane 5.

#### 3. Salida incorrecta después del fallo

El SRI emitió un "debug dump", que fue interpretado como datos válidos por el computador de vuelo.

---

### 🔹 Causas Subyacentes

1. **Reutilización de código sin validación**  
   Código del Ariane 4 → asumía límites que NO aplicaban en Ariane 5.

2. **Falta de pruebas de rango**  
   No se probó el valor máximo posible de velocidad horizontal en condiciones reales.

3. **Dependencia excesiva en un solo modo de operación**  
   El SRI seguía ejecutando código de inicialización innecesario después del lanzamiento, exponiéndolo a fallos.

4. **Modelos incompletos en simulación**  
   Las simulaciones no replicaron la trayectoria real del Ariane 5.

---

### 🔹 Causas Organizacionales

- Enfoque en "reutilización segura" sin pruebas adicionales
- Suposición de que el comportamiento del Ariane 4 era válido
- Cultura de testing insuficiente para sistemas críticos
- Falta de validación independiente por terceros

---

## 6. Impacto

### 💸 Impacto Económico

| Tipo | Monto |
|------|-------|
| Pérdida directa del cohete | US$120–140 millones |
| Pérdida de carga útil (4 satélites) | US$200+ millones |
| Costo total estimado | US$370–500 millones |

### 🚀 Impacto Operacional

- Retraso de un año en el programa Ariane 5
- Reestructuración completa del equipo de software
- Auditorías externas obligatorias para futuros proyectos

### 🌍 Impacto Reputacional

- Caso emblemático citado en universidades, NASA, MIT, ESA
- Base para nuevas leyes y estándares de validación crítica

---

## 7. Respuesta de la Agencia Espacial Europea

- Se realizó una investigación formal (Ariane 501 Inquiry Board)
- Se identificaron 7 fallos graves de ingeniería
- Se reescribió el software crítico
- Se modificaron las pruebas en simuladores
- Se actualizó el manejo de excepciones
- Se adoptó un nuevo protocolo de certificación

**La ESA reconoció que:**

> "El error habría sido detectable con una simple prueba de límite."

---

## 8. Pruebas que Pudieron Prevenir el Desastre

### 1. Pruebas de valores extremos (edge-case testing)

**Ejemplo:**

```ada
if Horizontal_Velocity > Max_Int16 then
   raise Overflow_Error;
end if;
```

### 2. Pruebas de simulación en tiempo real

Simulaciones completas con la trayectoria del Ariane 5.

### 3. Pruebas de integración

Evitar que datos basura del SRI llegaran al computador principal.

### 4. Pruebas de redundancia

Confirmar que dos módulos independientes no fallaran de la misma manera.

### 5. Pruebas de manejo de excepciones

El sistema no debió apagarse completamente.

---

## 9. Lecciones Aprendidas

### Para desarrolladores

- Nunca confiar en supuestos heredados de sistemas previos
- Validar rangos, límites y overflow SIEMPRE
- Escribir código defensivo en sistemas críticos

### Para testers

- Replicar condiciones reales (velocidad, aceleración, vibraciones)
- Incluir pruebas de estrés matemático
- Probar con valores fuera de rango, no solo nominales

### Para organizaciones

- Revisiones independientes obligatorias
- Simulaciones completas antes de cada lanzamiento
- Protocolos estrictos de certificación (DO-178C)

---

## 10. Casos Similares

| Caso | Descripción | Relación |
|------|-------------|----------|
| Mars Climate Orbiter (1999) | Error de unidades (imperial/metric) | Falta de validaciones numéricas |
| Therac-25 | Software sin manejo de excepciones → muertes | Errores silenciosos fatales |
| Boeing 737 MAX | Dependencia en un solo sensor | Redundancia insuficiente |

---

## 11. Referencias

Basado en tu documento:

- ESA Inquiry Board Report (1996)
- "Ariane 501 Failure Report"
- DO-178C Aerospace Standards
- Otros recursos en tu archivo Pruebas Equipo 4.docx
