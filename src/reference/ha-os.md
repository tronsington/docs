# Home Assistant OS

Home Assistant Operating System (HA OS) is the recommended way to run Home Assistant. It's a minimal Linux-based OS specifically optimized for Home Assistant.

## What Makes HA OS Different

| Feature | HA OS | HA Container | HA Core |
|---------|-------|--------------|---------|
| Add-ons | Yes | No | No |
| Supervisor | Yes | No | No |
| Easy updates | Yes | Manual | Manual |
| Backup system | Built-in | External | External |
| Recommended | Yes | Advanced | Developers |

## Exergy Kit Usage

All Exergy kits use Home Assistant OS because:

- **Add-ons** enable easy installation of complementary software
- **Supervisor** provides system management without command line
- **Automatic backups** protect your configuration
- **One-click updates** keep your system current

## Key Concepts

### Supervisor

The Supervisor is a management layer that provides:
- Add-on installation and management
- System snapshots/backups
- Network configuration
- Hardware access management

Access via: **Settings → System → Supervisor**

### Add-ons

Add-ons are additional software that runs alongside Home Assistant:
- Terminal & SSH for command-line access
- File Editor for editing configuration files
- Samba for Windows file sharing
- Many community add-ons

See [Add-ons Reference](./ha-os/add-ons.md) for details.

### Integrations

Integrations connect Home Assistant to devices and services:
- Built-in integrations come with Home Assistant
- Custom integrations (like Exergy Canaan) via HACS
- Configuration via UI or YAML

See [Integrations Reference](./ha-os/integrations.md) for details.

## Storage

HA OS manages storage automatically:
- System partition (read-only, managed by updates)
- Data partition (your configuration, database, media)
- Configuration at `/config`

### Recommended Storage

- **Minimum**: 32GB
- **Recommended**: 64GB+
- **Type**: SSD strongly recommended over SD card

## Network

HA OS handles networking through the Supervisor:
- DHCP by default
- Static IP configurable
- mDNS (`.local` address)
- VPN add-ons available

Access: **Settings → System → Network**

## Updates

HA OS components update independently:
- **Home Assistant Core**: The main software
- **Home Assistant Supervisor**: The management layer
- **Home Assistant OS**: The underlying operating system
- **Add-ons**: Each updates separately

Check for updates: **Settings → System → Updates**

## Backups

Built-in backup system:
- Full system snapshots
- Partial backups (specific add-ons/folders)
- Automatic backup scheduling (with add-ons)

Create backup: **Settings → System → Backups**

**Recommendation**: Regular backups to external storage. Use add-ons like Google Drive Backup or Samba Backup.

## More Information

- [Add-ons Reference](./ha-os/add-ons.md)
- [Integrations Reference](./ha-os/integrations.md)
- [Official HA OS Documentation](https://www.home-assistant.io/installation/)
