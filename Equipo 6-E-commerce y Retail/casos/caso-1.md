# Caso 1: United Airlines - Error de Precio ($0 Tickets)

**Empresa:** United Airlines  
**Fecha:** 12 de Septiembre, 2013  
**Tipo de Fallo:** Pricing Error / System Glitch  
**Industria:** Aerolineas / E-commerce  
**Severidad:** ⚠️ Alta

---

## Tabla de Contenidos

- [Resumen Ejecutivo](#resumen-ejecutivo)
- [Timeline del Incidente](#timeline-del-incidente)
- [Descripción Técnica](#descripción-técnica)
- [Análisis de Causa Raíz](#análisis-de-causa-raíz)
- [Impacto](#impacto)
- [Respuesta de la Empresa](#respuesta-de-la-empresa)
- [Pruebas que Pudieron Prevenir](#pruebas-que-pudieron-prevenir)
- [Lecciones Aprendidas](#lecciones-aprendidas)
- [Casos Similares](#casos-similares)
- [Referencias](#referencias)

---

## Resumen Ejecutivo

El 12 de septiembre de 2013, United Airlines experimentó un error crítico en su sistema de pricing que resultó en la venta de boletos de avión con precios entre **$0 y $10 dólares** durante aproximadamente 2 horas. El error afectó a vuelos en múltiples rutas, incluyendo destinos internacionales que normalmente cuestan miles de dólares.

### Datos Clave

| Atributo | Valor |
|----------|-------|
| **Duración del Error** | ~2 horas |
| **Precio Normal** | $500 - $5,000+ |
| **Precio Erróneo** | $0 - $10 |
| **Tickets Vendidos** | Miles (número exacto no divulgado) |
| **Decisión Final** | United honró la mayoría de los tickets |
| **Costo Estimado** | No divulgado públicamente |

### Impacto

- ✅ **Positivo:** United Airlines ganó reconocimiento por honrar los tickets
- ❌ **Negativo:** Pérdidas financieras directas significativas
- 🔄 **Neutral:** Gran cobertura mediática (viral en redes sociales)

---

## Timeline del Incidente

### Jueves, 12 de Septiembre 2013

| Hora (EST) | Evento |
|------------|--------|
| ~10:00 AM | Sistema de pricing comienza a mostrar tarifas erróneas ($0-$10) |
| 10:15 AM | Primeros usuarios detectan el error y lo comparten en redes sociales |
| 10:30 AM | El error se vuelve viral en Twitter y foros de viajes |
| 11:00 AM | Miles de usuarios intentan comprar tickets |
| 12:00 PM | United Airlines detecta el error y corrige el sistema |
| 12:15 PM | El sistema vuelve a mostrar precios normales |
| 3:00 PM | United Airlines emite comunicado oficial |

### Viernes, 13 de Septiembre 2013

| Hora | Evento |
|------|--------|
| 9:00 AM | United confirma que honrará los tickets comprados |
| Todo el día | Usuarios comparten capturas de pantalla de sus confirmaciones |

---

## Descripción Técnica

### Sistema Afectado

**Componente:** Sistema de Pricing y Booking  
**Plataforma:** Sistema legacy de gestión de tarifas  
**Error:** Fallo en la entrada o procesamiento de tarifas base

### Arquitectura del Sistema (Típica de Aerolíneas)

```
┌─────────────────┐
│   User Browser  │
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│  Web Frontend   │
└────────┬────────┘
         │
         ▼
┌─────────────────┐     ┌──────────────────┐
│  Booking Engine │────>│  Pricing System  │ ⚠️ ERROR AQUÍ
└────────┬────────┘     └──────────────────┘
         │                       │
         │                       ▼
         │              ┌──────────────────┐
         │              │   Fare Database  │
         │              └──────────────────┘
         ▼
┌─────────────────┐
│ Payment Gateway │
└─────────────────┘
```

### Tipos de Errores de Pricing Comunes

1. **Missing Zero Error**
   ```
   Precio Correcto: $1000
   Precio Ingresado: $100  (falta un cero)
   ```

2. **Decimal Point Error**
   ```
   Precio Correcto: $299.00
   Precio Ingresado: $2.99  (punto decimal mal ubicado)
   ```

3. **Currency Conversion Error**
   ```
   Precio en USD: $1000
   Sistema lo interpreta como: 1000 Pesos = ~$10 USD
   ```

4. **Fare Class Error**
   ```
   Base Fare First Class: $5000
   Sistema aplica: Base Fare Economy ($500) a First Class
   ```

5. **Tax/Surcharge Omission**
   ```
   Base Fare: $10
   Taxes/Surcharges: $490
   Sistema solo muestra: $10 (omite taxes)
   ```

### Error Probable en United Airlines

Basado en el patrón ($0-$10), el error más probable fue:
- **Base fare ingresado incorrectamente** (manual o automático)
- **O falla al aplicar surcharges/fees**

Ejemplo:
```
Base Fare: $1 (error de entrada)
Taxes: $9
Total: $10 ✅ Sistema procesa
```

---

## Análisis de Causa Raíz

### Causas Inmediatas

1. **Error de Entrada de Datos**
   - Manual: Empleado ingresó tarifa incorrecta
   - Automático: Script de actualización masiva con error

2. **Falta de Validación**
   - Sin validación de rango mínimo/máximo
   - Sin alertas para precios anómalos
   - Sin confirmación manual para cambios significativos

### Causas Subyacentes

1. **Controles Insuficientes**
   ```python
   # ❌ MAL - Sin validación
   def set_fare(route, price):
       database.update(route, price)
   
   # ✅ BIEN - Con validación
   def set_fare(route, price):
       if price < MIN_FARE or price > MAX_FARE:
           raise ValueError("Price out of range")
       if abs(price - historical_avg) > threshold:
           require_manager_approval()
       database.update(route, price)
   ```

2. **Sistemas Legacy**
   - Infraestructura antigua sin validaciones modernas
   - Múltiples sistemas no integrados completamente

3. **Falta de Monitoring**
   - Sin alertas en tiempo real
   - Sin dashboard de monitoreo de precios

### Causas Raíz Organizacionales

1. **Presión por Reducción de Costos**
   - Falta de inversión en sistemas modernos
   - Reducción de personal técnico

2. **Cultura de Testing Débil**
   - Testing manual limitado
   - Sin automatización de validaciones

3. **Procesos Inadecuados**
   - Sin peer review para cambios de pricing
   - Sin staging environment para pricing

---

## Impacto

### Impacto Financiero

#### Pérdidas Directas
```
Estimación Conservadora:
- Tickets vendidos: ~1,000 tickets
- Pérdida promedio: $800 por ticket
- Pérdida total: ~$800,000

Estimación Alta:
- Tickets vendidos: ~5,000 tickets
- Pérdida promedio: $1,200 por ticket
- Pérdida total: ~$6,000,000
```

**Nota:** United Airlines nunca divulgó el costo exacto

#### Costos Asociados
- Procesamiento de tickets
- Atención al cliente
- Tiempo de ingeniería (investigación + fix)
- Costo de oportunidad (seats vendidos a bajo precio)

### Impacto en Clientes

**Positivo:**
- Miles de clientes obtuvieron viajes muy baratos
- Generó buena voluntad al honrar los tickets
- Viralidad positiva en redes sociales

**Negativo:**
- Algunos tickets no fueron honrados (casos extremos)
- Confusión y ansiedad durante días posteriores

### Impacto Reputacional

**Inmediato:**
- Cobertura mediática masiva
- Trending topic en Twitter
- Memes y bromas en internet

**A Largo Plazo:**
- Percepción positiva por honrar tickets
- Precedente para futuros errores
- Recordatorio de vulnerabilidad de sistemas

### Impacto Operacional

- Sistema fuera de servicio: ~2 horas
- Equipo de IT en modo crisis
- Revisión de todos los sistemas de pricing
- Implementación de controles adicionales

---

## Respuesta de la Empresa

### Comunicado Oficial

**United Airlines Statement (13 de Septiembre, 2013):**

> "We've reviewed the error that occurred yesterday and based on these special circumstances, we will honor the tickets that were purchased."

### Estrategia de Respuesta

1. **Detección y Corrección Rápida**
   - Error detectado en ~2 horas
   - Sistema corregido inmediatamente

2. **Comunicación Transparente**
   - Comunicado público rápido
   - Reconocimiento del error

3. **Decisión de Honrar Tickets**
   - Evaluación de costo vs. beneficio reputacional
   - Decisión de absorber las pérdidas

### Por Qué Honraron los Tickets

**Factores Considerados:**

1. **Legal**
   - Confirmaciones enviadas = contrato formado
   - Difícil cancelar legalmente en algunos casos

2. **Reputacional**
   - Costo de mala prensa > costo de honrar
   - Oportunidad de generar buena voluntad

3. **Precedente de Industria**
   - Otras aerolíneas habían honrado errores similares
   - No honrar = press negativa garantizada

4. **Volumen Manejable**
   - Número de tickets no fue catastrófico
   - Pérdidas absorbibles para empresa del tamaño de United

---

## Pruebas que Pudieron Prevenir

### 1. Unit Tests para Validación de Precios

```python
# test_pricing.py
import pytest
from pricing import validate_fare

def test_fare_minimum():
    """Prueba que rechaza precios demasiado bajos"""
    with pytest.raises(ValueError):
        validate_fare(route="DEN-LAX", price=5.00)

def test_fare_maximum():
    """Prueba que rechaza precios demasiado altos"""
    with pytest.raises(ValueError):
        validate_fare(route="DEN-LAX", price=50000.00)

def test_fare_deviation():
    """Prueba que alerta sobre desviaciones grandes"""
    historical_avg = 450.00
    alert = validate_fare(route="DEN-LAX", price=10.00, 
                          historical_avg=historical_avg)
    assert alert.level == "CRITICAL"
    assert alert.requires_approval == True

def test_fare_zero():
    """Prueba que rechaza precios de cero"""
    with pytest.raises(ValueError):
        validate_fare(route="ANY", price=0.00)
```

### 2. Integration Tests

```python
def test_booking_flow_with_pricing():
    """Prueba el flujo completo de booking"""
    # Setup
    route = "ORD-SFO"
    expected_price_range = (200, 800)
    
    # Action
    search_results = search_flights(route)
    displayed_price = search_results[0].price
    
    # Assert
    assert displayed_price >= expected_price_range[0]
    assert displayed_price <= expected_price_range[1]
    
    # Complete booking
    booking = complete_booking(search_results[0])
    
    # Verify price consistency
    assert booking.final_price == displayed_price
```

### 3. Smoke Tests Post-Deployment

```python
def smoke_test_pricing_system():
    """Smoke test rápido después de cada deploy"""
    test_routes = [
        ("DEN-LAX", 150, 400),
        ("ORD-SFO", 200, 500),
        ("JFK-LHR", 400, 1500),
    ]
    
    for route, min_price, max_price in test_routes:
        results = search_flights(route)
        price = results[0].price
        
        if not (min_price <= price <= max_price):
            send_alert(
                level="CRITICAL",
                message=f"Pricing anomaly: {route} = ${price}"
            )
            rollback_deployment()
```

### 4. Monitoring y Alerting

```python
# Real-time monitoring
class PriceMonitor:
    def check_pricing_anomalies(self):
        current_prices = self.get_all_current_prices()
        
        for route, price in current_prices.items():
            historical = self.get_historical_avg(route, days=30)
            
            # Check for extreme deviations
            if price < historical * 0.1:  # 90% below average
                self.send_alert(
                    severity="CRITICAL",
                    message=f"Price anomaly on {route}: ${price}"
                )
            
            # Check for zero prices
            if price == 0:
                self.send_alert(
                    severity="CRITICAL",
                    message=f"Zero price detected on {route}"
                )
```

### 5. Business Rules Validation

```yaml
# pricing_rules.yaml
validation_rules:
  domestic_flights:
    minimum_base_fare: 50
    maximum_base_fare: 3000
    minimum_total_with_taxes: 75
    
  international_flights:
    minimum_base_fare: 150
    maximum_base_fare: 15000
    minimum_total_with_taxes: 250
    
  alerts:
    - condition: price < historical_avg * 0.25
      severity: CRITICAL
      action: block_and_alert
    
    - condition: price > historical_avg * 3.0
      severity: HIGH
      action: alert_only
```

### 6. Staging Environment

```
Production Pipeline:
┌──────────┐   ┌──────────┐   ┌────────────┐   ┌────────────┐
│   Dev    │──>│ Staging  │──>│ Pre-Prod   │──>│ Production │
└──────────┘   └──────────┘   └────────────┘   └────────────┘
                     │              │
                     │              │
                ✓ Unit Tests    ✓ Integration
                ✓ Validation    ✓ Smoke Tests
                ✓ Price Check   ✓ Monitoring
```

---

## Lecciones Aprendidas

### Para Equipos de Desarrollo

1. **Validación es Crítica**
   - Implementar validaciones de rango en todos los inputs de pricing
   - Usar business rules engine
   - Validar contra datos históricos

2. **Testing Automatizado**
   - Tests unitarios para validaciones
   - Integration tests para flujos completos
   - Smoke tests después de cada deploy

3. **Defensive Programming**
   ```python
   # Siempre validar inputs críticos
   def process_fare(price, route):
       assert price > 0, "Price must be positive"
       assert price < MAX_FARE, "Price exceeds maximum"
       # ... resto del código
   ```

### Para Equipos de Operaciones

1. **Monitoring en Tiempo Real**
   - Dashboard de precios en vivo
   - Alertas para anomalías
   - Automated rollback capabilities

2. **Circuit Breakers**
   ```
   Si se detecta anomalía:
   1. Pausar sistema de pricing
   2. Alertar al equipo
   3. Revertir a última configuración conocida buena
   4. Requerir aprobación manual para reactivar
   ```

3. **Staged Rollouts**
   - Deployar pricing changes gradualmente
   - Canary deployments (1% de tráfico primero)
   - Monitorear por tiempo antes de full rollout

### Para Management

1. **Inversión en Sistemas**
   - Modernizar sistemas legacy
   - Presupuesto para herramientas de testing
   - Training continuo del equipo

2. **Balancear Velocidad vs. Seguridad**
   - No sacrificar validaciones por velocidad
   - Procesos de approval para cambios críticos

3. **Incident Response Plan**
   - Plan documentado para errores de pricing
   - Claridad en autorización para decisiones
   - Comunicación preparada

### Para la Industria

1. **Standards de Pricing**
   - Desarrollar estándares de industria
   - Compartir mejores prácticas
   - Certificaciones de sistemas

2. **Regulación**
   - Claridad en obligaciones legales
   - Framework para manejo de errores

---

## Casos Similares

### Cathay Pacific (2019)

- **Error:** Tickets First Class Vietnam-USA por $675 (valor: $16,000)
- **Causa:** Error de sistema en Año Nuevo
- **Respuesta:** ✅ Honró los tickets
- **Resultado:** Publicidad positiva masiva

### Air France / Flying Blue (2024)

- **Error:** Business Class transatlántico por 1,500 millas (valor: 50,000+ millas)
- **Causa:** Error en pricing de awards
- **Respuesta:** ❌ Canceló la mayoría, honró solo elite members
- **Resultado:** Backlash en comunidad de viajeros

### British Airways (2018)

- **Error:** Premium Economy a precio de Economy
- **Causa:** Error en sistema de upgrades
- **Respuesta:** ✅ Honró muchos tickets
- **Resultado:** Publicidad positiva

### Qantas (2019)

- **Error:** Tickets Business Sydney-USA por AU$3,000 (valor: AU$15,000)
- **Causa:** Error en sistema durante actualización
- **Duración:** Varias horas
- **Respuesta:** ✅ Honró los tickets

### Pattern Recognition

| Característica | Honrados | Cancelados |
|---------------|----------|------------|
| Duración del error | Corta (<4h) | Larga |
| Magnitud del error | Moderada | Extrema (>90% descuento) |
| Volumen de tickets | Bajo-Medio | Alto |
| PR consideration | Alta | Baja |

---

## Mejores Prácticas Implementables

### Checklist de Prevención

#### Desarrollo
- [ ] Validación de rangos de precios implementada
- [ ] Unit tests para pricing logic (>90% coverage)
- [ ] Integration tests para flujos de booking
- [ ] Code review obligatorio para cambios de pricing

#### Operaciones
- [ ] Monitoring en tiempo real de precios
- [ ] Alertas configuradas para anomalías
- [ ] Dashboard de pricing disponible 24/7
- [ ] Rollback automatizado en caso de error

#### Procesos
- [ ] Staging environment para cambios de pricing
- [ ] Approval workflow para cambios significativos
- [ ] Incident response plan documentado
- [ ] Post-mortem después de cada incidente

#### Business
- [ ] Historical price database mantenida
- [ ] Business rules claramente documentadas
- [ ] Training regular del equipo
- [ ] Presupuesto para modernización de sistemas

---

## Recursos Técnicos

### Herramientas Recomendadas

1. **Testing**
   - Jest / Pytest - Unit testing
   - Selenium / Cypress - E2E testing
   - Postman - API testing

2. **Monitoring**
   - Datadog - APM
   - PagerDuty - Alerting
   - Grafana - Dashboards
   - Sentry - Error tracking

3. **Validation**
   - JSON Schema - Data validation
   - Joi / Yup - Input validation
   - Great Expectations - Data quality

### Code Examples

```javascript
// Ejemplo de validación robusta en Node.js
const validateFare = (fare) => {
  const MIN_DOMESTIC = 50;
  const MAX_DOMESTIC = 3000;
  const MIN_INTERNATIONAL = 150;
  const MAX_INTERNATIONAL = 15000;
  
  if (fare.price <= 0) {
    throw new ValidationError('Price must be positive');
  }
  
  const limits = fare.isInternational 
    ? { min: MIN_INTERNATIONAL, max: MAX_INTERNATIONAL }
    : { min: MIN_DOMESTIC, max: MAX_DOMESTIC };
  
  if (fare.price < limits.min || fare.price > limits.max) {
    throw new ValidationError(`Price ${fare.price} out of range`);
  }
  
  // Check against historical average
  const historical = getHistoricalAverage(fare.route);
  if (fare.price < historical * 0.1) {
    sendAlert({
      level: 'CRITICAL',
      message: `Extreme pricing anomaly: ${fare.route} = $${fare.price}`
    });
    throw new ValidationError('Price too far below historical average');
  }
  
  return true;
};
```

---

## Referencias

### Artículos de Noticias

1. CNN Travel. (2013). "United Airlines honors $0 tickets from pricing glitch"
2. The Points Guy. (2024). "Mistake fares: What to know"
3. Thrifty Traveler. (2024). "Mistake Fares Guide"

### Fuentes Técnicas

1. IEEE Software Engineering Standards
2. OWASP Testing Guide
3. Google SRE Book - "Monitoring Distributed Systems"

### Documentación de Industria

1. IATA Pricing Standards
2. DOT Regulations on Pricing Errors
3. EU Passenger Rights Regulation

### Estudios de Caso Académicos

1. MIT Sloan. (2015). "Pricing Errors in E-commerce"
2. Stanford CS. (2018). "Fault Tolerance in Distributed Systems"

---

**Documento preparado por:** Equipo 6 - E-commerce & Retail  
**Fecha:** 25 de Octubre, 2025  
**Versión:** 1.0  
**Estado:** Completo

**Próximo caso:** [Caso 2: British Airways IT Outage](caso-2.md)
