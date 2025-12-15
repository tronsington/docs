# API Reference

APIs for integrating with Exergy systems.

## Miner APIs

### CGMiner/BMMiner API

Standard API for Bitmain and compatible miners.

#### Connection

```
Host: MINER_IP
Port: 4028
Protocol: TCP
```

#### Commands

##### Summary

Get overall miner status:

```bash
echo '{"command":"summary"}' | nc MINER_IP 4028 | jq
```

Response:
```json
{
  "STATUS": [{"STATUS": "S", "Msg": "Summary"}],
  "SUMMARY": [{
    "Elapsed": 86400,
    "GHS 5s": 95000.00,
    "GHS av": 94500.00,
    "Accepted": 12345,
    "Rejected": 23,
    "Hardware Errors": 0
  }]
}
```

##### Stats

Detailed hardware statistics:

```bash
echo '{"command":"stats"}' | nc MINER_IP 4028 | jq
```

##### Pools

Pool configuration:

```bash
echo '{"command":"pools"}' | nc MINER_IP 4028 | jq
```

##### Device Status

```bash
echo '{"command":"devs"}' | nc MINER_IP 4028 | jq
```

### Whatsminer API

MicroBT Whatsminer uses a similar API with authentication.

```python
import socket
import json
import hashlib

def whatsminer_api(host, command, token):
    msg = json.dumps({"cmd": command, "token": token})
    with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as s:
        s.connect((host, 4028))
        s.sendall(msg.encode())
        return json.loads(s.recv(4096).decode())
```

## Home Assistant API

### REST API

#### Authentication

```bash
# Get long-lived token from Profile page
export HA_TOKEN="your_token"
export HA_URL="http://localhost:8123"
```

#### Get Entity State

```bash
curl -s -H "Authorization: Bearer ${HA_TOKEN}" \
  "${HA_URL}/api/states/sensor.miner_hashrate" | jq
```

Response:
```json
{
  "entity_id": "sensor.miner_hashrate",
  "state": "95.2",
  "attributes": {
    "unit_of_measurement": "TH/s",
    "friendly_name": "Miner Hash Rate"
  },
  "last_changed": "2024-01-15T10:30:00+00:00"
}
```

#### Call Service

```bash
curl -X POST \
  -H "Authorization: Bearer ${HA_TOKEN}" \
  -H "Content-Type: application/json" \
  -d '{"entity_id": "switch.miner_power"}' \
  "${HA_URL}/api/services/switch/turn_on"
```

#### Get History

```bash
curl -s -H "Authorization: Bearer ${HA_TOKEN}" \
  "${HA_URL}/api/history/period/2024-01-15T00:00:00?filter_entity_id=sensor.miner_hashrate" | jq
```

### WebSocket API

For real-time updates:

```javascript
const socket = new WebSocket('ws://localhost:8123/api/websocket');

socket.onopen = () => {
  // Authenticate
  socket.send(JSON.stringify({
    type: 'auth',
    access_token: 'your_token'
  }));
};

socket.onmessage = (event) => {
  const data = JSON.parse(event.data);

  if (data.type === 'auth_ok') {
    // Subscribe to state changes
    socket.send(JSON.stringify({
      id: 1,
      type: 'subscribe_events',
      event_type: 'state_changed'
    }));
  }
};
```

## MQTT API

### Topics

#### Sensor Data

```
homeassistant/sensor/miner_1/hashrate/state
homeassistant/sensor/miner_1/power/state
homeassistant/sensor/miner_1/temperature/state
```

#### Commands

```
homeassistant/switch/miner_1/power/set
```

### Python Example

```python
import paho.mqtt.client as mqtt

def on_message(client, userdata, msg):
    print(f"{msg.topic}: {msg.payload.decode()}")

client = mqtt.Client()
client.username_pw_set("user", "password")
client.on_message = on_message

client.connect("localhost", 1883)
client.subscribe("homeassistant/sensor/+/+/state")
client.loop_forever()
```

## Custom Integration API

### Entity Methods

```python
# sensor.py
class MinerHashRateSensor(SensorEntity):
    @property
    def native_value(self):
        """Return hash rate value."""
        return self._attr_native_value

    @property
    def extra_state_attributes(self):
        """Return additional attributes."""
        return {
            "pool": self._pool,
            "uptime": self._uptime,
            "efficiency": self._efficiency
        }

    async def async_update(self):
        """Fetch latest data."""
        data = await self.coordinator.async_request_refresh()
        self._attr_native_value = data.get("hashrate")
```

### Service Registration

```python
# __init__.py
async def async_setup(hass, config):
    async def restart_miner(call):
        entity_id = call.data.get("entity_id")
        # Implementation

    hass.services.async_register(
        DOMAIN,
        "restart",
        restart_miner,
        schema=vol.Schema({
            vol.Required("entity_id"): cv.entity_id
        })
    )
```

## Rate Limits

| API | Rate Limit | Notes |
|-----|------------|-------|
| Miner API | None | Local network only |
| HA REST | None | Self-hosted |
| HA WebSocket | None | Connection-based |
| MQTT | Broker-dependent | Configure per broker |
