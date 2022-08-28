![](../Asus-H81-M-CS/asush81m-cs.png)

## Hardware Overview
| Description | Details |
| :-------- | :------: |
| Motherboard | Asus H81M-CS |
| Chipset | Intel® H81 |
| Processor | Intel® Core i5-4590T CPU @ 2.00GHz |
| Code Name | Products formerly Haswell |
| Processor Graphics | Intel® HD Graphics 4600 |
| RAM | 12GB 1333Mhz DDR3 |
| Dedicated Graphics | Zotac 710 2GB DDR3 Graphics Card |
| Audio | Realtek ALC887 8-Channel High Definition Audio |
| Network | Realtek® 8111GR Gigabit LAN Controller(s) |

::: tip
This motherboard shipped with no HDMI port so iGPU is useless for display output. Use any supported dGPU.
:::
## BIOS Setup
| Disable | Enable |
| :------: | :-----: |
| Fast Boot | VT-x |
| Secure Boot | Hyper-Threading |
| Serial/COM Port | Execute Disable Bit |
| Parallel Port | EHCI/XHCI Hand-off |
| VT-d | OS type: Windows 8.1/10 UEFI Mode |
| CFG Lock | DVMT Pre-Allocated(iGPU Memory) 1024MB |

## Bootloader 
| Support | Version | |
| :------ | :-------------------: | :-------------: |
| Initial macOS Support | 10.13 - 11 | macOS High Sierra - macOS Big Sur |
| Bootloader| 0.8.3 | **[Download](https://github.com/realtapan/macOS-Bootloader/raw/master/desktop-efi/Asus-H81-M-CS/EFI.zip)** |
| Issue & Support | **[Discord](https://discord.gg/466jPtNZgC)** | **[Telegram](https://t.me/macEFI)** |

::: warning
After successfully installation of macOS, please change the **[SMBIOS]()** otherwise it will be pain in future.
:::
### 🛍  **Order Pre-made Desktop & Laptop [Shop Now]()** 🛒