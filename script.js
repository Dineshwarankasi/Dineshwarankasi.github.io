// script.js - Cyberpunk Interactive Portfolio Engine

const ICONS = {
    gear: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>`,
    code: `<span class="code-symbol">&lt;/&gt;</span>`,
    cube: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>`
};

const PROJECT_DATABASE = {
    crowdsim: {
        archive: "PROJECT_RETAIL_CROWDSIM",
        classification: "ISAAC_SIM // OMNIVERSE_SDG_EXTENSION",
        loadingText: "Initializing Isaac Sim crowd simulation & SDG pipeline...",
        overview: [
            "An advanced autonomous crowd simulation and Synthetic Data Generation (SDG) platform built as a native extension for NVIDIA Isaac Sim and Omniverse.",
            "Simulates realistic customer traffic within retail digital twins—from entrance and staggered aisle browsing to multi-lane checkout queues and exits—while preparing automated ground-truth data pipelines for training retail AI and computer vision models."
        ],
        mechanicsTitle: "// SIMULATION & QUEUING SYSTEMS",
        mechanics: [
            { title: "Autonomous Pathfinding", desc: "omni.anim.people & NavMesh dynamic obstacle avoidance with real-world retail itineraries." },
            { title: "Smart Multi-Lane Queuing", desc: "Live 3D USD volume extraction, FIFO slot-by-slot spacing, heading alignment & egress routing." },
            { title: "Synthetic Data Generation", desc: "Automated semantic labeling (USD SemanticsAPI) for 2D/3D boxes, depth, RGB & segmentation." },
            { title: "Domain & Action Randomization", desc: "Procedural asset sampling, scale variations (0.95x-1.05x), and weighted browsing dwell states." }
        ],
        highlightsTitle: "// TECHNICAL HIGHLIGHTS",
        highlights: [
            { title: "OpenUSD Dynamic Backend", desc: "Built with pxr.Usd & UsdGeom.BBoxCache to dynamically calculate waypoints on timeline events." },
            { title: "Isaac Replicator Agent (IRA)", desc: "Standardized character skeleton rigging and animation graphs with Scale-Orient-Translate (SOT) pipeline." },
            { title: "Automated CV Ground-Truth", desc: "Replicator annotator pipeline generating synchronous bounding box, depth, and instance masks." },
            { title: "Custom omni.ui Dashboard", desc: "Interactive extension panel with live parameter controls for queue spacing, lanes, and spawn rates." }
        ],
        techChips: ["NVIDIA Isaac Sim", "NVIDIA Omniverse", "Python", "OpenUSD (pxr)", "Omniverse Replicator", "omni.anim.people", "NavMesh", "Synthetic Data (SDG)"],
        mediaType: "video",
        mediaSrc: "assets/QueueSystemv1.mp4",
        controls: [
            { key: "SPACE", label: "Play / Pause" },
            { key: "M", label: "Mute Audio" },
            { key: "TAB", label: "Reset" },
            { key: "1 - 4", label: "Stage Views" }
        ]
    },
    echo: {
        archive: "PROJECT_ECHO_PROTOCOL",
        classification: "2D_TEMPORAL_PUZZLE_PLATFORMER",
        loadingText: "Loading project data...",
        overview: [
            "A 2D temporal puzzle-platformer built in Unity 6 where single-player problem solving is transformed into a cooperative temporal relay.",
            "When facing door barriers, laser timers, or unreachable ledges, the player records an attempt and resets the timeline. Automated 'Echoes' replay in real-time alongside the player to exploit newly created windows of opportunity."
        ],
        mechanicsTitle: "// CORE MECHANICS",
        mechanics: [
            { title: "Temporal Echo System", desc: "Record, rewind, and deploy up to 3 clones." },
            { title: "Physical & Energy Puzzles", desc: "Pressure plates, movable crates, etc." },
            { title: "Synchronized Obstacles", desc: "Timed lasers & dual-plate door relays." },
            { title: "Progressive Levels", desc: "7 levels from single-echo to multi-echo gauntlets." }
        ],
        highlightsTitle: "// TECHNICAL HIGHLIGHTS",
        highlights: [
            { title: "Deterministic Replay Engine", desc: "Custom timeline recorder (ReplayRecorder.cs) capturing kinematic state snapshots." },
            { title: "Velocity-Matching Interpolation", desc: "Smooth ghost movement without physics conflicts." },
            { title: "Memory Optimization", desc: "Efficient state buffering for multiple echoes." },
            { title: "Modular Level Design", desc: "Easily extensible puzzle framework." }
        ],
        techChips: ["Unity 6", "C#", "2D", "Timeline System", "Sprite / 2D Art", "Custom Replay System"],
        mediaType: "video",
        mediaSrc: "assets/Echo_v0.3.mp4",
        controls: [
            { key: "A / D", label: "Move" },
            { key: "SPACE", label: "Jump" },
            { key: "E", label: "Interact" },
            { key: "R", label: "Echo" },
            { key: "TAB", label: "Reset" },
            { key: "M", label: "Mute" }
        ]
    },
    wordle: {
        archive: "PROJECT_WORDLE_MOBILE",
        classification: "MOBILE_PUZZLE_SYSTEM",
        loadingText: "Initializing game state...",
        overview: [
            "A polished, mobile-friendly recreation of the classic word-guessing game built in Unity.",
            "Features intuitive touch controls, reactive board states, smooth procedural animations, and a clean, responsive UI architecture tailored for mobile devices."
        ],
        mechanicsTitle: "// CORE MECHANICS",
        mechanics: [
            { title: "Responsive Grid System", desc: "Dynamic tile validation with instant color feedback." },
            { title: "Virtual Touch Keyboard", desc: "Reactive on-screen keyboard syncing real-time letter states." },
            { title: "Dictionary Verification", desc: "Fast indexed word list validation on every submission." },
            { title: "State Machine", desc: "Clean turn management, attempt tracking, and victory/defeat evaluation." }
        ],
        highlightsTitle: "// TECHNICAL HIGHLIGHTS",
        highlights: [
            { title: "Optimized UI Architecture", desc: "Built with Unity uGUI Canvas and dynamic aspect anchoring." },
            { title: "Procedural Animations", desc: "Smooth flip and bounce feedback using custom tween curves." },
            { title: "Lightweight Memory Footprint", desc: "Zero garbage collection allocations during active gameplay." },
            { title: "Cross-Platform Pipeline", desc: "Designed for seamless touch and mouse interactions." }
        ],
        techChips: ["Unity", "C#", "Mobile UX", "Game Mechanics", "State Flow", "UI/UX Design"],
        mediaType: "video",
        mediaSrc: "assets/Wordle.mp4",
        controls: [
            { key: "A - Z", label: "Input Letter" },
            { key: "ENTER", label: "Submit" },
            { key: "BACKSPACE", label: "Delete" },
            { key: "M", label: "Mute Audio" }
        ]
    },
    visionpro: {
        archive: "PROJECT_VISIONPRO_CABIN_SIM",
        classification: "CONFIDENTIAL // PROPRIETARY_SIMULATION",
        loadingText: "Decrypting classified archive...",
        overview: [
            "An immersive training simulation developed for Apple Vision Pro to help cabin crew practice handling challenging passenger interactions in a realistic virtual environment.",
            "The simulation uses a conversational AI-driven virtual passenger to create dynamic interactions across different scenarios and emotional states, including angry, frustrated, upset, and demanding passengers."
        ],
        mechanicsTitle: "// SIMULATION SYSTEM",
        mechanics: [
            { title: "Conversational AI Passenger", desc: "Dynamic dialogue generation adapting to crew responses." },
            { title: "Multi-State Emotions", desc: "Simulates anger, frustration, and de-escalation curves in real-time." },
            { title: "Immersive Cabin Space", desc: "High-fidelity spatial audio and photorealistic interior environment." },
            { title: "Scenario Training", desc: "Repeatable evaluation modules for communication and empathy practice." }
        ],
        highlightsTitle: "// DEVELOPMENT SCOPE",
        highlights: [
            { title: "Solo End-to-End Build", desc: "Designed and implemented entire XR architecture in Unity & VisionOS." },
            { title: "AI Voice Pipeline", desc: "Integrated conversational speech recognition and real-time response flow." },
            { title: "Spatial Interaction Design", desc: "Engineered gaze targeting and micro-gesture pinch input handling." },
            { title: "State Coordinator", desc: "Robust session state management ensuring deterministic training flow." }
        ],
        techChips: ["Apple Vision Pro", "VisionOS", "Unity", "Conversational AI", "Spatial Computing", "Solo Dev"],
        mediaType: "image",
        mediaSrc: "assets/VisionPro_Cabin_Sim.jpg",
        badge: "CONFIDENTIAL // NDA PROTECTED",
        controls: [
            { key: "EYE GAZE", label: "Target" },
            { key: "PINCH", label: "Select / Interact" },
            { key: "VOICE", label: "Dialogue" },
            { key: "GESTURE", label: "Navigate" }
        ]
    },
    vrsimulation: {
        archive: "PROJECT_ENTERPRISE_VR_SIM",
        classification: "ENTERPRISE // COLLABORATIVE_SUITE",
        loadingText: "Loading enterprise simulation pipeline...",
        overview: [
            "An enterprise-grade virtual reality simulation environment built for corporate collaboration, spatial presentations, and multi-user interactive workshops.",
            "Empowers teams to interact with real-time synchronized digital whiteboard tools, physical presentation objects, and spatial audio in an ultra-modern high-rise boardroom."
        ],
        mechanicsTitle: "// CORE CAPABILITIES",
        mechanics: [
            { title: "Multi-User Networking", desc: "Low-latency state synchronization for avatars and shared objects." },
            { title: "Physics-Based Whiteboard", desc: "Direct hand drawing, erasing, and sticky note spatial pinning." },
            { title: "Interactive Presentation Deck", desc: "Gesture-driven slide transitions and 3D asset inspection." },
            { title: "Spatial Audio Acoustics", desc: "Realistic directional audio falloff and boardroom reverberation." }
        ],
        highlightsTitle: "// TECHNICAL HIGHLIGHTS",
        highlights: [
            { title: "Optimized VR Rendering", desc: "Fixed foveated rendering and single-pass stereo instancing at 90 FPS." },
            { title: "Deterministic Physics Handlers", desc: "Haptic-feedback object interactions with continuous collision checks." },
            { title: "Custom Network Buffer", desc: "Bandwidth-efficient delta compression for multi-participant sessions." },
            { title: "Enterprise Security", desc: "Role-based access control and encrypted room orchestration." }
        ],
        techChips: ["Unity VR", "C#", "OpenXR", "Multiplayer Networking", "Spatial Audio", "Enterprise UX"],
        mediaType: "image",
        mediaSrc: "assets/VR_Boardroom_Sim.jpg",
        badge: "ENTERPRISE // NDA PROTECTED",
        controls: [
            { key: "TRIGGER", label: "Grab / Draw" },
            { key: "THUMBSTICK", label: "Locomotion" },
            { key: "GRIP", label: "Hold Object" },
            { key: "MENU", label: "Toggle HUD" }
        ]
    },
    aerotwin: {
        archive: "PROJECT_AEROTWIN_SIM",
        classification: "AEROSPACE // DIGITAL_TWIN",
        loadingText: "Streaming telemetry twin...",
        overview: [
            "A high-fidelity digital twin simulation built for aerospace turbofan engines, coupling live telemetry ingestion with interactive 3D component breakdown.",
            "Enables flight engineers and maintenance crews to monitor temperature gradients, pressure anomalies, and vibration patterns across complex multi-stage assemblies in real time."
        ],
        mechanicsTitle: "// SIMULATION SYSTEM",
        mechanics: [
            { title: "Live Telemetry Ingestion", desc: "Streams sensor feeds with heat maps and RPM telemetry." },
            { title: "Exploded View Breakdown", desc: "Precision kinematic assembly separation for interior diagnostics." },
            { title: "Predictive Anomaly Alerts", desc: "Automated threshold flagging for thermal and mechanical stress." },
            { title: "Cross-Section Slicing", desc: "Dynamic volumetric clipping planes for internal airflow analysis." }
        ],
        highlightsTitle: "// TECHNICAL HIGHLIGHTS",
        highlights: [
            { title: "High-Poly LOD Optimization", desc: "Custom shader LOD culling maintaining smooth 60+ FPS on complex CAD." },
            { title: "Real-Time Heatmap Shader", desc: "Procedural vertex color gradient calculation based on sensor inputs." },
            { title: "Kinematic Animation Rig", desc: "Hierarchical parent-child constraint system for mechanical accuracy." },
            { title: "Data Stream Buffer", desc: "Circular queue architecture handling high-frequency sensor ticks." }
        ],
        techChips: ["Unity 3D", "C#", "Digital Twin", "Shader Graph", "Telemetry Stream", "CAD Optimization"],
        mediaType: "image",
        mediaSrc: "assets/AeroTwin_Sim.jpg",
        badge: "AEROSPACE // DIGITAL TWIN",
        controls: [
            { key: "LEFT CLICK", label: "Orbit Engine" },
            { key: "SCROLL", label: "Zoom View" },
            { key: "RIGHT CLICK", label: "Pan Camera" },
            { key: "1 - 4", label: "Sensor Modes" }
        ]
    }
};

let revealTimers = [];

function generateCardHTML(data) {
    return `
        <!-- Card 1: Initializing -->
        <div class="hud-card" data-card-idx="0">
            <div class="hud-card-header">
                <span>// INITIALIZING</span>
                <span class="system-status-tag"><span class="status-dot"></span>COMPILED // READY</span>
            </div>
            <div class="hud-card-body initializing-body">
                ${data.loadingText ? `<p class="muted-line">${data.loadingText}</p>` : ''}
                <div class="init-meta-grid">
                    <p><span class="cyan-accent">&gt;</span> <span class="cyan-label">Accessing archive :</span> <span class="white-text">${data.archive}</span></p>
                    <p><span class="cyan-dot">&bull;</span> <span class="cyan-label">Classification :</span> <span class="white-text">${data.classification}</span></p>
                </div>
            </div>
        </div>

        <!-- Card 2: Project Overview -->
        <div class="hud-card" data-card-idx="1">
            <div class="hud-card-header">// PROJECT OVERVIEW</div>
            <div class="hud-card-body">
                ${data.overview.map(p => `<p>${p}</p>`).join('')}
            </div>
        </div>

        <!-- Card 3: Core Mechanics -->
        <div class="hud-card has-icon" data-card-idx="2">
            <div class="hud-icon-badge">${ICONS.gear}</div>
            <div class="hud-card-content">
                <div class="hud-card-header">${data.mechanicsTitle}</div>
                <ul class="hud-bullet-list">
                    ${data.mechanics.map(m => `<li><span class="cyan-highlight">${m.title}</span> - ${m.desc}</li>`).join('')}
                </ul>
            </div>
        </div>

        <!-- Card 4: Technical Highlights -->
        <div class="hud-card has-icon" data-card-idx="3">
            <div class="hud-icon-badge">${ICONS.code}</div>
            <div class="hud-card-content">
                <div class="hud-card-header">${data.highlightsTitle}</div>
                <ul class="hud-bullet-list">
                    ${data.highlights.map(h => `<li><span class="cyan-highlight">${h.title}</span> - ${h.desc}</li>`).join('')}
                </ul>
            </div>
        </div>

        <!-- Card 5: Technologies Used -->
        <div class="hud-card has-icon" data-card-idx="4">
            <div class="hud-icon-badge">${ICONS.cube}</div>
            <div class="hud-card-content">
                <div class="hud-card-header">TECHNOLOGIES USED</div>
                <div class="hud-chips-row">
                    ${data.techChips.map(c => `<span class="hud-chip">${c}</span>`).join('')}
                </div>
            </div>
        </div>
    `;
}

function toggleVideoPlayback() {
    const video = document.getElementById("demo-video");
    if (!video) return;
    if (video.paused) {
        video.play().catch(e => console.log(e));
    } else {
        video.pause();
    }
}

function handleControlClick(key) {
    const video = document.getElementById("demo-video");
    if (!video) return;
    if (key === 'M') {
        video.muted = !video.muted;
    } else if (key === 'SPACE') {
        toggleVideoPlayback();
    } else if (key === 'TAB') {
        video.currentTime = 0;
    }
}

function generateControlsHTML(controls) {
    if (!controls || controls.length === 0) return '';
    return controls.map(c => `
        <div class="control-item" onclick="handleControlClick('${c.key}')" title="Action: ${c.label}">
            <span class="keycap">${c.key}</span>
            <span class="keycap-label">${c.label}</span>
        </div>
    `).join('');
}

function completeTypewriterInstantly() {
    // Clear all pending card reveal animations
    revealTimers.forEach(t => clearTimeout(t));
    revealTimers = [];

    // Immediately show all cards at full opacity
    const cards = document.querySelectorAll("#cards-container .hud-card");
    cards.forEach(card => {
        card.style.opacity = "1";
        card.style.transform = "translateY(0)";
        card.style.transition = "none";
    });

    const leftPanel = document.querySelector(".left-panel");
    if (leftPanel) leftPanel.scrollTop = 0;
}

function openProjectModal(mode) {
    const projectView = document.getElementById("project-view");
    const video = document.getElementById("demo-video");
    const imgContainer = document.getElementById("demo-image-container");
    const demoImage = document.getElementById("demo-image");
    const demoBadge = document.getElementById("demo-badge");
    const cardsContainer = document.getElementById("cards-container");
    const controlsBar = document.getElementById("modal-controls-bar");
    const leftPanel = document.querySelector(".left-panel");

    if (!projectView) return;

    // Reset previous timers
    revealTimers.forEach(t => clearTimeout(t));
    revealTimers = [];

    const data = PROJECT_DATABASE[mode];
    if (!data) return;

    // Open Modal
    projectView.style.display = "block";
    document.body.style.overflow = "hidden";
    if (leftPanel) leftPanel.scrollTop = 0;

    // Render Left Panel HUD Cards
    if (cardsContainer) {
        cardsContainer.innerHTML = generateCardHTML(data);
        const cards = cardsContainer.querySelectorAll(".hud-card");
        
        // Initial state for animation
        cards.forEach((card) => {
            card.style.opacity = "0";
            card.style.transform = "translateY(8px)";
            card.style.transition = "opacity 0.25s cubic-bezier(0.16, 1, 0.3, 1), transform 0.25s cubic-bezier(0.16, 1, 0.3, 1)";
        });

        // Fast staggered reveal
        cards.forEach((card, idx) => {
            const timer = setTimeout(() => {
                card.style.opacity = "1";
                card.style.transform = "translateY(0)";
            }, idx * 75);
            revealTimers.push(timer);
        });
    }

    // Render Right Panel Media
    if (data.mediaType === 'video') {
        if (imgContainer) imgContainer.style.display = "none";
        if (video) {
            video.style.display = "block";
            if (!video.src.endsWith(data.mediaSrc)) {
                video.src = data.mediaSrc;
                video.load();
            }
            try {
                video.currentTime = 0;
                video.loop = true;
                video.muted = true;
                video.play().catch(e => console.log(e));
            } catch(e) {}
        }
    } else {
        if (video) {
            try { video.pause(); } catch(e) {}
            video.style.display = "none";
        }
        if (imgContainer && demoImage) {
            demoImage.src = data.mediaSrc;
            if (demoBadge) {
                demoBadge.textContent = data.badge || "CONFIDENTIAL // NDA PROTECTED";
            }
            imgContainer.style.display = "block";
        }
    }

    // Render Bottom Controls HUD
    if (controlsBar) {
        controlsBar.innerHTML = generateControlsHTML(data.controls);
    }
}

function closeProjectModal() {
    const projectView = document.getElementById("project-view");
    const video = document.getElementById("demo-video");
    const cardsContainer = document.getElementById("cards-container");
    const controlsBar = document.getElementById("modal-controls-bar");

    if (!projectView) return;
    projectView.style.display = "none";
    document.body.style.overflow = "auto";

    if (video) {
        try {
            video.pause();
            video.currentTime = 0;
            video.removeAttribute('src');
            video.load();
        } catch(e) {}
    }

    revealTimers.forEach(t => clearTimeout(t));
    revealTimers = [];

    if (cardsContainer) cardsContainer.innerHTML = "";
    if (controlsBar) controlsBar.innerHTML = "";
    const leftPanel = document.querySelector(".left-panel");
    if (leftPanel) leftPanel.scrollTop = 0;
}

// Make functions globally available
window.openProjectModal = openProjectModal;
window.closeProjectModal = closeProjectModal;
window.completeTypewriterInstantly = completeTypewriterInstantly;

document.addEventListener('DOMContentLoaded', () => {
    console.log("SYSTEM BOOT SEQUENCE INITIATED...");
    console.log("LOADING CYBERPUNK THEME...");
    
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            if (!targetId || targetId === '#') return;
            
            e.preventDefault();
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Event listeners as backup to inline onclicks
    const crowdSimBtn = document.getElementById("crowdsim-btn");
    const echoBtn = document.getElementById("echo-btn");
    const wordleBtn = document.getElementById("demo-btn");
    const visionProBtn = document.getElementById("visionpro-btn");
    const vrSimBtn = document.getElementById("vrsim-btn");
    const aeroTwinBtn = document.getElementById("aerotwin-btn");
    const span = document.getElementsByClassName("close-btn")[0];

    if (crowdSimBtn) {
        crowdSimBtn.addEventListener('click', (e) => {
            e.preventDefault();
            openProjectModal('crowdsim');
        });
    }

    if (echoBtn) {
        echoBtn.addEventListener('click', (e) => {
            e.preventDefault();
            openProjectModal('echo');
        });
    }

    if (wordleBtn) {
        wordleBtn.addEventListener('click', (e) => {
            e.preventDefault();
            openProjectModal('wordle');
        });
    }

    if (visionProBtn) {
        visionProBtn.addEventListener('click', (e) => {
            e.preventDefault();
            openProjectModal('visionpro');
        });
    }

    if (vrSimBtn) {
        vrSimBtn.addEventListener('click', (e) => {
            e.preventDefault();
            openProjectModal('vrsimulation');
        });
    }

    if (aeroTwinBtn) {
        aeroTwinBtn.addEventListener('click', (e) => {
            e.preventDefault();
            openProjectModal('aerotwin');
        });
    }

    if (span) {
        span.addEventListener('click', closeProjectModal);
    }

    window.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeProjectModal();
    });

    // Contact Form Direct Email Delivery to dineshds039@gmail.com
    const contactForm = document.getElementById("contact-form");
    const transmitBtn = document.getElementById("transmit-btn");
    const commsStatus = document.getElementById("comms-status");
    const transmissionStatus = document.getElementById("transmission-status");

    if (contactForm && transmitBtn) {
        contactForm.addEventListener("submit", async (e) => {
            e.preventDefault();

            const name = document.getElementById("name").value.trim();
            const email = document.getElementById("email").value.trim();
            const message = document.getElementById("message").value.trim();

            if (!name || !email || !message) return;

            // Visual feedback: Transmitting state
            transmitBtn.disabled = true;
            const originalBtnText = transmitBtn.innerHTML;
            transmitBtn.innerHTML = `ENCRYPTING &amp; TRANSMITTING...`;
            if (commsStatus) {
                commsStatus.innerHTML = `<span class="status-dot warning"></span>TRANSMITTING`;
            }
            if (transmissionStatus) {
                transmissionStatus.style.display = "none";
            }

            try {
                const response = await fetch("https://formsubmit.co/ajax/dineshds039@gmail.com", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        "Accept": "application/json"
                    },
                    body: JSON.stringify({
                        name: name,
                        email: email,
                        message: message,
                        _subject: `[PORTFOLIO TRANSMISSION] New message from ${name}`,
                        _template: "table",
                        _captcha: "false"
                    })
                });

                const data = await response.json();

                if (response.ok || data.success === "true" || data.success === true) {
                    transmitBtn.innerHTML = `TRANSMISSION_DELIVERED // 200 OK`;
                    transmitBtn.classList.add("btn-success");
                    if (commsStatus) {
                        commsStatus.innerHTML = `<span class="status-dot"></span>DELIVERED`;
                    }
                    if (transmissionStatus) {
                        transmissionStatus.className = "transmission-status success";
                        transmissionStatus.innerHTML = `<strong>// TRANSMISSION_LOGGED:</strong> Payload successfully dispatched to operator at <code>dineshds039@gmail.com</code>. Thank you for connecting!`;
                        transmissionStatus.style.display = "block";
                    }
                    contactForm.reset();
                    setTimeout(() => {
                        transmitBtn.disabled = false;
                        transmitBtn.innerHTML = originalBtnText;
                        transmitBtn.classList.remove("btn-success");
                        if (commsStatus) {
                            commsStatus.innerHTML = `<span class="status-dot"></span>LINK_ONLINE`;
                        }
                    }, 6000);
                } else {
                    throw new Error(data.message || "Failed to deliver payload");
                }
            } catch (error) {
                console.error("Transmission error:", error);
                transmitBtn.innerHTML = `TRANSMISSION_FAILED // RETRY`;
                transmitBtn.classList.add("btn-error");
                if (commsStatus) {
                    commsStatus.innerHTML = `<span class="status-dot error"></span>LINK_ERROR`;
                }
                if (transmissionStatus) {
                    transmissionStatus.className = "transmission-status error";
                    transmissionStatus.innerHTML = `<strong>// COMMS_ERROR:</strong> Network dispatch failed. You can also transmit directly via <a href="mailto:dineshds039@gmail.com" style="color: #00f0ff; text-decoration: underline;">dineshds039@gmail.com</a>.`;
                    transmissionStatus.style.display = "block";
                }
                setTimeout(() => {
                    transmitBtn.disabled = false;
                    transmitBtn.innerHTML = originalBtnText;
                    transmitBtn.classList.remove("btn-error");
                    if (commsStatus) {
                        commsStatus.innerHTML = `<span class="status-dot"></span>LINK_ONLINE`;
                    }
                }, 5000);
            }
        });
    }

    // Auto-open project modal if specified in URL query params or hash
    const urlParams = new URLSearchParams(window.location.search);
    const projQuery = urlParams.get('project') || window.location.hash.replace('#', '');
    if (projQuery && PROJECT_DATABASE[projQuery]) {
        openProjectModal(projQuery);
        // If headless or auto-loaded, ensure cards are immediately shown
        completeTypewriterInstantly();
    }
});
