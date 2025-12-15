# Dashboards

Building control interfaces in Home Assistant.

## Dashboard Overview

Home Assistant dashboards display information and provide controls for your smart home. Multiple dashboard types are available:

| Method | Best For | Complexity |
|--------|----------|------------|
| [HA Dashboard Builder](./dashboards/ha-builder.md) | Most users | Low |
| [YAML Dashboards](./dashboards/yaml.md) | Power users | Medium |

## Dashboard Concepts

### Views

Views are tabs/pages within a dashboard:
- Organize by room
- Organize by function
- Multiple views per dashboard

### Cards

Cards are UI elements:
- Display entity states
- Provide controls
- Show graphs/history
- Custom layouts

### Entities

Entities are what cards display:
- Sensors (temperature, power, etc.)
- Switches (on/off controls)
- Selects (mode selection)
- Buttons (actions)

## Common Cards for Hashrate Heating

### Entity Card

List of entities with states:
- Miner status
- Temperature readings
- Mode selections

### Gauge Card

Circular gauge for numeric values:
- Temperature
- Hashrate
- Power consumption

### Thermostat Card

Climate control interface:
- Temperature display
- Setpoint adjustment
- Works with climate entities

### History Graph

Show entity history:
- Temperature over time
- Power usage patterns
- Mining performance

### Button Card

Trigger actions:
- Turn miner on/off
- Set specific modes
- Run automations

## Dashboard Layout

### Sections (Recommended)

Modern grid-based layout:
- Automatic responsive design
- Drag-and-drop arrangement
- Best for most users

### Masonry

Cards flow into columns:
- Classic HA look
- Manual sizing
- Good for complex layouts

### Panel

Single card per view:
- Maximize single element
- Good for custom cards

## Custom Cards (HACS)

Extend dashboards with community cards:

### Popular Options

- **mini-graph-card** - Compact, beautiful graphs
- **mushroom** - Modern card collection
- **button-card** - Highly customizable buttons
- **apexcharts-card** - Advanced charting

Install via HACS → Frontend.

## Dashboard Examples

See [DIY Dashboards](../diy/dashboards.md) for:
- Pre-built templates
- Configuration examples
- Live demo link

## More Information

- [HA Dashboard Builder](./dashboards/ha-builder.md)
- [YAML Dashboards](./dashboards/yaml.md)
- [DIY Dashboard Templates](../diy/dashboards.md)
- [Official Dashboard Documentation](https://www.home-assistant.io/dashboards/)
