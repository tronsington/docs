# Umbrel + Home Assistant

Add Home Assistant to your existing Umbrel installation.

## Why Umbrel?

- **Already running Umbrel?** Add HA without new hardware
- **App ecosystem** - One-click install alongside other apps
- **Simple management** - Umbrel's friendly interface

## Requirements

### Hardware

- System running Umbrel:
  - Raspberry Pi 4 (4GB+ RAM recommended)
  - Mini PC
  - Any Umbrel-compatible hardware

### Storage

- Home Assistant adds ~1-2GB plus your configuration
- Ensure adequate free space
- SSD recommended for performance

## Installation Steps

### Step 1: Install Home Assistant App

1. Open your Umbrel dashboard
2. Navigate to **App Store**
3. Search for **Home Assistant**
4. Click **Install**
5. Wait for installation (may take several minutes)

### Step 2: Access Home Assistant

1. In Umbrel, find Home Assistant in your installed apps
2. Click to open
3. Complete the onboarding wizard
4. Create your user account

### Step 3: Install HACS

1. You'll need terminal access to the Home Assistant container
2. In Umbrel, you may need to SSH to your server
3. Access the HA container and run HACS installation
4. See [hacs.xyz](https://hacs.xyz) for current installation method

*Note: Container access methods may vary by Umbrel version*

### Step 4: Install Exergy Integration

1. In HACS, search for "Exergy Canaan"
2. Install the integration
3. Restart Home Assistant
4. Configure with your miner's IP address

## Network Considerations

### Local Access

Home Assistant is accessible at:
- `http://umbrel.local:8123` (or your Umbrel's address)
- Through Umbrel's app interface

### Remote Access Options

**Via Umbrel's Tor:**
- Built-in Tor address for remote access
- Secure but slower
- No port forwarding needed

**Via Home Assistant Cloud:**
- Can add Nabu Casa subscription
- Faster remote access
- Voice assistant integration

## Resource Sharing

Running Home Assistant alongside other Umbrel apps:

### Memory

- HA needs 1-2GB RAM minimum
- With Bitcoin node, Lightning, etc. - ensure 8GB+ total RAM
- Monitor usage in Umbrel dashboard

### CPU

- HA is relatively light on CPU
- Automations run locally
- Shouldn't conflict with other apps

### Storage

- HA databases can grow over time
- Enable recorder purge to manage history size
- Monitor disk space

## Zigbee Support

For temperature sensing:

1. Connect USB Zigbee coordinator
2. Umbrel should pass through USB devices
3. Add ZHA integration in Home Assistant
4. Pair your sensors

*Note: USB passthrough configuration may vary by Umbrel version*

## Limitations

- Home Assistant version depends on Umbrel app updates
- Container environment may have some restrictions
- USB device access may require configuration
- Resource competition with other apps

## Umbrel + Bitcoin

If running Bitcoin-related apps on Umbrel:
- Configure miner to your own node
- Monitor mining alongside other Bitcoin activities
- Unified sovereign computing platform

## Troubleshooting

### Home Assistant won't start

- Check Umbrel logs for errors
- Verify adequate RAM/storage
- Try restarting the app

### Can't install HACS

- Container access methods vary by Umbrel version
- Check Umbrel community for current methods
- SSH to Umbrel server if needed

### USB Zigbee not detected

- Check USB device passthrough settings
- Try different USB port
- Verify coordinator works (LED indicators)

## Resources

- [Umbrel Documentation](https://umbrel.com/docs)
- [Umbrel Community](https://community.umbrel.com)
- [Home Assistant Documentation](https://www.home-assistant.io/docs/)

## Next Steps

After installation:
- [Configure Exergy Canaan Integration](../integrations/exergy-canaan.md)
- [Import Automation Blueprints](../blueprints.md)
- [Set Up Dashboards](../dashboards.md)
