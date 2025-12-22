---
id: vsc-mit-docker
title: Connecting VSC on Host Computer to Docker Container
sidebar_position: 4
---
# Connecting VSC on Host Computer to Docker Container

- Open VSC
- Code → Preferences → Extensions
- Install the "Remote Development" extension or plugin

![Remote Development](./assets/vsc/RemoteDevelopment.png)

- Also install the Docker Extension
![InstallDockerPlugin](./assets/vsc/InstallDockerPlugin.png)
- Click the green button at the bottom left "Attach to running Container"
![[Screenshot 2025-11-10 at 16.30.35.png]]
- "Open Folder" → ros2_ws


# Troubleshooting 
"Unable to write file 'vscode-remote://attached-container … Error: EACCES: permission denied, open '/home/user/ros2_ws/src/test.py')
- Open the terminal in VSC and adjust permissions

```
sudo chown -R user:user /home/user/ros2_ws
```
