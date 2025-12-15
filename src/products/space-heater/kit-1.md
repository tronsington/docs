# Kit 1: Smart Miner Control

The basic kit for self-hosted smart control of your Canaan Avalon Mini 3 bitcoin mining heater.

## What's Included

| Component | Description |
|-----------|-------------|
| Canaan Avalon Mini 3 | 800W bitcoin mining space heater |
| Exergy Home Assistant Hub | Pre-configured Raspberry Pi 5 with Home Assistant OS |
| Power Supply | 40W power supply for the hub |

## What It Does

Kit 1 breaks your Avalon Mini 3 free from Canaan's proprietary Avalon Home app, giving you:

- **Self-Hosted Control** - Control from Home Assistant's web interface or mobile app
- **Full Sensor Access** - Monitor temps, hashrate, power draw, fan speed in real-time
- **Automation Capability** - Build automations based on time, weather, schedules
- **Remote Access** - Optional Home Assistant Cloud (~$6.50/month) for anywhere access

## Who Is This Kit For?

- You want smart control without room temperature sensing complexity
- You already have a smart thermostat to integrate with
- You prefer building your own automations
- You want to integrate into a broader smart home setup

## What You'll Need

- WiFi network (2.4GHz for the Avalon Mini 3)
- Ethernet connection for the Home Assistant Hub
- Standard 120V outlet for the miner
- Standard outlet for the hub

---

# Setup Guide

## Phase 1: Home Assistant Hub

### 1.1 Connect Hardware

1. Place hub anywhere with ethernet access (doesn't need to be near miner)
2. Connect ethernet cable from router to hub
3. Connect 40W power supply
4. Press power button

| Light | Meaning |
|-------|---------|
| Red/Orange | Booting |
| Green | Ready |

First boot takes 2-3 minutes.

### 1.2 Access Home Assistant

Open browser to: `http://homeassistant.local:8123`

If that doesn't work, find IP in your router's admin panel.

### 1.3 Complete Onboarding

1. Create your account (save credentials!)
2. Set home location (for weather/sunrise automations)
3. Skip device discovery for now
4. Click Finish

---

## Phase 2: Avalon Mini 3

### 2.1 Physical Setup

**Placement:**
- Floor with included feet, or wall mount with included brackets
- Must be level (has orientation sensors)
- Bottom intake needs clearance
- Front exhaust unobstructed

**Electrical:**
- Standard 120V outlet
- 800W draw - fine for 15A circuit alone
- Avoid overloaded circuits

### 2.2 Avalon Home App Setup

1. Download "Avalon Home" (iOS/Android)
2. Enable Bluetooth on phone
3. Scan for device in app
4. Connect to your 2.4GHz WiFi
5. **Change device password** (important for security!)
6. Note the miner's IP address

### 2.3 Mining Pool Setup

**Recommended:** Exergy DATUM Pool (1% fee)
- Pool URL: `stratum+tcp://mine.exergyheat.com:3333`

Or use any pool of your choice. You'll need:
- Pool URL
- Worker name (usually: account.workername)
- Password (often just "x")

---

## Phase 3: Integration

### 3.1 Find Miner IP

Find in Avalon Home app, or check router's connected devices list.

**Tip:** Set a DHCP reservation in your router so the IP doesn't change.

### 3.2 Add Exergy Canaan Integration

1. In Home Assistant: **Settings → Devices & Services**
2. Click **+ Add Integration**
3. Search "Exergy Canaan"
4. Enter miner's IP address
5. Enter device password (if you changed it)
6. Submit

You should see your miner appear with controls and sensors.

### Available Entities

| Entity | Type | Description |
|--------|------|-------------|
| Power | Switch | Turn on/off |
| Work Mode | Select | Heating/Mining/Night |
| Work Level | Select | Eco/Super |
| Temperatures | Sensors | Ambient, output, hashboard |
| Hashrate | Sensor | Current TH/s |
| Power Draw | Sensor | Current watts |

---

## Phase 4: Dashboard & Automations

### 4.1 Dashboard

Your miner entities are now available for dashboards. Create cards showing:
- Power control
- Mode/level selectors
- Temperature gauges
- Hashrate display

See [Dashboard Templates](../../diy/dashboards.md) for examples.

### 4.2 Example Automations

**Night mode at bedtime:**
- Trigger: Time = 10:00 PM
- Action: Set work mode to "Night"

**Eco during peak electricity:**
- Trigger: Time = 4:00 PM
- Action: Set work level to "Eco"

See [Automation Blueprints](../../diy/blueprints.md) for ready-to-use templates.

---

## Verification Checklist

- [ ] Hub shows green light and is accessible
- [ ] Miner connected to WiFi (check Avalon Home app)
- [ ] Miner appears in Home Assistant
- [ ] Can control power on/off from HA
- [ ] Can change work mode from HA
- [ ] All sensors showing values

## Need Help?

- [Troubleshooting](../../reference/troubleshooting.md)
- [Hardware Support Forum](https://support.exergyheat.com/c/hw-support/13)
- [Software Support Forum](https://support.exergyheat.com/c/sw-support/14)
