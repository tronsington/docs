# Add-ons (HA OS)

Add-ons are additional software that runs alongside Home Assistant on HA OS.

## What Are Add-ons?

Add-ons are Docker containers managed by the Supervisor. They extend Home Assistant with additional capabilities without modifying the core system.

## Essential Add-ons

These add-ons are commonly used with hashrate heating setups:

### Terminal & SSH

Command-line access to your Home Assistant system.

**Used for:**
- Installing HACS
- Advanced troubleshooting
- File system access

**Install:** Settings → Add-ons → Add-on Store → Terminal & SSH

### File Editor

Edit configuration files directly in the browser.

**Used for:**
- Editing configuration.yaml
- Modifying automations
- Viewing logs

**Install:** Settings → Add-ons → Add-on Store → File Editor

### Samba Share

Access Home Assistant files from Windows/Mac.

**Used for:**
- Editing files with your preferred editor
- Backing up configuration
- Uploading media

**Install:** Settings → Add-ons → Add-on Store → Samba Share

## Optional Add-ons

### Node-RED

Visual automation builder.

**Why use it:**
- Complex logic flows
- Visual debugging
- Complements HA automations

**Note:** Requires Node-RED Companion integration for HA entities.

### NGINX Home Assistant SSL Proxy

Secure HTTPS access.

**Why use it:**
- Enable HTTPS without Home Assistant Cloud
- Required for some external services

### DuckDNS

Dynamic DNS for remote access.

**Why use it:**
- Free dynamic DNS service
- Enables remote access without static IP
- Works with Let's Encrypt for SSL

### Google Drive Backup

Automatic backups to Google Drive.

**Why use it:**
- Off-site backup protection
- Automatic scheduling
- Easy restoration

## Add-on Repositories

### Official Repository

Add-ons maintained by Home Assistant team. Included by default.

### Community Add-ons

Third-party add-ons. Add repository:
`https://github.com/hassio-addons/repository`

### HACS

Not an add-on, but provides access to community integrations and frontend cards. Install via Terminal.

## Managing Add-ons

### Installation

1. **Settings → Add-ons → Add-on Store**
2. Find add-on
3. Click **Install**
4. Configure options
5. **Start**

### Configuration

Most add-ons have a Configuration tab:
- Edit settings
- Save changes
- Restart add-on

### Updates

Add-ons update independently:
- Check for updates in Add-on page
- Or enable auto-update per add-on

### Logs

View add-on logs for troubleshooting:
- Add-on page → **Log** tab
- Useful for debugging issues

## Resource Usage

Add-ons consume system resources:
- **RAM**: Each add-on uses memory
- **CPU**: Some add-ons are compute-intensive
- **Storage**: Add-on data stored on disk

Monitor resources: **Settings → System → Hardware**

## More Information

- [Official Add-ons Documentation](https://www.home-assistant.io/addons/)
- [Community Add-ons](https://github.com/hassio-addons/repository)
