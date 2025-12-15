# Kit 4: Radiant Boiler Buddy

*Coming soon*

Add bitcoin mining to your hydronic heating system.

## Concept

Kit 4 integrates a liquid-cooled bitcoin miner with your radiant floor heating or baseboard system. Use it as a standalone heat source or pair it with your existing boiler.

## Expected Components

| Component | Description |
|-----------|-------------|
| Heat Core HS05 | Liquid-cooled bitcoin miner |
| Home Assistant Brain | Smart controller |
| Circulation Pump | Moves heated fluid |
| Expansion Tank | Safety component |
| Temperature Sensors | Monitor fluid temps |
| Control Valves | Manage flow |

## How It Works

### Standalone Mode

```
[Heat Core] → [Pump] → [Radiant Floors/Radiators] → [Return]
     ↑                                                   |
     └───────────────────────────────────────────────────┘
```

The Heat Core provides all the heat for a zone. Best for:
- New construction
- Adding a heated zone
- Smaller spaces

### Buddy Mode (Two-Stage)

```
[Heat Core] → [Mixing Valve] → [Radiant Floors] → [Return]
                    ↑                                 |
           [Existing Boiler]                          |
                    ↑                                 |
                    └─────────────────────────────────┘
```

1. **First Stage**: Heat Core provides baseline heat
2. **Second Stage**: Existing boiler supplements when needed
3. **Smart Control**: Home Assistant orchestrates both sources

## Benefits

- **Silent operation** - Liquid cooling means no fan noise
- **Efficient heat transfer** - Direct to fluid, no air exchange losses
- **Bitcoin revenue** - Offset heating costs with mining
- **Backup heat** - Existing boiler available when needed (buddy mode)

## Requirements

- Hydronic heating system (radiant or baseboard)
- Adequate space for Heat Core unit
- 240V electrical circuit (typically)
- Plumbing connections (standard fittings)

## Professional Installation

Kit 4 requires professional plumbing/HVAC installation. Exergy provides:

- **[Install Assistance](../../services/install-assistance.md)** - Remote guidance for your contractor
- **[Project Consulting](../../services/consulting.md)** - Custom system design

## Interested?

This product is currently in development.

**[Contact Exergy](https://exergyheat.com/contact)** to discuss your hydronic integration project or join the waitlist.
