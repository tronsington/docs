# Home Assistant Container

Running Home Assistant as a Docker container, typically on existing Linux systems like StartOS or Umbrel.

## Differences from HA OS

| Feature | HA OS | HA Container |
|---------|-------|--------------|
| Add-ons | Yes (Supervisor) | No |
| HACS | Yes | Yes |
| Custom Integrations | Yes | Yes |
| Updates | One-click | Manual/Docker |
| System management | Supervisor UI | Host system |

## When to Use Container

- Running on existing server (StartOS, Umbrel, NAS)
- Alongside other Docker services
- Need more host system control
- Resource-constrained environments

## Key Concepts

### No Supervisor/Add-ons

Without the Supervisor, you don't have access to add-ons. Alternatives:

| Add-on Equivalent | Container Alternative |
|-------------------|----------------------|
| File Editor | Host text editor, VS Code Remote |
| Terminal & SSH | Host terminal |
| Node-RED | Separate Docker container |
| Samba | Host-level sharing |

### Configuration Access

Configuration files located at your mapped volume:
- Usually `/path/to/config` on host
- Access via host file system
- No built-in file editor

### Updates

Updates are manual:
```bash
docker pull homeassistant/home-assistant:stable
docker stop homeassistant
docker rm homeassistant
# Re-run docker run command with same config
```

Or use Docker Compose with:
```bash
docker-compose pull
docker-compose up -d
```

## HACS on Container

HACS works on container installations:

1. Access container shell or config directory
2. Download HACS manually
3. Place in `custom_components` folder
4. Restart Home Assistant
5. Add HACS integration via UI

See [HACS Documentation](./ha-container/hacs.md) for details.

## Integrations

All integrations work the same as HA OS:
- Built-in integrations available
- Custom integrations via HACS
- Exergy Canaan integration supported

See [Integrations Documentation](./ha-container/integrations.md) for details.

## Platform-Specific Guides

### StartOS

Home Assistant runs as a managed service:
- Install from StartOS marketplace
- Updates through StartOS
- Configuration via StartOS interface

See [StartOS + HA DIY Guide](../diy/brains/startos-ha.md)

### Umbrel

Home Assistant runs as an Umbrel app:
- Install from Umbrel app store
- Updates through Umbrel
- Some add-on alternatives available as separate apps

See [Umbrel + HA DIY Guide](../diy/brains/umbrel-ha.md)

### Generic Docker

For custom Docker setups:

```yaml
# docker-compose.yml example
version: '3'
services:
  homeassistant:
    container_name: homeassistant
    image: homeassistant/home-assistant:stable
    volumes:
      - /path/to/config:/config
    environment:
      - TZ=America/New_York
    restart: unless-stopped
    network_mode: host
```

## USB Device Access

For Zigbee coordinators or other USB devices:

### Docker Run
```bash
docker run ... --device=/dev/ttyUSB0:/dev/ttyUSB0 ...
```

### Docker Compose
```yaml
devices:
  - /dev/ttyUSB0:/dev/ttyUSB0
```

Device paths vary by system. Check `dmesg` after plugging in device.

## More Information

- [HACS on Container](./ha-container/hacs.md)
- [Integrations on Container](./ha-container/integrations.md)
- [Official Container Installation](https://www.home-assistant.io/installation/linux#docker-compose)
