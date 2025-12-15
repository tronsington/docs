# HA Automation Builder

Home Assistant's built-in visual automation editor.

## Accessing the Builder

**Settings → Automations & Scenes → Create Automation → Create new automation**

## Building an Automation

### Step 1: Name Your Automation

Give it a descriptive name:
- "Turn miner on when cold"
- "Night mode at 10pm"
- "Eco mode during peak hours"

### Step 2: Add Triggers

Click **Add Trigger** and choose type:

**Time Triggers:**
- Time - Specific time (10:00 PM)
- Time pattern - Recurring (/5 minutes, every hour)

**State Triggers:**
- State - Entity changes state
- Numeric state - Value crosses threshold

**Device Triggers:**
- Device - Device-specific triggers
- Zone - Enter/leave location

### Step 3: Add Conditions (Optional)

Click **Add Condition** to filter when automation runs:

**State Conditions:**
- State - Entity is in specific state
- Numeric state - Value comparison

**Time Conditions:**
- Time - Between time range
- Weekday - Only certain days

**Logic Conditions:**
- And - All conditions must be true
- Or - Any condition can be true
- Not - Condition must be false

### Step 4: Add Actions

Click **Add Action**:

**Device Actions:**
- Device - Device-specific actions
- Call service - Any HA service

**Common Actions:**
- Turn on/off
- Set value/mode
- Send notification
- Delay
- Wait for trigger

### Step 5: Save and Test

1. Click **Save**
2. Find automation in list
3. Click three dots → **Run** to test
4. Check **Traces** for debugging

## Example: Night Mode Schedule

```
Name: Night mode at 10pm

Trigger:
  Type: Time
  At: 22:00:00

Action:
  Type: Call service
  Service: select.select_option
  Target: select.avalon_mini_3_work_mode
  Data:
    option: Night
```

## Example: Thermostat Control

```
Name: Heat when room cold

Trigger:
  Type: Numeric state
  Entity: sensor.room_temperature
  Below: 68

Condition:
  Type: State
  Entity: switch.avalon_mini_3_power
  State: off

Action:
  Type: Turn on
  Target: switch.avalon_mini_3_power
```

## Tips

### Use Descriptive Names

Good: "Living room below 65°F - turn on heater"
Bad: "Automation 1"

### Test Triggers Carefully

Time triggers run at that time every day. Test with manual runs first.

### Use Conditions to Prevent Loops

Without conditions, state triggers can cause rapid on/off cycling.

### Check Traces for Debugging

When automation doesn't work:
1. Open automation
2. Click **Traces**
3. See execution path and values

### Use Variables

For complex automations, use variables to store values.

## Limitations

The builder can't do everything:
- Very complex logic
- Loops and iterations
- External API calls

For these, consider [YAML](./yaml.md) or [Node-RED](./node-red.md).

## More Information

- [YAML Automations](./yaml.md) - Text-based alternative
- [Node-RED](./node-red.md) - Visual flow programming
- [Official Documentation](https://www.home-assistant.io/docs/automation/)
