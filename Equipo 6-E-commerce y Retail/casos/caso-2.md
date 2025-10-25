# Caso 2: British Airways - Colapso Total de IT

**Empresa:** British Airways (BA)  
**Fecha:** 27-29 de Mayo, 2017  
**Tipo de Fallo:** Infrastructure Failure / Power Outage  
**Industria:** Aerolíneas  
**Severidad:** 🔴 Crítica

---

## Tabla de Contenidos

- [Resumen Ejecutivo](#resumen-ejecutivo)
- [Timeline del Incidente](#timeline-del-incidente)
- [Descripción Técnica](#descripción-técnica)
- [Análisis de Causa Raíz](#análisis-de-causa-raíz)
- [Impacto](#impacto)
- [Pruebas que Pudieron Prevenir](#pruebas-que-pudieron-prevenir)
- [Lecciones Aprendidas](#lecciones-aprendidas)
- [Referencias](#referencias)

---

## Resumen Ejecutivo

El 27 de mayo de 2017, durante el fin de semana largo de Bank Holiday en Reino Unido, **British Airways sufrió un colapso total de su sistema IT** que resultó en la cancelación de todos los vuelos desde Heathrow y Gatwick durante casi tres días. El incidente fue causado por un error humano que llevó a un corte de energía, y el sistema de backup falló en activarse correctamente.

### Datos Clave del Desastre

| Métrica | Valor |
|---------|-------|
| **Duración Total** | 3 días (operaciones limitadas) |
| **Vuelos Cancelados** | 800+ vuelos |
| **Pasajeros Afectados** | 75,000 personas |
| **Costo Total Estimado** | £80-150 millones ($100-190M USD) |
| **Pérdida por Día** | £30 millones (~$39M USD) |
| **Caída de Acciones** | 3-4.5% |
| **Tiempo de Recuperación** | 72+ horas |

### Causa Raíz

**Un contratista desconectó accidentalmente la fuente de poder del datacenter principal, y el sistema de backup no se activó correctamente.**

---

## Timeline del Incidente

### Sábado, 27 de Mayo 2017 (Día 1)

| Hora (GMT) | Evento |
|------------|--------|
| 09:30 AM | 🔴 **Contratista desconecta la fuente de poder** del datacenter |
| 09:31 AM | Sistemas críticos comienzan a fallar |
| 09:35 AM | Intentan reactivar el poder - **se produce un power surge** |
| 09:40 AM | Daño masivo a servidores por el surge |
| 10:00 AM | Check-in, baggage handling, y contact centers completamente caídos |
| 10:30 AM | BA suspende todos los vuelos de Heathrow y Gatwick |
| 11:00 AM | Caos total en aeropuertos - pantallas en negro |
| 12:00 PM | Filas masivas de pasajeros varados |
| 02:00 PM | BA emite primer statement reconociendo "major IT failure" |
| 06:00 PM | CEO Willie Walsh informa que backup no funcionó |
| Todo el día | **TODOS los vuelos de Heathrow y Gatwick cancelados** |

### Domingo, 28 de Mayo 2017 (Día 2)

| Hora | Evento |
|------|--------|
| 06:00 AM | Intentos de restauración parcial |
| 10:00 AM | Algunos sistemas vuelven online |
| 12:00 PM | Operaciones limitadas comienzan |
| Todo el día | Cancelaciones masivas continúan (menos que día 1) |
| 06:00 PM | Backlog masivo de pasajeros y equipaje |

### Lunes, 29 de Mayo 2017 (Día 3)

| Hora | Evento |
|------|--------|
| 08:00 AM | Operaciones casi normales |
| Todo el día | Delays y cancelaciones continúan por backlog |
| 06:00 PM | Sistema prácticamente normalizado |

### Martes, 30 de Mayo 2017 (Día 4+)

- Operaciones normales restauradas
- Comienza proceso de compensación
- Investigación interna iniciada
- Acciones de IAG caen 3-4.5%

---

## Descripción Técnica

### Arquitectura del Sistema

#### Configuración del Datacenter (Pre-Incidente)

```
┌─────────────────────────────────────┐
│      Datacenter Principal (Heathrow)     │
│                                           │
│  ┌──────────────┐    ┌──────────────┐   │
│  │ Main Power   │    │ Backup Power │   │
│  │   Supply     │───>│    (UPS)     │   │
│  └──────┬───────┘    └──────────────┘   │
│         │                     ⚠️         │
│         ▼                                │
│  ┌─────────────────────────────────┐    │
│  │  Servers & Infrastructure       │    │
│  │  - Check-in Systems             │    │
│  │  - Baggage Handling             │    │
│  │  - Customer Contact             │    │
│  │  - Flight Operations            │    │
│  └─────────────────────────────────┘    │
└───────────────────────────────────────┘

❌ Faltaba: Datacenter Secundario Geográficamente Distribuido
```

#### Qué Debió Haber

```
┌──────────────────┐         ┌──────────────────┐
│   DC Principal   │         │  DC Secundario   │
│   (Heathrow)     │<───────>│  (Geografía      │
│                  │  Sync   │   diferente)     │
└──────────────────┘         └──────────────────┘
        │                            │
        ▼                            ▼
   ┌─────────┐                  ┌─────────┐
   │Auto-    │                  │Auto-    │
   │Failover │                  │Failover │
   └─────────┘                  └─────────┘
```

### Sistemas Afectados

| Sistema | Impacto | Criticidad |
|---------|---------|------------|
| **Online Check-in** | ❌ Completamente caído | 🔴 Crítico |
| **Baggage Handling** | ❌ Completamente caído | 🔴 Crítico |
| **Customer Contact** | ❌ Completamente caído | 🔴 Crítico |
| **Flight Operations** | ❌ Completamente caído | 🔴 Crítico |
| **Website/App** | ❌ Completamente caído | 🔴 Crítico |
| **Airport Displays** | ❌ Completamente caído | 🔴 Crítico |

### Secuencia del Fallo

```
1. Contratista desconecta power supply principal
   ↓
2. UPS (Uninterruptible Power Supply) debía activarse
   ↓
3. ❌ UPS NO se activó correctamente
   ↓
4. Servidores perdieron power abruptamente
   ↓
5. Contratista reconectó power incorrectamente
   ↓
6. 💥 POWER SURGE dañó hardware
   ↓
7. Servidores físicamente dañados
   ↓
8. Sistema de backup (DR) intentó activarse
   ↓
9. ❌ Backup/DR script FALLÓ
   ↓
10. Colapso total del sistema
```

---

## Análisis de Causa Raíz

### Causa Inmediata

**Error Humano + Falla de Sistema**
- Contratista desconectó power supply durante mantenimiento
- Al reconectar, lo hizo incorrectamente causando power surge
- UPS no se activó como debía
- Disaster recovery script falló

### Causas Subyacentes

#### 1. Infraestructura Obsoleta

**Sistema Legacy de los 1970s:**
- Sistemas diseñados cuando las aerolíneas eran estatales
- Infraestructura no diseñada para redundancia moderna
- Modificada incrementalmente por décadas sin rediseño holístico

**Presupuesto de IT Insuficiente:**
```
British Airways vs. Ryanair (Competidor):
BA:      Sistema legacy, single datacenter
Ryanair: Infraestructura moderna, múltiple redundancia
         "Nunca hemos tenido un outage" - CEO Ryanair
```

#### 2. Falta de Redundancia Geográfica

**Single Point of Failure:**
- Un solo datacenter para operaciones críticas
- Sin datacenter de backup en ubicación diferente
- Dependencia total en un sitio físico

**Industry Standard No Seguido:**
```
✅ Correcto: Multi-region deployment
- Datacenter Primario: London
- Datacenter Secundario: Manchester/Belfast
- Failover automático entre regiones

❌ BA Implementation:
- Datacenter Único: Heathrow
- Backup: Same location (no geográfico)
```

#### 3. Diseño Inadecuado del Datacenter

**Uptime Institute Tier Standards:**
```
Tier I:   99.671% uptime (28.8 horas downtime/año)
Tier II:  99.741% uptime (22.0 horas downtime/año)
Tier III: 99.982% uptime (1.6 horas downtime/año)
Tier IV:  99.995% uptime (0.4 horas downtime/año)
```

**BA Datacenter Issues:**
- Probablemente Tier I o II (configuración antigua)
- Single UPS system (no redundante)
- Single power distribution
- Equipo single-ported (no dual power supplies)

#### 4. Disaster Recovery Inadecuado

**DR Script Falló:**
```python
# ❌ DR Script de BA (aproximación)
def activate_backup():
    try:
        switch_to_backup_datacenter()
    except Exception as e:
        log_error(e)
        # ⚠️ Script termina aquí - NO hay escalation automática
        # ⚠️ NO hay failsafe
        # ⚠️ NO hay manual override rápido
```

**Debió ser:**
```python
# ✅ DR Script Robusto
def activate_backup():
    max_retries = 3
    for attempt in range(max_retries):
        try:
            health_check_primary()
            if not primary_healthy():
                log_critical("Primary DC failed health check")
                execute_failover()
                notify_operations_team(urgent=True)
                verify_failover_success()
                return True
        except Exception as e:
            log_error(e)
            if attempt == max_retries - 1:
                trigger_manual_intervention()
                escalate_to_cto()
    return False
```

#### 5. Falta de Testing de DR

**Testing Inadecuado:**
- DR plan existía en papel
- Nunca probado en escenario real
- Último test completo: años atrás
- Personal no entrenado en procedimientos DR

**Industry Best Practice:**
```
Frecuencia de DR Testing:
- Full DR Drill: Trimestral
- Partial Failover: Mensual
- Backup Verification: Semanal
- Monitoring: 24/7

BA Implementation:
- Full DR Drill: ??? (Años)
- Partial Failover: Raro
- Backup Verification: Incierto
```

#### 6. Presión de Costos

**Context Económico:**
- Competencia feroz con aerolíneas low-cost (Ryanair, EasyJet)
- Presión para reducir costos en rutas cortas
- IT infrastructure visto como "cost center"

**Quote - Industry Expert:**
> "A lot of the big carriers are being pressured by the more budget airline model to reduce their costs... the upkeep of their IT estates can be the first thing to suffer." - Uptime Institute President

#### 7. Cultura de "Human Error"

**Responsabilidad Mal Asignada:**
- Willie Walsh (CEO IAG) culpó a "human error"
- Experts criticaron: "Human error" es label que esconde poor management decisions

**Real Root Causes:**
- Falta de training adecuado
- Procedimientos inadecuados
- Sistemas sin failsafes
- Presión de costos sobre personal

---

## Impacto

### Impacto Financiero Detallado

#### Pérdidas Directas

| Categoría | Monto (GBP) | Monto (USD) |
|-----------|-------------|-------------|
| **Compensaciones Pasajeros** | £50-60M | $65-78M |
| **Pérdida de Ingresos** | £30M | $39M |
| **Costos Operacionales Extra** | £20-30M | $26-39M |
| **Restauración IT** | £10-15M | $13-20M |
| **Total Estimado** | £80-150M | $100-190M |

**Análisis de Compensaciones:**
```
EU Regulation 261/2004:
- Vuelos <1,500km cancelados: €250 por pasajero
- Vuelos 1,500-3,500km: €400 por pasajero
- Vuelos >3,500km: €600 por pasajero

Cálculo Estimado:
75,000 pasajeros × €400 promedio = €30M (~£26M)
+ Hotel accommodations
+ Meal vouchers
+ Alternative transport
= £50M+ total compensation
```

#### Costo por Minuto/Hora

```
Downtime Total: ~48 horas de operaciones críticas
Pérdida por Hora: £30M / 24 = £1.25M por hora
Pérdida por Minuto: £21,000 por minuto ($27,000 USD)
```

#### Impacto en Acciones

```
IAG Stock Price (Parent Company):
- Pre-incident: ~£6.00
- Durante crisis: -4.5% (£5.73)
- Post-incident: -2.9% (£5.83)

Market Cap Loss: ~£500M temporarily
```

### Impacto Operacional

#### Vuelos

```
Vuelos Cancelados:
- Sábado: 100% (Heathrow + Gatwick)
- Domingo: ~75%
- Lunes: ~40%
Total: 800+ vuelos
```

#### Pasajeros

```
75,000 Pasajeros Afectados:
- Varados en aeropuertos: ~30,000
- Vuelos cancelados antes de llegar: ~45,000
- Experiencia: Caos total, información cero
```

#### Equipaje

```
Equipaje Perdido/Retrasado:
- Miles de maletas separadas de dueños
- Proceso de reunificación: semanas
- Sistema de tracking caído
```

### Impacto Reputacional

#### Inmediato

**Cobertura Mediática:**
- Trending topic mundial
- Portadas de periódicos principales
- Cobertura TV 24/7
- Imágenes virales de caos en aeropuertos

**Social Media:**
```
Twitter:
- #BritishAirways trending
- Miles de tweets de pasajeros furiosos
- Videos de pantallas en negro
- Fotos de multitudes varadas
```

#### Largo Plazo

**Customer Trust:**
- Encuestas post-incidente: 30% menos confianza
- "Nunca volaré BA de nuevo" - común en reviews
- Pérdida de clientes corporativos

**Brand Value:**
- Daño a percepción de "premium airline"
- Competidores (especialmente Ryanair) aprovecharon

### Impacto en Empleados

- **Stress:** Personal en modo crisis por días
- **Overwork:** Horas extras masivas
- **Moral:** Frustración con management
- **Culpa:** Contratista especialmente afectado

### Impacto Regulatorio

- **UK CAA Investigation:** Opened investigation
- **EU Fines Potenciales:** Por violar derechos de pasajeros
- **Auditoría:** Requerimientos de improvement plans

---

## Pruebas que Pudieron Prevenir

### 1. Disaster Recovery Testing

```bash
#!/bin/bash
# DR_drill_quarterly.sh

echo "=== DISASTER RECOVERY DRILL ==="
echo "Simulating Primary DC Failure"

# Step 1: Notify all stakeholders
notify_stakeholders "DR Drill starting in 5 minutes"

# Step 2: Simulate primary DC failure
simulate_dc_failure --location=primary --type=complete

# Step 3: Trigger failover
trigger_failover --target=secondary --timeout=5min

# Step 4: Verify secondary is operational
verify_systems --datacenter=secondary --required=all

# Step 5: Check RTO/RPO
check_recovery_objectives \
  --rto-target=15min \
  --rpo-target=5min

# Step 6: Generate report
generate_dr_report --output=quarterly_report.pdf

# Step 7: Rollback to primary
rollback_to_primary --verify=true

echo "DR Drill Complete"
```

**Testing Frequency:**
```
Full DR Drill:
- Quarterly (4x/year)
- With full team
- During off-peak hours
- Document everything

Partial Tests:
- Monthly failover tests
- Weekly backup verification
- Daily monitoring checks
```

### 2. Chaos Engineering

```python
# chaos_experiments.py
from chaos_toolkit import experiment

@experiment("Power Failure Simulation")
def simulate_power_failure():
    """
    Simula fallo de poder en datacenter principal
    """
    with power_failure_simulation(datacenter="primary"):
        # System should automatically:
        # 1. Detect power loss
        assert detect_power_loss() == True, "Failed to detect power loss"
        
        # 2. Activate UPS
        assert ups_activated() == True, "UPS did not activate"
        
        # 3. Trigger failover within SLA
        assert failover_triggered(timeout=300) == True, "Failover not triggered"
        
        # 4. Verify secondary DC operational
        assert secondary_dc_healthy() == True, "Secondary DC not healthy"
        
        # 5. Verify all services available
        services = ["check-in", "baggage", "contact", "operations"]
        for service in services:
            assert service_available(service) == True, f"{service} not available"

@experiment("Power Surge Simulation")
def simulate_power_surge():
    """
    Simula power surge al reconectar
    """
    with power_surge_simulation():
        # System should:
        # 1. Detect abnormal power
        assert abnormal_power_detected() == True
        
        # 2. Protective shutdown
        assert protective_shutdown_triggered() == True
        
        # 3. Avoid hardware damage
        assert hardware_protected() == True
```

### 3. Infrastructure Resilience Testing

```yaml
# infrastructure_tests.yml
name: Infrastructure Resilience Testing
frequency: monthly

tests:
  - name: UPS Functionality
    description: Verify UPS activates on power loss
    steps:
      - simulate_power_loss
      - verify_ups_activation
      - verify_clean_power_delivery
      - verify_systems_continue_running
    sla:
      activation_time: < 10ms
      runtime: > 30min
      
  - name: Redundant Power Supply
    description: Verify dual power supplies work
    steps:
      - disconnect_power_supply_a
      - verify_power_supply_b_active
      - verify_no_service_interruption
      - reconnect_power_supply_a
      - repeat_for_power_supply_b
      
  - name: Failover Time
    description: Measure time to complete failover
    steps:
      - mark_primary_dc_down
      - start_timer
      - wait_for_secondary_active
      - stop_timer
    sla:
      rto: < 15 minutes
      rpo: < 5 minutes
      
  - name: Geographical Redundancy
    description: Verify systems work from secondary location
    steps:
      - isolate_primary_dc_completely
      - verify_secondary_handles_full_load
      - run_all_critical_operations
      - verify_data_consistency
```

### 4. Load Testing Under Degraded Conditions

```python
# load_test_degraded.py
from locust import HttpUser, task, between

class PassengerUser(HttpUser):
    wait_time = between(1, 3)
    
    @task(3)
    def check_in(self):
        """Simulate check-in during outage"""
        response = self.client.post("/check-in", {
            "booking_ref": self.generate_booking_ref(),
            "last_name": "TestUser"
        })
        assert response.status_code in [200, 503], \
            "System must respond even if degraded"
    
    @task(2)
    def check_flight_status(self):
        """Verify flight status available"""
        response = self.client.get("/flight-status")
        assert response.status_code == 200, \
            "Flight status must always be available"

# Test scenarios
scenarios = {
    "normal": {
        "users": 1000,
        "spawn_rate": 10,
        "duration": "5m"
    },
    "primary_dc_down": {
        "users": 1000,
        "spawn_rate": 10,
        "duration": "5m",
        "conditions": ["primary_dc=down", "failover=active"]
    },
    "degraded_mode": {
        "users": 500,
        "spawn_rate": 5,
        "duration": "10m",
        "conditions": ["graceful_degradation=true"]
    }
}
```

### 5. Business Continuity Testing

```python
# business_continuity_test.py

def test_graceful_degradation():
    """
    Sistema debe poder operar en modo degradado
    manteniendo funciones críticas
    """
    critical_functions = [
        "flight_operations",  # Must work
        "safety_systems",     # Must work
        "basic_check_in",     # Must work
        "baggage_basics"      # Must work
    ]
    
    non_critical = [
        "loyalty_program",    # Can fail
        "seat_selection",     # Can fail
        "meal_preferences"    # Can fail
    ]
    
    # Simulate various failure modes
    with system_failure(severity="critical"):
        # Critical functions MUST work
        for func in critical_functions:
            assert system_function_available(func), \
                f"Critical function {func} failed"
        
        # Non-critical can be disabled
        # but system must communicate this clearly
        for func in non_critical:
            if not system_function_available(func):
                assert user_notified(f"{func} temporarily unavailable")

def test_manual_fallback():
    """
    Cuando sistemas automáticos fallan,
    debe haber procedimientos manuales
    """
    if not automated_check_in_available():
        assert manual_check_in_desk_staffed()
        assert paper_boarding_passes_available()
        assert manual_baggage_tags_available()
        assert staff_trained_on_manual_procedures()
```

### 6. Monitoring & Alerting Testing

```python
# monitoring_tests.py

def test_critical_alerts():
    """
    Verificar que alertas críticas funcionen
    """
    critical_alerts = [
        "datacenter_power_loss",
        "ups_failure",
        "primary_dc_unreachable",
        "failover_in_progress",
        "failover_failed",
        "system_degraded"
    ]
    
    for alert_type in critical_alerts:
        # Trigger alert
        trigger_test_alert(alert_type)
        
        # Verify received
        assert alert_received_by_oncall(alert_type, timeout=60), \
            f"Alert {alert_type} not received"
        
        # Verify escalation
        if not acknowledged_within(300):  # 5 min
            assert escalated_to_manager(), \
                "Alert not escalated"

def test_monitoring_coverage():
    """
    Verificar que todos los componentes críticos
    están monitoreados
    """
    critical_components = {
        "datacenter_power": {
            "metrics": ["voltage", "amperage", "uptime"],
            "alert_threshold": "< 90% nominal",
            "check_frequency": "10s"
        },
        "ups_system": {
            "metrics": ["charge", "runtime", "health"],
            "alert_threshold": "< 30% charge",
            "check_frequency": "30s"
        },
        "server_health": {
            "metrics": ["cpu", "memory", "disk", "network"],
            "alert_threshold": "varies",
            "check_frequency": "60s"
        }
    }
    
    for component, config in critical_components.items():
        assert is_monitored(component), \
            f"{component} not monitored"
        assert has_alerts_configured(component), \
            f"{component} has no alerts"
        assert alert_routing_configured(component), \
            f"{component} alerts not routed"
```

---

## Lecciones Aprendidas

### Lecciones Técnicas

#### 1. Redundancia Geográfica es Mandatoria

```
✅ CORRECTO:
Primary DC: London Region
Secondary DC: Manchester Region (>100km away)
Tertiary DC: Cloud (AWS/Azure multi-region)

Data Replication: Real-time sync
Failover: Automatic < 5 minutes
Testing: Quarterly full drills
```

#### 2. Never Trust a Single Point of Failure

**Single Points Identificados en BA:**
- ❌ Single datacenter location
- ❌ Single power supply
- ❌ Single UPS system
- ❌ Single network path
- ❌ Single team responsible

**Solución:**
- ✅ Multi-datacenter
- ✅ Redundant power (N+1 o 2N)
- ✅ Multiple UPS systems
- ✅ Diverse network paths
- ✅ Follow-the-sun operations teams

#### 3. Test Your DR Plan Religiously

```python
# DR Testing Cadence
class DRTestingSchedule:
    FULL_DR_DRILL = "Quarterly"         # Complete failover
    PARTIAL_FAILOVER = "Monthly"        # Some systems
    BACKUP_VERIFICATION = "Weekly"      # Check backups work
    MONITORING_CHECK = "Daily"          # Verify monitoring
    RUNBOOK_UPDATE = "After each test"  # Document learnings
```

#### 4. Chaos Engineering in Production

```
Netflix Chaos Monkey Approach:
- Randomly kill services in production
- Force systems to be resilient
- Discover weaknesses before customers do

BA Should Have:
- Chaos Gorilla: Kill entire datacenter
- Chaos Kong: Kill entire region
- Latency Monkey: Inject delays
- Doctor Monkey: Find unhealthy instances
```

#### 5. Automation is Critical

```python
# ❌ MAL: Proceso manual
"""
1. Detectar fallo (manual)
2. Llamar al manager (manual)
3. Decidir failover (manual)
4. Ejecutar scripts (manual)
5. Verificar (manual)
Time: 2+ horas
"""

# ✅ BIEN: Proceso automatizado
"""
1. Monitoring detecta fallo (automático)
2. Auto-alerting (automático)
3. Auto-failover decision (automático)
4. Auto-execution (automático)
5. Auto-verification (automático)
6. Human notification (automático)
Time: < 5 minutos
"""
```

### Lecciones Organizacionales

#### 1. "Human Error" es Management Failure

**Quote - Uptime Institute:**
> "'Human error' is an overarching label that describes the outcomes of poor management decisions."

**Real Issues:**
- Inadequate training
- Poor procedures
- Lack of automation
- Cost-cutting on critical systems
- Understaffing

#### 2. Don't Defer IT Investment

**Costo Comparativo:**
```
Opción A: Modernizar infraestructura
Cost: £50M over 3 years
Risk: Minimal

Opción B: Mantener legacy systems
Cost: £0 upfront
Risk: Catastrophic failure
Actual Cost: £100M+ cuando falla

Decision: BA eligió Opción B
Result: Perdieron más de £150M
```

#### 3. Competitive Pressure ≠ Cut Corners

```
Ryanair Approach:
- Budget airline (ultra low-cost)
- Modern IT infrastructure
- Never had major outage
- "We take IT very seriously" - CEO

BA Approach:
- Premium airline (higher prices)
- Legacy IT infrastructure
- Major outage cost £100M+
- Lost competitive advantage
```

#### 4. Culture Matters

**Netflix Culture:**
```
"We build resilience through chaos"
- Regular failure injection
- Expectation that things will fail
- Design for failure from day 1
```

**BA Culture (Pre-2017):**
```
"We hope nothing breaks"
- Avoid testing (costs money)
- Assume systems will work
- React when things fail
```

### Lecciones de Incident Response

#### 1. Communication is Critical

**BA's Mistakes:**
- ❌ Delayed initial communication
- ❌ No real-time updates to customers
- ❌ Airport staff had no information
- ❌ Social media response inadequate

**Should Have Been:**
```
Incident Response Communication:
T+0min:   Internal alert
T+5min:   Incident declared
T+10min:  Initial public statement
T+30min:  Status page updated
T+60min:  Regular updates every 30min
Ongoing:  Social media engagement
```

#### 2. Have Pre-Written Templates

```markdown
# INCIDENT TEMPLATE: Complete System Outage

**Subject:** [URGENT] Service Outage - British Airways Systems

**Message:**
We are currently experiencing a major IT system outage affecting 
our operations at [AIRPORTS]. 

**Status:** [STATUS]
**Impact:** [IMPACT]  
**Expected Resolution:** [TIME]

**What we're doing:**
- [ACTIONS]

**What you should do:**
- [CUSTOMER_ACTIONS]

We apologize for this disruption and will provide updates every 
[FREQUENCY].

Last Updated: [TIMESTAMP]
```

#### 3. War Room Operations

```
Incident Command Structure:

Incident Commander (IC)
    ├── Technical Lead (resolves issue)
    ├── Communications Lead (updates customers)
    ├── Operations Lead (manages airports)
    └── Executive Lead (decisions/resources)

Tools:
- Dedicated Slack channel
- Video conference bridge
- Status dashboard
- Decision log
- Timeline tracker
```

---

## Implementación de Mejoras

### Architecture Improvements

```
┌────────────────────────────────────────────────┐
│          IMPROVED ARCHITECTURE                  │
├────────────────────────────────────────────────┤
│                                                 │
│  ┌─────────────┐         ┌─────────────┐      │
│  │ Primary DC  │◄───────►│Secondary DC │      │
│  │  (London)   │  Sync   │(Manchester) │      │
│  └──────┬──────┘         └──────┬──────┘      │
│         │                       │              │
│         │    ┌──────────────┐  │              │
│         └───►│  Cloud       │◄─┘              │
│              │  (AWS/Azure) │                  │
│              └──────────────┘                  │
│                                                 │
│  Features:                                     │
│  ✓ Geographic redundancy                      │
│  ✓ Auto-failover (< 5min)                    │
│  ✓ Real-time replication                      │
│  ✓ Independent power                          │
│  ✓ Multiple network paths                     │
│  ✓ 24/7 monitoring                            │
└────────────────────────────────────────────────┘
```

### DR Plan Enhancement

```yaml
# disaster_recovery_plan.yml
version: 2.0
updated: post-2017-incident

detection:
  automated:
    - health_checks: every 10s
    - anomaly_detection: real-time
    - alert_threshold: 3 failed checks
  
  manual:
    - oncall_engineer_notice
    - escalation_path_defined

response:
  automated_failover:
    trigger_conditions:
      - primary_dc_unreachable: 60s
      - critical_service_down: 90s
      - power_failure_detected: immediate
    
    actions:
      - verify_secondary_healthy
      - replicate_latest_data
      - switch_dns_records
      - redirect_traffic
      - verify_services_online
      - notify_teams
    
    rollback_procedure:
      - verify_primary_recovered
      - sync_data_both_directions
      - scheduled_failback_window
      - gradual_traffic_shift

testing:
  full_dr_drill:
    frequency: quarterly
    duration: 4_hours
    participants: all_critical_teams
    report_required: yes
    
  partial_tests:
    frequency: monthly
    scope: selective_services
    
  continuous:
    chaos_engineering: daily
    backup_verification: weekly
    monitoring_check: 24/7
```

---

## Comparación con Casos Similares

### Delta Airlines (2016)

| Aspecto | Delta | British Airways |
|---------|-------|-----------------|
| **Fecha** | Agosto 2016 | Mayo 2017 |
| **Causa** | Power outage | Power surge |
| **Duración** | 5 días | 3 días |
| **Vuelos** | 2,000+ cancelados | 800+ cancelados |
| **Costo** | $150M | $100-150M |
| **Lección** | Misma que BA | No aprendieron |

### Southwest Airlines (2016)

| Aspecto | Southwest | British Airways |
|---------|-----------|-----------------|
| **Fecha** | Julio 2016 | Mayo 2017 |
| **Causa** | Router failure | Power surge |
| **Duración** | 12 horas | 3 días |
| **Vuelos** | 1,500+ cancelados | 800+ cancelados |
| **Costo** | $54M | $100-150M |

**Pattern:** Industria de aerolíneas tiene problema sistémico con IT legacy

---

## Recursos

### Herramientas Recomendadas

#### Disaster Recovery
- **Zerto:** DR orchestration
- **Veeam:** Backup and replication
- **AWS Disaster Recovery:** Cloud-based DR
- **Azure Site Recovery:** Azure DR solution

#### Chaos Engineering
- **Chaos Monkey:** Netflix's tool
- **Gremlin:** Commercial chaos engineering
- **Chaos Toolkit:** Open source framework
- **Litmus:** Kubernetes chaos engineering

#### Monitoring
- **Datadog:** Full-stack monitoring
- **PagerDuty:** Incident management
- **Grafana:** Dashboards
- **Prometheus:** Metrics collection

### Standards y Frameworks

- **ISO 22301:** Business Continuity Management
- **NIST SP 800-34:** Contingency Planning
- **ITIL:** IT Service Management
- **Uptime Institute Tier Standards**

---

## Referencias

1. CNN Business. (2017). "Computer meltdown may cost British Airways over $100 million"
2. Computer Weekly. (2017). "The British Airways IT outage: What went wrong?"
3. DCD. (2019). "BA and CBRE settle dispute over 2017 data center outage"
4. N2W Software. (2024). "Learning From The IT Failure At British Airways"
5. The Register. (2017). "British Airways IT boss quits after massive outage"

---

**Preparado por:** Equipo 6 - E-commerce & Retail  
**Fecha:** 25 de Octubre, 2025  
**Versión:** 1.0
