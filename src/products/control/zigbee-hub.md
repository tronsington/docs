# Zigbee Hub

Add wireless temperature sensing and device control to your Home Assistant Brain.

## What It Does

The Zigbee Hub is a GPIO antenna hat that connects to your Home Assistant Brain, enabling:

- **Wireless sensors** - Temperature, humidity, motion, door/window sensors
- **Smart devices** - Zigbee-compatible plugs, bulbs, switches
- **Mesh networking** - Devices extend range by relaying signals
- **Local control** - No cloud required

## Specifications

| Spec | Value |
|------|-------|
| Protocol | Zigbee 3.0 |
| Range | ~30 meters (line of sight) |
| Connection | GPIO pins on Raspberry Pi |
| Devices | Supports 100+ simultaneous devices |

## Included Temperature Sensor

Kit 2 includes a Zigbee temperature/humidity sensor:

| Spec | Value |
|------|-------|
| Measurements | Temperature, humidity |
| Battery | CR2032 (1-2 year life) |
| Update interval | ~5 minutes (configurable) |
| Range | ~30m from hub or nearest repeater |

## How It Works

1. The Zigbee antenna connects to your Home Assistant Brain via GPIO pins
2. Home Assistant's ZHA (Zigbee Home Automation) integration manages devices
3. Sensors and devices pair with a simple button press
4. Data flows locally - no cloud connection required

## Extending Range

The included antenna provides ~30m range. For larger spaces:

- **Zigbee repeaters** - Many smart plugs and bulbs act as repeaters
- **Router devices** - Permanently-powered Zigbee devices extend the mesh
- **Multiple coordinators** - Advanced users can run multiple Zigbee networks

## Included In

- [Kit 2: Room Thermostat System](../space-heater/kit-2.md)

## Sensor Placement Tips

For accurate room temperature readings:

- Place at average height (3-5 feet from floor)
- Away from direct sunlight or heat sources
- Away from the heater's exhaust path
- Representative of where you want temperature controlled
- Within range of the hub or a Zigbee repeater

## Compatible Devices

Any Zigbee 3.0 device should work. Popular options:

- **Sensors**: Aqara, Sonoff, IKEA Tradfri
- **Plugs**: IKEA Tradfri, Sonoff, Innr
- **Bulbs**: Philips Hue, IKEA Tradfri, Sengled

See the [Home Assistant ZHA documentation](https://www.home-assistant.io/integrations/zha/) for device compatibility.
