# 🛰️ CASO 1 – Ariane 5 (1996)

**Tema:** Explosión del cohete por error de software  
**Industria:** Aeroespacial / Sistemas Críticos  
**Severidad:** 🔥 Catastrófica (pérdida total)  
**Costo estimado:** > US$370 millones  
**Impacto humano:** Sin víctimas humanas, pero fracaso total de la misión  

---

## Tabla de Contenidos
1. [Resumen Ejecutivo](#1-resumen-ejecutivo)  
2. [Datos Clave](#2-datos-clave)  
3. [Timeline del Incidente](#3-timeline-del-incidente)  
4. [Descripción Técnica](#4-descripcion-tecnica)  
5. [Análisis de Causa Raíz](#5-analisis-de-causa-raiz)  
6. [Impacto](#6-impacto)  
7. [Respuesta de la Agencia Espacial Europea](#7-respuesta-de-la-esa)  
8. [Pruebas que Pudieron Prevenir el Desastre](#8-pruebas-que-pudieron-prevenir-el-desastre)  
9. [Lecciones Aprendidas](#9-lecciones-aprendidas)  
10. [Casos Similares](#10-casos-similares)  
11. [Referencias](#11-referencias)

---

## 1. Resumen Ejecutivo
El **4 de junio de 1996**, el primer lanzamiento del cohete **Ariane 5** terminó en una explosión a los **37 segundos del despegue**.  
El vehículo espacial se autodestruyó después de que su **Sistema de Referencia Inercial (IRS/SRI)** fallara simultáneamente en sus dos computadoras.

El error no fue mecánico, sino **100% de software**:  
➡️ una conversión numérica incorrecta (**float 64 bits → entero 16 bits**) generó un **overflow**, lo cual desactivó el sistema de navegación, dejando sin datos al control de vuelo.

Como resultado, el cohete recibió comandos inválidos, giró de manera brusca, perdió estabilidad y activó el sistema de autodestrucción.

Este es uno de los casos más emblemáticos de la historia porque demuestra cómo **UNA sola línea de código no probada** puede destruir un proyecto de 10 años.

---

## 2. Datos Clave

| Atributo | Valor |
|---|---|
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
|---|---|
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
|---|---|
| 5–10 jun | Equipo de investigación activado |
| Julio 1996 | Informe oficial preliminar publicado |
| Octubre 1996 | Informe final del Ariane 501 Inquiry Board |

---

## 4. Descripción Técnica

### 🔧 Sistema Afectado
- **Componente:** Sistema de Referencia Inercial (SRI)  
- **Función:** Proveer velocidad, orientación y posición al ordenador de vuelo  
- **Tecnología:** Software en **ADA**, reutilizado del Ariane 4  

### 🧨 El Error Técnico
El SRI intentó convertir un valor de velocidad horizontal (**float 64 bits**) a un entero de **16 bits**.  
El resultado excedió el rango permitido → **overflow → excepción → apagado**.

Peor aún:
- Los dos sistemas inerciales independientes hicieron la misma operación.  
- Los dos fallaron al mismo tiempo.

### 🖥️ Arquitectura Simplificada

