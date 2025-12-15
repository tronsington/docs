# Home Assistant Brain

The Exergy Home Assistant Brain is a pre-configured smart home controller built on the Raspberry Pi 5 platform. It runs Home Assistant OS and comes ready to integrate with your bitcoin mining heaters.

## Specifications

| Component | Specification |
|-----------|---------------|
| Computer | Raspberry Pi 5 |
| RAM | 8 GB |
| Storage | 256 GB M.2 SSD |
| Case | Argon One V5 with M.2 expansion |
| Power Supply | 40W |

## What's Pre-Configured

- Home Assistant OS (latest stable)
- Exergy Canaan integration (pre-installed via HACS)
- Ready for Zigbee antenna (Kit 2)

## Network Requirements

| Connection | Requirement |
|------------|-------------|
| Ethernet | Required (connect to your router) |
| WiFi | Not used by the hub |

The Home Assistant Brain connects to your network via ethernet. Your mining heaters connect via WiFi (2.4GHz) - they all communicate over your local network.

## Physical Setup

1. Place the hub anywhere with ethernet access
2. Does not need to be near your mining heater (they communicate over your network)
3. Connect ethernet cable to your router
4. Connect power supply
5. Press power button
6. Green light indicates successful boot

## Accessing Your Hub

After boot (usually 2-3 minutes), access Home Assistant via:

- **Web browser**: `http://homeassistant.local:8123`
- **Mobile app**: Home Assistant Companion (iOS/Android)

> **Note:** If `homeassistant.local` doesn't work, you can find the IP address in your router's admin panel.

## Included In

- [Kit 1: Smart Miner Control](../space-heater/kit-1.md)
- [Kit 2: Room Thermostat System](../space-heater/kit-2.md)

## Remote Access

Home Assistant offers several options for accessing your system away from home:

- **Home Assistant Cloud** (~$6.50/month) - Easiest setup, supports Alexa/Google Home
- **VPN** - Free but requires more technical setup
- **Cloudflare Tunnel** - Free, moderate technical difficulty

## Build Your Own

Want to build your own Home Assistant hub? See our [DIY Guide](../../diy/brains/rpi-ha.md) for the complete parts list and assembly instructions.
