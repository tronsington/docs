# Sensors

Available sensor entities from the Exergy Canaan integration.

## Temperature Sensors

### Ambient Temperature (Intake)

| Attribute | Value |
|-----------|-------|
| Entity Type | `sensor` |
| Example Entity | `sensor.avalon_mini_3_ambient_temp` |
| Unit | °F or °C (based on HA settings) |
| Device Class | `temperature` |

Temperature of air entering the miner (bottom intake). This is measured close to the device and may not reflect true room temperature.

---

### Output Temperature (Exhaust)

| Attribute | Value |
|-----------|-------|
| Entity Type | `sensor` |
| Example Entity | `sensor.avalon_mini_3_output_temp` |
| Unit | °F or °C |
| Device Class | `temperature` |

Temperature of air exiting the miner (front exhaust). This shows how much the miner is heating the air.

---

### Hashboard Temperature

| Attribute | Value |
|-----------|-------|
| Entity Type | `sensor` |
| Example Entity | `sensor.avalon_mini_3_hashboard_temp` |
| Unit | °F or °C |
| Device Class | `temperature` |

Internal temperature of the mining chips. Higher than ambient but should stay within safe operating range.

---

## Performance Sensors

### Hashrate

| Attribute | Value |
|-----------|-------|
| Entity Type | `sensor` |
| Example Entity | `sensor.avalon_mini_3_hashrate` |
| Unit | TH/s |

Current mining hashrate. Maximum is approximately 40 TH/s at Super level.

---

### Power Draw

| Attribute | Value |
|-----------|-------|
| Entity Type | `sensor` |
| Example Entity | `sensor.avalon_mini_3_power` |
| Unit | W (Watts) |
| Device Class | `power` |

Current power consumption. Maximum is approximately 800W at Super level.

---

### Fan Speed

| Attribute | Value |
|-----------|-------|
| Entity Type | `sensor` |
| Example Entity | `sensor.avalon_mini_3_fan_speed` |
| Unit | RPM |

Current fan speed. Varies based on cooling needs and mode.

---

## Status Sensors

### State

| Attribute | Value |
|-----------|-------|
| Entity Type | `sensor` |
| Example Entity | `sensor.avalon_mini_3_state` |
| Values | *Varies* |

Current device state (running, idle, error, etc.).

---

### Work Mode (Read-only)

| Attribute | Value |
|-----------|-------|
| Entity Type | `sensor` |
| Example Entity | `sensor.avalon_mini_3_work_mode` |
| Values | `Heating`, `Mining`, `Night` |

Current work mode as reported by the device. Use the `select` entity to change modes.

---

### Work Level (Read-only)

| Attribute | Value |
|-----------|-------|
| Entity Type | `sensor` |
| Example Entity | `sensor.avalon_mini_3_work_level` |
| Values | `Eco`, `Super` |

Current work level as reported by the device. Use the `select` entity to change levels.

---

## Using Sensors in Automations

### Example: Alert on High Temperature

```yaml
automation:
  - alias: "Miner Overheat Alert"
    trigger:
      - platform: numeric_state
        entity_id: sensor.avalon_mini_3_hashboard_temp
        above: 85  # Celsius
    action:
      - service: notify.mobile_app
        data:
          message: "Miner hashboard temperature is high!"
```

### Example: Track Power Usage

```yaml
sensor:
  - platform: integration
    source: sensor.avalon_mini_3_power
    name: "Miner Energy Usage"
    unit_prefix: k
    round: 2
```

This creates a kWh sensor to track total energy consumption over time.

---

## Sensor Update Frequency

Sensors update automatically on a regular interval. Use the Update button to force an immediate refresh.
