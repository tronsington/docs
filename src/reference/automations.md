# Automations

Ways to automate your hashrate heating system in Home Assistant.

## Automation Options

| Method | Best For | Complexity |
|--------|----------|------------|
| [HA Automation Builder](./automations/ha-builder.md) | Most users | Low |
| [YAML Automations](./automations/yaml.md) | Power users | Medium |
| [Node-RED](./automations/node-red.md) | Complex logic | Medium-High |

## Automation Basics

All automations have three parts:

### Triggers

*When* the automation runs:
- Time-based (at 6pm, every hour)
- State changes (temperature dropped below X)
- Events (button pressed, sun set)
- Device actions (motion detected)

### Conditions

*Only if* criteria are met:
- Time window (only between 6pm-10pm)
- State check (only if miner is off)
- Numeric comparison (only if temp below 68°F)

### Actions

*What* happens:
- Turn device on/off
- Set values (mode, temperature)
- Send notifications
- Call services

## Common Hashrate Heating Automations

### Time-of-Use Optimization

Run during cheap electricity, reduce during peak:

```
Trigger: Time reaches 4pm (peak starts)
Action: Set miner to Eco mode

Trigger: Time reaches 9pm (off-peak starts)
Action: Set miner to Super mode
```

### Weather-Based Heating

Adjust based on outdoor temperature:

```
Trigger: Outdoor temp drops below 40°F
Action: Turn miner on

Trigger: Outdoor temp rises above 55°F
Action: Turn miner off
```

### Room Thermostat (Kit 2)

Maintain room temperature:

```
Trigger: Room temp drops below setpoint - 1°F
Action: Turn miner on

Trigger: Room temp rises above setpoint + 1°F
Action: Turn miner off
```

### Night Mode Schedule

Quiet operation at night:

```
Trigger: Time reaches 10pm
Action: Set miner to Night mode

Trigger: Time reaches 7am
Action: Set miner to Heating mode
```

## Blueprints

Blueprints are pre-made automation templates:
- Import and customize
- No automation building required
- Share with community

See [DIY Blueprints](../diy/blueprints.md) for available templates.

## Choosing a Method

### Use HA Automation Builder When:
- Creating simple automations
- Comfortable with visual interfaces
- Want easy maintenance

### Use YAML When:
- Need advanced conditions
- Want version-controlled automations
- Sharing/backing up automations

### Use Node-RED When:
- Complex logic flows
- Conditional branching
- Integration with non-HA systems
- Visual debugging needed

## More Information

- [HA Automation Builder](./automations/ha-builder.md)
- [YAML Automations](./automations/yaml.md)
- [Node-RED](./automations/node-red.md)
- [Official Automation Documentation](https://www.home-assistant.io/docs/automation/)
