# HVAC Integration Tips

Working with hashrate heating in forced-air systems.

## Kit 3 Overview

Kit 3 (Forced Air HVAC Buddy) integrates a bitcoin miner into existing ductwork:

```
[Return Air] → [Avalon Q] → [Supply Plenum] → [Ducts] → [Rooms]
                   ↓
            [Existing Furnace]
```

## Two-Stage Heating Concept

### First Stage: Mining
- Avalon Q provides baseline heat to return air
- Runs continuously during heating demand
- Generates bitcoin while heating

### Second Stage: Furnace
- Existing furnace activates when miner can't maintain temp
- Provides boost heat for cold snaps
- Unchanged from original operation

### Control Logic
1. Thermostat calls for heat
2. Home Assistant activates miner
3. If temperature not reached in X minutes, furnace activates
4. Miner continues running alongside furnace
5. When satisfied, both turn off (or miner continues for mining)

## Duct Integration Points

### Return Air Integration
- Miner heats return air before it enters supply plenum
- Requires space in return air path
- Filter should be BEFORE the miner
- Ensure adequate airflow across miner

### Supply Plenum Integration
- Alternative: miner feeds directly into supply plenum
- May require duct modifications
- Consider airflow direction and mixing

## Airflow Considerations

### Minimum Airflow
Mining equipment needs adequate airflow:
- Check manufacturer CFM requirements
- Ensure blower can provide required airflow
- May need to run blower continuously during mining

### Static Pressure
Adding equipment to ductwork increases static pressure:
- Measure existing static pressure
- Account for miner's pressure drop
- May need blower adjustment or duct modifications

### Air Balancing
- Miner adds heat at one point
- Rooms closer to miner may be warmer
- May need damper adjustment for balance

## Electrical Integration

### Separate Circuit
- Avalon Q requires dedicated 240V circuit
- Do not share with furnace circuit
- Install disconnect for service

### Control Wiring
- Home Assistant controls miner via network (not hardwired)
- Existing thermostat can remain for furnace control
- Or integrate everything through Home Assistant

## Furnace Compatibility

### Compatible Systems
- Gas furnaces (most common)
- Propane furnaces
- Electric furnaces
- Heat pumps (as backup mode)

### Considerations by Type

**Gas/Propane:**
- Miner provides first stage heat
- Furnace fires only when needed
- Reduces fuel consumption

**Electric Furnace:**
- Both are electric, no fuel savings
- Consider if miner revenue offsets electric cost
- May still want two-stage for capacity

**Heat Pump:**
- Miner provides heat when heat pump struggles (low temps)
- Can reduce reliance on emergency heat strips
- Complex integration - consult Exergy

## Thermostat Integration

### Option 1: Separate Controls
- Existing thermostat controls furnace (set lower)
- Home Assistant controls miner (set higher)
- Simple, no modification to existing system

### Option 2: Unified Control
- Home Assistant becomes primary controller
- Manages both miner and furnace staging
- Requires thermostat integration or replacement
- More sophisticated automations possible

## Professional Considerations

### Code Compliance
- Duct modifications may require permit
- Electrical work requires licensed electrician
- HVAC modifications may require licensed HVAC contractor

### Documentation
- Photograph existing system before modifications
- Record airflow measurements before/after
- Document control logic and settings

### Commissioning
- Test all operating modes
- Verify furnace operation unchanged when miner off
- Confirm staging behavior
- Test failure scenarios (what happens if miner goes offline)

## Getting Support

For complex HVAC integrations:
- **[Install Assistance](../services/install-assistance.md)** - Remote guidance during install
- **[Project Consulting](../services/consulting.md)** - Custom system design
