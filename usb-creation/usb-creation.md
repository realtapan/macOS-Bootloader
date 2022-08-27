---
prev: false
next: /usb-creation/mac-usb.md
---
# Creating the USB

To install macOS we need to create a bootable USB first. We can do this either on macOS itself or any windows PC. We can create both online or offline USB.
## Online vs Offline Installer
Offline installers have a complete copy of macOS, while online installers are only a recovery image (~500MB) which then download macOS from Apple servers once booted.

* Offline
   * Can only be made in macOS
   * Windows/Linux do not have the APFS/HFS drivers needed to assemble a full installer
* Online
   * Can be made in macOS/Linux/Windows
   * Requires a working internet connection via a macOS supported network adapter on the target machine

## Making the Installer
Depending on which OS you're on, see your specific section on making the USB:

* **[macOS users](/usb-creation/mac-usb.md)**
  * Supports OS X 10.4 to current
  * Supports both legacy and UEFI installs
* **[Windows users](/usb-creation/windows-usb.md)**
  * Supports OS X 10.7 to current
  * Online installer only
  * Supports both legacy and UEFI installs
::: warning
Currentyly we have tested **macOS 10.13** to current
:::