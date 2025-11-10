# Tabla: Tipos de Pruebas Faltantes en Desastres de Software

| Tipo de Prueba | Casos donde faltó esta prueba |
|----------------|-------------------------------|
| **Pruebas de carga** | • **Amazon Prime Day** (2018-2020): Sitio colapsó bajo tráfico masivo<br>• **SimCity 2013**: Servidores DRM always-online no soportaron lanzamiento, juego injugable por días<br>• **Iowa Caucus App** (2020): App colapsó con pocos cientos de usuarios simultáneos cuando se esperaban miles<br>• **HealthCare.gov** (2013): Diseñado para 50-60K usuarios concurrentes, recibió 250K, colapsó en 2 horas<br>• **Target Canada** (2013-2015): Sistema POS no soportó volumen de transacciones reales<br>• **British Airways** (2017): Infraestructura sin capacidad para failover bajo demanda normal |
| **Pruebas de integración** | • **WannaCry** (2017): Windows no integró parches de seguridad críticos en sistemas legacy<br>• **Twitter Hack** (2020): Admin tools sin integración adecuada con autenticación multi-factor<br>• **Cambridge Analytica** (2018): Facebook API sin integración de controles de acceso granulares<br>• **HealthCare.gov** (2013): 55+ sistemas de gobierno sin pruebas de integración end-to-end hasta semana antes de lanzamiento<br>• **Target Canada**: Integración entre sistemas POS, inventario y pricing con 70% de datos erróneos<br>• **Knight Capital** (2012): Deployment parcial reactivó código legacy sin integración validada<br>• **Iowa Caucus App**: Integración entre app, servidores backend y sistema de reporting sin probar completamente |
| **Pruebas de seguridad** | • **WannaCry** (2017): Explotó vulnerabilidad SMBv1 sin parchear en 200K+ sistemas<br>• **Twitter Hack** (2020): Ingeniería social + admin tools vulnerables comprometieron 130 cuentas verificadas<br>• **Cambridge Analytica** (2018): API de Facebook permitió extracción masiva de datos de 87M usuarios<br>• **Ariane 5** (1996): Código reutilizado sin análisis de seguridad de límites numéricos<br>• **Therac-25** (1985-1987): Software sin validación de límites de dosis radiación, 6 muertes<br>• **Mars Climate Orbiter** (1999): Sin validación de unidades de medida (Newtons vs libras-fuerza)<br>• **Abbott Marcapasos** (2017): 465K dispositivos sin cifrado ni autenticación, vulnerables a hacking<br>• **Iowa Caucus App**: DHS confirmó que app no fue vetada para ciberseguridad antes de uso |
| **Pruebas de edge cases** | • **Knight Capital** (2012): No probaron reactivación de flags obsoletos, perdieron $440M en 45 min<br>• **Boeing 737 MAX** (2018-2019): No probaron fallo de sensor único AOA, 346 muertes<br>• **Therac-25 (mensajes de error)** (1985-1987): Operador rápido activaba race condition letal, mensajes crípticos<br>• **UK Post Office Horizon** (1999-2015): Sistema contable con bugs en casos edge, 700+ personas acusadas falsamente<br>• **Ariane 5**: Overflow de 64-bit a 16-bit no probado con trayectoria nueva<br>• **Mars Climate Orbiter**: Conversión de unidades no validada en casos extremos<br>• **Citibank** (2020): UI permitió transferencia de $900M sin validación de monto extremo<br>• **SimCity 2013**: No probaron desconexiones/reconexiones rápidas de servidores DRM<br>• **HealthCare.gov**: No probaron flujo completo de registro bajo carga real hasta 1 día antes |
| **Pruebas de regresión** | • **Toyota** (2009-2010): Actualización de software causó aceleración involuntaria, 89 muertes<br>• **Volkswagen** (2015): Software de "defeat device" no detectado en actualizaciones, escándalo dieselgate<br>• **Metro Shanghai** (2011): Actualización causó fallo de sincronización, 271 heridos<br>• **Knight Capital**: Deploy de código nuevo reactivó comportamiento obsoleto sin detectarlo<br>• **British Airways** (2017): Cambio en datacenter sin validar que backups seguían funcionando<br>• **HealthCare.gov**: Cambios de último minuto (registro obligatorio antes de browsing) sin regresión<br>• **Target Canada**: Actualizaciones continuas de pricing sin validar impacto en sistema completo |
| **Pruebas de usabilidad** | • **Cyberpunk 2077** (2020): Lanzamiento en consolas con performance inaceptable, UI rota en many scenarios<br>• **Therac-25 (mensajes de error)**: Mensajes crípticos como "MALFUNCTION 54" sin explicación útil<br>• **UK Post Office Horizon**: UI confusa permitía errores de contabilidad, operadores culpados<br>• **Citibank** (2020): UI de pagos sin confirmación clara de montos, "fat finger" error de $900M<br>• **Iowa Caucus App**: UI compleja con 2FA + PIN + Google Authenticator, capacitación 1 día antes<br>• **HealthCare.gov**: Flujo de registro convoluto, usuarios perdidos en múltiples pasos<br>• **SimCity 2013**: Proceso de descarga via TestFairy (ambiente de pruebas) confuso para usuarios finales |
| **Code review** | • **Ariane 5** (1996): Código reutilizado sin revisar asunciones de rangos numéricos, $370M perdidos<br>• **Therac-25** (1985-1987): Race condition en código de control de radiación nunca revisada<br>• **Knight Capital** (2012): Código con flags obsoletos "Power Peg" no identificado en review<br>• **Boeing 737 MAX** (2018-2019): Lógica MCAS dependiente de sensor único sin cuestionamiento<br>• **Mars Climate Orbiter** (1999): Conversión de unidades inconsistente entre equipos no detectada<br>• **UK Post Office Horizon**: Bugs de contabilidad en código por años sin identificar<br>• **Volkswagen**: "Defeat device" code deliberadamente ofuscado pasó sin detección<br>• **HealthCare.gov**: Código con texto "lorem ipsum" de placeholder llegó a producción |
| **Pruebas multiplataforma** | • **Cyberpunk 2077** (2020): Solo optimizado para PC high-end, catastrófico en PS4/Xbox One<br>• **SimCity 2013**: App distribuida via TestFairy, problemas de compatibilidad en diversos Android<br>• **Iowa Caucus App**: Fallos en diferentes versiones de Android, proceso de instalación diferente por dispositivo<br>• **HealthCare.gov**: Inconsistencias entre browsers, algunos forms no funcionaban en IE<br>• **Twitter Hack** (2020): Admin panel con vulnerabilidades específicas de versión de navegador<br>• **Target Canada**: Sistema POS falló en diferentes configuraciones de hardware de tiendas |

## Análisis de Patrones por Tipo de Prueba

### Pruebas de Carga - El Patrón Más Común
**Frecuencia:** 7 casos identificados  
**Impacto típico:** Catastrófico en primeras horas/días de lanzamiento  
**Lección clave:** La capacidad debe probarse con 3-5x la carga esperada, no solo con volumen "promedio"

**Por qué falla:**
- Subestimación de popularidad (SimCity, HealthCare.gov, Iowa App)
- Infraestructura legacy no modernizada (British Airways, Target Canada)
- Pruebas con load sintético, no comportamiento real de usuarios

### Pruebas de Integración - La Causa Oculta
**Frecuencia:** 7 casos identificados  
**Impacto típico:** Fallas en cadena, difíciles de diagnosticar  
**Lección clave:** End-to-end testing debe incluir TODOS los sistemas, no solo los nuevos

**Por qué falla:**
- Demasiados sistemas (HealthCare.gov: 55+ sistemas)
- Asunciones sobre APIs externas (Cambridge Analytica, Twitter)
- Testing de componentes aislados sin integración real

### Pruebas de Seguridad - El Costo de la Negligencia
**Frecuencia:** 8 casos identificados  
**Impacto típico:** Datos comprometidos, vidas en riesgo, demandas  
**Lección clave:** Seguridad debe ser diseño, no auditoría post-facto

**Por qué falla:**
- "Lo agregaremos después" (Abbott marcapasos, Twitter admin tools)
- Parches no aplicados (WannaCry)
- Validación de entrada inexistente (Therac-25, Ariane 5, Mars Orbiter)

### Pruebas de Edge Cases - La Arrogancia del Happy Path
**Frecuencia:** 9 casos identificados  
**Impacto típico:** Desastres durante operación "anormal"  
**Lección clave:** Usuarios harán cosas inesperadas, sistemas fallarán de formas imprevistas

**Por qué falla:**
- Solo prueban casos ideales (Therac-25: operador lento)
- Asumen comportamiento "normal" (Boeing: sensores siempre funcionan)
- No validan límites (Knight Capital, Citibank, Ariane 5)

### Pruebas de Regresión - El Código Zombie Ataca
**Frecuencia:** 7 casos identificados  
**Impacto típico:** Nuevas features rompen funcionalidad anterior  
**Lección clave:** Cada cambio debe validar que no rompe nada existente

**Por qué falla:**
- Presión de tiempo (Knight Capital, British Airways)
- Código legacy sin tests (Toyota, Metro Shanghai)
- Cambios "pequeños" sin validación (HealthCare.gov, Target Canada)

### Pruebas de Usabilidad - El Usuario Olvidado
**Frecuencia:** 7 casos identificados  
**Impacto típico:** Frustración, errores humanos, abandono  
**Lección clave:** Interfaces confusas causan errores operacionales críticos

**Por qué falla:**
- Diseñados por ingenieros, no probados con usuarios reales
- Mensajes de error técnicos sin contexto (Therac-25)
- Flujos complejos sin capacitación (Iowa App)

### Code Review - La Primera Línea de Defensa Ignorada
**Frecuencia:** 8 casos identificados  
**Impacto típico:** Bugs obvios llegan a producción  
**Lección clave:** Cuatro ojos ven más que dos, especialmente en código crítico

**Por qué falla:**
- Reviews superficiales "rubber stamp" (UK Post Office)
- Código ofuscado deliberadamente (Volkswagen)
- Presión de tiempo elimina reviews (HealthCare.gov)

### Pruebas Multiplataforma - La Ilusión de "Funciona en Mi Máquina"
**Frecuencia:** 6 casos identificados  
**Impacto típico:** Fallo en plataformas específicas, fragmentación de UX  
**Lección clave:** Si soportas N plataformas, debes probar en N plataformas

**Por qué falla:**
- Optimización solo para plataforma preferida (Cyberpunk: PC high-end)
- Asunciones de ambiente controlado (Iowa App: diferentes Androids)
- Testing solo en navegador/dispositivo del desarrollador

## Meta-Lección: El Triángulo de Hierro Roto

Todos estos casos comparten un patrón organizacional:

```
      VELOCIDAD
         /\
        /  \
       /    \
      /      \
     /________\
CALIDAD    TESTING
```

**La falacia:** "Podemos ir rápido eliminando testing"  
**La realidad:** Testing eliminado = deuda técnica explosiva que detiene todo

**Ejemplos extremos:**
- **HealthCare.gov**: Fecha legal fija eliminó todo el tiempo de testing
- **Boeing 737 MAX**: Presión competitiva con Airbus aceleró certificación
- **Knight Capital**: Deployment apresurado sin validación completa
- **Iowa App**: 2 meses de desarrollo para sistema crítico de elecciones

## Aplicación a Hachiko

Para nuestro sistema de monitoreo emocional canino, debemos priorizar:

| Tipo de Prueba | Aplicación a Hachiko | Riesgo si omitimos |
|----------------|----------------------|-------------------|
| **Carga** | Probar con múltiples sensores enviando datos simultáneamente | Sistema colapsa con múltiples perros |
| **Integración** | ESP32-CAM + MPU-6050 + Backend + App móvil funcionando juntos | Fallos en cadena no diagnosticables |
| **Seguridad** | Datos biométricos del perro/dueño deben estar cifrados | Privacidad comprometida |
| **Edge Cases** | Validar frecuencia cardíaca 0 BPM, 500 BPM, sensor desconectado, etc. | Lecturas erróneas → diagnósticos falsos |
| **Regresión** | Nueva feature de detección de estrés no rompe lectura de temperatura | Features viejas dejan de funcionar |
| **Usabilidad** | Dueño debe entender alertas sin ser experto | Ignoran alertas críticas |
| **Code Review** | Todo código de procesamiento de sensores debe ser revisado | Bugs en lógica crítica |
| **Multiplataforma** | Probar en Android + iOS, diferentes modelos de ESP32 | Falla en dispositivos específicos |

**Conclusión para Hachiko:**  
No podemos omitir ningún tipo de prueba. Cada caso analizado muestra que "ahorrar" en testing es la decisión más cara que se puede tomar.
