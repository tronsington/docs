# Node-RED

Visual flow-based programming for complex automations.

## What is Node-RED?

Node-RED is a flow-based development tool that lets you wire together devices, APIs, and services using a visual editor. It's an alternative to Home Assistant's built-in automations.

## When to Use Node-RED

**Good for:**
- Complex conditional logic
- Multiple branches and paths
- Debugging with visual flow
- Integration with external services
- Experienced programmers

**Overkill for:**
- Simple time-based automations
- Basic on/off controls
- Users new to automation

## Installation

### On HA OS

1. **Settings → Add-ons → Add-on Store**
2. Search "Node-RED"
3. Install and start

### On HA Container

Run Node-RED as a separate container:

```yaml
# docker-compose.yml
nodered:
  image: nodered/node-red
  volumes:
    - ./nodered:/data
  ports:
    - "1880:1880"
```

### Node-RED Companion Integration

Required for HA entity access:

1. Install via HACS
2. **HACS → Integrations → Node-RED Companion**
3. Configure in Home Assistant

## Basic Concepts

### Flows

Flows are automation sequences:
- Left to right execution
- Nodes connected by wires
- Multiple branches possible

### Nodes

Nodes are individual operations:
- **Input nodes** - Start flows (HA events, time, etc.)
- **Processing nodes** - Logic, filtering, transformation
- **Output nodes** - Actions (call service, etc.)

### Messages

Data flows through wires as messages:
- `msg.payload` - Main data
- `msg.topic` - Context/category
- Custom properties as needed

## Home Assistant Nodes

Node-RED includes HA-specific nodes:

### Events: state

Triggers when entity state changes.

### Call service

Calls Home Assistant services.

### Current state

Gets current state of an entity.

### Entity

Creates HA entities from Node-RED.

## Example: Thermostat Logic

```
[state node: temperature]
    → [switch node: below/above threshold]
        → below → [call service: turn on miner]
        → above → [call service: turn off miner]
```

Visual representation:
```
┌──────────────┐     ┌─────────────┐     ┌────────────────┐
│ events:state │────▶│   switch    │──▶──│ call service   │
│  (temp)      │     │ (below 68?) │     │ (turn on)      │
└──────────────┘     └──────┬──────┘     └────────────────┘
                            │
                            ▼
                     ┌────────────────┐
                     │ call service   │
                     │ (turn off)     │
                     └────────────────┘
```

## Example: Time-of-Use with Override

```
[inject: every hour]
    → [function: check time & override]
        → peak → [call service: eco mode]
        → off-peak → [call service: super mode]
        → override → [no action]
```

Function node code:
```javascript
const hour = new Date().getHours();
const override = global.get('heating_override');

if (override) {
    return [null, null, msg]; // Override path
} else if (hour >= 16 && hour < 21) {
    return [msg, null, null]; // Peak path
} else {
    return [null, msg, null]; // Off-peak path
}
```

## Debugging

Node-RED excels at debugging:

### Debug Nodes

Add debug nodes to see message contents:
- Wire from any point in flow
- View in debug sidebar

### Flow Highlighting

When deployed, see which nodes are triggered in real-time.

### Node Status

Many nodes show current status below them.

## Best Practices

### Organize Flows

- Use subflows for reusable logic
- Comment nodes and flows
- Group related automations

### Error Handling

- Add catch nodes for errors
- Use status nodes for monitoring
- Log important events

### Performance

- Avoid tight loops
- Rate-limit rapid triggers
- Use filter nodes to deduplicate

## Resources

- [Node-RED Documentation](https://nodered.org/docs/)
- [HA Node-RED Integration](https://www.home-assistant.io/integrations/nodered/)
- [Node-RED Cookbook](https://cookbook.nodered.org/)

## More Information

- [HA Automation Builder](./ha-builder.md) - Simpler visual option
- [YAML Automations](./yaml.md) - Text-based option
