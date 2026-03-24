---
id: minibot-base
title: MiniBot Base
sidebar_position: 3
---
# Base Assembly

This section shows step by step how to build the base of the EduArt MiniBot.

![MiniBotBase](./assets/RenderBaseLeftFront.png)

## Step 1:
Assemble of the frame base.

![First Step 1](./assets/B1.png)

Connect two of the 150mm MakeBeams with a corner cube and two countersunk screws. 

![First Step 2](./assets/B2.png)

Then attach a third 150mm MakerBeam with a second corner cube and insert the bottom plate. The bottom plate determines the future orientation of the MiniBot. The holes closest to the MakerBeam will be at the back.

| | |
|-|-|
|![First Step 3](./assets/B3.png)| ![First Step 4](./assets/B4.png)| 

Insert 1 T-slot nut in the MakerBeam at the back. As shown in picture above. And insert 4 T-slot nuts in the front MakerBeam. 

After that install the forth 150mm MakerBeam with 2 further corner cubes so that the bottom plate is fully enclosed by the beams.

## Step 2:
Attaching the Motors.

![Second Step 1](./assets/B5.png)

Insert the ball bearing in to the Rear Motor Mount. Attach the Rear Motor Mount to the back of the frame with a M3x8 round head screw and the Rear Motor Mount Washer. The Rear Motor Mount should rotate freely but have as little play as possible.

![Second Step 2](./assets/B6.png)

Attach the 2 Front Motor Mounts with 4 M3x6 countersunk head screws to the front MakerBeam.

| | |
|-|-|
|![Second Step 3](./assets/B7.png)| ![Second Step 4](./assets/B8.png)| 

Attach the four Motors with 8 M3x6 countersunk head screws to the corresponding motor mounts and then secure each motor with a zip tie to the motor mount through the channels in the motor mounts.

## Step 3:
Stack Assembly.

![Third Step 1](./assets/B9.png)

First attach the Raspberry Pi5 Cooler to the Raspberry Pi. Make sure the SD card is installed and has the correct operating packet installed. Later access can require disassembly. Screw the M2.5x16 standoffs to the EduArt Adapter Board with M2.5x12 round head screws. Connect the Raspberry Pi camera ribbon cable, it will have to be fed through all the attached boards. Then attach the EduArt Adapter Board to the Raspberry Pi via the header pins.

![Third Step 2](./assets/B10.png)

Attach the stack to the frame base with 4 M2.5x12 round head screws through the Raspberry Pi Spacers.

![Third Step 3](./assets/B11.png)

Attach the other EduArt Boards on top of the EduArt Adapter Board in the following order and feed the Raspberry Pi Camera Ribbon Cable through them. Two EduArt Motor Controller Boards side by side. On top of those the EduArt Power Management Module and the last one is the EduArt Auxiliary Power Module.

## Step 4:

![Fourth Step 1](./assets/B12.png)

Attach the Battery Holders with 2 M3x8 to the bottom plate.

![Fourth Step 2](./assets/B13.png)

Attach 4 100mm MakerBeams with M3x6 countersunk head screws to the corners of the base.

![Fourth Step 3](./assets/B14.png)

Place the Raspberry Pi Camera inside Raspberry Pi Camera Mount.

![Fourth Step 4](./assets/B15.png)

Screw the Raspberry Pi Camera to the front plate with a M3x8 round head screw and a M3 nut.

![Fourth Step 5](./assets/B16.png)

Place the Battery between the Battery Holder and the front MakerBeam.

![Fourth Step 6](./assets/B17.png)

Place the Battery Clamps on top of the Battery and in the cutouts in the front plate. Secure the Battery Clamps with M3x8 round head screws to the Battery Holders.

![Fourth Step 7](./assets/B18.png)

Insert the Side Plate Right and the Side Plate Back between the MakerBeams at the corresponding positions.

## Step 5:
Preparing and installing the wiring.

| | |
|-|-|
|![Fifth Step 1](./assets/B19.jpg)| ![EduArt Power Module Pinout](./assets/Free_Kinematics_Kit_Electrical_Interface_Desc_1920.jpg)| 

Install the switches in to the Side Plate Left and solder them to the correct positions on the connector that connects to the EduArt Power Supply Module.

![Fifth Step 2](./assets/B20.png)

Install the Side Plate Left with the switches to the corresponding position between the MakerBeams.

![Fifth Step 3](./assets/B21.jpg)

Solder the motor cables to the cables needed for the EduArt Motor Driver connectors.

![Fifth Step 4](./assets/B22.jpg)

Connect the motors to the EduArt Motor Controllers with the cables by feeding them through the corresponding opening in the front and back plates.

![Fifth Step 5](./assets/B23.jpg)

Connect the Raspberry Pi Camera Ribbon Cable to the Raspberry Pi Camera.

![Fifth Step 6](./assets/B24.jpg)

Connect the 5V to USB C Router Cable to the header on the EduArt Auxiliary Power Module.

Connect the Ethernet and lidar cables to the Raspberry Pi and just let them rest inside the base for now.

## Step 6:
Finalizing the Base Assembly.

![Sixth Step 1](./assets/B25.png)

Attach the Motor Covers Front and Back on to the motors.

![Sixth Step 2](./assets/RenderBaseLeftFront.png)

Finally attach the mecanum wheels to the motors.