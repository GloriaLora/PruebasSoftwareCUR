# Reflexión Equipo 4 - Sistemas Críticos de Transporte y Aeroespacial

## Análisis de Patrones Identificados

El Equipo 4 investigó tres casos devastadores donde el software crítico falló: Ariane 5 (1996), Boeing 737 MAX (2018-2019) y Metro de Shanghai (2011). Estos casos revelan un patrón alarmante: **la confianza ciega en código no validado mata**.

### Patrón Común: La Arrogancia de Asumir

Los tres casos comparten una falla fundamental: **asumir que algo funcionará sin probarlo exhaustivamente**. Ariane 5 reutilizó código sin validar límites operacionales nuevos. Boeing confió en un sensor único sin redundancia. Shanghai actualizó software en producción sin simulación completa. En todos los casos, se privilegió la velocidad o el ahorro económico sobre la seguridad.

### El Costo de la Negligencia

- **Ariane 5**: $370M perdidos en 37 segundos por un overflow no manejado
- **Boeing 737 MAX**: 346 vidas humanas por dependencia de un sensor defectuoso
- **Metro Shanghai**: 271 heridos por sincronización fallida en tiempo real

Estos números no son estadísticas abstractas. Son vidas, familias destruidas, carreras arruinadas.

## Impacto Personal del Equipo

### Sebastián Carvajal - Del Código al Impacto Real

**Antes:** Veía las fallas como problemas técnicos aislados del pasado.  
**Ahora:** Comprende que cada línea de código no probada es una amenaza potencial.  
**Sorpresa:** Un simple error de conversión numérica destruyó años de trabajo e inversión.  
**Lección clave:** La reutilización de código sin análisis de contexto es negligencia criminal.

### Yeison Roa - La Dimensión Ética

**Antes:** Las pruebas eran un trámite final de verificación.  
**Ahora:** Las pruebas son una responsabilidad ética hacia quienes dependen del sistema.  
**Sorpresa:** El Boeing 737 MAX falló no por complejidad, sino por decisiones conscientes de diseño deficiente.  
**Lección clave:** Un fallo técnico se convierte en fallo ético cuando compromete vidas.

### Juan Diego Paz - La Ilusión de Control

**Antes:** Los errores eran inevitables y se corregían después.  
**Ahora:** Los errores en sistemas críticos son prevenibles con procesos rigurosos.  
**Sorpresa:** Una actualización de software "rutinaria" causó un accidente masivo.  
**Lección clave:** Las actualizaciones en producción sin simulación son apuestas con vidas humanas.

## Conclusiones del Equipo

El Equipo 4 identifica tres pilares que sostienen el desarrollo seguro:

1. **Redundancia obsesiva**: Nunca confiar en un solo componente, sensor o validación
2. **Simulación realista**: Probar bajo condiciones extremas, no solo casos ideales
3. **Trazabilidad total**: Cada decisión debe estar documentada y justificada

Los estándares DO-178C e IEC 62290 no son burocracia molesta, son **lecciones escritas con sangre**. Cada requisito de certificación existe porque alguien murió cuando faltó.

La verdadera lección: **en software crítico, lo no probado no existe**. Si no pasó por verificación exhaustiva, es una bomba de tiempo esperando explotar.
