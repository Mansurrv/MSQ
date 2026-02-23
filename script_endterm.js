const questionData = [
    { 
        q: "A freelance reporter wishes to use a service that allows files to be accessed at any time from any device. Whenever the reporter starts the laptop and connects to the internet, the files stored on the laptop must be synchronized with the service automatically. Which solution will meet the requirements?", 
        options: ["Office 365", "Exchange Online", "Virtual desktop infrastructure", "Dropbox"], 
        ans: 3, cat: "Cloud Services",
        desc: "Dropbox is a Cloud Storage/Synchronization service that maintains local copies of files and syncs them to the cloud automatically upon internet connection."
    },
    { 
        q: "A Linux PC user notices that the PC freezes on startup and exhibits kernel panic where there is a stop screen. What is a possible cause for the issue?", 
        options: ["A driver has become corrupted.", "Deja Dup has been turned off in the system.", "LILO has been deleted.", "GRUB has been corrupted."], 
        ans: 0, cat: "Linux Troubleshooting",
        desc: "A kernel panic is often caused by a fatal error the OS cannot recover from, frequently due to corrupted drivers or hardware failure."
    },
    { 
        q: "A small college wishes to deploy a learning management system (LMS) and is looking for a hosted solution. Which type of cloud-based solution would help the college to achieve the goal?", 
        options: ["Virtual application stream", "Dropbox", "Virtual desktop infrastructure", "Office 365"], 
        ans: 0, cat: "Cloud Services",
        desc: "Virtual application streaming allows the delivery of specific applications (like an LMS) over the internet without installing the full software suite locally."
    },
    { 
        q: "A software company has groups of developers located in different cities around the world. The company is using a cloud-based development environment so that all developers can access the same software development tools. Which cloud service is used by the company?", 
        options: ["ITaaS", "IaaS", "SaaS", "PaaS"], 
        ans: 3, cat: "Cloud Models",
        desc: "Platform as a Service (PaaS) provides a framework and tools for developers to build, test, and deploy applications in a shared environment."
    },
    { 
        q: "A support technician wants to upgrade a system to Windows 10 but is unsure whether the hardware and software on the existing system are compatible. What tool or utility would be the best choice for the user?", 
        options: ["Windows Easy Transfer", "Cortana Virtual Assistant", "Get Windows 10 app", "User State Migration Tool"], 
        ans: 2, cat: "Windows Utilities",
        desc: "The 'Get Windows 10' app included a compatibility checker to verify hardware and software readiness before performing an upgrade."
    },
    { 
        q: "A technician is attempting to diagnose and rectify a common boot problem on a Windows 10 installation. Which Windows 10 advanced recovery option should the technician use?", 
        options: ["Startup Repair", "Reset", "System Image Recovery", "System Restore"], 
        ans: 0, cat: "Windows Recovery",
        desc: "Startup Repair is specifically designed to fix common issues that prevent the OS from loading properly, such as missing system files."
    },
    { 
        q: "A technician is troubleshooting a laptop with an unresponsive touchscreen. What could be the probable cause?", 
        options: ["The DC jack is not grounded or is loose.", "The battery is not seated properly.", "The digitizer is faulty.", "The screen is dirty."], 
        ans: 3, cat: "Laptop Hardware",
        desc: "While a faulty digitizer causes hardware failure, a dirty screen is a very common 'probable cause' that interferes with the touch sensors."
    },
    { 
        q: "A technician is troubleshooting a Windows 10 PC with a frozen Internet Explorer window. Which command can the technician run, as an administrator, to terminate the Internet Explorer process?", 
        options: ["taskkill /pid iexplorer.exe", "taskkill /f /im explorer.exe", "taskkill /fi iexplorer.exe", "taskkill /f /im iexplorer.exe"], 
        ans: 3, cat: "Command Line",
        desc: "/f forces the closure, and /im specifies the image name (iexplorer.exe). Note: explorer.exe is the Windows UI, not the browser."
    },
    { 
        q: "A training company offers many application courses based on Windows. The company is looking for a solution to provide a hands-on learning and practice environment to remote learners. The goal is to provide a uniform learning environment to all users. Which cloud-based solution would help the company to achieve the goal?", 
        options: ["Office 365", "Google Drive", "Virtual application stream", "Virtual desktop infrastructure"], 
        ans: 3, cat: "Virtualization",
        desc: "VDI provides a complete, uniform desktop environment hosted on a server, ensuring all remote students have the same experience."
    },
    { 
        q: "A user is installing a local laser printer and receives an “Access Denied” message. What is the problem?", 
        options: ["The user account does not have administrative privileges.", "The printer is powered off.", "The printer cable connection is loose.", "The printer is installed on the wrong port."], 
        ans: 0, cat: "Security",
        desc: "Hardware installation requires administrative rights to write drivers to system folders. 'Access Denied' indicates a lack of permissions."
    },
    { 
        q: "A user is troubleshooting a connectivity issue from the PC to a web server and wants to see a list of the traffic stops between the PC and the web server. What is the best Windows command to select to do the job?", 
        options: ["Bootrec", "Diskpart", "Recover", "Tracert", "Tasklist"], 
        ans: 3, cat: "Networking Tools",
        desc: "Tracert (Trace Route) maps the path a packet takes, showing every router (hop) it visits on the way to the destination."
    },
    { 
        q: "A user tries to install an application on a Windows 10 Pro PC but it fails. The user tries to uninstall the application but it fails to uninstall. What option can be used to address this issue without loss of data or applications?", 
        options: ["Use Advanced Start-up", "Use Restore Point", "Uninstall and reinstall the device using Device Manager", "Restart the Windows Update services"], 
        ans: 1, cat: "Windows Recovery",
        desc: "A System Restore Point reverts the system's state to a previous time, fixing registry or file errors without deleting personal data."
    },
    { 
        q: "An administrator is re-imaging a large number of macOS machines. What built-in tool or command can be used to remotely boot the computers?", 
        options: ["mstsc", "Finder", "NetBoot", "Time Machine"], 
        ans: 2, cat: "macOS Admin",
        desc: "NetBoot allows macOS devices to boot from a network-held disk image, which is essential for mass imaging/deployment."
    },
    { 
        q: "Android apps sometimes require extra privileges. How do Android apps run to manage this securely?", 
        options: ["Through a proxy service", "In a walled garden", "In guest mode", "In a sandbox"], 
        ans: 3, cat: "Mobile Security",
        desc: "Sandboxing isolates apps so they cannot access each other's data or system resources without explicit permission."
    },
    { 
        q: "How can the life of a thermal printer be extended?", 
        options: ["Wipe the outside with a damp cloth.", "Clean inside with a HEPA vacuum.", "Clean the heating element regularly with isopropyl alcohol.", "Keep paper dry in low humidity."], 
        ans: 2, cat: "Printers",
        desc: "Thermal printers rely on a heating element; residue buildup can cause damage. Isopropyl alcohol keeps the element clean and functional."
    },
    { 
        q: "How does virtualization help with disaster recovery within a data center?", 
        options: ["Support of live migration", "Guarantee of power", "Improvement of business practices", "Supply of consistent air flow"], 
        ans: 0, cat: "Virtualization",
        desc: "Live migration allows a virtual machine to be moved to a different physical host without downtime, crucial if hardware fails."
    },
    { 
        q: "In laser printing, what is the name of the process of applying toner to the latent image on the drum?", 
        options: ["Charging", "Fusing", "Developing", "Transferring"], 
        ans: 2, cat: "Printers",
        desc: "Developing is the stage where toner is attracted from the developer roller to the laser-exposed areas of the drum."
    },
    { 
        q: "What are two cables that are used to connect a computer to a printer?", 
        options: ["PS/2, serial", "Serial, FireWire", "FireWire, eSATA", "eSATA, HDMI", "HDMI, PS/2"], 
        ans: 1, cat: "Cabling",
        desc: "While USB is most common today, Serial and FireWire are historically standard connections for printer communication."
    },
    { 
        q: "What corrective action would a technician take in response to a print spooler error?", 
        options: ["Clean the printer", "Reboot the printer", "Restart the print spooler", "Update the printer driver"], 
        ans: 2, cat: "Troubleshooting",
        desc: "The print spooler is a software service that manages jobs. If it crashes or hangs, restarting the service usually fixes the queue."
    },
    { 
        q: "What could be used in conjunction with a laptop in order to read flash media?", 
        options: ["M.2 card", "SSD", "Card reader", "SO-DIMM"], 
        ans: 2, cat: "Hardware",
        desc: "A card reader allows a laptop to interface with various types of flash memory cards like SD or microSD."
    },
    { 
        q: "What feature of an operating system allows it to support two or more CPUs?", 
        options: ["Multitasking", "Multiprocessing", "Multiuser support", "Multithreading"], 
        ans: 1, cat: "OS Concepts",
        desc: "Multiprocessing is the ability of an OS to utilize more than one CPU (processor) simultaneously."
    },
    { 
        q: "What is a characteristic of global and per-document options in print settings?", 
        options: ["Global options take precedence over per-document options.", "It is not possible to configure per-document options.", "Per-document options override global options.", "It is not possible to configure global options."], 
        ans: 2, cat: "Printers",
        desc: "Specific settings chosen for a single document (like 'Draft mode') will always override the general 'Global' system settings."
    },
    { 
        q: "What is a characteristic of thermal inkjet nozzles?", 
        options: ["The vibration of the crystal controls the flow of ink.", "The heat creates a bubble of steam in the chamber.", "Heat is applied to the ink reservoir of each nozzle.", "A charge is applied to the printhead."], 
        ans: 1, cat: "Printers",
        desc: "Thermal inkjets work by heating the ink to create a steam bubble, which forces a droplet out through the nozzle."
    },
    { 
        q: "What is a design consideration for mobile CPUs used in laptops compared with desktop CPUs?", 
        options: ["They require smaller cooling mechanisms than desktops do.", "They operate at higher clock speeds than desktops do.", "They consume more power than desktops do.", "They are interchangeable with desktop CPUs."], 
        ans: 0, cat: "Hardware",
        desc: "Mobile CPUs are designed to generate less heat and consume less power, allowing for smaller, quieter cooling systems."
    },
    { 
        q: "What is a good source for safely downloading Android apps?", 
        options: ["The Apple App Store", "Freeware sites", "iTunes", "Google Play"], 
        ans: 3, cat: "Mobile Devices",
        desc: "Google Play is the official, vetted marketplace for Android applications."
    },
    { 
        q: "What is a purpose of the boot manager program?", 
        options: ["It checks validity after factory reset.", "It allows the user to select the OS to use to boot the device.", "It determines which apps open during boot.", "It automates POST and checks for bad sectors.", "It manages encryption keys."], 
        ans: 1, cat: "OS Concepts",
        desc: "A boot manager (like GRUB or Windows Boot Manager) gives the user a menu to choose which operating system to start."
    },
    { 
        q: "What is the main function of a hypervisor?", 
        options: ["Software for data analysis.", "ISP monitoring tool.", "Synchronize sensors.", "Filter security credentials.", "Create and manage multiple VM instances on a host machine."], 
        ans: 4, cat: "Virtualization",
        desc: "The hypervisor is the core 'manager' that allows physical hardware to be split into multiple Virtual Machines."
    },
    { 
        q: "What is the most commonly used method to close an application that appears to be frozen on an OS X-based computer?", 
        options: ["Use Force Quit", "Access the Status menu", "Use Task Manager", "Access the Notification Center"], 
        ans: 0, cat: "macOS",
        desc: "'Force Quit' (Command+Option+Esc) is the standard macOS way to kill an unresponsive application."
    },
    { 
        q: "What is the purpose of a digitizer in a mobile device?", 
        options: ["To convert AC to DC", "To convert analog video to digital", "To convert user touch actions to digital input signals", "To convert digital music to analog"], 
        ans: 2, cat: "Mobile Hardware",
        desc: "The digitizer is the layer over the screen that 'digitizes' your finger's analog touch into electrical signals the CPU understands."
    },
    { 
        q: "What is the purpose of the Additional Drivers button in the Sharing tab of the Printer Properties?", 
        options: ["Add drivers for other printers on the PC", "Add drivers for duplex printing", "Add drivers for other printers in network", "To add additional drivers for other operating systems"], 
        ans: 3, cat: "Printers",
        desc: "This allows you to provide drivers for different OS architectures (like x86 vs x64) so other computers can download them when connecting to the shared printer."
    },
    { 
        q: "What is the purpose of Windows 10 ReadyBoost?", 
        options: ["Enables flash device as a hard drive cache.", "Enables quadruple channels.", "Enables UEFI to boot faster.", "Speeds up Windows 10 start time."], 
        ans: 0, cat: "Performance",
        desc: "ReadyBoost uses flash memory to store frequently accessed data, acting as a cache for slower mechanical hard drives."
    },
    { 
        q: "What is the result of doing a factory reset on a mobile device?", 
        options: ["Backup created and malware removed.", "OS updated with latest patches.", "All user data and settings are deleted.", "OS deleted and data moved to cloud."], 
        ans: 2, cat: "Mobile Devices",
        desc: "A factory reset wipes the device clean, returning it to the 'out of box' state it was in when first manufactured."
    },
    { 
        q: "What mechanism is used in a laser printer to permanently fuse the toner to the paper?", 
        options: ["Heat", "Electrical charge", "Pressure", "Light"], 
        ans: 0, cat: "Printers",
        desc: "The fuser assembly uses high heat (and some pressure) to melt the plastic-based toner into the fibers of the paper."
    },
    { 
        q: "What method can be used to connect to a printer wirelessly?", 
        options: ["WiMax", "Satellite", "IEEE 802.11 standards", "Microwave"], 
        ans: 2, cat: "Printers/Wireless",
        desc: "IEEE 802.11 is the technical family of standards for Wi-Fi."
    },
    { 
        q: "What method is typically used on a mobile device to provide internet connectivity?", 
        options: ["Cellular", "Z-Wave", "GPS", "Zigbee"], 
        ans: 0, cat: "Mobile Devices",
        desc: "Cellular data (4G/5G) is the primary method for mobile internet when away from Wi-Fi."
    },
    { 
        q: "What represents apps in the Windows Phone interface?", 
        options: ["Widgets", "Buttons", "Tiles", "Icons"], 
        ans: 2, cat: "Mobile Devices",
        desc: "Windows Phone (and Windows 8/10 Start menus) used 'Live Tiles' to represent applications."
    },
    { 
        q: "What term is used to describe a logical drive that can be formatted to store data?", 
        options: ["Volume", "Partition", "Cluster", "Track", "Sector"], 
        ans: 1, cat: "Storage",
        desc: "A partition is a logical division of a physical hard drive that the OS treats as a separate drive."
    },
    { 
        q: "What tool or command is used in macOS to navigate the file system?", 
        options: ["mstsc", "Finder", "Task Manager", "File Explorer"], 
        ans: 1, cat: "macOS",
        desc: "Finder is the default file manager and graphical user interface shell used on all Macintosh operating systems."
    },
    { 
        q: "What type of backlight is used in an LED display?", 
        options: ["LED", "LCD", "Light-generating pixels", "CCFL"], 
        ans: 0, cat: "Hardware",
        desc: "An LED display is an LCD screen that uses LEDs for its backlight instead of older fluorescent tubes."
    },
    { 
        q: "What type of connection would be used to connect a printer directly to the network?", 
        options: ["Ethernet", "USB", "FireWire", "Serial"], 
        ans: 0, cat: "Printers/Networking",
        desc: "Ethernet allows a printer to have its own IP address and be accessible to everyone on the LAN without a host PC."
    },
    { 
        q: "When a user is working on a system that uses a network file system, there is no difference between accessing a file stored locally or on another computer on the network.", 
        options: ["True", "False"], 
        ans: 0, cat: "Networking",
        desc: "A Network File System (NFS) makes remote files appear as if they are stored on the local hard drive to the user."
    },
    { 
        q: "When the device roams out of range of Wi-Fi, it can connect to cellular data if enabled. To which OS does this relate?", 
        options: ["iOS", "Android", "Both"], 
        ans: 2, cat: "Mobile Devices",
        desc: "Automatic switching between Wi-Fi and Cellular is a standard feature of all modern smartphone operating systems."
    },
    { 
        q: "When would the PXE option be used when repairing a PC?", 
        options: ["Display not clear.", "No response from mouse.", "App caused erratic behavior.", "The computer needs a replacement operating system."], 
        ans: 3, cat: "Networking/Boot",
        desc: "PXE (Preboot Execution Environment) allows a computer to boot and install an OS over the network."
    },
    { 
        q: "Where are 32-bit program files located in a 64-bit version of Windows 10 Pro?", 
        options: ["C:\\Windows\\System32", "C:\\Users", "C:\\Program Files", "C:\\Program Files (x86)"], 
        ans: 3, cat: "Windows",
        desc: "64-bit Windows uses 'Program Files' for 64-bit apps and 'Program Files (x86)' for 32-bit apps to keep them separated."
    },
    { 
        q: "Which action supports an effective printer preventive maintenance program?", 
        options: ["Replace toner at set intervals.", "Clean print heads when they stop working.", "Disconnect power when not in use.", "Reset the printer page counters if available."], 
        ans: 3, cat: "Printers",
        desc: "Resetting page counters (after maintenance) helps track when the next service (like roller replacement) is due."
    },
    { 
        q: "Which cloud service is best for an organization without technical knowledge to host and maintain applications?", 
        options: ["IaaS", "SaaS", "ITaaS", "PaaS"], 
        ans: 1, cat: "Cloud Models",
        desc: "Software as a Service (SaaS) requires the least technical knowledge, as the provider handles all maintenance, updates, and hosting."
    },
    { 
        q: "Which cloud model provides services for a specific organization or entity?", 
        options: ["Community cloud", "Private cloud", "Public cloud", "Hybrid cloud"], 
        ans: 1, cat: "Cloud Models",
        desc: "A Private Cloud is dedicated solely to one organization, providing high security and control."
    },
    { 
        q: "Which cloud-based storage service does Microsoft provide for backups?", 
        options: ["Dropbox", "Google Sync", "OneDrive", "iCloud"], 
        ans: 2, cat: "Cloud Services",
        desc: "OneDrive is Microsoft's integrated cloud storage solution for Windows and Office users."
    },
    { 
        q: "Which command line utility was developed by Microsoft to allow users to transfer files and settings to a new edition of Windows OS during an upgrade to Windows 10?", 
        options: ["Windows Upgrade Assistant", "Windows Easy Transfer", "User State Migration Tool", "PCmover Express"], 
        ans: 2, cat: "Windows Utilities",
        desc: "USMT is a scriptable command-line tool for IT professionals to migrate user data in large-scale deployments."
    },
    { 
        q: "Which device can scan a document and attach the scan to an email?", 
        options: ["Laser printer", "Thermal printer", "Networked MFD", "Automatic document feeder"], 
        ans: 2, cat: "Peripherals",
        desc: "An MFD (Multi-Function Device) combines printing, scanning, copying, and often 'Scan to Email' functionality."
    },
    { 
        q: "Which document function can a networked MFD provide that is unavailable on a standalone document copier or printer?", 
        options: ["Scan to local memory", "Scan to paper", "Scan to multiple copies", "Scan to email"], 
        ans: 3, cat: "Peripherals",
        desc: "Networked MFDs utilize the network connection to send digitized files directly to an email server."
    },
    { 
        q: "Which factor affects the speed of an inkjet printer?", 
        options: ["Cost of cartridges", "Quality of paper", "Size of power supply", "The desired quality of the image"], 
        ans: 3, cat: "Printers",
        desc: "Higher quality settings (like 'Best' or 'Photo') require more passes of the print head, significantly slowing down the speed."
    },
    { 
        q: "Which feature is included with both macOS and Apple iOS to establish a Wi-Fi direct connection between devices to simplify file transfer?", 
        options: ["Nearby Sharing", "Workgroup", "AirDrop", "Homegroup"], 
        ans: 2, cat: "Apple Ecosystem",
        desc: "AirDrop uses Bluetooth to discover devices and Wi-Fi Direct to transfer files between Apple products."
    },
    { 
        q: "Which file sharing mechanism is included with Microsoft Windows 10 to provide simple file sharing via Wi-Fi and Bluetooth?", 
        options: ["Nearby Sharing", "AirDrop", "Homegroup", "NFC", "Workgroup"], 
        ans: 0, cat: "Windows",
        desc: "Nearby Sharing is the Windows equivalent of AirDrop, using Bluetooth and Wi-Fi to send files to nearby PCs."
    },
    { 
        q: "Which file system is used to access files over a network?", 
        options: ["NFS", "CDFS", "FAT", "NTFS"], 
        ans: 0, cat: "Networking",
        desc: "NFS (Network File System) is specifically designed for accessing remote storage across a network."
    },
    { 
        q: "Which is a characteristic of a Type 1 hypervisor?", 
        options: ["Installed on existing OS", "No management console.", "Best for consumers.", "Installed directly on a server"], 
        ans: 3, cat: "Virtualization",
        desc: "Type 1 hypervisors are 'Bare Metal,' meaning they run directly on the physical hardware without an underlying OS."
    },
    { 
        q: "Which key, when pressed during the boot process, will allow the user to choose to start Windows in safe mode?", 
        options: ["Esc", "Windows", "F8", "F1"], 
        ans: 2, cat: "Windows",
        desc: "F8 was the traditional key to access Advanced Boot Options and Safe Mode in Windows (prior to Windows 8/10's change in boot speed)."
    },
    { 
        q: "Which laptop component is commonly found in the laptop lid?", 
        options: ["Motherboard", "Power connector", "Wi-Fi antenna", "SODIMM"], 
        ans: 2, cat: "Laptop Hardware",
        desc: "Placing the Wi-Fi antenna in the lid (around the screen) provides better signal reception because it is higher up."
    },
    { 
        q: "Which laptop component would be considered an FRU?", 
        options: ["Battery", "Display", "SODIMM", "External card reader"], 
        ans: 1, cat: "Hardware",
        desc: "An FRU (Field Replaceable Unit) is a complex component usually replaced by a technician, like the screen (Display)."
    },
    { 
        q: "Which Linux file system introduced journaling to minimize file system corruption after power loss?", 
        options: ["ext2", "NFS", "CDFS", "ext3"], 
        ans: 3, cat: "Linux",
        desc: "ext3 added journaling to the existing ext2 system, allowing for much faster recovery after an improper shutdown."
    },
    { 
        q: "Which protocol can be used to transfer messages from an email server to an email client?", 
        options: ["SMTP", "SNMP", "POP3", "HTTP"], 
        ans: 2, cat: "Networking Protocols",
        desc: "POP3 (Post Office Protocol v3) is used to retrieve emails from a server to a client."
    },
    { 
        q: "Which statement accurately describes the GUID partition table?", 
        options: ["No multiboot support.", "Not for Windows 10 Home.", "Commonly used in UEFI firmware.", "512 bytes long with boot loader."], 
        ans: 2, cat: "Storage",
        desc: "GPT is the modern standard for partitioning, replacing MBR and working specifically with UEFI firmware."
    },
    { 
        q: "Which statement describes a printer driver?", 
        options: ["Software that converts document to printer format.", "Cache inside printer.", "Windows interface identifying unique printer.", "Configuration code identifying OS."], 
        ans: 0, cat: "Printers",
        desc: "The driver acts as a translator, turning the text/images on your screen into a language (like PCL or PostScript) the printer hardware understands."
    },
    { 
        q: "Which statement describes dynamic disks in a PC that is running Windows 10 Pro?", 
        options: ["Shrink without deleting.", "Add adjacent unallocated space.", "Space only from same disk.", "Ability to create volumes that span across more than one disk."], 
        ans: 3, cat: "Storage",
        desc: "Dynamic disks allow 'Spanned Volumes,' which treat multiple physical hard drives as one single large drive."
    },
    { 
        q: "Which statement describes the iOS app icons on a mobile device screen?", 
        options: ["Shortcut of the app.", "Represents the actual app.", "Links to multiple instances.", "Represents an instance."], 
        ans: 1, cat: "Mobile Devices",
        desc: "In iOS, the icon on the home screen is the application itself; deleting the icon deletes the app."
    },
    { 
        q: "Which statement is true regarding libraries in Windows 10?", 
        options: ["Index files faster.", "Names longer than 20 chars.", "Link multiple different directories.", "Enforce EFS."], 
        ans: 2, cat: "Windows",
        desc: "Libraries allow you to group folders from different locations (like your HDD and an external drive) into a single view."
    },
    { 
        q: "Which type of hypervisor is implemented when a user with a laptop running macOS installs a Windows virtual OS instance?", 
        options: ["Type 2", "Bare metal", "Type 1", "Virtual machine"], 
        ans: 0, cat: "Virtualization",
        desc: "Since the hypervisor (like Parallels or VirtualBox) is running on top of macOS, it is a Type 2 (Hosted) hypervisor."
    },
    { 
        q: "Which type of hypervisor would most likely be used in a data center?", 
        options: ["Type 1", "Hadoop", "Nexus", "Type 2"], 
        ans: 0, cat: "Virtualization",
        desc: "Type 1 hypervisors are used in data centers because they are more efficient and stable since they don't have to share resources with a host OS."
    }
];

// ... [Existing shuffle and initQuiz logic remains here] ...  

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

const container = document.getElementById('quiz-container');
const scoreDisplay = document.getElementById('current-score');
const totalDisplay = document.getElementById('total-questions');
let score = 0;

function initQuiz() {
    const shuffled = shuffle([...questionData]);
    totalDisplay.innerText = shuffled.length;
    container.innerHTML = ''; 

    shuffled.forEach((data) => {
        const card = document.createElement('div');
        card.className = 'card';
        
        let optionsHTML = data.options.map((opt, i) => 
            `<button class="option" data-idx="${i}">${opt}</button>`
        ).join('');

        card.innerHTML = `
            <h2>${data.cat}</h2>
            <p class="question-text">${data.q}</p>
            <div class="options">${optionsHTML}</div>
            <button class="check-btn" disabled>Check Answer</button>
            <div class="explanation-box" style="display:none">
                <strong>Correct Answer Logic:</strong>
                <p>${data.desc}</p>
            </div>
        `;

        const buttons = card.querySelectorAll('.option');
        const checkBtn = card.querySelector('.check-btn');
        const explBox = card.querySelector('.explanation-box');
        let selectedIdx = null;

        buttons.forEach(btn => {
            btn.addEventListener('click', () => {
                if (card.classList.contains('answered')) return;
                buttons.forEach(b => b.classList.remove('selected-choice'));
                btn.classList.add('selected-choice');
                selectedIdx = parseInt(btn.dataset.idx);
                checkBtn.disabled = false;
            });
        });

        checkBtn.addEventListener('click', () => {
            card.classList.add('answered');
            checkBtn.style.display = 'none';
            explBox.style.display = 'block'; 
            buttons.forEach(b => b.classList.add('disabled'));

            if (selectedIdx === data.ans) {
                buttons[selectedIdx].classList.add('correct');
                score++;
                scoreDisplay.innerText = score;
            } else {
                buttons[selectedIdx].classList.add('wrong');
                buttons[data.ans].classList.add('correct');
            }
        });

        container.appendChild(card);
    });
}

initQuiz();