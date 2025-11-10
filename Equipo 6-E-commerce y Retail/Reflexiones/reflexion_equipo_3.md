# Reflexión Equipo 3 - Sistemas Críticos en Salud

## Qué pensábamos antes vs ahora

**Antes:** Creíamos que las pruebas de software eran principalmente para evitar bugs molestos o pérdida de datos. Pensábamos que los sistemas médicos tenían tantas capas de seguridad que los errores de software serían "atrapados" por protocolos físicos o supervisión humana.

**Ahora:** Comprendemos que la confianza excesiva en el software SIN redundancias físicas puede ser letal. El Therac-25 nos enseñó que eliminar controles de hardware "por eficiencia" es una decisión que puede costar vidas. Los tres casos revelan una verdad incómoda: nuestro código no solo procesa datos, puede matar personas.

## Lo que más nos sorprendió

**La cadena de fallas sistemáticas:** Ninguno de estos desastres fue causado por UN solo error. Therac-25 combinó error de concurrencia + eliminación de redundancias físicas + falta de testing riguroso. Zaragoza sumó protocolo ignorado + sistema de control defectuoso + ausencia de verificaciones automáticas. Abbott demostró que la ciberseguridad fue una "adición posterior" en lugar de diseño fundamental.

**El patrón devastador:** Todos confiaron ciegamente en que "el software funcionará". No hubo verificación independiente, no hubo auditorías externas hasta que fue demasiado tarde, no hubo cultura de reportar errores sin consecuencias punitivas.

**La velocidad mata:** El error del Therac-25 ocurría cuando los operadores ingresaban comandos "demasiado rápido". Algo tan mundano como la velocidad de tipeo se convirtió en sentencia de muerte porque nadie probó ese escenario de uso real.

## Patrones comunes identificados

### 1. Eliminación de redundancias "innecesarias"
Therac-25 quitó controles físicos. Zaragoza confió en un solo sistema de detección. Estos equipos "optimizaron" la seguridad hasta eliminarla.

### 2. Testing insuficiente en condiciones reales
Nadie probó qué pasaba si un operador escribía rápido. Nadie verificó la sustitución de fuentes radiactivas con el protocolo real del hospital. Nadie intentó hackear los marcapasos antes de implantarlos en 465,000 personas.

### 3. Falta de cultura de seguridad
Los errores se ocultaban (Therac-25 tardó años en reconocer el problema). Los protocolos se ignoraban por "experiencia" del personal (Zaragoza). La ciberseguridad se consideraba "no prioritaria" (Abbott).

### 4. Ausencia de monitoreo continuo
Los sistemas se desplegaban y se asumía que "seguirían funcionando bien". No había auditorías sorpresa, no había análisis de incidentes menores como señales de alarma.

## Conclusiones para nuestro desarrollo

**Como ingenieros de software, somos responsables de vidas.** No importa si desarrollamos apps móviles, sistemas embebidos o sitios web. En algún punto, nuestro código interactuará con sistemas críticos o tomará decisiones que afectan a personas reales.

**Las pruebas no son opcionales, son éticas.** Cada test que omitimos por "falta de tiempo" es una pequeña Therac-25 esperando a suceder. Debemos probar casos extremos, condiciones de carrera, entradas inesperadas, y escenarios de "qué pasaría si...".

**La seguridad es diseño, no parche.** Los marcapasos de Abbott nos enseñan que agregar cifrado después del deployment es como agregar cinturones de seguridad a un auto después del accidente. La seguridad debe estar en la arquitectura desde el día cero.

**La redundancia salva vidas.** Nunca, jamás, eliminar verificaciones "redundantes" porque "el software es confiable ahora". El software siempre tendrá bugs que no anticipamos.

**La cultura de reportar errores es crucial.** Si los operadores de Therac-25 hubieran podido reportar "comportamientos extraños" sin miedo, quizás se hubieran salvado vidas. Nuestros sistemas deben tener logging exhaustivo y canales seguros para reportar anomalías.

## Aplicación personal

En nuestros proyectos futuros (incluyendo Hachiko y DriveGuard), implementaremos:
- **Testing exhaustivo** incluyendo fuzzing, edge cases y condiciones de carrera
- **Redundancias de seguridad** tanto en software como hardware (watchdogs, failsafes físicos)
- **Logging detallado** de todas las operaciones críticas
- **Code reviews obligatorios** para cualquier código que interactúe con hardware o tome decisiones autónomas
- **Análisis de threat modeling** antes de implementar cualquier característica de conectividad
- **Documentación de fallos** como aprendizaje, no como vergüenza

Desarrollar software no es solo hacer que funcione. Es hacer que funcione de forma segura, predecible y verificable, incluso cuando falla.
