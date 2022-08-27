---
prev: false
next: /usb-creation/usb-creation.md
---
# Introduction
## EFI
It can denote two things:
- Mac's firmware, which is the same as UEFI, but pretty modified for Macs only, so not so "Universal"
- The partition on your hard drive that stores software read by the UEFI to load OSes (like the Windows bootloader) or UEFI Applications (like OpenCore), it's FAT32 formatted and has an ID type of EF00 (in hex). It can be named ESP or SYSTEM, and it's usually from 100MB to 400MB in size but the size doesn't reflect upon anything.

## UEFI
The Unified Extensible Firmware Interface (UEFI) is a specification that defines a software interface between an operating system and platform firmware. UEFI replaces the legacy Basic Input/Output System (BIOS) firmware interface originally present in all IBM PC-compatible personal computers, with most UEFI firmware implementations providing support for legacy BIOS services. UEFI can support remote diagnostics and repair of computers, even with no operating system installed.

## Bootloader
Piece of software that loads an OS, usually made by the OS creators. OpenCore is technically not a bootloader per se (see boot manager explanation down below). Apple's Boot.efi would be the actual boot loader in a Mac or Hackintosh.

## Hackintosh
The process of installing macOS onto a PC, note that Hackintosh IS NOT the OS, it can also refer to the machine that was "hacked" to get macOS running on it. For example: ``I installed macOS on this Windows machine, therefore I have a Hackintosh. But I did NOT install "Hackintosh".``