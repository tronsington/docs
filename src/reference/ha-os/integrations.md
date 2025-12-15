# Integrations (HA OS)

Integrations connect Home Assistant to devices, services, and platforms.

## Types of Integrations

### Built-in Integrations

Come with Home Assistant. Examples:
- **ZHA** - Zigbee Home Automation
- **Met.no** - Weather data
- **Sun** - Sunrise/sunset tracking
- **Mobile App** - HA Companion app

Add via: **Settings → Devices & Services → Add Integration**

### Custom Integrations (HACS)

Community-created integrations. Examples:
- **Exergy Canaan** - Canaan miner control
- **HACS** itself
- Thousands of others

Installed via HACS after adding to Home Assistant.

## Key Integrations for Hashrate Heating

### Exergy Canaan (Required)

Controls Canaan Avalon miners.

**Installation:**
1. Install HACS (via Terminal add-on)
2. HACS → Integrations → Search "Exergy Canaan"
3. Download, restart, add integration

**Documentation:** [DIY Integrations](../../diy/integrations/exergy-canaan.md)

### ZHA - Zigbee Home Automation (Kit 2)

For Zigbee temperature sensors.

**Installation:** Built-in, add via Settings → Devices & Services

**Requirements:** Zigbee coordinator (included in Kit 2)

**Documentation:** [Home Assistant ZHA](https://www.home-assistant.io/integrations/zha/)

### Weather Integrations

For weather-based automations:

| Integration | Source | Notes |
|-------------|--------|-------|
| Met.no | Norwegian weather | Default, global coverage |
| OpenWeatherMap | OpenWeatherMap | Requires free API key |
| NWS | US National Weather | US only |

### Node-RED Companion

If using Node-RED add-on:
- Exposes HA entities to Node-RED
- Enables automation flows
- Install via HACS

## Managing Integrations

### Adding Integrations

1. **Settings → Devices & Services**
2. **Add Integration**
3. Search for integration
4. Follow setup wizard

### Configuring Integrations

Many integrations configure via UI:
- Click integration card
- **Configure** button
- Modify settings

Some require YAML configuration in `configuration.yaml`.

### Devices and Entities

Integrations create:
- **Devices** - Physical or logical devices
- **Entities** - Individual sensors, switches, etc.

View all: **Settings → Devices & Services → Devices** or **Entities**

### Removing Integrations

1. **Settings → Devices & Services**
2. Click integration card
3. Three dots menu → **Delete**

## Troubleshooting Integrations

### Integration Won't Load

1. Check logs: **Settings → System → Logs**
2. Verify configuration is correct
3. Restart Home Assistant
4. Check for updates

### Entities Unavailable

1. Verify device is powered and connected
2. Check network connectivity
3. Review integration-specific logs
4. Try reloading integration

### HACS Integration Not Found

1. Verify HACS is installed correctly
2. Check repository is added
3. Try refreshing HACS
4. Clear browser cache

## More Information

- [Official Integrations List](https://www.home-assistant.io/integrations/)
- [HACS](https://hacs.xyz/)
- [Exergy Canaan Documentation](../../diy/integrations/exergy-canaan.md)
