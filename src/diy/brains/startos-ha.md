# StartOS + Home Assistant

Run Home Assistant on StartOS - the Bitcoin-native sovereign computing platform.

## Why StartOS?

- **Bitcoin-native** - Run alongside your Bitcoin node
- **Privacy-focused** - Tor integration for secure remote access
- **Self-sovereign** - Your data, your server, no cloud
- **Unified management** - One interface for all services

## Requirements

### Hardware

- Start9 Server (official hardware), OR
- Compatible hardware running StartOS:
  - Raspberry Pi 4/5
  - Mini PC (Intel NUC, etc.)
  - Any x86_64 or aarch64 system

### Software

- StartOS (latest version)
- Home Assistant service from Start9 marketplace

## Installation Steps

### Step 1: Install StartOS

If not already running StartOS:

1. Download StartOS from [start9.com](https://start9.com)
2. Flash to your hardware following Start9 guides
3. Complete initial StartOS setup

### Step 2: Install Home Assistant

1. Open your StartOS dashboard
2. Navigate to **Marketplace**
3. Find **Home Assistant**
4. Click **Install**
5. Wait for installation to complete

### Step 3: Configure Home Assistant

1. In StartOS, open the Home Assistant service
2. Click **Launch UI** to access Home Assistant
3. Complete the onboarding wizard
4. Create your user account

### Step 4: Install HACS and Exergy Integration

Within Home Assistant:

1. Install HACS (see [hacs.xyz](https://hacs.xyz) for StartOS-specific instructions)
2. Through HACS, install the Exergy Canaan integration
3. Configure the integration with your miner's IP address

## Network Considerations

### Local Access

Home Assistant on StartOS is accessible via:
- Local network (same as standalone HA)
- StartOS dashboard link

### Remote Access (Tor)

StartOS provides Tor addresses for remote access:
- Secure without port forwarding
- Slower than direct connection
- Works from anywhere

### Home Assistant Cloud

You can still use Home Assistant Cloud (Nabu Casa) with StartOS for:
- Easier remote access
- Google Home / Alexa integration
- Faster than Tor for daily use

## Zigbee Support

For temperature sensing (Kit 2 equivalent):

1. Connect USB Zigbee coordinator to your StartOS server
2. In Home Assistant, add ZHA integration
3. StartOS should pass through USB devices automatically

## StartOS + Bitcoin Use Cases

### Mining to Your Own Node

With both Home Assistant and Bitcoin Core on StartOS:
- Mine directly to your own node
- Validate your own blocks
- Maximum sovereignty

### Lightning Integration

If running Lightning (LND, Core Lightning):
- Receive mining payouts via Lightning
- Automate based on Lightning payments
- Future: Pay for electricity via Lightning

## Limitations

- Home Assistant updates may lag behind standalone releases
- Some HA features may work differently in containerized environment
- USB device passthrough may require configuration

## Resources

- [Start9 Documentation](https://docs.start9.com)
- [Home Assistant on StartOS Guide](https://docs.start9.com) (search for Home Assistant)
- [StartOS Community](https://community.start9.com)

## Next Steps

After installation:
- [Configure Exergy Canaan Integration](../integrations/exergy-canaan.md)
- [Import Automation Blueprints](../blueprints.md)
- [Set Up Dashboards](../dashboards.md)
