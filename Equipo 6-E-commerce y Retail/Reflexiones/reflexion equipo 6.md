# Reflexión del Equipo 6: E-commerce y Retail

## Lo que pensábamos antes vs. Ahora

**Antes:** Creíamos que los fallos en e-commerce eran principalmente por errores de programación complejos o ataques maliciosos sofisticados. Pensábamos que empresas gigantes como British Airways o United Airlines tenían sistemas tan robustos que los errores críticos eran prácticamente imposibles.

**Ahora:** Descubrimos que la mayoría de desastres millonarios no se deben a código complejo fallando, sino a la ausencia de pruebas básicas que cualquier estudiante de ingeniería conoce. El 70% de los fallos analizados ocurrieron por no realizar load testing antes de eventos predecibles como Black Friday. Lo más impactante es que no son fallas de conocimiento técnico, sino decisiones gerenciales de no invertir en testing o infraestructura.

La realidad golpea duro: un sistema sin pruebas de carga es como un puente sin cálculos estructurales. No es cuestión de si fallará, sino de cuándo. Y cuando falla durante Black Friday, los $8.64 millones por minuto perdidos demuestran que "ahorrar" en testing es la decisión más cara que una empresa puede tomar.

## Lo que más nos sorprendió

**El costo del tiempo:** Nunca dimensionamos que cada minuto de caída puede costar hasta $83,000 en empresas grandes. Cinco horas de downtime de J.Crew significaron $775,000 perdidos. British Airways perdió $100-190 millones en tres días. Estos números transforman completamente nuestra percepción del valor del testing.

**La predictibilidad:** Black Friday no es un evento sorpresa. Ocurre el mismo día cada año. El tráfico aumenta consistentemente 24.1% sobre semanas normales. Sin embargo, año tras año, vemos los mismos fallos: Costco 2024, Nike 2022, Harvey Norman 2023. Es inexcusable que empresas multimillonarias fallen en eventos que pueden prepararse con 8 semanas de anticipación.

**Los cobros duplicados:** Descubrir que entre 0.8-2% del volumen de transacciones puede resultar en cobros duplicados por falta de idempotencia nos hizo replantear cómo vemos los sistemas de pago. No es un problema menor: para una empresa procesando $100 millones anuales, son $800K-2M en problemas evitables con pruebas de integración adecuadas.

**El factor humano:** El caso British Airways nos abrió los ojos: un contratista desconectó accidentalmente el poder del datacenter. Pero el verdadero fallo no fue humano, fue sistémico. No tener redundancia geográfica, no probar los sistemas de backup regularmente, no tener failover automático. Culpar al "error humano" es ignorar que los sistemas bien diseñados y probados deben ser resilientes a errores humanos.

## Conexión con otros equipos

Viendo el trabajo de otros equipos, identificamos patrones universales:
- **Aviación y healthcare** comparten con nosotros el problema de sistemas legacy sin modernización
- **Fintech y banking** enfrentan los mismos desafíos de payment processing que documentamos
- **Gaming y streaming** sufren los mismos colapsos por tráfico no previsto en lanzamientos

El patrón común: **nadie hace testing porque "nunca ha pasado nada malo... hasta que pasa."** Todos los sectores muestran que las pruebas no se perciben como inversión sino como gasto, hasta que un desastre transforma la perspectiva, tarde y caro.

## Conclusiones aplicables a nuestro trabajo

**1. Testing no es opcional, es seguro de vida digital**
Ahora entendemos que escribir pruebas no es "trabajo extra" que ralentiza el desarrollo. Es la diferencia entre un sistema profesional y una bomba de tiempo. Cada función sin unit test, cada integración sin validación, cada deployment sin load testing es una deuda técnica que se cobrará con intereses millonarios.

**2. La preparación vence a la reactividad**
El checklist de 8 semanas para Black Friday nos enseñó que la ingeniería de confiabilidad requiere planificación. Como futuros desarrolladores, debemos incorporar testing desde el diseño, no como parche post-desarrollo. Capacity planning, stress testing, disaster recovery drills deben ser parte del proceso, no afterthoughts.

**3. Los números justifican todo**
Cuando un minuto de downtime cuesta $83,000 pero un ingeniero de QA dedicado cuesta $100K/año, la matemática es simple: una hora de caída pagó el salario anual de ese ingeniero que "no podíamos contratar". Ahora entendemos por qué las empresas que invierten en testing superan a las que no.

**4. La responsabilidad es nuestra**
Como desarrolladores, no podemos escudarnos en "el negocio no quiere invertir en testing". Es nuestra responsabilidad profesional comunicar los riesgos, mostrar los costos potenciales con datos reales como los que investigamos, y defender las prácticas correctas. Un ingeniero que deploya sin pruebas adecuadas no es un "desarrollador rápido", es un riesgo para el negocio.

Esta investigación transformó nuestra visión: el testing pasó de ser "algo que deberíamos hacer" a "lo primero que debemos hacer". Cada caso analizado es una lección de qué no hacer, pero más importante, es evidencia de que el software de calidad no es accidental, es intencional y probado.
