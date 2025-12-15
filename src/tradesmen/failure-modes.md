# Failure Modes & Backup

Understanding what can go wrong and planning for backup heating.

## Design Philosophy

Hashrate heating systems should **fail safe** - when something goes wrong, the result should be "no heat" rather than dangerous conditions.

## Failure Scenarios

### Miner Failure

**What happens:** Miner stops producing heat

**Causes:**
- Hardware failure
- Network disconnection
- Power loss to miner

**Result:** Room doesn't get heated

**Mitigation:**
- Monitor miner status in Home Assistant
- Set up alerts for offline miners
- Have backup heating plan

### Controller Failure

**What happens:** Home Assistant Brain stops working

**Causes:**
- SD card/storage failure (rare with SSD)
- Power loss to controller
- Software crash

**Result:** Automations stop running, miner continues last state

**Mitigation:**
- Use UPS for brief power interruptions
- Regular backups of Home Assistant configuration
- Manual control still possible via miner's native app

### Network Failure

**What happens:** Devices can't communicate

**Causes:**
- Router failure
- ISP outage
- WiFi interference

**Result:** Controller can't adjust miner, but miner continues last state

**Mitigation:**
- Miner continues operating at last setting
- Local control still works (same network)
- Internet only required for remote access

### Power Outage

**What happens:** Everything stops

**Result:** No heat until power returns

**Mitigation:**
- Miner resumes automatically on power restore
- Home Assistant restarts automatically
- Automations resume based on current conditions

## Miner Behavior on Restart

After power is restored or network reconnects:

1. Miner boots up (1-2 minutes)
2. Resumes last operating mode
3. Home Assistant reconnects automatically
4. Automations evaluate current conditions
5. System returns to normal operation

## Backup Heating Options

### Existing HVAC System

The safest approach - keep your existing heating system operational:

- Set existing thermostat a few degrees below target
- If miner can't maintain temperature, existing system kicks in
- No modifications to existing system needed

**Example:**
- Desired temp: 70°F
- Home Assistant controls miner to maintain 70°F
- Existing thermostat set to 65°F as backup
- If miner fails, furnace activates at 65°F

### Two-Stage Systems (Kit 3, Kit 4)

Designed with backup built in:
- Miner provides "first stage" heat
- Existing furnace/boiler provides "second stage"
- Automatic failover if miner can't keep up

### Portable Backup

For spaces without existing heating:
- Keep a portable electric heater available
- Not needed for normal operation
- Emergency use only

## Monitoring & Alerts

Home Assistant can alert you to problems:

### Recommended Alerts

- Miner offline for >15 minutes
- Room temperature dropping below threshold
- Controller rebooted unexpectedly
- Network connectivity issues

### Alert Methods

- Push notifications (Home Assistant app)
- Email
- SMS (via integrations)

### Exergy Remote Monitoring

For hands-off operation, consider [Remote Monitoring](../services/remote-monitoring.md) service.

## Customer Expectations

Set appropriate expectations with customers:

**Hashrate heating is NOT:**
- A replacement for proper insulation
- Adequate for extreme cold without backup
- Guaranteed 100% uptime

**Hashrate heating IS:**
- A cost-offset for heating (mining revenue)
- A supplement or primary heat source (properly sized)
- A smart, automatable heating option

## Safety Systems

Built-in protections in mining equipment:

| Protection | Response |
|------------|----------|
| Overtemperature | Automatic shutdown |
| Fan failure | Reduced power or shutdown |
| Electrical fault | Fuse/breaker trips |
| Orientation error | Stops operation |

These are hardware-level protections independent of software control.
