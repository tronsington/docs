# Build Your Own Brain

Build your own Home Assistant controller to replace the Exergy Home Assistant Brain.

## Platform Options

| Platform | Best For | Guide |
|----------|----------|-------|
| [Raspberry Pi](./rpi-ha.md) | Most DIYers, dedicated HA device | Full guide |
| [StartOS](./startos-ha.md) | Bitcoin-native sovereignty stack | Full guide |
| [Umbrel](./umbrel-ha.md) | Existing Umbrel users | Full guide |

## What You Need

### Hardware (Raspberry Pi Path)

| Component | Specification | Est. Cost |
|-----------|---------------|-----------|
| Raspberry Pi 5 | 4GB or 8GB RAM | $60-80 |
| Power Supply | Official 27W USB-C | $12 |
| Storage | 64GB+ microSD or NVMe SSD | $15-50 |
| Case | Any compatible case | $10-40 |
| Ethernet Cable | Cat5e or better | $5 |

**Optional for Kit 2 equivalent:**
| Component | Specification | Est. Cost |
|-----------|---------------|-----------|
| Zigbee Coordinator | Sonoff ZBDongle-E or similar | $20-30 |

Total: ~$100-200 depending on options

### Software

All software is free:
- Home Assistant OS (or Container/Core)
- Exergy Canaan Integration (via HACS)
- Automation blueprints
- Dashboard templates

## Comparison to Exergy Brain

| Feature | Exergy Brain | DIY |
|---------|--------------|-----|
| Setup time | Plug and play | 1-2 hours |
| Pre-configured | Yes | No |
| Hardware warranty | Yes | Component warranties |
| Support | Full Exergy support | Community + docs |
| Cost | Kit price | ~$100-200 |
| Customization | Some | Full |

## Choose Your Path

### Raspberry Pi + Home Assistant OS

**Best for:** Dedicated HA device, most similar to Exergy Brain

This is the path our kits use. You'll end up with essentially the same system we sell, but built yourself.

[Raspberry Pi Guide →](./rpi-ha.md)

### StartOS + Home Assistant

**Best for:** Users who want HA alongside their Bitcoin node

Run Home Assistant as a service on StartOS, Integrated with your sovereign computing stack.

[StartOS Guide →](./startos-ha.md)

### Umbrel + Home Assistant

**Best for:** Existing Umbrel users

Add Home Assistant to your existing Umbrel installation as an app.

[Umbrel Guide →](./umbrel-ha.md)

## Other Platforms

Home Assistant runs on many platforms:
- Docker on any Linux system
- Virtual machine on Windows/Mac
- Old laptops or mini PCs
- Proxmox, TrueNAS, Synology...

The Exergy integrations work on any Home Assistant installation. Our guides focus on common paths, but the concepts apply anywhere.

See the [official Home Assistant installation guide](https://www.home-assistant.io/installation/) for all options.
