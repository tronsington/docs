# YAML Dashboards

Creating dashboards with YAML configuration.

## Why YAML?

- **Version control** - Track changes in git
- **Sharing** - Copy/paste dashboard configs
- **Backup** - Easy to backup as files
- **Bulk editing** - Edit multiple cards at once

## Accessing YAML Mode

### Existing Dashboard

1. Edit dashboard
2. Three dots menu
3. **Raw configuration editor**

### Dashboard File

Dashboards can live in separate files:

```yaml
# configuration.yaml
lovelace:
  mode: yaml
  dashboards:
    lovelace-mining:
      mode: yaml
      filename: mining-dashboard.yaml
      title: Mining
      icon: mdi:pickaxe
```

## YAML Structure

```yaml
views:
  - title: Overview
    path: overview
    cards:
      - type: gauge
        entity: sensor.room_temperature
        name: Room Temp
        min: 50
        max: 90

      - type: entities
        entities:
          - switch.avalon_mini_3_power
          - select.avalon_mini_3_work_mode
```

## Common Card Types

### Entities Card

```yaml
- type: entities
  title: Miner Status
  entities:
    - entity: switch.avalon_mini_3_power
      name: Power
    - entity: sensor.avalon_mini_3_hashrate
      name: Hashrate
    - entity: sensor.avalon_mini_3_power_consumption
      name: Power Draw
```

### Gauge Card

```yaml
- type: gauge
  entity: sensor.avalon_mini_3_temperature_ambient
  name: Intake Temp
  min: 40
  max: 100
  severity:
    green: 40
    yellow: 70
    red: 85
```

### Button Card

```yaml
- type: button
  entity: switch.avalon_mini_3_power
  name: Heater
  icon: mdi:radiator
  tap_action:
    action: toggle
```

### History Graph

```yaml
- type: history-graph
  title: Temperature History
  hours_to_show: 24
  entities:
    - sensor.room_temperature
    - sensor.outdoor_temperature
    - sensor.avalon_mini_3_temperature_output
```

### Horizontal Stack

```yaml
- type: horizontal-stack
  cards:
    - type: gauge
      entity: sensor.temperature_1
    - type: gauge
      entity: sensor.temperature_2
```

### Vertical Stack

```yaml
- type: vertical-stack
  cards:
    - type: entities
      entities:
        - switch.miner_power
    - type: history-graph
      entities:
        - sensor.miner_hashrate
```

### Conditional Card

```yaml
- type: conditional
  conditions:
    - entity: switch.avalon_mini_3_power
      state: "on"
  card:
    type: entities
    entities:
      - sensor.avalon_mini_3_hashrate
```

## Full Example Dashboard

```yaml
title: Mining Control
views:
  - title: Overview
    path: overview
    cards:
      # Top row - key metrics
      - type: horizontal-stack
        cards:
          - type: gauge
            entity: sensor.room_temperature
            name: Room
            min: 50
            max: 90
          - type: gauge
            entity: sensor.avalon_mini_3_hashrate
            name: Hashrate
            min: 0
            max: 15
            unit: TH/s

      # Control section
      - type: entities
        title: Controls
        entities:
          - switch.avalon_mini_3_power
          - select.avalon_mini_3_work_mode
          - select.avalon_mini_3_work_level

      # Sensor readings
      - type: entities
        title: Sensors
        entities:
          - sensor.avalon_mini_3_temperature_ambient
          - sensor.avalon_mini_3_temperature_output
          - sensor.avalon_mini_3_power_consumption

      # History
      - type: history-graph
        title: 24 Hour History
        hours_to_show: 24
        entities:
          - sensor.room_temperature
          - sensor.avalon_mini_3_hashrate

  - title: Details
    path: details
    cards:
      - type: entities
        title: All Miner Entities
        entities:
          - switch.avalon_mini_3_power
          - select.avalon_mini_3_work_mode
          - select.avalon_mini_3_work_level
          - sensor.avalon_mini_3_hashrate
          - sensor.avalon_mini_3_power_consumption
          - sensor.avalon_mini_3_temperature_ambient
          - sensor.avalon_mini_3_temperature_output
          - sensor.avalon_mini_3_temperature_hashboard
          - sensor.avalon_mini_3_fan_speed
          - sensor.avalon_mini_3_device_state
```

## Custom Cards in YAML

Custom cards from HACS use the same structure:

```yaml
# mini-graph-card example
- type: custom:mini-graph-card
  entities:
    - sensor.room_temperature
  hours_to_show: 24
  line_color: '#3498db'
```

## Tips

### Entity ID Discovery

Find entity IDs:
- **Developer Tools → States**
- Search for your device

### Validate YAML

Check syntax before saving:
- **Developer Tools → YAML**
- Or use yaml-lint online

### Use Anchors

Reuse configurations:

```yaml
# Define anchor
temperature_gauge: &temp_gauge
  type: gauge
  min: 50
  max: 100

# Use anchor
- <<: *temp_gauge
  entity: sensor.temp_1
- <<: *temp_gauge
  entity: sensor.temp_2
```

## More Information

- [HA Dashboard Builder](./ha-builder.md) - Visual alternative
- [DIY Templates](../../diy/dashboards.md) - Pre-built examples
- [Official YAML Documentation](https://www.home-assistant.io/dashboards/dashboards/)
