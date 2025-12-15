# Avalon Mini 3

Technical reference for the Canaan Avalon Mini 3 bitcoin mining space heater.

## Quick Specs

| Specification | Value |
|---------------|-------|
| Heating Power | 800W (~2,729 BTU/h) |
| Mining Power | Up to 40 TH/s |
| Noise Level | Under 45 dB |
| Dimensions | 30" × 4.1" × 8.5" |
| Electrical | 120V AC (standard outlet) |
| Heating Coverage | ~300 sq ft |
| WiFi | 2.4GHz (via USB dongle) |
| Initial Setup | Bluetooth (Avalon Home app) |

## Detailed Reference

- [Full Specifications](./avalon-mini-3/specs.md)
- [Work Modes](./avalon-mini-3/work-modes.md) - Heating, Mining, Night
- [Work Levels](./avalon-mini-3/work-levels.md) - Eco, Super

## Physical Layout

### Air Flow

| Location | Function |
|----------|----------|
| Bottom | Air intake (cool air in) |
| Front | Air exhaust (hot air out) |

### Connections (Bottom of Unit)

- USB-A port (WiFi dongle)
- Power cable connector
- Power switch

### Mounting

- Feet mounts (included) for floor/surface placement
- Wall mount brackets (included) for wall installation

## API

The Avalon Mini 3 exposes an HTTP API for control and monitoring. This is used by the Exergy Canaan integration.

- [Canaan Avalon Miner API Documentation](https://www.canaan.io/resource/api/getting-started)
