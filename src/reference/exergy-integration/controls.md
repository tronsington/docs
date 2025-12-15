# Controls

Available control entities from the Exergy Canaan integration.

## Power Switch

| Attribute | Value |
|-----------|-------|
| Entity Type | `switch` |
| Example Entity | `switch.avalon_mini_3_power` |
| States | `on`, `off` |

Turns the miner on or off.

### Services

```yaml
# Turn on
service: switch.turn_on
target:
  entity_id: switch.avalon_mini_3_power

# Turn off
service: switch.turn_off
target:
  entity_id: switch.avalon_mini_3_power

# Toggle
service: switch.toggle
target:
  entity_id: switch.avalon_mini_3_power
```

---

## Work Mode

| Attribute | Value |
|-----------|-------|
| Entity Type | `select` |
| Example Entity | `select.avalon_mini_3_work_mode` |
| Options | `Heating`, `Mining`, `Night` |

Selects the operating mode. See [Work Modes](../avalon-mini-3/work-modes.md) for details on each mode.

### Services

```yaml
service: select.select_option
target:
  entity_id: select.avalon_mini_3_work_mode
data:
  option: "Heating"
```

---

## Work Level

| Attribute | Value |
|-----------|-------|
| Entity Type | `select` |
| Example Entity | `select.avalon_mini_3_work_level` |
| Options | `Eco`, `Super` |

Selects the power level. See [Work Levels](../avalon-mini-3/work-levels.md) for details on each level.

### Services

```yaml
service: select.select_option
target:
  entity_id: select.avalon_mini_3_work_level
data:
  option: "Super"
```

---

## Update Button

| Attribute | Value |
|-----------|-------|
| Entity Type | `button` |
| Example Entity | `button.avalon_mini_3_update` |

Manually refreshes sensor data from the miner. Normally data updates automatically on a schedule.

### Services

```yaml
service: button.press
target:
  entity_id: button.avalon_mini_3_update
```

---

## Reboot Button

| Attribute | Value |
|-----------|-------|
| Entity Type | `button` |
| Example Entity | `button.avalon_mini_3_reboot` |

Restarts the miner. Use with caution - the miner will be offline briefly during reboot.

### Services

```yaml
service: button.press
target:
  entity_id: button.avalon_mini_3_reboot
```

---

## Using Controls in Automations

Example automation using controls:

```yaml
automation:
  - alias: "Night Mode at Bedtime"
    trigger:
      - platform: time
        at: "22:00:00"
    action:
      - service: select.select_option
        target:
          entity_id: select.avalon_mini_3_work_mode
        data:
          option: "Night"
      - service: select.select_option
        target:
          entity_id: select.avalon_mini_3_work_level
        data:
          option: "Eco"
```
