# Environment Variables

Environment configuration for Exergy components.

## Home Assistant

### Core Variables

| Variable | Description | Default |
|----------|-------------|---------|
| `TZ` | Timezone | UTC |
| `PYTHONPATH` | Python module paths | - |

### Docker Variables

```bash
# docker-compose.yml
environment:
  - TZ=America/New_York
```

## Miner Configuration

### Antminer Variables

Configured via web interface, not environment variables. Key settings:

| Setting | Location | Description |
|---------|----------|-------------|
| Pool URL | Miner Configuration | Mining pool address |
| Worker Name | Miner Configuration | Pool worker identifier |
| Password | Miner Configuration | Pool password (usually "x") |
| Fan Speed | Miner Configuration | Manual or auto |
| Frequency | Advanced | Chip frequency |

### CGMiner/BMMiner API

Default ports and settings:

| Setting | Default | Description |
|---------|---------|-------------|
| API Port | 4028 | CGMiner API port |
| API Allow | W:0/0 | API access control |
| API Listen | true | Listen for API connections |

## Integration Variables

### Bitcoin Miner Integration

Configured via `configuration.yaml` or UI:

```yaml
bitcoin_miner:
  - host: "${MINER_1_IP}"
    password: "${MINER_1_PASSWORD}"
```

Using secrets.yaml:
```yaml
# secrets.yaml
miner_1_ip: "192.168.1.30"
miner_1_password: "secure_password"
```

### MQTT Configuration

```yaml
mqtt:
  broker: "${MQTT_BROKER:-localhost}"
  port: ${MQTT_PORT:-1883}
  username: "${MQTT_USER}"
  password: "${MQTT_PASSWORD}"
```

## Docker Compose Example

Complete environment setup:

```yaml
version: '3.8'

services:
  homeassistant:
    container_name: homeassistant
    image: ghcr.io/home-assistant/home-assistant:stable
    environment:
      - TZ=America/New_York
    volumes:
      - ./config:/config
      - /run/dbus:/run/dbus:ro
    restart: unless-stopped
    network_mode: host

  mosquitto:
    container_name: mosquitto
    image: eclipse-mosquitto:latest
    environment:
      - TZ=America/New_York
    volumes:
      - ./mosquitto/config:/mosquitto/config
      - ./mosquitto/data:/mosquitto/data
      - ./mosquitto/log:/mosquitto/log
    ports:
      - "1883:1883"
    restart: unless-stopped

  influxdb:
    container_name: influxdb
    image: influxdb:2.7
    environment:
      - TZ=America/New_York
      - DOCKER_INFLUXDB_INIT_MODE=setup
      - DOCKER_INFLUXDB_INIT_USERNAME=${INFLUX_USER}
      - DOCKER_INFLUXDB_INIT_PASSWORD=${INFLUX_PASSWORD}
      - DOCKER_INFLUXDB_INIT_ORG=exergy
      - DOCKER_INFLUXDB_INIT_BUCKET=homeassistant
    volumes:
      - ./influxdb/data:/var/lib/influxdb2
    ports:
      - "8086:8086"
    restart: unless-stopped
```

## .env File

Create a `.env` file for sensitive values:

```bash
# .env
MQTT_USER=homeassistant
MQTT_PASSWORD=secure_mqtt_password

INFLUX_USER=admin
INFLUX_PASSWORD=secure_influx_password

MINER_1_IP=192.168.1.30
MINER_1_PASSWORD=miner_password

TELEGRAM_API_KEY=your_telegram_api_key
TELEGRAM_CHAT_ID=your_chat_id
```

**Security Note**: Never commit `.env` files to version control.

## Shell Variables

For scripting and CLI tools:

```bash
# Export for current session
export MINER_IP="192.168.1.30"
export HA_TOKEN="your_long_lived_access_token"

# Query miner API
curl -s "http://${MINER_IP}:4028/summary"

# Call Home Assistant API
curl -s -H "Authorization: Bearer ${HA_TOKEN}" \
  http://localhost:8123/api/states/sensor.miner_hashrate
```

## Systemd Environment

For system services:

```ini
# /etc/systemd/system/homeassistant.service
[Service]
Environment="TZ=America/New_York"
EnvironmentFile=/etc/homeassistant/env
```

```bash
# /etc/homeassistant/env
PYTHONPATH=/srv/homeassistant/lib
```
