
---

### ❌ Qué salió mal

- Tras la actualización, el CBTC dejó de recibir **datos coherentes**.  
- El sistema entró en **modo manual**, pero **los operadores no tenían datos reales**.  
- El tren recibió una señal indicando **“vía libre”** cuando no lo estaba.  
- El tren avanzó e **impactó al que tenía adelante**.

---

## 5. Análisis de Causa Raíz

### 🔹 Causas Inmediatas

- Pérdida de sincronización entre trenes y control.  
- Modo manual sin datos confiables.  
- Señales incorrectas enviadas al tren.  

---

### 🔹 Causas Subyacentes

#### **Actualización en operación activa**
Se aplicó un update en plena hora pico → práctica extremadamente riesgosa.

#### **Pruebas insuficientes**
No se probó:

- modo degradado  
- sincronización multi-tren  
- rollback  
- switchover seguro  

#### **Falta de redundancias cruzadas**
Los trenes no comparaban datos entre sí → sin bloqueo automático.

#### **Fallo en comunicación en tiempo real**
Se enviaron **datos antiguos/corruptos** sin validación.

---

### 🔹 Causas Organizacionales

- Presión por mantener la operación sin detener trenes  
- Falta de auditorías externas  
- No se usaron estándares como **IEC 62290**  
- Mala coordinación entre software y operación  

---

## 6. Impacto

### 🧍 Humano
- **271 heridos**  
- Decenas de hospitalizados  
- Trauma psicológico masivo  

---

### 💸 Económico

| Impacto | Valor |
|---------|--------|
| Daños a trenes | US$ 1–2 millones |
| Reparaciones en línea | US$ 2+ millones |
| Pérdidas operativas | Altas (días suspendidos) |
| Multas / compensaciones | No revelado |

---

### 🌐 Reputacional

- Críticas globales al sistema ferroviario chino  
- Pérdida de confianza en automatización  
- Debate internacional sobre actualizaciones en operación  

---

## 7. Respuesta Oficial

### Acciones tomadas

- Suspensión inmediata de la Línea 10  
- Auditoría completa del CBTC  
- Prohibición de actualizaciones en operación  
- Reentrenamiento del personal  
- Nuevas normas para cambios críticos  

### Declaraciones oficiales

> “La causa principal fue una actualización aplicada sin validación robusta y sin entornos simulados adecuados.”

---

## 8. Pruebas que Pudieron Prevenir el Desastre

### 1. ✔ Pruebas de Integración en Tiempo Real  
Validar sincronización completa:

- Tren ↔ Wayside ↔ Control  
- Telemetría correcta  
- Paquetes sin valores inválidos  

---

### 2. ✔ Pruebas de Modo Degradado  
Simular fallo de:

- comunicaciones  
- sincronización  
- sensores  

El modo manual debía:

- limitar velocidad  
- **bloquear avance si los datos eran inciertos**  

---

### 3. ✔ Pruebas de Rollback Automático  
Si el update falla → revertir inmediatamente.

---

### 4. ✔ Pruebas de Conmutación de Modos  
Validar:

- Automático → Manual → Automático  
- datos coherentes en cada transición  

---

### 5. ✔ Simulaciones Multi-Tren  
Probar 20–40 trenes simultáneos con:

- pérdida de paquetes  
- latencia  
- datos corruptos  

---

## 9. Lecciones Aprendidas

### Para desarrolladores
- Nunca desplegar software crítico en operación activa  
- Los sistemas deben fallar **de forma segura** (fail-safe)  
- La simulación debe replicar el entorno real  

### Para testers
- Probar **modos degradados SIEMPRE**  
- Testing en tiempo real con latencia y pérdida de paquetes  
- Validar consistencia de telemetría  

### Para organizaciones
- Adoptar **IEC 62290**  
- Tener staging realista  
- Políticas estrictas de:  
  - control de cambios  
  - rollback  
  - auditorías externas  

---

## 10. Casos Similares

| Caso | Relación |
|-------|-----------|
| Washington Metro (2009) | Error en sistema de detección → 9 muertos |
| Londres Jubilee Line (2010) | Falla CBTC durante actualización |
| Metro de Hong Kong (2019) | Error en señalización → descarrilamiento |

---

## 11. Referencias

- Reuters (2011). *Shanghai Metro crash injures 271 people after signal failure.*  
- The Guardian (2011). *Shanghai subway crash.*  
- China State Council (2012). *Official Report.*  
- IEC 62290 – Railway Control Systems.  
- Documento **Pruebas Equipo 4.docx**  

