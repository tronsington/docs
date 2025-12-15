# HACS (Container Installation)

Installing and using HACS on Home Assistant Container installations.

## What is HACS?

Home Assistant Community Store - a custom integration that provides access to:
- Custom integrations (like Exergy Canaan)
- Custom frontend cards
- Custom themes
- Automation blueprints

## Installation on Container

Unlike HA OS, you can't use the one-line installer. Manual installation required.

### Step 1: Access Configuration Directory

Locate your Home Assistant configuration directory. This is the directory mapped to `/config` in your container.

### Step 2: Create Custom Components Directory

```bash
mkdir -p /path/to/config/custom_components
```

### Step 3: Download HACS

Option A - Using wget:
```bash
cd /path/to/config/custom_components
wget https://github.com/hacs/integration/releases/latest/download/hacs.zip
unzip hacs.zip -d hacs
rm hacs.zip
```

Option B - Manual download:
1. Go to [HACS Releases](https://github.com/hacs/integration/releases)
2. Download latest `hacs.zip`
3. Extract to `custom_components/hacs/`

### Step 4: Restart Home Assistant

Restart your container:
```bash
docker restart homeassistant
```

### Step 5: Add HACS Integration

1. Go to **Settings → Devices & Services**
2. Click **Add Integration**
3. Search for "HACS"
4. Follow the GitHub authorization flow

## Platform-Specific Notes

### StartOS

StartOS may have different methods:
- Check StartOS documentation for HACS
- May require accessing service shell
- Configuration path varies

### Umbrel

Umbrel configuration is usually at:
- `~/umbrel/app-data/home-assistant/data/`

Access via SSH to your Umbrel server.

### Synology NAS

Docker configuration typically at:
- `/volume1/docker/homeassistant/config/`

## Using HACS

Once installed, HACS works identically to HA OS:

### Installing Integrations

1. Open Home Assistant
2. Navigate to **HACS** (sidebar)
3. Go to **Integrations** tab
4. Click **+ Explore & Download Repositories**
5. Search and download
6. Restart Home Assistant
7. Add integration via **Settings → Devices & Services**

### Installing Frontend Cards

1. **HACS → Frontend**
2. Download desired cards
3. Add to dashboard

## Updating HACS

HACS can update itself:
1. **HACS → Integrations**
2. If update available, click **Update**
3. Restart Home Assistant

Or manually re-download and replace files.

## Troubleshooting

### HACS Not Appearing After Install

1. Verify files are in `custom_components/hacs/`
2. Check file permissions (readable by HA user)
3. Clear browser cache
4. Check Home Assistant logs

### GitHub Authorization Fails

1. Ensure internet connectivity
2. Try different browser
3. Check for GitHub outages

### Integration Download Fails

1. Check internet connectivity from container
2. Verify GitHub access
3. Check HACS logs in HA

## More Information

- [HACS Documentation](https://hacs.xyz/)
- [HACS GitHub](https://github.com/hacs/integration)
