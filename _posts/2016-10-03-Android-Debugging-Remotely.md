---
published: true
layout: post
title:How To Deploy/Debug Your android App Over Wifi
---



![Android]({{site.baseurl}}/https://assets.materialup.com/uploads/0f6ed913-86b5-4b72-9cf8-2241afe9816e/IuCeOi1.png)

There is a little trick and it’s very helpful so far,whenever I was working on my android apps. I had to connect the mobile device to my laptop by USB cable and this was very annoying and limits my movement and very harmful for the mobile battery, I was searching if there is any option to do the debugging over the wifi and #here it comes

Luckily, there is a super simple way! All you need is a USB cable for the initial step and the Mobile Device and the laptop on the same network.

##Steps to Revolutionize your Android Coding Experience

- connect the mobile device by the USB cable and make sure the USB debugging is enabled, then check the device in the devices list at ADB adb devices

- Run `adb tcpip 5555`

- Disconnect your device and remove the USB

- Go to the Settings -> About Phone -> Status

- Run `adb connect <phone IP Address>:5555`

- if you run `adb` devices you should see your device

Now you can run and adb command as you like and

 

#Happy wireless coding🙂
