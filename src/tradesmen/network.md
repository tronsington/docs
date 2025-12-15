# Network & Connectivity

Network requirements and configuration for hashrate heating systems.

## System Architecture

```
[Internet] ← [Router] ← Ethernet → [Home Assistant Brain]
                ↑
            WiFi 2.4GHz
                ↑
        [Mining Heaters]
```

## Network Requirements

### Home Assistant Brain (Controller)

| Requirement | Specification |
|-------------|---------------|
| Connection | Ethernet (required) |
| Speed | 100 Mbps sufficient |
| IP | DHCP or static |
| Ports | Standard web (8123) |

**Why ethernet?** Reliability. The controller needs a stable connection for automations and remote access.

### Mining Heaters (Avalon Mini 3, etc.)

| Requirement | Specification |
|-------------|---------------|
| Connection | WiFi (2.4GHz only) |
| Standard | 802.11 b/g/n |
| Security | WPA2 recommended |
| IP | DHCP |

**Why 2.4GHz?** Better range and wall penetration than 5GHz. Most IoT devices use 2.4GHz.

## Common Network Configurations

### Standard Home Setup

Most installations work with default home router settings:
- Router provides DHCP addresses
- 2.4GHz WiFi enabled
- No special configuration needed

### Separate IoT Network

Some users run IoT devices on a separate network/VLAN:
- Home Assistant Brain must be on same network as miners
- Or configure routing between networks
- This is advanced - most users don't need it

## WiFi Considerations

### 2.4GHz Requirements

The miner ONLY supports 2.4GHz. Ensure:
- 2.4GHz band is enabled on router
- Signal reaches the miner location
- SSID is visible (not hidden, initially)

### Signal Strength

For reliable operation:
- -50 to -60 dBm: Excellent
- -60 to -70 dBm: Good
- -70 to -80 dBm: Fair (may have issues)
- Below -80 dBm: Poor (likely problems)

**Tips for weak signal:**
- Relocate router or miner
- Add WiFi extender/mesh node
- Use powerline adapter with WiFi

### Network Congestion

Mining heaters send small amounts of data frequently. On congested networks:
- Prioritize controller (QoS) if available
- Reduce 2.4GHz interference (other devices, neighbors)
- Consider dedicated IoT network

## Remote Access Options

Customers wanting control from outside the home have options:

### Home Assistant Cloud (Nabu Casa)
- ~$6.50/month
- Easiest setup
- Includes Alexa/Google Home integration
- Encrypted, no port forwarding needed

### VPN
- Free (with existing VPN setup)
- Requires technical knowledge
- Most secure option
- Full network access

### Cloudflare Tunnel
- Free tier available
- Moderate technical difficulty
- Good security
- Web access only

## Troubleshooting Connectivity

### Miner Won't Connect to WiFi

1. Verify 2.4GHz is enabled on router
2. Check signal strength at miner location
3. Confirm correct WiFi password
4. Try temporarily disabling 5GHz to force 2.4GHz selection
5. Check router's connected devices list

### Controller Can't Find Miner

1. Verify both on same network
2. Check miner's IP address (router admin panel)
3. Confirm miner is powered and online
4. Try miner's IP directly in browser

### Intermittent Connection

1. Check WiFi signal strength
2. Look for interference sources
3. Consider static IP for miner
4. Check for router firmware updates

## Firewall Considerations

Home Assistant needs to communicate with:
- Local network devices (miners)
- Internet (for updates, weather, remote access)

Most home routers allow this by default. Corporate or advanced firewalls may need:
- Outbound HTTPS (443)
- mDNS for local discovery
- Integration-specific ports
