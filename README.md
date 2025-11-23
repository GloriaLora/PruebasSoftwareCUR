🎯 Objetivo General

Analizar brechas de seguridad reales causadas por validación deficiente y falta de pruebas, identificando cómo pudieron prevenirse mediante prácticas adecuadas de seguridad informática.

🎯 Objetivos Específicos

Identificar casos reales donde fallas de autenticación generaron brechas masivas.

Investigar cómo la falta de pruebas contribuyó al ataque de Equifax en 2017.

Explicar la relevancia del OWASP Top 10 como guía de seguridad.

Presentar ejemplos de ataques por inyección SQL que pudieron prevenirse.

📁 Estructura del Repositorio
/
├── README.md
└── web/
    ├── index.html
    ├── caso1.html
    ├── caso2.html
    ├── caso3.html
    ├── caso4.html
    └── styles.css

📚 Contenido del Proyecto
1. Brechas masivas causadas por validación deficiente
🔹 Facebook (2018)

Una falla en la función “Ver como” generó tokens de acceso incorrectos.
Esta funcionalidad no fue probada adecuadamente, permitiendo a atacantes robar credenciales de más de 50 millones de cuentas.

🔹 LinkedIn (2012)

La plataforma guardaba contraseñas con un hash insuficientemente seguro.
Además, no se realizaron pruebas de penetración, permitiendo ataques de fuerza bruta y el robo de 117 millones de contraseñas.

🔹 Yahoo (2013–2014)

Ataque que comprometió 3.000 millones de cuentas.
El sistema no validaba correctamente los tokens, aceptando tokens falsificados sin verificaciones criptográficas.

📄 Página asociada: web/caso1.html

2. Caso Equifax 2017

Equifax sufrió una de las mayores brechas de datos de la historia al no aplicar un parche crítico de Apache Struts (CVE-2017-5638).
No se realizaron:

Escaneos de vulnerabilidades

Pruebas de penetración

Auditorías de código

Monitoreo de actividad anómala

Resultado:

147 millones de usuarios afectados

Multa de 700 millones de dólares

Acceso persistente durante meses sin ser detectado

📄 Página asociada: web/caso2.html

3. OWASP Top 10

El OWASP Top 10 es la lista de vulnerabilidades web más críticas.
Incluye riesgos como:

Inyección

Fallas de autenticación

Exposición de datos sensibles

Configuraciones inseguras

Relación con pruebas de seguridad:

Sirve como guía esencial para pruebas de penetración.

Permite diseñar validaciones de entrada correctas.

Ayuda a detectar fallas antes de que atacantes las exploten.

📄 Página asociada: web/caso3.html

4. Casos de Inyección SQL
🔹 Sony Pictures (2011)

Una inyección SQL permitió el robo de más de un millón de contraseñas.
No había validación de entrada ni pruebas de seguridad en bases de datos.

🔹 TalkTalk (2015)

Un ataque simple de SQL injection comprometió datos de 150,000 clientes.
Costo para la empresa: 60 millones de dólares.

🔹 Heartland Payment Systems (2008)

Inyección SQL permitió instalar malware que robó datos de 130 millones de tarjetas.
No existían pruebas automatizadas ni revisiones de código seguro.

📄 Página asociada: web/caso4.html

🧠 Lecciones Aprendidas

Las vulnerabilidades críticas casi siempre se originan por falta de pruebas.

Las funciones nuevas deben someterse a pruebas de sesión, autenticación y tokens.

Una contraseña mal encriptada equivale a una puerta sin llave.

Las empresas deben mantener actualización continua de software.

Los ataques SQL siguen activos porque muchos sistemas no filtran entradas.

🧾 Conclusiones

La mayoría de brechas masivas fueron evitables con pruebas mínimas.

OWASP Top 10 sigue siendo el estándar fundamental para pruebas de seguridad.

La validación deficiente en autenticación continúa siendo uno de los puntos más vulnerables.

Las empresas deben implementar políticas de pruebas continuas y monitoreo activo.

🛠️ Recomendaciones

Implementar pruebas automatizadas de seguridad en cada despliegue.

Realizar auditorías periódicas de tokens, sesiones y contraseñas.

Aplicar validación estricta de entrada para prevenir inyección SQL.

Adoptar metodologías como DevSecOps.

Actualizar frameworks y librerías de forma inmediata.

🧭 Cómo Navegar el Proyecto

Sitio web principal:
web/index.html

Secciones internas:

Casos de autenticación → web/caso1.html

Caso Equifax → web/caso2.html

OWASP Top 10 → web/caso3.html

Casos SQL → web/caso4.html

📚 Referencias

OWASP Foundation. (2021). OWASP Top 10 – The Ten Most Critical Web Application Security Risks.

U.S. Federal Trade Commission. (2019). Equifax Data Breach Settlement.

Wired, The Verge, TechCrunch — artículos sobre brechas de Facebook, Yahoo y LinkedIn.

NIST National Vulnerability Database — CVE-2017-5638.
