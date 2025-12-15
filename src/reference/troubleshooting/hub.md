# Hub Issues

Troubleshooting the Exergy Home Assistant Hub.

## Hub Won't Power On

### Symptoms
- No lights when power button pressed
- Hub completely unresponsive

### Solutions
1. Verify power supply is plugged into wall outlet
2. Verify power supply is connected to hub
3. Try a different wall outlet
4. Check power supply cable for damage

---

## Hub Stuck on Red Light

### Symptoms
- Red/orange light stays on
- Never turns green
- Can't access Home Assistant

### Solutions
1. Wait up to 5 minutes (first boot takes longer)
2. Power cycle: unplug, wait 30 seconds, plug back in
3. If persistent, may indicate SD card or storage issue

---

## Can't Access Home Assistant

### Symptoms
- `homeassistant.local:8123` doesn't load
- "Site can't be reached" error
- Mobile app can't find hub

### Solutions

**Check basics:**
1. Verify hub shows green light
2. Verify ethernet cable connected to both hub and router
3. Verify your device is on the same network

**Try IP address:**
1. Find hub IP in your router's admin panel
2. Access via `http://[IP]:8123`

**Network issues:**
1. Some routers don't support `.local` addresses
2. Try different browser
3. Disable VPN if active

---

## Home Assistant Slow or Unresponsive

### Symptoms
- Dashboard takes long to load
- Controls are delayed
- Frequent disconnections

### Solutions
1. Check hub CPU/memory usage in HA settings
2. Reduce number of integrations if overloaded
3. Ensure adequate ventilation around hub
4. Consider if SD card is failing (for non-SSD setups)

---

## Hub Lost Configuration

### Symptoms
- Home Assistant asks for setup again
- Integrations are missing
- Dashboards are gone

### Solutions
1. Check if correct storage is being used
2. Restore from backup if available
3. May indicate storage failure - contact support

---

## Still Having Issues?

- Verify hub hardware is undamaged
- Check all cable connections
- Ask the community: [Hardware Support Forum](https://support.exergyheat.com/c/hw-support/13)
- [Contact Exergy](https://exergyheat.com/contact) for direct assistance
