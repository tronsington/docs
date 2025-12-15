# Canaan Avalon Mini 3

The Avalon Mini 3 is a compact bitcoin miner designed for home heating applications.

## Specifications

| Spec | Value |
|------|-------|
| Hashrate | ~37 TH/s (varies by mode) |
| Power | ~1,100W |
| Heat Output | ~3,750 BTU/hr |
| Noise Level | ~50 dB (Eco mode) |
| Dimensions | 300 x 140 x 195mm |
| Weight | ~5.5 kg |

## Work Modes

The Mini 3 supports multiple operating modes via the Exergy integration:

### Heating Mode
- Optimized for heat output
- Full fan speed for maximum air circulation
- Consistent hashrate

### Mining Mode
- Optimized for hashrate/efficiency
- Standard operation

### Night Mode
- Reduced noise operation
- Lower fan speeds
- Reduced hashrate and heat output

## Work Levels

### Eco
- Reduced power consumption (~800W)
- Lower heat output
- Quieter operation
- Lower hashrate

### Super
- Maximum performance
- Full power consumption
- Maximum heat output
- Highest hashrate

## Available Sensors

When connected via the Exergy Canaan integration, these sensors are available:

| Sensor | Entity Example | Description |
|--------|----------------|-------------|
| Ambient Temperature | `sensor.avalon_mini_3_temperature_ambient` | Intake air temp |
| Output Temperature | `sensor.avalon_mini_3_temperature_output` | Exhaust air temp |
| Hashboard Temperature | `sensor.avalon_mini_3_temperature_hashboard` | Internal chip temp |
| Hashrate | `sensor.avalon_mini_3_hashrate` | Current TH/s |
| Power | `sensor.avalon_mini_3_power` | Current wattage |
| Fan Speed | `sensor.avalon_mini_3_fan_speed` | Fan RPM % |
| Device State | `sensor.avalon_mini_3_state` | Operating status |

## Available Controls

| Control | Entity Example | Options |
|---------|----------------|---------|
| Power | `switch.avalon_mini_3_power` | On/Off |
| Work Mode | `select.avalon_mini_3_work_mode` | Heating, Mining, Night |
| Work Level | `select.avalon_mini_3_work_level` | Eco, Super |
| Reboot | `button.avalon_mini_3_reboot` | Trigger reboot |

## Heating Capacity

The Mini 3 produces approximately **3,750 BTU/hr** at full power, comparable to a medium-sized space heater.

**Suitable for:**
- Single room heating (200-400 sq ft)
- Supplemental heating in larger spaces
- Home office or bedroom

**Not suitable for:**
- Whole-home heating (single unit)
- Spaces requiring silent operation

## Network Setup

The Mini 3 connects to your network via ethernet:

1. Connect ethernet cable from miner to router
2. Power on the miner
3. Use the Avalon Home app or router admin to find the IP address
4. Add to Home Assistant via Exergy Canaan integration

## Tips for Best Performance

### Airflow
- Keep intake and exhaust areas clear
- Point exhaust into the room you want to heat
- Consider ducting exhaust to adjacent spaces

### Electrical
- Dedicated 15A circuit recommended
- Avoid extension cords if possible
- Use surge protector

### Network
- Wired ethernet strongly recommended
- Static IP or DHCP reservation helps reliability

## Resources

- [Canaan Official Site](https://www.canaan.io/)
- [Avalon Home App](https://www.canaan.io/avalon-home)
- [Exergy Canaan Integration](./exergy-canaan.md)
