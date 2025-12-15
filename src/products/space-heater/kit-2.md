# Kit 2: Room Thermostat System

Everything in Kit 1, plus Zigbee temperature sensing for true thermostatic room control.

## What's Included

| Component | Description |
|-----------|-------------|
| Canaan Avalon Mini 3 | 800W bitcoin mining space heater |
| Exergy Home Assistant Hub | Pre-configured Raspberry Pi 5 with Home Assistant OS |
| Power Supply | 40W power supply for the hub |
| Zigbee Antenna | GPIO hat for Zigbee communication |
| Temperature Sensor | Zigbee temperature/humidity sensor |

## What It Does

Kit 2 turns your Avalon Mini 3 into a complete room heating system with accurate thermostatic control.

**The Problem:** The Mini 3's built-in sensor is near the hot exhaust - unreliable for room temp.

**The Solution:** Wireless Zigbee sensor placed anywhere in the room gives true temperature readings for automatic control.

### Features

- Everything from Kit 1, plus:
- **Accurate room temperature** from wireless sensor
- **Digital thermostat** - set your desired temperature
- **Automated control** - miner turns on/off to maintain setpoint
- **Zigbee mesh** - ~30m range, expandable

## Who Is This Kit For?

- You want turnkey thermostatic control
- You don't have an existing smart thermostat
- You want accurate room temperature sensing
- You want "set it and forget it" heating

---

# Setup Guide

## Phases 1-3: Same as Kit 1

Follow the [Kit 1 setup](#setup-guide) for:
- Phase 1: Home Assistant Hub setup
- Phase 2: Avalon Mini 3 setup
- Phase 3: Exergy Canaan integration

Then continue below for Zigbee setup.

---

## Phase 4: Zigbee Setup

### 4.1 Add ZHA Integration

The Zigbee antenna is pre-installed on Kit 2 hubs.

1. In Home Assistant: **Settings → Devices & Services**
2. Click **+ Add Integration**
3. Search "ZHA" (Zigbee Home Automation)
4. Select the serial port (should auto-detect)
5. Complete setup

### 4.2 Pair Temperature Sensor

1. In ZHA integration, click **Add Device**
2. Put sensor in pairing mode (usually hold button 5+ seconds until LED blinks)
3. Sensor should appear - confirm pairing

### 4.3 Sensor Placement

Place the sensor:
- 3-5 feet from floor (average height)
- Away from direct sunlight
- Away from heater's exhaust path
- Representative of where you want temperature controlled
- Within ~30m of hub

---

## Phase 5: Thermostat Automation

### 5.1 Create Input Number for Setpoint

1. **Settings → Devices & Services → Helpers**
2. **Create Helper → Number**
3. Name: "Target Temperature"
4. Min: 60, Max: 80, Step: 1
5. Unit: °F

### 5.2 Create Thermostat Automations

**Heat ON when cold:**
```yaml
trigger:
  - platform: numeric_state
    entity_id: sensor.zigbee_temperature
    below: input_number.target_temperature
    for: "00:02:00"
action:
  - service: switch.turn_on
    target:
      entity_id: switch.avalon_mini_3_power
```

**Heat OFF when warm:**
```yaml
trigger:
  - platform: numeric_state
    entity_id: sensor.zigbee_temperature
    above: input_number.target_temperature
    for: "00:02:00"
action:
  - service: switch.turn_off
    target:
      entity_id: switch.avalon_mini_3_power
```

Or use our [Thermostat Blueprint](../../diy/blueprints.md) for easier setup.

### 5.3 Thermostat Dashboard

Create a dashboard with:
- Large temperature display (current room temp)
- Setpoint control (target temperature slider)
- Miner status (on/off indicator)
- Mode controls

See [Dashboard Templates](../../diy/dashboards.md) for examples.

---

## Verification Checklist

All Kit 1 items, plus:
- [ ] ZHA integration added successfully
- [ ] Temperature sensor paired and showing readings
- [ ] Sensor placed in good location
- [ ] Target temperature helper created
- [ ] Thermostat automations working
- [ ] Miner turns on when room is cold
- [ ] Miner turns off when room reaches setpoint

## Sensor Tips

**Battery Life:** CR2032 battery lasts 1-2 years typically.

**Update Interval:** Sensors report every ~5 minutes by default.

**Extending Range:** Add Zigbee repeaters (many smart plugs work) for larger spaces.

## Need Help?

- [Troubleshooting - Zigbee](../../reference/troubleshooting/zigbee.md)
- [Hardware Support Forum](https://support.exergyheat.com/c/hw-support/13)
- [Software Support Forum](https://support.exergyheat.com/c/sw-support/14)
