# Integrations (Container)

Using integrations with Home Assistant Container installations.

## Integration Compatibility

All Home Assistant integrations work on Container installations:
- Built-in integrations (same as HA OS)
- Custom integrations via HACS
- Manual custom integrations

## Installing Integrations

### Built-in Integrations

Same process as HA OS:
1. **Settings → Devices & Services**
2. **Add Integration**
3. Search and configure

### Custom Integrations (via HACS)

After [installing HACS](./hacs.md):
1. **HACS → Integrations**
2. Search for integration
3. Download
4. Restart Home Assistant
5. Add via **Settings → Devices & Services**

### Manual Custom Integrations

Without HACS:
1. Download integration from GitHub
2. Extract to `custom_components/[integration_name]/`
3. Restart Home Assistant
4. Add via Settings

## Exergy Canaan Integration

### Via HACS (Recommended)

1. Install HACS first
2. **HACS → Integrations → + Explore**
3. Search "Exergy Canaan"
4. Download and restart
5. Add integration with miner IP

### Manual Installation

1. Download from [GitHub](https://github.com/exergyheat)
2. Extract to `custom_components/exergy_canaan/`
3. Restart Home Assistant
4. Add via Settings → Devices & Services

## ZHA (Zigbee)

For Zigbee temperature sensors:

### USB Passthrough

First, ensure USB device is accessible to container:

**Docker run:**
```bash
--device=/dev/ttyUSB0:/dev/ttyUSB0
```

**Docker Compose:**
```yaml
devices:
  - /dev/ttyUSB0:/dev/ttyUSB0
```

### Finding Device Path

On host system:
```bash
ls -la /dev/tty*
# Or check dmesg after plugging in
dmesg | grep tty
```

Common paths:
- `/dev/ttyUSB0` - USB serial adapters
- `/dev/ttyACM0` - USB CDC devices
- `/dev/serial/by-id/...` - Persistent device names

### Configuration

1. Add device to container
2. Restart container
3. **Settings → Devices & Services → Add Integration**
4. Search "ZHA"
5. Select serial port
6. Complete setup

## Weather Integrations

Work identically to HA OS:
- Met.no (default)
- OpenWeatherMap
- National Weather Service

No special container considerations.

## Node-RED Companion

If running Node-RED separately:

1. Ensure network connectivity between containers
2. Install Node-RED Companion via HACS
3. Configure with Node-RED connection details

## Troubleshooting

### Integration Not Loading

Check logs:
```bash
docker logs homeassistant
```

Or in HA: **Settings → System → Logs**

### USB Device Not Found

1. Verify device path on host
2. Check container device mapping
3. Verify permissions
4. Try persistent device name (`/dev/serial/by-id/...`)

### Network Connectivity Issues

For integrations needing network access:
- Verify container network mode
- Check firewall rules
- Ensure DNS resolution works

### Custom Integration Import Error

1. Verify directory structure
2. Check for missing dependencies
3. Review integration requirements
4. Check Home Assistant version compatibility

## More Information

- [Home Assistant Integrations](https://www.home-assistant.io/integrations/)
- [HACS Documentation](https://hacs.xyz/)
- [Exergy Canaan Integration](../../diy/integrations/exergy-canaan.md)
