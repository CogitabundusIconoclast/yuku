// Suraksha Home/Intro Page JS

// Q&A Data
const surakshaQAs = [
    { q: "Who are we?", a: "We are Suraksha, your dedicated digital ally for safety and legal aid in India." },
    { q: "What do we do?", a: "We provide a single app for all your safety, legal, and grievance needs." },
    { q: "How are we different?", a: "We uniquely integrate diverse safety and legal services into one trusted platform." },
    { q: "Why trust Suraksha?", a: "Trust us for verified experts, secure support, and our \"Your Trust Our Priority\" commitment." },
    { q: "What is our mission?", a: "Our mission is to make safety and justice accessible and efficient for every Indian." },
    { q: "What does Suraksha offer?", a: "Suraksha offers quick help, expert connections, and vital safety information." },
    { q: "How does Suraksha work?", a: "We connect you to verified assistance and streamline complex legal processes." },
    { q: "What is Suraksha's focus?", a: "Our focus is empowering you with reliable safety and legal solutions." },
    { q: "Why Suraksha now?", a: "Because you need a single, trustworthy solution for today's safety and legal challenges." }
];

// Card colors (9 colors)
const cardColors = [
    "142, 249, 252", // Cyan
    "142, 252, 204", // Turquoise
    "142, 252, 157", // Green
    "215, 252, 142", // Lime
    "252, 252, 142", // Yellow
    "252, 142, 239", // Pink
    "204, 142, 252", // Purple
    "142, 202, 252", // Light Blue
    "252, 208, 142"  // Orange
];


const features = {
    intro: {
        bg: 'Assets/intro_default.jpg',
        overlay: 'rgba(233, 231, 231, 0.77)',
        content: `
        <div id="interactiveCardsContainer"></div>
        <div class="intro-center-message" style="width:100%;text-align:center;margin:32px 0 0 0;">
          <span style="display:inline-block;font-weight:800;font-size:2.1rem;color:#121349;letter-spacing:0.5px;line-height:1.3;">We are keen to Develope our product and Help You with Convenient, fast and affordable justice that you deserve!</span>
        </div>
        <div class="expanding-stats-container" style="margin-top:100px; margin-bottom:80px;">
            <div class="expanding-card">
                <p class="stat-panel">
                    <span class="collapsed-text">Corruption & Systemic Issues</span>
                    <span class="expanded-text">Over 40% of citizens report experiencing corruption when accessing public services</span>
                </p>
                <p class="stat-panel">
                    <span class="collapsed-text">Underreporting of Crimes</span>
                    <span class="expanded-text">An estimated 60-70% of crimes, especially non-violent ones, go unreported due to complex processes or lack of trust.</span>
                </p>
                <p class="stat-panel">
                    <span class="collapsed-text">Your trust, our priority</span>
                    <span class="expanded-text">Suraksha becomes a one-step safe solution for you! explore it today!</span>
                </p>
            </div>
        </div>`
    },
    ai: {
        bg: 'Assets/Eurus.jpg',
        overlay: 'rgba(236, 236, 241, 0.9)',
        content: `<div class="feature-content ai-feature" style="margin-right: 50px;"> <h2><i class='bx bx-bot'></i> Suraksha AI Assistant</h2> <p>Our advanced AI is here to help you navigate complex legal information, understand your rights, and even assist in drafting basic legal documents. Ask questions and get guidance in simple terms.</p> <p><strong>Example Prompts:</strong></p> <ul> <li>"Explain my rights if I'm a victim of online fraud."</li> <li>"Help me draft a consumer complaint letter."</li> <li>"What are the steps to file an FIR?"</li> </ul> <div class="ai-chat-box-placeholder"> <p>AI Chat Interface Coming Soon!</p> <textarea placeholder="Type your queries here..." disabled style="width:100%; min-height:100px; margin-top:10px;"></textarea> <button class="btn animated-btn" style="margin-top:10px; background-color:rgb(230, 227, 38); color: white;" onclick="alert('AI Chat feature coming soon!')" disabled>Ask AI</button> </div> <p style="margin-top:30px;color:#bfa100;font-weight:600;">This feature is under active development.</p> </div>`
    },
    complaint: {
        bg: 'Assets/complaint_page_bg.jpg',
        overlay: 'rgba(255, 255, 255, 0.63)',
        content: `
        <div class="feature-content complaint-page complaint-page-enhanced">
        <div class="complaint-header">
        <h2><i class='bx bxs-file-doc'></i> File a Complaint</h2>
        <div class="info-icon-wrapper">
        <button type='button' class='info-icon complaint-info-btn' tabindex='0' aria-label='Complaint filing instructions'>ⓘ</button>
        <div class='info-tooltip wide-tooltip'>
        <strong>Instructions for Filing a Complaint:</strong><br>
        1. Fill in your Name and Email (optional if filing anonymously).<br>
        2. Clearly describe your complaint in detail.<br>
        3. Attach any supporting documents (PDF, JPG, PNG). Max 5MB per file.<br>
        4. Select the most relevant authority to direct your complaint to.<br>
        5. Check "File Anonymously" if you wish to hide your personal details (your contact details will still be stored with Suraksha for internal tracking if provided, but masked from the authority).<br>
        6. After submission, you will receive a Complaint ID. Keep it safe to track your complaint status.<br>
        7. Use the "Track Complaint" section below to check progress.
        </div>
        </div>
        </div>

        <form id="complaintFormNew" class="complaint-form-styled">
                    <div class="form-section">
                        <div class="form-group">
                            <label for="complaintName">Your Name:</label>
                            <div class="form">
                                <input type="text" id="complaintName" name="complaintName" class="input" placeholder="Enter your full name">
                                <span class="input-border"></span>
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="complaintEmail">Your Email:</label>
                            <div class="form">
                                <input type="email" id="complaintEmail" name="complaintEmail" class="input" placeholder="Enter your email address">
                                <span class="input-border"></span>
                            </div>
                        </div>
                    </div>

                    <div class="form-group">
                        <label for="complaintDescription">Complaint Description:</label>
                        <textarea id="complaintDescription" name="complaintDescription" class="input complaint-textarea" rows="7" placeholder="Clearly describe your incident, issue, or grievance, including dates, times, locations, and persons involved if applicable..."></textarea>
                    </div>

                    <div class="form-group">
                        <label>Attach Supporting Documents (Optional):</label>
                        <div class="file-upload-box complaint-file-upload">
                            <button type="button" class="plusButton" id="trigger_complaintAttachments" tabindex="0" aria-label="Attach files for complaint">
                                <svg class="plusIcon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><rect x="10" y="4" width="4" height="16" rx="2"/><rect x="4" y="10" width="16" height="4" rx="2"/></svg>
                            </button>
                            <input type="file" id="complaintAttachments" name="complaintAttachments" multiple style="display: none;">
                            <span class="file-upload-list" id="list_complaintAttachments">No files selected</span>
                        </div>
                    </div>

                    <div class="form-group">
                        <label for="complaintAuthoritySelect">Select Authority to Report To:</label>
                        <select id="complaintAuthoritySelect" name="complaintAuthoritySelect" class="input styled-select">
                            <option value="">-- Please select an authority --</option>
                            <option value="local_police">Local Police Station</option>
                            <option value="cyber_cell">Cyber Crime Cell</option>
                            <option value="consumer_forum">Consumer Forum</option>
                            <option value="human_rights">Human Rights Commission</option>
                            <option value="women_commission">National/State Women's Commission</option>
                            <option value="child_rights">Child Rights Commission</option>
                            <option value="anti_corruption">Anti-Corruption Bureau / Vigilance</option>
                            <option value="traffic_police">Traffic Police</option>
                            <option value="municipal_corp">Municipal Corporation / Local Civic Body</option>
                            <option value="labour_dept">Labour Department</option>
                            <option value="other">Other (Please specify in description)</option>
                        </select>
                    </div>
                    
                    <div class="form-group checkbox-group">
                        <input type="checkbox" id="fileAnonymously" name="fileAnonymously">
                        <label for="fileAnonymously" class="checkbox-label">File Anonymously</label>
                    </div>

                    <button type="button" class="voice-complaint-btn" id="voiceComplaintBtn">
                        <i class='bx bxs-microphone'></i>
                        <span>File Voice Complaint</span>
                    </button>

                    <button type="submit" class="btn btn-golden animated-btn submit-complaint-btn">Submit Complaint Securely</button>

                    <div class="voice-complaint-dialog" id="voiceDialog">
                        <h3>Voice Complaint Feature</h3>
                        <p>This feature is currently under development. Coming soon!</p>
                    </div>
                </form>

                <div class="complaint-tracker-section">
                    <h3>Track Your Complaint</h3>
                    <div class="form-group">
                        <label for="complaintIdInput">Enter Complaint ID:</label>
                        <div class="form">
                            <input type="text" id="complaintIdInput" name="complaintIdInput" class="input" placeholder="E.g., SRK0123456789">
                            <span class="input-border"></span>
                        </div>
                    </div>
                    <button type="button" id="trackComplaintBtnOnPage" class="btn btn-navy">Track Status</button>
                    
                    <div id="complaintProgressArea" class="complaint-progress-area" style="margin-top: 20px;">
                        <div class="horizontal-progress-bar-container">
                            <div id="complaintProgressBarFill" class="progress-bar-fill" style="width: 0%;"></div>
                            <span id="complaintProgressText" class="progress-text">0%</span>
                        </div>
                    </div>
                    <div id="complaintStatusDisplay" class="complaint-status-display-area" style="margin-top: 10px;">
                        <!-- Status text will be shown here by JS -->
                    </div>
                </div>
            </div>
        `
    },
    experts: {
        bg: 'Assets/experts_page_bg.jpg',
        overlay: 'rgba(255, 255, 255, 0.77)',
        content: `
        <div class="feature-content experts-feature" style="margin-right: 50px;">
            <h2><i class='bx bxs-user-detail'></i> Connect with Legal Experts</h2>
            <p>Our network of experienced legal professionals is here to provide you with personalized assistance and guidance.</p>
            
            <div class="search-section" style="text-align: center; margin: 40px 0;">
                <h4 style="font-size: 24px; margin-bottom: 20px;">Search for Legal Services</h4>
                <div class="search-container" style="max-width: 800px; margin: 0 auto;">
                    <div class="search-box" style="display: flex; gap: 10px; background: rgba(255, 255, 255, 0.1); padding: 20px; border-radius: 15px; backdrop-filter: blur(10px);">
                        <input type="text" id="searchExperts" class="input styled-input" placeholder="Search for experts..." style="flex: 2; padding: 15px; font-size: 16px; border-radius: 10px; border: 1px solid rgba(255, 255, 255, 0.2); background: rgba(255, 255, 255, 0.05);">
                        <select id="expertCategory" class="input styled-select" style="flex: 1; padding: 15px; font-size: 16px; border-radius: 10px; border: 1px solid rgba(255, 255, 255, 0.2); background: rgba(255, 255, 255, 0.05);">
                            <option value="">All Categories</option>
                            <option value="lawyer">Lawyers</option>
                            <option value="ethical_hacker">Ethical Hackers</option>
                            <option value="legal_firm">Legal Firms</option>
                        </select>
                    </div>
                </div>
            </div>

            <div class="experts-grid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 20px; margin-top: 40px;">
                <!-- Lawyer Card -->
                <div class="expert-card" data-category="lawyer" style="background: rgba(255, 255, 255, 0.1); border-radius: 15px; padding: 20px; backdrop-filter: blur(10px);">
                    <div class="expert-header" style="display: flex; align-items: center; gap: 15px; margin-bottom: 15px;">
                        <div class="expert-avatar" style="width: 60px; height: 60px; border-radius: 50%; background: #bfa100; display: flex; align-items: center; justify-content: center;">
                            <i class='bx bxs-user' style="font-size: 30px; color: white;"></i>
                        </div>
                        <div>
                            <h3 style="margin: 0; color: #bfa100;">Sarah Johnson</h3>
                            <p style="margin: 5px 0; opacity: 0.8;">Criminal Defense Lawyer</p>
                        </div>
                    </div>
                    <div class="expert-info" style="margin-bottom: 15px;">
                        <p><i class='bx bxs-star' style="color: #bfa100;"></i> 4.9/5 (120+ reviews)</p>
                        <p><i class='bx bx-time' style="color: #bfa100;"></i> 15+ years experience</p>
                        <p><i class='bx bxs-map' style="color: #bfa100;"></i> Mumbai, Maharashtra</p>
                    </div>
                    <button class="btn btn-golden" style="width: 100%;">Contact Now</button>
                </div>

                <!-- Ethical Hacker Card -->
                <div class="expert-card" data-category="ethical_hacker" style="background: rgba(255, 255, 255, 0.1); border-radius: 15px; padding: 20px; backdrop-filter: blur(10px);">
                    <div class="expert-header" style="display: flex; align-items: center; gap: 15px; margin-bottom: 15px;">
                        <div class="expert-avatar" style="width: 60px; height: 60px; border-radius: 50%; background: #0066cc; display: flex; align-items: center; justify-content: center;">
                            <i class='bx bx-code-alt' style="font-size: 30px; color: white;"></i>
                        </div>
                        <div>
                            <h3 style="margin: 0; color: #0066cc;">Raj Mehta</h3>
                            <p style="margin: 5px 0; opacity: 0.8;">Certified Ethical Hacker</p>
                        </div>
                    </div>
                    <div class="expert-info" style="margin-bottom: 15px;">
                        <p><i class='bx bxs-star' style="color: #0066cc;"></i> 4.8/5 (90+ reviews)</p>
                        <p><i class='bx bx-time' style="color: #0066cc;"></i> 8+ years experience</p>
                        <p><i class='bx bxs-map' style="color: #0066cc;"></i> Bangalore, Karnataka</p>
                    </div>
                    <button class="btn btn-navy" style="width: 100%;">Contact Now</button>
                </div>

                <!-- Legal Firm Card -->
                <div class="expert-card" data-category="legal_firm" style="background: rgba(255, 255, 255, 0.1); border-radius: 15px; padding: 20px; backdrop-filter: blur(10px);">
                    <div class="expert-header" style="display: flex; align-items: center; gap: 15px; margin-bottom: 15px;">
                        <div class="expert-avatar" style="width: 60px; height: 60px; border-radius: 50%; background:rgb(13, 190, 221); display: flex; align-items: center; justify-content: center;">
                            <i class='bx bxs-building-house' style="font-size: 30px; color: white;"></i>
                        </div>
                        <div>
                            <h3 style="margin: 0; color: rgb(13, 190, 221);">Justice & Associates LLP</h3>
                            <p style="margin: 5px 0; opacity: 0.8;">Full-Service Law Firm</p>
                        </div>
                    </div>
                    <div class="expert-info" style="margin-bottom: 15px;">
                        <p><i class='bx bxs-star' style="color: rgb(13, 190, 221);"></i> 4.9/5 (200+ reviews)</p>
                        <p><i class='bx bx-time' style="color: rgb(13, 190, 221);"></i> 20+ years established</p>
                        <p><i class='bx bxs-map' style="color: rgb(13, 190, 221);"></i> Delhi, New Delhi</p>
                    </div>
                    <button class="btn btn-golden" style="width: 100%;">Contact Now</button>
                </div>
            </div>

            <div class="consultation-request-form">
                <h4>Request a Consultation</h4>
                <form id="consultationRequestForm">
                    <div class="form-group">
                        <label for="userName"><strong>Your Name:</strong></label>
                        <div class="form">
                            <input type="text" id="userName" name="userName" class="input" placeholder="Enter your full name">
                            <span class="input-border"></span>
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="userEmail"><strong>Your Email:</strong></label>
                        <div class="form">
                            <input type="email" id="userEmail" name="userEmail" class="input" placeholder="Enter your email address">
                            <span class="input-border"></span>
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="legalIssue"><strong>Brief Description of Your Legal Issue:</strong></label>
                        <div class="form">
                            <textarea id="legalIssue" name="legalIssue" class="input" rows="4" placeholder="Describe your legal issue..."></textarea>
                            <span class="input-border"></span>
                        </div>
                    </div>
                    <button type="submit" class="btn btn-golden">Submit Request</button>
                </form>
                <div id="consultationResponse" class="response-message" style="display:none; margin-top:10px;"></div>
            </div>

            <h3>Why Choose Our Experts?</h3>
            <ul>
                <li>Verified and experienced legal professionals.</li>
                <li>Wide range of legal specialties covered.</li>
                <li>Commitment to client confidentiality and ethical standards.</li>
            </ul>
        </div>
        `
    },
    awareness: {
        bg: 'Assets/awareness_page_bg.jpg',
        overlay: 'rgba(255, 255, 255, 0.84)',
        content: `
        <div class="feature-content awareness-feature">
            <h2><i class='bx bxs-book-content'></i> Safety & Legal Awareness</h2>
            <p>Stay informed and protected with our comprehensive awareness cards. Each card contains vital information about safety, legal rights, and current digital threats.</p>
            
            <div class="card-container">
                <!-- Row 1 -->
                <div class="flip-card">
                    <div class="flip-card-inner">
                        <div class="flip-card-front">
                            <p class="title">Contact Legal Authorities</p>
                            <p>Click to View</p>
                        </div>
                        <div class="flip-card-back">
                            <p class="title">EMERGENCY NUMBERS (INDIA)</p>
                            <p class="info-point">Police: 100 / 112</p>
                            <p class="info-point">Cyber Crime Helpline: 1930</p>
                            <p class="info-point">Women Helpline: 1091</p>
                            <p class="info-point">Child Helpline: 1098</p>
                            <p class="info-point">More: cybercrime.gov.in</p>
                        </div>
                    </div>
                </div>

                <div class="flip-card">
                    <div class="flip-card-inner">
                        <div class="flip-card-front">
                            <p class="title">Latest Fraud/Scam Patterns</p>
                            <p>Click to View</p>
                        </div>
                        <div class="flip-card-back">
                            <p class="title">BEWARE OF:</p>
                            <p class="info-point">Phishing: Fake emails/SMS</p>
                            <p class="info-point">UPI Scams: QR code, fake requests</p>
                            <p class="info-point">Job Scams: Advance fees for offers</p>
                            <p class="info-point">Loan App Scams: Data theft, high rates</p>
                            <p class="info-point">SIM Swap Fraud: Unauthorized access</p>
                        </div>
                    </div>
                </div>

                <!-- Row 2 -->
                <div class="flip-card">
                    <div class="flip-card-inner">
                        <div class="flip-card-front">
                            <p class="title">Global News That Affects YOU!</p>
                            <p>Click to View</p>
                        </div>
                        <div class="flip-card-back">
                            <p class="title">STAY INFORMED:</p>
                            <p class="info-point">Major Data Breaches: Check if affected</p>
                            <p class="info-point">New Privacy Laws: e.g., DPDP Act</p>
                            <p class="info-point">AI-Driven Misinformation: Verify sources</p>
                            <p class="info-point">Cross-Border Scams: Be vigilant</p>
                        </div>
                    </div>
                </div>

                <div class="flip-card">
                    <div class="flip-card-inner">
                        <div class="flip-card-front">
                            <p class="title">Secure Your Digital Devices</p>
                            <p>Click to View</p>
                        </div>
                        <div class="flip-card-back">
                            <p class="title">DEVICE HYGIENE:</p>
                            <p class="info-point">Strong, Unique Passwords & MFA</p>
                            <p class="info-point">Regular Software Updates (OS, Apps)</p>
                            <p class="info-point">Install Reputable Antivirus</p>
                            <p class="info-point">Secure Wi-Fi (WPA2/3), Use VPN</p>
                        </div>
                    </div>
                </div>

                <!-- Row 3 -->
                <div class="flip-card">
                    <div class="flip-card-inner">
                        <div class="flip-card-front">
                            <p class="title">Online Privacy Settings</p>
                            <p>Click to View</p>
                        </div>
                        <div class="flip-card-back">
                            <p class="title">MANAGE YOUR DATA:</p>
                            <p class="info-point">Review Social Media Privacy</p>
                            <p class="info-point">Limit App Permissions</p>
                            <p class="info-point">Understand Cookie Settings</p>
                            <p class="info-point">Be Wary of "Free" Services</p>
                        </div>
                    </div>
                </div>

                <div class="flip-card">
                    <div class="flip-card-inner">
                        <div class="flip-card-front">
                            <p class="title">Safe Online Transactions</p>
                            <p>Click to View</p>
                        </div>
                        <div class="flip-card-back">
                            <p class="title">SHOP & BANK SAFELY:</p>
                            <p class="info-point">Use HTTPS & Official Apps/Sites</p>
                            <p class="info-point">Avoid Public Wi-Fi for Finance</p>
                            <p class="info-point">Monitor Bank Statements Regularly</p>
                            <p class="info-point">Beware OTP/CVV Sharing Requests</p>
                        </div>
                    </div>
                </div>

                <!-- Row 4 -->
                <div class="flip-card">
                    <div class="flip-card-inner">
                        <div class="flip-card-front">
                            <p class="title">Reporting Cyber Incidents</p>
                            <p>Click to View</p>
                        </div>
                        <div class="flip-card-back">
                            <p class="title">TAKE ACTION:</p>
                            <p class="info-point">Report to cybercrime.gov.in</p>
                            <p class="info-point">Inform Your Bank Immediately</p>
                            <p class="info-point">Collect Evidence (Screenshots, URLs)</p>
                            <p class="info-point">Warn Friends & Family</p>
                        </div>
                    </div>
                </div>

                <div class="flip-card">
                    <div class="flip-card-inner">
                        <div class="flip-card-front">
                            <p class="title">Recognize Misinformation</p>
                            <p>Click to View</p>
                        </div>
                        <div class="flip-card-back">
                            <p class="title">THINK CRITICALLY:</p>
                            <p class="info-point">Check Source Credibility</p>
                            <p class="info-point">Look for Biased Language</p>
                            <p class="info-point">Cross-Verify with Other Sources</p>
                            <p class="info-point">Beware Deepfakes & Edited Media</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        `
    }
};


document.addEventListener('DOMContentLoaded', () => {
    const featureBg = document.getElementById('featureBg');
    const featureOverlay = document.querySelector('.feature-overlay');
    const featureMain = document.getElementById('featureMain');
    const featureNavButtons = document.querySelectorAll('.feature-nav-btn');
    const settingsBtn = document.getElementById('settingsBtn');
    const settingsDropdown = document.getElementById('settingsDropdown');
    const settingsItems = settingsDropdown.querySelectorAll('.dropdown-item');
    const sosEmergencyBtn = document.getElementById('sosEmergencyBtn');

    let currentFeature = sessionStorage.getItem('currentFeature') || 'intro';
    let currentOpenSettingsPanelId = null; // Store ID instead of element


    function initializeInteractiveCards(containerElement) {
        if (!containerElement) {
            console.error("Interactive cards container not found for initialization.");
            return;
        }
        containerElement.innerHTML = ''; // Clear any previous content

        const wrapper = document.createElement('div');
        wrapper.className = 'interactive-cards-wrapper'; // Use this for top-level styling/positioning

        const inner = document.createElement('div');
        inner.className = 'interactive-cards-inner';
        inner.style.setProperty('--quantity', surakshaQAs.length);
        // Set initial card dimensions (can be overridden in CSS)
        inner.style.setProperty('--w', '200px'); // Adjust as needed
        inner.style.setProperty('--h', '300px'); // Adjust as needed
         // Adjust --translateZ based on card width and quantity for optimal circle
        const cardWidth = parseFloat(inner.style.getPropertyValue('--w'));
        const numCards = surakshaQAs.length;
        // Apothem formula: r = s / (2 * tan(pi / n))
        // Factor for s (width) = 1 / (2 * tan(pi/n))
        const translateZFactor = 1.4 / (2 * Math.tan(Math.PI / numCards));
        const translateZValue = cardWidth * translateZFactor * 1.1; // Added a small factor for spacing
        inner.style.setProperty('--translateZ', `calc(var(--w) * ${translateZFactor.toFixed(3)})`);


        surakshaQAs.forEach((item, index) => {
            const card = document.createElement('div');
            card.className = 'interactive-card';
            card.style.setProperty('--index', index);
            card.style.setProperty('--color-card', cardColors[index % cardColors.length]);

            const imgDiv = document.createElement('div');
            imgDiv.className = 'interactive-card-img'; // This will have the gradient

            const contentDiv = document.createElement('div');
            contentDiv.className = 'interactive-card-content';

            const questionH3 = document.createElement('h3');
            questionH3.className = 'interactive-card-question';
            questionH3.textContent = item.q;

            const answerP = document.createElement('p');
            answerP.className = 'interactive-card-answer';
            answerP.textContent = item.a;

            contentDiv.appendChild(questionH3);
            contentDiv.appendChild(answerP);
            imgDiv.appendChild(contentDiv);
            card.appendChild(imgDiv);
            inner.appendChild(card);
        });

        wrapper.appendChild(inner);
        containerElement.appendChild(wrapper);

        // --- Start of Original Rotating Cards Logic (adapted) ---
        const allCards = Array.from(inner.querySelectorAll('.interactive-card'));
        const angleIncrement = 360 / numCards;

        const DRAG_SENSITIVITY = 0.35;
        const ZOOM_THRESHOLD = 20;
        const DEBUG_MODE = false;
        function log(...args) { if (DEBUG_MODE) console.log(...args); }

        let isHovered = false;
        let isDragging = false;
        let dragStartX = 0;
        let dragStartAngle = 0;
        let currentZoomedCardElement = null;

        const originalAnimationDetails = {
            name: window.getComputedStyle(inner).animationName,
            duration: window.getComputedStyle(inner).animationDuration,
            timingFunction: window.getComputedStyle(inner).animationTimingFunction,
            iterationCount: window.getComputedStyle(inner).animationIterationCount,
        };

        function normalizeAngle(angle) {
            return ((angle % 360) + 360) % 360;
        }

        function updateZoomedCard(currentInnerRotation) {
            log('updateZoomedCard with innerRotation:', currentInnerRotation);
            let mostFrontCard = null;
            let minAngleToFront = ZOOM_THRESHOLD + 1;
            const normalizedInnerAngle = normalizeAngle(currentInnerRotation);

            allCards.forEach(card => {
                const cardIndex = parseInt(card.style.getPropertyValue('--index'));
                const cardOwnInitialRotation = angleIncrement * cardIndex;
                const cardGlobalFaceAngle = normalizeAngle(normalizedInnerAngle + cardOwnInitialRotation);
                let angleDiffFromFront = cardGlobalFaceAngle > 180 ? 360 - cardGlobalFaceAngle : cardGlobalFaceAngle;

                if (angleDiffFromFront < minAngleToFront) {
                    minAngleToFront = angleDiffFromFront;
                    mostFrontCard = card;
                }
                if (card !== mostFrontCard || minAngleToFront > ZOOM_THRESHOLD) {
                    card.classList.remove('zoomed');
                }
            });

            if (currentZoomedCardElement && currentZoomedCardElement !== mostFrontCard) {
                currentZoomedCardElement.classList.remove('zoomed');
            }

            if (mostFrontCard && minAngleToFront <= ZOOM_THRESHOLD) {
                if (!mostFrontCard.classList.contains('zoomed')) {
                    mostFrontCard.classList.add('zoomed');
                    log('Zooming card:', mostFrontCard.style.getPropertyValue('--index'), 'AngleDiff:', minAngleToFront);
                }
                currentZoomedCardElement = mostFrontCard;
            } else {
                if (currentZoomedCardElement) {
                    currentZoomedCardElement.classList.remove('zoomed');
                    log('Unzooming (no card front enough). MinAngleToFront:', minAngleToFront);
                }
                currentZoomedCardElement = null;
            }
        }

        inner.addEventListener('mouseenter', () => {
            log('Mouse enter. isDragging:', isDragging);
            isHovered = true;
            if (isDragging) return;

            let currentAnimatedAngle = parseFloat(window.getComputedStyle(inner).getPropertyValue('--current-rotate-y'));
            currentAnimatedAngle = normalizeAngle(currentAnimatedAngle);
            log('Current animated angle on enter (for pause & zoom):', currentAnimatedAngle);

            inner.style.animationPlayState = 'paused';

            const prevTransition = inner.style.transitionProperty;
            inner.style.transitionProperty = 'none';
            inner.style.setProperty('--current-rotate-y', currentAnimatedAngle + 'deg');
            void inner.offsetWidth;
            inner.style.transitionProperty = prevTransition;

            updateZoomedCard(currentAnimatedAngle);
            log('Hover: Paused and updated zoom.');
        });

        inner.addEventListener('mouseleave', () => {
            log('Mouse leave. isDragging:', isDragging);
            isHovered = false;

            if (currentZoomedCardElement) {
                currentZoomedCardElement.classList.remove('zoomed');
                currentZoomedCardElement = null;
                log('Unzoomed card on mouse leave.');
            }

            if (isDragging) return;

            if (originalAnimationDetails.name && originalAnimationDetails.name !== 'none') {
                let stoppedAngle = parseFloat(window.getComputedStyle(inner).getPropertyValue('--current-rotate-y'));
                stoppedAngle = normalizeAngle(stoppedAngle);
                log('Resuming animation from angle:', stoppedAngle);

                const animationTotalDurationSeconds = parseFloat(originalAnimationDetails.duration);
                let negativeDelay = 0;
                if (animationTotalDurationSeconds > 0) {
                    const progress = stoppedAngle / 360;
                    negativeDelay = -progress * animationTotalDurationSeconds;
                }
                
                const prevTransition = inner.style.transitionProperty;
                inner.style.transitionProperty = 'none';
                inner.style.setProperty('--current-rotate-y', stoppedAngle + 'deg');
                inner.style.animation = 'none';
                void inner.offsetWidth;
                inner.style.animationName = originalAnimationDetails.name;
                inner.style.animationDuration = originalAnimationDetails.duration;
                inner.style.animationTimingFunction = originalAnimationDetails.timingFunction;
                inner.style.animationIterationCount = originalAnimationDetails.iterationCount;
                inner.style.animationDelay = negativeDelay + 's';
                inner.style.animationPlayState = 'running';
                inner.style.transitionProperty = prevTransition;
                log('Animation fully reset and resumed with name:', originalAnimationDetails.name, 'and delay:', negativeDelay);
            }
        });

        inner.addEventListener('mousedown', (event) => {
            if (event.button !== 0) return;
            isDragging = true;
            log('Drag start initiated.');

            const prevTransition = inner.style.transitionProperty;
            inner.style.transitionProperty = 'none';
            inner.style.animationPlayState = 'paused';
            inner.style.animationName = 'none';

            let currentAngleAtDragStart = normalizeAngle(parseFloat(window.getComputedStyle(inner).getPropertyValue('--current-rotate-y')));
            inner.style.setProperty('--current-rotate-y', currentAngleAtDragStart + 'deg');
            void inner.offsetWidth;

            dragStartX = event.clientX;
            dragStartAngle = currentAngleAtDragStart;
            inner.dataset.prevTransition = prevTransition;
            log('Drag start. Initial angle:', dragStartAngle, 'animationName set to none.');

            document.addEventListener('mousemove', handleMouseMove);
            document.addEventListener('mouseup', handleMouseUp);
            event.preventDefault();
        });

        function handleMouseMove(event) {
            if (!isDragging) return;
            const dx = event.clientX - dragStartX;
            const newAngle = dragStartAngle + dx * DRAG_SENSITIVITY;
            log('Dragging. DX:', dx, 'Calculated New Angle:', newAngle);
            inner.style.setProperty('--current-rotate-y', newAngle + 'deg');
            updateZoomedCard(newAngle);
            event.preventDefault();
        }

        function handleMouseUp(event) {
            if (!isDragging) return;
            isDragging = false;
            log('Drag end.');
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseup', handleMouseUp);

            inner.style.transitionProperty = inner.dataset.prevTransition || '--current-rotate-y';
            delete inner.dataset.prevTransition;

            if (!isHovered) {
                log('Drag ended, mouse not over element. Dispatching mouseleave to handle animation resume.');
                if (originalAnimationDetails.name && originalAnimationDetails.name !== 'none') {
                    inner.style.animationName = originalAnimationDetails.name;
                }
                const mouseLeaveEvent = new MouseEvent('mouseleave', { bubbles: true, cancelable: true, view: window });
                inner.dispatchEvent(mouseLeaveEvent);
            } else {
                inner.style.animationPlayState = 'paused';
                log('Drag ended, still hovered. Animation remains paused (name:none).');
                const finalDraggedAngle = normalizeAngle(parseFloat(window.getComputedStyle(inner).getPropertyValue('--current-rotate-y')));
                updateZoomedCard(finalDraggedAngle);
            }
        }
        // --- End of Original Rotating Cards Logic ---
    }


    function setActiveFeature(featureName) {
        // Hide any open settings panel first
        if (currentOpenSettingsPanelId) {
            const panel = document.getElementById(currentOpenSettingsPanelId);
            if (panel) {
                panel.classList.remove('active'); // Assuming 'active' makes it visible
                panel.classList.add('hidden');
            }
            currentOpenSettingsPanelId = null;
        }
        // Hide all settings panels defensively
        document.querySelectorAll('.settings-panel.active').forEach(p => {
            p.classList.remove('active');
            p.classList.add('hidden');
        });


        if (features[featureName]) {
            featureMain.innerHTML = features[featureName].content; // Set content first
            featureBg.src = features[featureName].bg;
            if (featureOverlay) {
                featureOverlay.style.background = features[featureName].overlay || 'rgba(200, 203, 15, 0.98)';
            }

            featureNavButtons.forEach(btn => {
                btn.classList.toggle('selected', btn.dataset.feature === featureName);
            });

            sessionStorage.setItem('currentFeature', featureName);
            currentFeature = featureName;

            if (featureName === 'intro') {
                const cardsContainer = document.getElementById('interactiveCardsContainer');
                initializeInteractiveCards(cardsContainer);
            } else if (featureName === 'complaint') {
                setTimeout(attachComplaintPageListeners, 100);
            }
            // Remove initializeScrollAnimations if no longer used for other features
            // initializeScrollAnimations(); 
            attachDynamicInfoIconListeners();
        } else {
            console.error(`Feature '${featureName}' not found.`);
        }
    }

    function showSettingsPanel(panelId) {
        // Hide current feature content from featureMain if it's not a setting panel itself
        featureMain.innerHTML = ''; // Clear main feature area for settings

        // Hide any other potentially open settings panel
        document.querySelectorAll('.settings-panel.active').forEach(p => {
            if (p.id !== panelId) {
                p.classList.remove('active');
                p.classList.add('hidden');
            }
        });

        const panelToShow = document.getElementById(panelId);
        if (panelToShow) {
            panelToShow.classList.remove('hidden');
            panelToShow.classList.add('active');
            currentOpenSettingsPanelId = panelId; // Track by ID

            // Optional: Change background for settings view
            featureBg.src = 'Assets/settings_bg.jpg';
            if (featureOverlay) {
                featureOverlay.style.background = 'rgba(230, 230, 245, 0.7)';
            }
        } else {
            console.warn("Settings panel HTML element not found with ID:", panelId);
        }
    }
    

    // --- Other existing functions (attachComplaintPageListeners, getStatusColor, etc.) remain unchanged ---
    // Make sure they are defined in your actual home.js
    function attachComplaintPageListeners() {
        const trackComplaintBtnOnPage = document.getElementById('trackComplaintBtnOnPage');
        const complaintIdInputOnPage = document.getElementById('complaintIdInput');
        const complaintStatusDisplayOnPage = document.getElementById('complaintStatusDisplay');
    
        if (trackComplaintBtnOnPage && complaintIdInputOnPage && complaintStatusDisplayOnPage) {
            trackComplaintBtnOnPage.addEventListener('click', () => {
                const complaintId = complaintIdInputOnPage.value.trim();
                const progressBarFill = document.getElementById('complaintProgressBarFill');
                const progressText = document.getElementById('complaintProgressText');
    
                if (!progressBarFill || !progressText) {
                    console.error("Progress bar elements not found!");
                    return;
                }                    if (complaintId) {
                    progressBarFill.classList.add('progress-bar-loading');
                    complaintStatusDisplayOnPage.innerHTML = `<p>Searching for Complaint ID: <strong>${complaintId}</strong>...</p>`;
                    progressBarFill.style.width = '0%';
                    progressText.textContent = '0%';

                    // Start with initial progress
                    let progress = 0;
                    const progressInterval = setInterval(() => {
                        progress += 1;
                        progressBarFill.style.width = `${progress}%`;
                        progressText.textContent = `${progress}%`;
                        if (progress >= 100) {
                            clearInterval(progressInterval);
                        }
                    }, 50);

                    setTimeout(() => {
                        clearInterval(progressInterval);
                        progressBarFill.classList.remove('progress-bar-loading');
                        const statuses = ["Filed", "In Review", "Action Taken", "Resolved", "Closed"];
                        const randomStatusIndex = Math.floor(Math.random() * statuses.length);
                        const randomStatus = statuses[randomStatusIndex];
                        
                        const progressPercentage = (randomStatusIndex + 1) * (100 / statuses.length);
                        const statusColor = getStatusColor(randomStatus);
                        
                        progressBarFill.style.width = progressPercentage + '%';
                        progressText.textContent = Math.round(progressPercentage) + '% Complete';
    
                        complaintStatusDisplayOnPage.innerHTML = `
                            <div class="status-card">
                                <p class="status-title"><strong>Complaint ID:</strong> ${complaintId}</p>
                                <p class="status-badge" style="background-color: ${statusColor}"><strong>Status:</strong> ${randomStatus}</p>
                                <p class="status-update"><strong>Last Update:</strong> ${(new Date()).toLocaleDateString()}</p>
                                <p class="status-note"><em>(This is a demo status. Real tracking will show detailed updates.)</em></p>
                            </div>`;
                    }, 1500);
                } else {
                    complaintStatusDisplayOnPage.innerHTML = `<p style="color:red;">Please enter a Complaint ID to track.</p>`;
                    progressBarFill.style.width = '0%';
                    progressText.textContent = '0%';
                }
            });
        }
    }
    
    function getStatusColor(status) {
        const colors = {
            'Filed': '#bfa100',
            'In Review': '#0066cc',
            'Action Taken': '#9933cc',
            'Resolved': '#00cc66',
            'Closed': '#666666'
        };
        return colors[status] || '#bfa100';
    }
    
    function attachDynamicInfoIconListeners() {
        const infoIcons = featureMain.querySelectorAll('.info-icon'); 
        infoIcons.forEach(icon => {
            const existingListener = icon.clickHandler; // Check if we already attached one
            if(existingListener) {
                icon.removeEventListener('click', existingListener);
                // Potentially remove blur listener too if stored similarly
            }

            const clickHandler = function(e) {
                e.stopPropagation();
                const tooltip = this.nextElementSibling;
                const isActive = tooltip && tooltip.classList.contains('info-tooltip') && this.classList.contains('active');
    
                featureMain.querySelectorAll('.info-icon.active').forEach(activeIcon => {
                    if (activeIcon !== icon) {
                        activeIcon.classList.remove('active');
                         const otherTooltip = activeIcon.nextElementSibling;
                         if(otherTooltip && otherTooltip.classList.contains('info-tooltip')) {
                            // otherTooltip.style.display = 'none'; 
                         }
                    }
                });
                
                this.classList.toggle('active', !isActive);
            };
            icon.clickHandler = clickHandler; // Store it for potential removal
            icon.addEventListener('click', clickHandler);

             icon.addEventListener('blur', function() { 
                 setTimeout(() => {
                    this.classList.remove('active');
                 }, 150);
            });
        });
        
        const featureMainClickHandler = function(e) {
            if (!e.target.closest('.info-icon') && !e.target.closest('.info-tooltip')) {
                featureMain.querySelectorAll('.info-icon.active').forEach(icon => {
                    icon.classList.remove('active');
                });
            }
        };
        // Remove old listener before adding a new one to featureMain to prevent duplicates
        if (featureMain.mainClickHandler) {
            featureMain.removeEventListener('click', featureMain.mainClickHandler);
        }
        featureMain.mainClickHandler = featureMainClickHandler;
        featureMain.addEventListener('click', featureMainClickHandler);
    }
    
    
    function attachVoiceComplaintListeners() {
        const voiceBtn = document.getElementById('voiceComplaintBtn');
        const dialog = document.getElementById('voiceDialog');
        
        if (voiceBtn && dialog) {
            // Check if listener already exists to avoid duplicates
            if (!voiceBtn.hasVoiceListener) {
                voiceBtn.addEventListener('click', () => {
                    dialog.classList.add('show');
                    setTimeout(() => {
                        dialog.classList.remove('show');
                    }, 2000);
                });
                voiceBtn.hasVoiceListener = true;
            }
        }
    }


    featureNavButtons.forEach(button => {
        button.addEventListener('click', () => {
            const feature = button.dataset.feature;
            setActiveFeature(feature);
            settingsDropdown.classList.remove('open');
        });
    });

    if (settingsBtn) {
        settingsBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            settingsDropdown.classList.toggle('open');
            // If settings is opened, we might want to ensure no main feature is active "visually"
            // or that settings panels appear over them.
            // The current showSettingsPanel clears featureMain, which is one way.
        });
    }

    settingsItems.forEach(item => {
        item.addEventListener('click', () => {
            settingsDropdown.classList.remove('open');
            const panelId = item.dataset.settingsPanelId;
            const action = item.dataset.settingsAction;

            if (action === 'logout') {
                sessionStorage.removeItem('isLoggedIn');
                sessionStorage.removeItem('currentFeature');
                window.location.href = 'welcome.html';
            } else if (panelId) {
                if (document.getElementById(panelId)) {
                     showSettingsPanel(panelId);
                } else {
                    console.warn("Settings panel definition not found in HTML for ID:", panelId);
                    // Fallback or clear featureMain if panel definition is missing
                    // featureMain.innerHTML = `<p style="color:red; text-align:center; margin-top:50px;">Content for '${item.textContent}' settings is under development.</p>`;
                }
            }
        });
    });

    document.addEventListener('click', (e) => {
        if (settingsBtn && !settingsBtn.contains(e.target) && !settingsDropdown.contains(e.target)) {
            settingsDropdown.classList.remove('open');
        }
    });

    if (sosEmergencyBtn) {
        sosEmergencyBtn.addEventListener('click', () => {
            alert('SOS Activated! (This is a demo)');
        });
    }
    
    // Placeholder for settings forms
    document.querySelectorAll('.settings-panel form').forEach(form => {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const panelTitle = form.closest('.settings-panel')?.querySelector('h2')?.textContent || 'Settings';
            alert(`${panelTitle} saved! (Demo)`);
        });
    });


    const isLoggedIn = sessionStorage.getItem('isLoggedIn');
    if (!isLoggedIn && window.location.pathname.endsWith('home.html')) { // Check path to avoid issues if on welcome.html
         // window.location.href = 'welcome.html'; // Temporarily disabled for easier testing
         console.warn("User not logged in, normally redirect to welcome.html");
         setActiveFeature(currentFeature); // Still load for testing
    } else {
        setActiveFeature(currentFeature);
    }
    
    // Call this if the complaint feature might be the default loaded one.
    // otherwise, it's called within setActiveFeature.
    // if (currentFeature === 'complaint') {
    //    attachComplaintPageListeners();
    // }
    attachVoiceComplaintListeners(); // Ensure this is called if complaint page is visible

});

// Search and filter functionality
document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('searchExperts');
    const categorySelect = document.getElementById('expertCategory');
    const expertCards = document.querySelectorAll('.expert-card');

    function filterExperts() {
        const searchTerm = searchInput.value.toLowerCase();
        const selectedCategory = categorySelect.value;

        expertCards.forEach(card => {
            const expertName = card.querySelector('h3').textContent.toLowerCase();
            const expertTitle = card.querySelector('p').textContent.toLowerCase();
            const category = card.dataset.category;
            
            const matchesSearch = expertName.includes(searchTerm) || 
                                expertTitle.includes(searchTerm);
            const matchesCategory = !selectedCategory || category === selectedCategory;

            card.style.display = (matchesSearch && matchesCategory) ? 'block' : 'none';
        });
    }

    searchInput.addEventListener('input', filterExperts);
    categorySelect.addEventListener('change', filterExperts);
});