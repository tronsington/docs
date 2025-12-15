# Connectivity Issues

Troubleshooting network and connection problems.

## Miner and Hub Can't Communicate

### Symptoms
- Integration shows "unavailable"
- Can't control miner from Home Assistant
- Sensors don't update

### Solutions

**Verify same network:**
1. Hub must be on same local network as miner
2. Check hub is connected via ethernet to router
3. Check miner is connected to WiFi from same router

**Check IP address:**
1. Miner IP may have changed (DHCP)
2. Find current IP in router admin or Avalon Home app
3. Update IP in Home Assistant integration

**Firewall/isolation:**
1. Some routers isolate WiFi from ethernet
2. Check router settings for "AP isolation" or similar
3. Ensure devices can communicate across network

---

## IP Address Keeps Changing

### Symptoms
- Integration works, then stops
- Have to update IP frequently

### Solutions

**Set up DHCP reservation:**
1. Log into router admin panel
2. Find DHCP or address reservation settings
3. Reserve a static IP for your miner's MAC address

**Or set static IP on miner:**
1. Configure static IP in Avalon Home app (if supported)

---

## Can't Find Miner on Network

### Symptoms
- Not visible in router's device list
- Network scanners don't find it
- Avalon Home app can't discover it

### Solutions
1. Verify miner is powered on
2. Check WiFi dongle is inserted
3. Miner may not be connected to WiFi - reconfigure via Bluetooth
4. Try scanning with Fing or similar app
5. Check if miner is on a guest network (isolated)

---

## Intermittent Connection

### Symptoms
- Connection works sometimes
- Random disconnections
- Sensors update sporadically

### Solutions

**WiFi signal:**
1. Move miner closer to router
2. Check for interference (microwaves, other electronics)
3. Consider WiFi extender

**Network congestion:**
1. Too many devices on network
2. High bandwidth usage affecting stability
3. Consider wired connection for hub (should already be wired)

**Router issues:**
1. Restart router
2. Check for router firmware updates
3. Some routers have issues with many IoT devices

---

## Hub Can't Reach Internet

### Symptoms
- Weather integration not working
- Can't install updates
- Remote access not working

### Solutions
1. Verify ethernet cable is connected
2. Check other devices have internet
3. Restart router and hub
4. Verify DNS settings in Home Assistant

---

## Still Having Issues?

- Document the specific error messages
- Note when the issue occurs (time of day, after specific events)
- Ask the community: [Software Support Forum](https://support.exergyheat.com/c/sw-support/14)
- [Contact Exergy](https://exergyheat.com/contact) for direct assistance
