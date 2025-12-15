# Electrical Considerations

Electrical planning for hashrate heating installations.

## Equipment Power Requirements

| Equipment | Voltage | Max Power | Typical Circuit |
|-----------|---------|-----------|-----------------|
| Avalon Mini 3 | 120V | 800W | 15A standard |
| Home Assistant Brain | 120V | 40W | Any outlet |
| Avalon Q | 240V | 2,000-3,000W | 20-30A dedicated |
| Heat Core HS05 | 240V | ~5,000W | 30A dedicated |

## Residential Circuit Planning

### The 80% Rule

NEC requires continuous loads (3+ hours) not exceed 80% of circuit capacity:

| Circuit | Max Capacity | Continuous Limit |
|---------|--------------|------------------|
| 15A @ 120V | 1,800W | 1,440W |
| 20A @ 120V | 2,400W | 1,920W |
| 20A @ 240V | 4,800W | 3,840W |
| 30A @ 240V | 7,200W | 5,760W |

### Avalon Mini 3 Per Circuit

| Miners | Total Load | 15A Circuit | 20A Circuit |
|--------|------------|-------------|-------------|
| 1 | 800W | OK | OK |
| 2 | 1,600W | At limit* | OK |
| 3 | 2,400W | No | At limit* |

*Exceeds 80% rule - not recommended for continuous operation

**Recommendation**: Maximum 1 Avalon Mini 3 per 15A circuit for code-compliant continuous operation.

### Multi-Unit Installations

For 2+ miners, plan for:
- Dedicated circuits for each miner, OR
- 20A circuits with maximum 2 miners each
- Consider panel capacity and available breaker spaces

## Shared Circuit Awareness

Residential circuits often serve multiple outlets. Account for:
- Other devices on the same circuit
- Seasonal loads (window AC, portable heaters)
- Intermittent loads (vacuum, hair dryer)

When in doubt, use a dedicated circuit.

## Extension Cords

If extension cords are necessary:

| Requirement | Specification |
|-------------|---------------|
| Minimum rating | 15A / 1,875W |
| Gauge | 14 AWG or heavier |
| Length | As short as possible |
| Type | Heavy-duty, grounded |

**Avoid**:
- Daisy-chaining cords
- Running under rugs/carpet
- Coiling excess cord (heat buildup)
- Indoor/outdoor substitution

**Best practice**: Direct wall outlet connection.

## Signs of Electrical Problems

Instruct customers to stop use and contact electrician if:
- Outlet feels warm or hot
- Burning smell
- Flickering lights when unit runs
- Frequent breaker trips
- Discolored or melted outlet/plug

## 240V Installations (Kit 3, Kit 4)

Higher-power equipment requires dedicated 240V circuits:

- **Avalon Q**: 20-30A @ 240V, NEMA 6-20 or 6-30
- **Heat Core**: 30A @ 240V, NEMA 6-30 or hardwired

These require licensed electrical work in most jurisdictions.

## Home Assistant Brain

The controller requires minimal power (40W) but needs:
- **Ethernet connection** - Plan cable routing to router
- **Reliable power** - Consider UPS for uptime during brief outages
- **Physical access** - For initial setup and troubleshooting

## Documentation

For permits or inspections, note:
- Equipment is UL listed / CSA certified
- Continuous duty rating
- Manufacturer specifications
- No gas, no venting, no combustion
