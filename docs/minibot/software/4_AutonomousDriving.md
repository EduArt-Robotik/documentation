---
id: minibot-software-auto-drive
title: Autonomous Driving
sidebar_position: 4
---

# SLAM + NAV2
Start the Minibot node stack, and the Nav2 node stack in separate terminals:

`ros2 launch minibot_config minibot.launch.py`
`ros2 launch minibot_config navigation_launch.py`

You could later combine these into one launchfile if you want to. We decided against that, because both generate a lot of logs in the terminal and it was easier for us to debug something when we kept them seperate.

Then enable the robot using:
```bash
ros2 service call /edu_sml/enable std_srvs/srv/SetBool "data: true"

```

And set a goal pose for the robot:
```bash
ros2 topic pub /goal_pose geometry_msgs/PoseStamped "{header: {stamp: {sec: 0}, frame_id: 'map'}, pose: {position: {x: 1.0, y: 0.0, z: 0.0}, orientation: {w: 1.0}}}"
```

From this point onwards, you are free to make your own logic for navigating with a map.

# Using a previously scanned, static map

This is a part we didn't finish on the Robocup German Open 2026. So this will be more of a direction where to go than a concrete guide. You can scan an area thoroughly using the stack we've built up until now and save it by running

`ros2 run nav2_map_server map_saver_cli -f mapname`

Then you'll need to start minibot.launch.py without the SLAM toolbox. Ideally you make copy the launchfile and remove the SLAM toolbox there.

Then start the new launch node along with the nav2 nodes from
navigation_launch.py and load the saved map like this:

`ros2 launch nav2_bringup bringup_launch.py   map:=/path/to/mapname.yaml`

