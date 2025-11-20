# PruebasSoftwareCUR
🛰️ Testing Disasters Research – Sistemas Críticos (Transporte & Aeroespacial)
📋 Tabla de Contenidos

Descripción del Proyecto

Equipos de Investigación

Objetivo

Estructura del Repositorio

Casos Documentados

Metodología

Recursos Adicionales

Referencias

🎯 Descripción del Proyecto

Este repositorio recopila y analiza fallos reales de software en sistemas críticos de transporte, aviación y exploración espacial, donde un error puede causar pérdidas millonarias, heridos o incluso muertes.

El proyecto se enfoca en comprender cómo errores aparentemente menores (overflow, fallos de sensor, actualizaciones defectuosas) pueden desencadenar desastres de alto impacto debido a falta de pruebas adecuadas.

Contexto Académico

Proyecto PICUR — Investigación colaborativa en:

Software crítico en aviación, transporte y aeroespacial

Análisis de fallas por ausencia de pruebas

Estándares estrictos como DO-178C & IEC 62290

Diseño de mejores prácticas para sistemas donde fallar no es una opción

👥 Equipos de Investigación
Equipo 4: Sistemas Críticos – Transporte y Aeroespacial

Tema: Fallos en software de cohetes, aviones y sistemas ferroviarios

Áreas de Enfoque:

Fallas de navegación en cohetes (Ariane 5)

Errores en automatización de aeronaves (Boeing 737 MAX)

Colisiones ferroviarias por fallos CBTC (Metro Shanghái)

Testing en tiempo real (real-time testing)

Certificación y seguridad (DO-178C / IEC 62290)

Integrantes:

Yeison Roa A – Líder técnico

Sebastián Carvajal Ospina – Análisis de casos y documentación

Juan Diego Paz – Análisis de causa raíz y pruebas necesarias

🎯 Objetivo

Investigar y documentar casos reales donde fallos de software en sistemas críticos provocaron:

Pérdidas económicas (cohetes destruidos, aviones en tierra)

Accidentes con muertos o heridos

Suspensión de sistemas de transporte completos

Crisis reputacionales a nivel global

Y además identificar:

Causas raíz

Pruebas que faltaron

Impacto humano y financiero

Cómo estos fallos pudieron evitarse

Lecciones aplicables a futuros sistemas críticos

📁 Estructura del Repositorio
testing-disasters-critical-systems/
├── README.md                       # Este archivo
├── LICENSE                         # Licencia (opcional)
├── equipo-4-criticos/
│   ├── investigacion.md            # Resumen ejecutivo del equipo
│   ├── recursos.md                 # Recursos y referencias del equipo 4
│   ├── casos/
│   │   ├── caso-1-ariane5.md       # Caso Ariane 5 (1996)
│   │   ├── caso-2-boeing737max.md  # Caso Boeing 737 MAX (2018–2019)
│   │   └── caso-3-shanghai10.md    # Caso Metro Shanghái Línea 10 (2011)
│   └── imagenes/
│       ├── diagrams/               # Diagramas técnicos
│       └── screenshots/            # Imágenes usadas

📊 Casos Documentados
Resumen de Casos
Caso	Sistema	Año	Tipo de Fallo	Costo Estimado	Estado
1	Ariane 5	1996	Overflow / error de conversión	US$ 370M+	✅ Completo
2	Boeing 737 MAX	2018–2019	Fallo de sensor AoA / MCAS	US$ 20B+	✅ Completo
3	Metro de Shanghái	2011	Falla CBTC / actualización	Millones	✅ Completo
Estadísticas Clave

El Ariane 5 se perdió a los 37 segundos del despegue

Boeing 737 MAX provocó 346 muertes

El metro de Shanghái dejó 271 heridos

Fallos comunes:

Reutilización de código sin validar 🧨

Fallos de sincronización en tiempo real ⏱️

Dependencia de un solo sensor ❌

Actualizaciones sin simulación 💥

🔬 Metodología
1. Identificación de Casos

Revisión de reportes oficiales (ESA, FAA, CAAI, China State Council)

Noticias verificadas (Reuters, Guardian, BBC)

Análisis técnico de fallos reales

2. Documentación de Cada Caso

Cada caso incluye:

Resumen ejecutivo

Timeline del incidente

Arquitectura del sistema

Análisis técnico

Causa raíz

Impacto económico y humano

Pruebas que faltaron

Lecciones aprendidas

3. Análisis Técnico

Evaluación de redundancia y determinismo

Diseño de sistemas críticos

Pruebas de integración y real-time testing

Identificación de fallos de comunicación y sensores

4. Síntesis de Lecciones

Mejores prácticas

Checklists

Prevención de errores

Aplicación en proyectos actuales

📚 Recursos Adicionales
Herramientas de Testing Crítico

MATLAB Simulink – Modelado de sistemas

ANSYS SCADE – Certificación DO-178C

VectorCAST – Testing embebido

Hardware-in-the-Loop (HIL) – Simulación realista

Grafana + Prometheus – Telemetría en tiempo real

Lecturas Recomendadas

Engineering a Safer World – Nancy Leveson

Real-Time Systems – Hermann Kopetz

Safety-Critical Systems Handbook – David J. Smith

DO-178C Compliance Guide

Sitios Técnicos

NASA Software Engineering Handbook

FAA Safety Briefings

MIT System Safety Blog

ESA Technical Library

📖 Referencias
Fuentes Principales

ESA. Ariane 501 Failure Report (1996)

FAA. Return to Service Report – Boeing 737 MAX (2020)

Ethiopian Accident Report (2020)

China State Council. Shanghai Metro Accident Report (2012)

Reuters. Shanghai Metro Crash (2011)

Boeing MCAS Technical Summary (2020)

Bases de Datos Consultadas

IEEE Xplore

ACM Digital Library

NASA Technical Reports

Google Scholar
