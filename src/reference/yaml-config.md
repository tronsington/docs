# YAML Configuration Reference

Complete reference for all configuration options.

## Home Assistant Configuration

### Core Configuration

```yaml
# configuration.yaml
homeassistant:
  name: "Exergy Home"
  unit_system: imperial  # or metric
  time_zone: America/New_York
  currency: USD
  country: US

  # Customize entities
  customize:
    sensor.miner_hashrate:
      friendly_name: "Miner Hash Rate"
      icon: mdi:pickaxe
```

### Exergy Integration

```yaml
# Miner configuration
bitcoin_miner:
  - host: 192.168.1.30
    name: "Living Room Miner"
    scan_interval: 30
    password: !secret miner_password

  - host: 192.168.1.31
    name: "Basement Miner"
    scan_interval: 30
```

### Heating Control

```yaml
# Exergy heating zones
exergy_heating:
  default_target: 72
  hysteresis: 2

  zones:
    - name: "Living Room"
      temperature_sensor: sensor.living_room_temperature
      target_input: input_number.living_room_target
      miners:
        - switch.miner_living_room
      backup_climate: climate.hvac_living_room

    - name: "Bedroom"
      temperature_sensor: sensor.bedroom_temperature
      target_input: input_number.bedroom_target
      miners:
        - switch.miner_bedroom
```

## Template Sensors

### Mining Sensors

```yaml
template:
  - sensor:
      # Total hash rate across all miners
      - name: "Total Hash Rate"
        unique_id: total_hashrate
        unit_of_measurement: "TH/s"
        state_class: measurement
        device_class: power
        state: >
          {{ states.sensor
             | selectattr('entity_id', 'match', 'sensor.miner_.*_hashrate')
             | map(attribute='state')
             | map('float', 0)
             | sum | round(1) }}

      # Total power consumption
      - name: "Total Mining Power"
        unique_id: total_mining_power
        unit_of_measurement: "W"
        state_class: measurement
        device_class: power
        state: >
          {{ states.sensor
             | selectattr('entity_id', 'match', 'sensor.miner_.*_power')
             | map(attribute='state')
             | map('float', 0)
             | sum | round(0) }}

      # Mining efficiency
      - name: "Mining Efficiency"
        unique_id: mining_efficiency
        unit_of_measurement: "J/TH"
        state_class: measurement
        state: >
          {% set power = states('sensor.total_mining_power') | float(0) %}
          {% set hashrate = states('sensor.total_hashrate') | float(0) %}
          {% if hashrate > 0 %}
            {{ (power / hashrate) | round(2) }}
          {% else %}
            0
          {% endif %}

      # Daily revenue estimate
      - name: "Daily Mining Revenue"
        unique_id: daily_mining_revenue
        unit_of_measurement: "USD"
        state_class: total
        device_class: monetary
        state: >
          {% set btc = states('sensor.daily_btc_mined') | float(0) %}
          {% set price = states('sensor.bitcoin_price') | float(0) %}
          {{ (btc * price) | round(2) }}
```

### Climate Sensors

```yaml
template:
  - sensor:
      # Average indoor temperature
      - name: "Average Indoor Temperature"
        unique_id: avg_indoor_temp
        unit_of_measurement: "°F"
        device_class: temperature
        state: >
          {% set temps = [
            states('sensor.living_room_temperature') | float(0),
            states('sensor.bedroom_temperature') | float(0),
            states('sensor.kitchen_temperature') | float(0)
          ] | reject('eq', 0) | list %}
          {% if temps %}
            {{ (temps | sum / temps | count) | round(1) }}
          {% else %}
            unknown
          {% endif %}

      # Heating demand percentage
      - name: "Heating Demand"
        unique_id: heating_demand
        unit_of_measurement: "%"
        state: >
          {% set current = states('sensor.average_indoor_temperature') | float(0) %}
          {% set target = states('input_number.target_temperature') | float(72) %}
          {% set diff = target - current %}
          {% if diff <= 0 %}
            0
          {% elif diff >= 5 %}
            100
          {% else %}
            {{ (diff / 5 * 100) | round(0) }}
          {% endif %}
```

## Input Helpers

### Temperature Controls

```yaml
input_number:
  target_temperature:
    name: Target Temperature
    min: 60
    max: 80
    step: 1
    unit_of_measurement: "°F"
    icon: mdi:thermometer

  living_room_target:
    name: Living Room Target
    min: 60
    max: 80
    step: 1
    unit_of_measurement: "°F"

  max_miner_temp:
    name: Maximum Miner Temperature
    min: 70
    max: 95
    step: 1
    unit_of_measurement: "°C"
    icon: mdi:thermometer-alert
```

### System Toggles

```yaml
input_boolean:
  mining_enabled:
    name: Mining Enabled
    icon: mdi:pickaxe

  eco_mode:
    name: Eco Mode
    icon: mdi:leaf

  heating_mode:
    name: Heating Mode
    icon: mdi:fire

  tou_optimization:
    name: Time-of-Use Optimization
    icon: mdi:clock-outline

  away_mode:
    name: Away Mode
    icon: mdi:exit-run
```

### Schedule Times

```yaml
input_datetime:
  wake_time:
    name: Wake Time
    has_date: false
    has_time: true
    icon: mdi:alarm

  sleep_time:
    name: Sleep Time
    has_date: false
    has_time: true
    icon: mdi:bed
```

## Utility Meters

```yaml
utility_meter:
  daily_mining_energy:
    source: sensor.total_mining_power
    name: Daily Mining Energy
    cycle: daily

  monthly_mining_energy:
    source: sensor.total_mining_power
    name: Monthly Mining Energy
    cycle: monthly

  yearly_mining_energy:
    source: sensor.total_mining_power
    name: Yearly Mining Energy
    cycle: yearly
```

## Recorder

```yaml
recorder:
  purge_keep_days: 30
  commit_interval: 30

  include:
    entities:
      - sensor.total_hashrate
      - sensor.total_mining_power
      - sensor.mining_efficiency
      - sensor.daily_btc_mined
      - sensor.living_room_temperature
      - sensor.bedroom_temperature
      - sensor.outdoor_temperature

  exclude:
    domains:
      - automation
      - script
      - input_boolean
      - input_number
```

## Logbook

```yaml
logbook:
  include:
    domains:
      - switch
      - climate
    entities:
      - sensor.total_hashrate
      - binary_sensor.miner_online
```
