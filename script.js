const questionData = [
    { q: "Which configuration step will a technician need to do on thin clients that will most likely not be done on thick clients?", options: ["Connect to LAN", "Connect to application server", "Install RAM", "Install local apps"], ans: 1, cat: "Client Systems" },
    { q: "What server stores print jobs in a queue and spools them to the device?", options: ["FTP server", "Proxy server", "Web server", "Print server"], ans: 3, cat: "Servers" },
    { q: "Computer can access same network but not others. Probable cause?", options: ["NIC cable", "Invalid default gateway", "Invalid IP address", "Incorrect subnet mask"], ans: 1, cat: "Networking" },
    { q: "Device for secure access to server room using retinal scan?", options: ["Biometric scanner", "Keyboard", "NFC device", "Flatbed scanner"], ans: 0, cat: "Security" },
    { q: "Device to manually input text for a new networking textbook?", options: ["Biometric scanner", "NFC device", "Flatbed scanner", "Keyboard"], ans: 3, cat: "Peripherals" },
    { q: "Device to allow users to tap and pay for their purchases?", options: ["NFC device", "Joystick", "Projector", "Magstripe reader"], ans: 0, cat: "Peripherals" },
    { q: "Device to see repair manual and airplane parts at the same time?", options: ["Biometric scanner", "Keyboard", "AR headset", "NFC device"], ans: 2, cat: "Advanced Tech" },
    { q: "Device to train pilots in a computer simulation?", options: ["Projector", "Joystick", "Magstripe reader", "AR headset"], ans: 1, cat: "Peripherals" },
    { q: "Device for accessibility issues to input instructions using a pen?", options: ["Stylus", "Biometric scanner", "Keyboard", "NFC device"], ans: 0, cat: "Peripherals" },
    { q: "Device to display promotional presentation to a large audience?", options: ["Joystick", "Magstripe reader", "Projector", "AR headset"], ans: 2, cat: "Output" },
    { q: "Device for secure access to main doors by swiping an ID card?", options: ["Magstripe reader", "Biometric", "Keyboard", "NFC device"], ans: 0, cat: "Security" },
    { q: "Share monitor, mouse, and keyboard between two computers?", options: ["KVM switch", "Access point", "Multipurpose device", "Network switch"], ans: 0, cat: "Hardware" },
    { q: "Check an older computer for additional hard drive capacity?", options: ["PATA/SATA connection", "Heat/Air flow", "BIOS version", "PCI/PCIe slot"], ans: 0, cat: "Storage" },
    { q: "Web server accessible via IP but domain times out. Problem?", options: ["Domain resolution failed", "DHCP down", "URL needs http", "home.html required"], ans: 0, cat: "Networking" },
    { q: "How to make browser display secure content of web server?", options: ["Resolve Domain", "Use http://", "Use https://", "Use port 443"], ans: 2, cat: "Security" },
    { q: "Disable option for devices to dynamically add themselves to network?", options: ["MAC filtering", "Port forwarding", "NAT", "UPnP"], ans: 3, cat: "Networking" },
    { q: "Troubleshoot serial communication between equipment and PC?", options: ["Tone generator", "Multimeter", "Cable tester", "Loopback plug"], ans: 3, cat: "Tools" },
    { q: "Technology that supports IP phones via network port?", options: ["NFC", "UPnP", "Wireless power", "Power over Ethernet"], ans: 3, cat: "Networking" },
    { q: "Memory module type for a tower computer?", options: ["DIMM", "DIP", "SIMM", "SODIMM"], ans: 0, cat: "Hardware" },
    { q: "Where to enable LoJack in a laptop?", options: ["Physical cable", "Antimalware", "Disk Management", "BIOS"], ans: 3, cat: "Security" },
    { q: "Memory type for database protection against errors?", options: ["RDRAM", "ECC", "DDR3", "DDR2"], ans: 1, cat: "Hardware" },
    { q: "Needed for high-end video adapter card operation?", options: ["24-pin ATX", "PCI slot", "Two 8-pin connectors", "PCIe x8 slot"], ans: 2, cat: "Hardware" },
    { q: "Motherboard with two black and two blue memory slots?", options: ["ECC", "Parity", "Dual channel", "DDR4"], ans: 2, cat: "Hardware" },
    { q: "Where to look for distended capacitors?", options: ["Under CPU", "On motherboard", "On memory module", "Within PSU"], ans: 1, cat: "Troubleshooting" },
    { q: "Server using two connections: commands and file transfer?", options: ["Web server", "Proxy", "Print server", "FTP server"], ans: 3, cat: "Servers" },
    { q: "Server where frequently accessed web pages are stored locally?", options: ["FTP server", "Web server", "Proxy server", "Print server"], ans: 2, cat: "Servers" },
    { q: "What connects to the 24-pin connector on a motherboard?", options: ["Power supply", "Video card", "PATA drive", "SATA drive"], ans: 0, cat: "Hardware" },
    { q: "Interoperability for 802.11b and 802.11g mixed network?", options: ["802.11n", "802.11g", "802.11a", "802.11b"], ans: 0, cat: "Wireless" },
    { q: "Storage drive connecting to PCIe bus with high reliability?", options: ["Tape drive", "2.5 SSD", "NVMe M.2", "2.5 HDD"], ans: 2, cat: "Storage" },
    { q: "Why select a straight-through cable?", options: ["Install EEPROM", "Diminish ESD", "Connect to wired network", "Attach external HD"], ans: 2, cat: "Networking" },
    { q: "Why select a 24-pin connector?", options: ["Replace heatsink", "Diminish ESD", "Attach power to motherboard", "Attach external HD"], ans: 2, cat: "Hardware" },
    { q: "Why select DDR3 or DDR4?", options: ["Diminish ESD", "Attach printer", "Install memory module", "Attach VR"], ans: 2, cat: "Hardware" },
    { q: "Why select a DVI to VGA adaptor?", options: ["Bluetooth", "Printer", "VR headset", "Analog monitor"], ans: 3, cat: "Hardware" },
    { q: "Why select a PCIe x16 expansion slot?", options: ["Install GRU", "Install video card", "Attach printer", "Attach VR"], ans: 1, cat: "Hardware" },
    { q: "Why select an RG-6 cable?", options: ["Install GPU", "Replace cable TV cabling", "Attach printer", "Attach VR"], ans: 1, cat: "Hardware" },
    { q: "Purpose of selecting two or three hard drives?", options: ["Share inputs", "Configure RAID", "Attach printer", "Attach VR"], ans: 1, cat: "Storage" },
    { q: "Device to establish home wireless network and internet access?", options: ["Patch panel", "Switch", "Hub", "Wireless router"], ans: 3, cat: "Wireless" },
    { q: "Server tracking actions while accessing the network?", options: ["Web server", "DHCP", "FTP", "Authentication server"], ans: 3, cat: "Servers" },
    { q: "Where does CPU load info from during operation?", options: ["ROM", "RAM", "SSD", "Hard drive"], ans: 1, cat: "Hardware" },
    { q: "Solution for failing HDDs due to warehouse vibrations?", options: ["Airflow case", "Install SSD", "Antistatic mat", "Power supply"], ans: 1, cat: "Troubleshooting" },
    { q: "How is a power supply attached to a tower case?", options: ["Standoffs", "Screws", "Strap", "Retention bar"], ans: 1, cat: "Hardware" },
    { q: "Simplify workstation IP configuration for network growth?", options: ["DIPS", "ICMP", "APIPA", "DHCP"], ans: 3, cat: "Networking" },
    { q: "Describe a biometric scanner.", options: ["Digitize image", "Gaming", "GUI navigation", "Voice/fingerprint access"], ans: 3, cat: "Security" },
    { q: "Describe a KVM switch.", options: ["Biometric access", "Tapping pay", "Read barcodes", "One set of mouse/kb for multiple PCs"], ans: 3, cat: "Hardware" },
    { q: "Describe a magstripe reader.", options: ["Verify delivery", "AR headset", "Read plastic card back", "Output projector"], ans: 2, cat: "Security" },
    { q: "Describe an AR headset.", options: ["Superimpose audio/images over real world", "LED tech", "3D head-tracking", "Laptop screen projection"], ans: 0, cat: "Advanced Tech" },
    { q: "Active cooling solution for a PC?", options: ["Heatsink", "Reduce CPU speed", "Painted case", "Additional case fan"], ans: 3, cat: "Hardware" },
    { q: "Fastest type of memory technology?", options: ["Quad channel", "SODIMM", "Double channel", "SRAM"], ans: 3, cat: "Hardware" },
    { q: "Connector for analog modem to telephone socket?", options: ["BNC", "RJ-11", "ST", "RJ-45"], ans: 1, cat: "Networking" },
    { q: "Adapter to record video signal to computer hard drive?", options: ["Video capture card", "Video adapter", "TV tuner", "NIC"], ans: 0, cat: "Peripherals" },
    { q: "Describe ECC memory.", options: ["Dedicated GPU", "Detect and correct bit errors", "Dual row pins", "240 pins"], ans: 1, cat: "Hardware" },
    { q: "Characteristic of EPROM?", options: ["240 pins", "GPU use", "Cache memory", "Erasable via UV light"], ans: 3, cat: "Hardware" },
    { q: "Component controlling CPU interaction with other motherboard parts?", options: ["CMOS", "BIOS", "Chipset", "RAM"], ans: 2, cat: "Hardware" },
    { q: "Compressed format of 2001:0db8:0000:0000:0ab8:0001:0000:1000?", options: ["...ab8:0:1", "...a0b0:8:1", "...0:1::8:1", "2001:db8::ab8:1:0:1000"], ans: 3, cat: "Networking" },
    { q: "Compressed format of 2002:0042:0010:c400:0000:0000:0000:0909?", options: ["...1090:0:99", "...1090:0:99", "...190::990", "2002:42:10:c400::909"], ans: 3, cat: "Networking" },
    { q: "Characteristic of SRAM in a PC?", options: ["High power", "Used for cache", "240 pins", "Main RAM"], ans: 1, cat: "Hardware" },
    { q: "Feature of SDRAM?", options: ["Two reads per cycle", "Constant power", "240 pins", "Process instructions in parallel"], ans: 3, cat: "Hardware" },
    { q: "Storage device using magnetic medium?", options: ["CD", "SSD", "Blu-ray", "Hard disk drive"], ans: 3, cat: "Storage" },
    { q: "Tool to protect components from ESD?", options: ["Wrist strap", "Surge suppressor", "SPS", "UPS"], ans: 0, cat: "Safety" },
    { q: "Drive typically installed in a 5.25 inch bay?", options: ["Hard drive", "SSD", "Optical drive", "Flash drive"], ans: 2, cat: "Hardware" },
    { q: "Interface for HDTVs and computers for audio/video?", options: ["HDMI", "FireWire", "DVI", "VGA"], ans: 0, cat: "Hardware" },
    { q: "Type of motherboard slot with types ranging from x1 to x16?", options: ["AGP", "PCI", "SATA", "PCIe"], ans: 3, cat: "Hardware" },
    { q: "Unit of measurement for hard drive speed?", options: ["PPM", "RPM", "CPM", "Gigabytes"], ans: 1, cat: "Storage" },
    { q: "Why ground both computers and network devices?", options: ["Current flow to case", "Path for stray current", "Voltage sync", "Limit output"], ans: 1, cat: "Safety" }
];

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
        `;

        const buttons = card.querySelectorAll('.option');
        const checkBtn = card.querySelector('.check-btn');
        let selectedIdx = null;

        // Step 1: Handle selection
        buttons.forEach(btn => {
            btn.addEventListener('click', () => {
                if (card.classList.contains('answered')) return;
                
                // Remove selected class from others
                buttons.forEach(b => b.classList.remove('selected-choice'));
                
                // Add to this one
                btn.classList.add('selected-choice');
                selectedIdx = parseInt(btn.dataset.idx);
                
                // Enable the check button
                checkBtn.disabled = false;
            });
        });

        // Step 2: Handle checking
        checkBtn.addEventListener('click', () => {
            card.classList.add('answered');
            checkBtn.style.display = 'none'; // Hide the button after use
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