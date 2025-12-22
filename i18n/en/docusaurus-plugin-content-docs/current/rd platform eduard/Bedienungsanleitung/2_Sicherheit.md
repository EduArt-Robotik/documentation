---
sidebar_position: 3
---

# Safety

## Limits of Use

Observe the following limits of use to prevent injuries to living beings and damage to the platform.

:::warning
Risk of damage to the robot platform and/or objects in the environment due to operation in an unsuitable environment!
:::

Do not operate the robot platform
- in areas with holes, stairs, and ledges (exact limit values explained in the chapter on drive types).
- on uneven, wet, and/or loose soft surfaces.
- on elevated platforms (e.g., table, podium, stage), only on the designated storage rack.
- outdoors.
- only at a suitable ambient temperature between +5 °C and +25 °C (1 h at 45 °C) and humidity below 70%.
- at altitudes above 1000 m above sea level.
- in wet or steam-humid environments.
- in potentially explosive areas.
- in the presence of minors only when a legal guardian or supervisor is present.
- for military use.
- for productive use in industrial environments (transport systems, service robotics in continuous operation).
- near animals or small children.
- for domestic use.
- for operation in public environments.
- only with the original battery.

Charge the robot only with the supplied charger.
Modifying software on circuit boards developed by EduArt Robotik GmbH is **strictly forbidden!**

---

## Foreseeable Misuse

:::danger
Hazards arise from incorrect handling of the device (electrical and mechanical)!
:::

- Do **not** short-circuit the battery!
- Do **not** intentionally damage the battery!
- Do not extend the device with components having sharp edges or points!
- Risk of crushing or contusion injuries if the platform falls!
- **Always** completely power off the device before mechanical or electrical modifications and disconnect the battery from the system for major conversions!
- Never attempt to ride on the device.
- Do not use the robot in potentially explosive areas.
- If you initialize the robot in autostart mode, do not send a driving mission under any circumstances. The start must always be performed manually.
- Extension with electronic and mechanical components must **always be evaluated by the customer in a conformity assessment!** You assume the role of manufacturer when making fundamental changes to the robot!
- Do not reach into rotating components (e.g., wheels or attachments).

:::warning
Improper programming and use of the robot platform can cause damage to the platform itself or objects in its environment.
:::

- Maximum load capacity is 5 kg.
- Extending the platform with electrical components must not exceed the maximum current of the respective output in total.
- Pay attention to voltage potentials when extending to prevent damage to additional components and the robot.
- Do not transport liquids.
- Do not allow the platform to climb walls or edges in a way that causes it to tip up. Tipping backward can damage the robot.

:::warning
For major repairs and conversions, please contact EduArt Robotik GmbH at **info@eduart-robotik.com** as a precaution to prevent injuries and damage.
:::

:::info
Improper storage can also damage the robot. Therefore, store the robot
- not in direct sunlight.
- not at low or high temperatures (see Section 2.1).
- on the designated storage rack.
- with disconnected battery for long-term storage.
- only in dry rooms.
- not in children's rooms to prevent unsupervised use.
:::

---

## Residual Risks

:::danger
Under certain circumstances, the platform can cause serious health damage even with proper use!
:::

- Do not work with the platform if you suffer from epilepsy.
- Direct and sustained looking into the illumination diodes from short distance can cause **irreversible eye damage**.

:::danger
Fire hazard due to overheating of the robot platform!
:::
- Do **not** operate the robot unattended.
- **Only** charge the battery under supervision.

:::danger
Ensure a clear and safe environment so the robot does not create additional trip hazards. Although the robot is designed to be as visible as possible through its lighting, it can still be easily overlooked. Ensure that persons in the same room are informed of platform operation.
:::

:::warning
Burn hazard from touching heated parts!
:::
The following parts may only be touched after sufficient cooling:
- IoT expansion board
- Motors after heavy use
- Simatic IoT2050 Gateway
- Any subsequently attached components

:::warning
Crushing hazard from rotating components.
:::
- Avoid reaching into the drive system when the robot is "live" (platform on, charger disconnected, emergency stop not activated).
- Press the emergency stop button if you notice malfunction during operation.
- **Always** lift and carry the robot by the designated handle.

:::warning
Injuries from unexpected weight.
:::
Be prepared for the high weight of the platform when lifting.

:::warning
Risk of injury from falling!
:::
Do not place the platform in escape routes or walkways to avoid trip hazards.

:::warning
Residual risks from manufacturing.
:::
- Despite careful inspection, **sharp edges** may remain that can cause minor cuts.
- **Lubricant residue** may remain on components, which can cause allergic reactions or eye irritation.
- **Vibrations** can loosen parts – wear sturdy footwear when working with the platform.

---

## Required Qualifications

To operate the platform, you or your supervisor should possess **basic knowledge of IT and electrical engineering** to ensure safe operation.
Extensions, disassembly, and maintenance may **only be performed by qualified personnel**.

---

## Explanation of Labeling

**Warning of hot surface**
Components with this symbol pose an increased burn hazard.
Application on Eduard Performance V3:
- Siemens Simatic Gateway IoT2050

---

## Glossary

| Term | Meaning |
|----------|------------|
| **Main board** | "Robotic Extension Shield for IoT2050" |
| **Node** | ROS-specific term for a program that performs a specific robot task |
| **Mecanum drive / steering** | Robot with Mecanum wheels |
| **Off-road drive / track steering** | Robot with large rubber wheels |
| **Platform / Robot** | Training platform "Eduard Performance V3" |

