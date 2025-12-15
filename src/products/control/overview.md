# Smart Home Control

The brain of your hashrate heating system. Our smart home controllers run Home Assistant to monitor and automate your bitcoin mining heaters.

## Why Home Assistant?

[Home Assistant](https://www.home-assistant.io/) is the most popular open-source home automation platform. It runs locally on your network, keeping your data private while giving you powerful automation capabilities.

## Available Controllers

| Controller | Platform | Best For |
|------------|----------|----------|
| [Home Assistant Brain](./ha-brain.md) | Home Assistant OS | Most users - plug and play |
| [StartOS Brain](./startos-brain.md) | StartOS + HA | Bitcoin-focused self-sovereignty |
| [Zigbee Hub](./zigbee-hub.md) | Add-on | Room temperature sensing |

## Home Assistant Brain

Our flagship controller. A pre-configured Raspberry Pi 5 running Home Assistant OS with the Exergy Canaan integration pre-installed.

**Included in:** [Kit 1](../space-heater/kit-1.md), [Kit 2](../space-heater/kit-2.md)

[Learn more →](./ha-brain.md)

## StartOS Brain

For users who want their smart home on a Bitcoin-native operating system. Runs Home Assistant as a service on StartOS.

*Coming soon*

[Learn more →](./startos-brain.md)

## Zigbee Hub

Add wireless temperature sensing to your system. The Zigbee antenna connects to your Home Assistant Brain and enables room-level temperature control.

**Included in:** [Kit 2](../space-heater/kit-2.md)

[Learn more →](./zigbee-hub.md)

## Build Your Own

Want to build your own controller? See our [DIY section](../../diy/brains/overview.md) for complete guides on building Home Assistant hubs from scratch.
