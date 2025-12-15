# YAML Automations

Writing automations in YAML configuration files.

## Why YAML?

- **Version control** - Track changes in git
- **Bulk editing** - Edit multiple automations at once
- **Sharing** - Copy/paste automation code
- **Advanced features** - Templates, variables, complex logic

## Where to Write YAML Automations

### In automations.yaml

Default location for automations:

```yaml
# automations.yaml
- alias: "Night mode at 10pm"
  trigger:
    - platform: time
      at: "22:00:00"
  action:
    - service: select.select_option
      target:
        entity_id: select.avalon_mini_3_work_mode
      data:
        option: "Night"
```

### In configuration.yaml

Include automations directly:

```yaml
# configuration.yaml
automation:
  - alias: "Example automation"
    trigger:
      ...
```

Or include the automations.yaml file:

```yaml
# configuration.yaml
automation: !include automations.yaml
```

## YAML Automation Structure

```yaml
- alias: "Descriptive name"
  description: "What this automation does"
  mode: single  # single, restart, queued, parallel

  trigger:
    - platform: <trigger_type>
      # trigger configuration

  condition:
    - condition: <condition_type>
      # condition configuration

  action:
    - service: <service_name>
      # action configuration
```

## Common Triggers

### Time Trigger

```yaml
trigger:
  - platform: time
    at: "22:00:00"
```

### State Trigger

```yaml
trigger:
  - platform: state
    entity_id: switch.avalon_mini_3_power
    to: "off"
```

### Numeric State Trigger

```yaml
trigger:
  - platform: numeric_state
    entity_id: sensor.room_temperature
    below: 68
```

### Template Trigger

```yaml
trigger:
  - platform: template
    value_template: "{{ states('sensor.outdoor_temp') | float < 50 }}"
```

## Common Conditions

### State Condition

```yaml
condition:
  - condition: state
    entity_id: switch.avalon_mini_3_power
    state: "off"
```

### Time Condition

```yaml
condition:
  - condition: time
    after: "18:00:00"
    before: "23:00:00"
```

### Numeric State Condition

```yaml
condition:
  - condition: numeric_state
    entity_id: sensor.temperature
    below: 70
```

### Template Condition

```yaml
condition:
  - condition: template
    value_template: "{{ is_state('input_boolean.heating_enabled', 'on') }}"
```

## Common Actions

### Turn On/Off

```yaml
action:
  - service: switch.turn_on
    target:
      entity_id: switch.avalon_mini_3_power
```

### Select Option

```yaml
action:
  - service: select.select_option
    target:
      entity_id: select.avalon_mini_3_work_mode
    data:
      option: "Night"
```

### Delay

```yaml
action:
  - delay:
      minutes: 5
```

### Multiple Actions

```yaml
action:
  - service: switch.turn_on
    target:
      entity_id: switch.avalon_mini_3_power
  - delay:
      seconds: 30
  - service: select.select_option
    target:
      entity_id: select.avalon_mini_3_work_mode
    data:
      option: "Heating"
```

## Full Example: Thermostat Control

```yaml
# Room thermostat using temperature sensor
- alias: "Room thermostat - heat on"
  description: "Turn miner on when room is cold"
  trigger:
    - platform: numeric_state
      entity_id: sensor.room_temperature
      below: input_number.target_temperature
      for:
        minutes: 2
  condition:
    - condition: state
      entity_id: switch.avalon_mini_3_power
      state: "off"
  action:
    - service: switch.turn_on
      target:
        entity_id: switch.avalon_mini_3_power

- alias: "Room thermostat - heat off"
  description: "Turn miner off when room reaches temperature"
  trigger:
    - platform: numeric_state
      entity_id: sensor.room_temperature
      above: input_number.target_temperature
      for:
        minutes: 2
  condition:
    - condition: state
      entity_id: switch.avalon_mini_3_power
      state: "on"
  action:
    - service: switch.turn_off
      target:
        entity_id: switch.avalon_mini_3_power
```

## Reloading Automations

After editing YAML:
1. **Settings → System → YAML Configuration**
2. Click **Automations**
3. Or restart Home Assistant

## Debugging

### Check Logs

**Settings → System → Logs** - Filter by "automation"

### Use Traces

Automations record execution traces:
1. **Settings → Automations**
2. Click automation
3. **Traces** tab

### Add Notifications

Add notification actions for debugging:

```yaml
action:
  - service: notify.mobile_app
    data:
      message: "Automation triggered - temp was {{ states('sensor.temperature') }}"
```

## More Information

- [HA Automation Builder](./ha-builder.md) - Visual alternative
- [Node-RED](./node-red.md) - Flow-based alternative
- [Official YAML Documentation](https://www.home-assistant.io/docs/automation/yaml/)
