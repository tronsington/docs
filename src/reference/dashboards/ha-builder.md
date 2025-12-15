# HA Dashboard Builder

Home Assistant's visual dashboard editor.

## Accessing the Builder

1. Navigate to your dashboard
2. Click three dots (top right)
3. Select **Edit Dashboard**

## Creating a Dashboard

### New Dashboard

1. **Settings → Dashboards**
2. **Add Dashboard**
3. Choose type:
   - **Default** - Standard dashboard
   - **Sections** - Modern grid layout (recommended)
4. Name your dashboard
5. Choose icon

### Using Default Dashboard

Home Assistant creates a default "Overview" dashboard. You can:
- Use as-is (auto-generated)
- Take control and customize
- Create additional dashboards

## Adding Cards

### Method 1: Add Card Button

1. Enter edit mode
2. Click **+ Add Card**
3. Select card type
4. Configure card
5. Save

### Method 2: Suggested Cards

HA suggests cards based on your entities:
1. Click **+ Add Card**
2. Review suggestions
3. Click to add

## Common Cards

### Entities Card

List multiple entities:
1. Add Card → Entities
2. Add entities to display
3. Customize names/icons

### Gauge Card

Circular gauge for numbers:
1. Add Card → Gauge
2. Select numeric entity
3. Set min/max/severity

### Button Card

Action buttons:
1. Add Card → Button
2. Select entity or action
3. Customize appearance

### History Graph

Show entity history:
1. Add Card → History Graph
2. Select entities
3. Set time range

### Thermostat Card

For climate entities:
1. Add Card → Thermostat
2. Select climate entity
3. Adjust appearance

## Layout Tips

### Sections Layout

Modern, responsive design:
- Drag cards to rearrange
- Cards auto-size
- Groups with headers

### Card Width

In masonry layout:
- Edit card → Layout tab
- Set column width

### Card Visibility

Show/hide cards conditionally:
- Edit card → Visibility tab
- Add conditions

## Organizing Dashboards

### Multiple Views

Create tabs for different areas:
1. Edit mode
2. Click **+** to add view
3. Name and configure

### View Types

- **Sections** - Grid layout (recommended)
- **Masonry** - Flowing columns
- **Panel** - Single card maximized

## Theming

### Card Appearance

Many cards support:
- Color customization
- Icon changes
- Name overrides

### Dashboard Theme

Use themes from HACS:
1. Install theme via HACS
2. Settings → Dashboards → Theme

## Mobile Considerations

### Companion App

Home Assistant Companion provides:
- Native mobile access
- Widgets for quick actions
- Notifications

### Responsive Design

Sections layout adapts to screen size automatically.

## Example: Miner Control Dashboard

### View 1: Overview

Cards:
- Gauge: Room temperature
- Gauge: Hashrate
- Button: Power on/off
- Entities: Mode, level, status

### View 2: Details

Cards:
- History graph: Temperatures over 24h
- History graph: Power usage
- Entities: All sensor readings

### View 3: Automation Control

Cards:
- Buttons: Run automations
- Entities: Input helpers (setpoints)
- Schedule: Weekly schedule

## More Information

- [YAML Dashboards](./yaml.md) - Text-based alternative
- [DIY Templates](../../diy/dashboards.md) - Pre-built examples
- [Official Documentation](https://www.home-assistant.io/dashboards/)
