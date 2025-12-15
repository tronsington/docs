# Zigbee Issues

Troubleshooting Zigbee temperature sensors and the Zigbee network (Kit 2).

## Sensor Won't Pair

### Symptoms
- Sensor not discovered during pairing
- Pairing times out
- Sensor blinks but not found

### Solutions

**Check sensor:**
1. Ensure sensor has battery (or power)
2. Put sensor in pairing mode correctly (check sensor manual)
3. Keep sensor close to hub during pairing (within 1 meter)

**Check ZHA integration:**
1. Verify ZHA is installed and running
2. Go to Settings → Devices & Services → ZHA
3. Ensure coordinator is online

**Reset and retry:**
1. Factory reset the sensor (check manual for procedure)
2. Remove from ZHA if partially paired
3. Try pairing again

---

## Sensor Shows "Unavailable"

### Symptoms
- Was working, now shows unavailable
- Temperature reading missing
- Entity grayed out

### Solutions

**Check sensor:**
1. Replace battery (if battery-powered)
2. Check sensor is still in range
3. Sensor may have fallen or been moved

**Check Zigbee network:**
1. Verify ZHA integration is running
2. Restart ZHA integration
3. Reboot the hub

**Re-pair if needed:**
1. Remove sensor from ZHA
2. Factory reset sensor
3. Pair again

---

## Sensor Reading Wrong Temperature

### Symptoms
- Temperature seems too high or low
- Reading doesn't match other thermometers
- Sudden jumps in readings

### Solutions

**Check placement:**
1. Not in direct sunlight
2. Not near heat sources (including miner exhaust)
3. Not in drafty location
4. Not on exterior wall

**Give it time:**
1. New sensors need time to acclimate
2. Wait 15-30 minutes after moving

**Calibration:**
1. Compare with known-accurate thermometer
2. Some sensors allow offset calibration in ZHA

---

## Sensor Frequently Disconnects

### Symptoms
- Intermittent availability
- Readings stop updating then resume
- "Last seen" timestamp is old

### Solutions

**Range issues:**
1. Move sensor closer to hub
2. Add Zigbee repeater devices (smart plugs, bulbs)
3. Zigbee range is ~30m but walls reduce it

**Interference:**
1. Keep away from WiFi routers (same 2.4GHz band)
2. Keep away from USB 3.0 devices (can interfere)
3. Move hub antenna if possible

**Battery:**
1. Low battery can cause intermittent issues
2. Replace battery even if it shows some charge

---

## ZHA Integration Not Starting

### Symptoms
- ZHA shows error on startup
- "Failed to initialize coordinator"
- Zigbee devices all unavailable

### Solutions

**Check hardware:**
1. Verify Zigbee antenna is connected (GPIO hat on Kit 2)
2. Antenna may have come loose

**Restart:**
1. Restart Home Assistant
2. Reboot the hub completely

**Reconfigure:**
1. Remove ZHA integration
2. Add it again
3. Re-pair all devices (last resort)

---

## Multiple Sensors / Extending Range

### Adding More Sensors
1. Each sensor pairs independently
2. Use "Add Device" in ZHA for each
3. Give unique names to distinguish rooms

### Extending Zigbee Range
1. Add Zigbee repeater devices
2. Many Zigbee smart plugs act as repeaters
3. Some Zigbee bulbs also repeat
4. Place repeaters between hub and distant sensors

---

## Still Having Issues?

- Check sensor manufacturer documentation
- Verify GPIO configuration on hub
- Ask the community: [Hardware Support Forum](https://support.exergyheat.com/c/hw-support/13)
- [Contact Exergy](https://exergyheat.com/contact) for direct assistance
