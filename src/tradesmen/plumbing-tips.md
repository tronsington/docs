# Hydronic/Plumbing Tips

Working with hashrate heating in radiant and boiler systems.

## Kit 4 Overview

Kit 4 (Radiant Boiler Buddy) uses liquid-cooled mining to heat hydronic systems:

```
[Heat Core] → [Pump] → [Radiant/Radiators] → [Return]
     ↑                                           |
     └───────────────────────────────────────────┘
```

## System Configurations

### Standalone (Primary Heat)

Heat Core provides all heat for a zone:
- New radiant floor installation
- Adding a heated zone
- Small/well-insulated spaces

```
[Heat Core] → [Pump] → [Manifold] → [Radiant Loops] → [Return]
```

### Buddy Mode (Two-Stage)

Heat Core works alongside existing boiler:
- First stage: Heat Core provides baseline
- Second stage: Boiler supplements as needed

```
                  [Heat Core]
                      ↓
[Return] → [Mixing] → [Supply] → [Radiant/Radiators]
              ↑
          [Boiler]
```

## Plumbing Components

### Required Components

| Component | Purpose |
|-----------|---------|
| Circulation pump | Moves fluid through system |
| Expansion tank | Handles thermal expansion |
| Pressure relief | Safety valve |
| Air separator | Removes air from system |
| Fill valve | Initial fill and makeup water |

### Flow Control

| Component | Purpose |
|-----------|---------|
| Zone valves | Control flow to zones |
| Mixing valve | Blend supply temperature |
| Balancing valves | Equalize flow across zones |
| Check valves | Prevent backflow |

## Heat Core Integration

### Fluid Requirements

| Parameter | Specification |
|-----------|---------------|
| Fluid type | Water or water/glycol mix |
| Glycol | Required if freeze risk |
| pH | Maintain 7.0-8.5 |
| Flow rate | Per manufacturer spec |

### Connection Points

- Standard plumbing fittings (consult specs)
- Unions for serviceability
- Isolation valves for maintenance
- Drain valve at low point

### Temperature Limits

The Heat Core outputs at a specific temperature range:
- Check manufacturer specifications
- May need mixing valve if output exceeds floor limits
- Radiant floors typically max at 85-90°F supply

## Radiant Floor Integration

### Supply Temperature

| Floor Type | Max Supply Temp |
|------------|-----------------|
| Concrete slab | 85-90°F |
| Gypcrete | 85°F |
| Wood subfloor | 80-85°F |

### Mixing Requirements

If Heat Core output exceeds safe floor temperature:
- Install thermostatic mixing valve
- Blend return water to achieve safe supply temp
- Monitor supply temperature

### Manifold Considerations

- Connect Heat Core to manifold supply
- Ensure adequate flow to all loops
- Balance flow across zones

## Existing Boiler Integration

### Piping Options

**Primary/Secondary:**
- Heat Core on primary loop
- Boiler on secondary loop
- Each has dedicated pump
- Hydraulically separated

**Series:**
- Heat Core pre-heats return
- Boiler boosts as needed
- Simpler piping
- Requires compatible flow rates

### Control Strategy

1. Thermostat calls for heat
2. Home Assistant activates Heat Core
3. If supply temp inadequate, boiler fires
4. Both can operate simultaneously
5. Boiler provides backup if Heat Core offline

## Silent Operation Advantage

Unlike air-cooled miners:
- No fan noise
- Can be located in mechanical room
- Noise-sensitive locations possible
- Placement based on plumbing convenience

## Water Quality

### Initial Fill

- Use distilled or demineralized water
- Or treat with appropriate inhibitor
- Add glycol if any freeze risk

### Ongoing Maintenance

- Test pH annually
- Check glycol concentration before winter
- Monitor for leaks
- Air removal as needed

## Freeze Protection

If system could freeze (seasonal use, power outage risk):
- Use propylene glycol mix (food-safe)
- Typically 30-50% glycol depending on climate
- Adjust for lowest expected temperature
- Glycol reduces heat transfer efficiency slightly

## Professional Considerations

### Licensing

- Plumbing work may require licensed plumber
- Varies by jurisdiction
- Check local requirements

### Permits

- New hydronic systems often require permit
- Modifications to existing may or may not
- Consult local building department

### Documentation

- System schematic
- Component specifications
- Settings and setpoints
- Maintenance schedule

### Commissioning

- Pressure test before fill
- Purge air from system
- Verify pump operation
- Check zone valve operation
- Test control logic
- Document baseline performance

## Getting Support

For hydronic system design and integration:
- **[Install Assistance](../services/install-assistance.md)** - Remote guidance during install
- **[Project Consulting](../services/consulting.md)** - Custom system design
