# Exergy Canaan Integration

Reference documentation for the Exergy Canaan Avalon Miner integration for Home Assistant.

## Overview

The Exergy Canaan integration connects your Avalon Mini 3 to Home Assistant, providing:
- Real-time monitoring of all miner sensors
- Control over power, modes, and levels
- Integration with Home Assistant automations

## Requirements

- Home Assistant (any recent version)
- Avalon Mini 3 on local network
- Miner's IP address

## Installation

The integration is pre-installed on Exergy Home Assistant Hubs.

For DIY installations, see [Open Source Integration](../open-source/integrations/exergy-canaan.md).

## Configuration

| Parameter | Required | Description |
|-----------|----------|-------------|
| IP Address | Yes | Local IP of your Avalon Mini 3 |
| Password | If changed | Device password (if changed from default) |

## Available Entities

- [Controls](./exergy-integration/controls.md) - Switches, selects, and buttons
- [Sensors](./exergy-integration/sensors.md) - Temperature, hashrate, power, etc.

## Entity Naming

Entities are created with the pattern:
```
[domain].[device_name]_[entity_type]
```

Example: `switch.avalon_mini_3_power`

The device name is based on how the integration identifies your miner.

## Multiple Miners

Each miner is added as a separate entry in the integration. Each creates its own set of entities.

To add another miner:
1. Go to Settings → Devices & Services
2. Find Exergy Canaan integration
3. Click "Add Entry"
4. Enter the new miner's IP address

## API Reference

The integration uses the Canaan Avalon Miner API:
- [Official API Documentation](https://www.canaan.io/resource/api/getting-started)
