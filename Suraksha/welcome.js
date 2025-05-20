document.addEventListener('DOMContentLoaded', () => {
    const logoCenter = document.getElementById('logoCenter');
    const welcomeCard = document.getElementById('welcomeCard');

    const welcomeContent = document.getElementById('welcomeContent');
    const authContent = document.getElementById('authContent');
    const loginContent = document.getElementById('loginContent');
    const roleContent = document.getElementById('roleContent');
    const registerContent = document.getElementById('registerContent');

    const allContentPanels = [authContent, loginContent, roleContent, registerContent, welcomeContent];

    // Language buttons
    const langEnglishBtn = document.getElementById('langEnglishBtn');
    const langHindiBtn = document.getElementById('langHindiBtn');

    // Navigation buttons
    const backToWelcomeBtn = document.getElementById('backToWelcomeBtn');
    const showLoginBtn = document.getElementById('showLoginBtn');
    const showRoleSelectBtn = document.getElementById('showRoleSelectBtn');

    const loginBackToAuthBtn = document.getElementById('loginBackToAuthBtn');
    const loginSwitchToRegisterBtn = document.getElementById('loginSwitchToRegisterBtn');

    const roleBackToAuthBtn = document.getElementById('roleBackToAuthBtn');
    const roleSwitchToLoginBtn = document.getElementById('roleSwitchToLoginBtn');
    const roleButtons = roleContent.querySelectorAll('.auth-btns button');

    const registerBackToRoleBtn = document.getElementById('registerBackToRoleBtn');
    const registerSwitchToLoginBtn = document.getElementById('registerSwitchToLoginBtn');

    // Forms
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm'); // Ensure form ID is set in HTML

    const FADE_DURATION = 500; // Corresponds to CSS transition
    const ANIMATION_DELAY = 100; // Short delay before starting fade after animation

    function animateWelcome() {
        welcomeCard.classList.add('center-animate-card');
        logoCenter.classList.add('logo-animate-down');

        setTimeout(() => {
            welcomeContent.classList.remove('fade-in');
            welcomeContent.classList.add('fade-out');

            // Listen for transition end on welcomeContent before hiding it
            welcomeContent.addEventListener('transitionend', function onWelcomeFadeOut() {
                welcomeContent.style.display = 'none';
                authContent.style.display = ''; // Make it block or flex depending on its style

                // Force reflow before adding fade-in class
                void authContent.offsetWidth;

                authContent.classList.remove('fade-out');
                authContent.classList.add('fade-in');

                welcomeContent.removeEventListener('transitionend', onWelcomeFadeOut);
            }, { once: true });

        }, ANIMATION_DELAY);
    }

    function backToWelcome() {
        authContent.classList.remove('fade-in');
        authContent.classList.add('fade-out');

        authContent.addEventListener('transitionend', function onAuthFadeOut() {
            authContent.style.display = 'none';
            welcomeContent.style.display = '';

            void welcomeContent.offsetWidth; // Reflow

            welcomeContent.classList.remove('fade-out');
            welcomeContent.classList.add('fade-in');

            welcomeCard.classList.remove('center-animate-card');
            logoCenter.classList.remove('logo-animate-down');

            authContent.removeEventListener('transitionend', onAuthFadeOut);
        }, { once: true });
    }

    function hideAllExcept(showId) {
        allContentPanels.forEach(panel => {
            if (panel.id === showId) {
                if (panel.style.display === 'none' || panel.classList.contains('fade-out')) {
                    panel.style.display = ''; // Set display before fade-in
                    void panel.offsetWidth; // Force reflow
                    panel.classList.remove('fade-out');
                    panel.classList.add('fade-in');
                }
            } else {
                if (!panel.classList.contains('fade-out') && panel.style.display !== 'none') {
                    panel.classList.remove('fade-in');
                    panel.classList.add('fade-out');
                    panel.addEventListener('transitionend', function onPanelFadeOut() {
                        panel.style.display = 'none';
                        panel.removeEventListener('transitionend', onPanelFadeOut);
                    }, { once: true });
                } else if (panel.style.display !== 'none' && !panel.classList.contains('fade-out')) {
                     // If it's somehow visible but not fading, ensure it's hidden after a delay
                    setTimeout(() => { panel.style.display = 'none'; }, FADE_DURATION);
                }
            }
        });
    }


    function showLogin() { hideAllExcept('loginContent'); }
    function showRoleSelect() { hideAllExcept('roleContent'); }
    function backToAuth() { hideAllExcept('authContent'); }
    function backToRole() { hideAllExcept('roleContent'); }


    function showRegister(role) {
        hideAllExcept('registerContent');
        const title = document.getElementById('registerTitle');
        const fieldsContainer = document.getElementById('registerFormFields'); // Target the new container
        fieldsContainer.innerHTML = ''; // Clear previous fields

        let html = '';
        const commonFieldsFirst = [
            { label: 'Full Name', name: 'full_name', type: 'text', info: 'Enter your full name as per official documents.' },
            { label: 'Email', name: 'email', type: 'email', info: 'Enter a valid email address.' },
            { label: 'Phone Number', name: 'phone', type: 'tel', info: 'Enter your 10-digit mobile number.' },
            { label: 'Password', name: 'password', type: 'password', info: 'Choose a strong password (min 8 characters).' },
            { label: 'Confirm Password', name: 'confirm_password', type: 'password', info: 'Re-enter your password.' },
        ];
         commonFieldsFirst.forEach(field => {
            html += renderInput(field.label, field.name, false, field.info, null, field.type);
        });


        if (role === 'lawyer') {
            title.textContent = 'Register as Lawyer';
            html += renderInput('Adhaar No.', 'adhaar', true, 'Enter your 12-digit Aadhaar number. You will also need to upload a scan/photo of your Aadhaar card below.', null, 'text'); // Text input for number
            html += renderInput('Adhaar Linked Phone No.', 'adhaar_phone', false, 'Enter the phone number linked to your Aadhaar.', null, 'tel');
            html += renderInput('Email Linked with the Adhaar linked Phone No.', 'adhaar_email', false, 'Enter the email address linked to your Aadhaar-linked phone number.', null, 'email');
            html += renderInput('Clear User Image (Photo)', 'user_image', true, 'Upload a clear, recent photo of yourself. (JPG, PNG)', 'image/jpeg,image/png');
            html += renderInput('Driving License', 'driving_license', true, 'Upload a scan or photo of your driving license. (PDF, JPG, PNG)', 'application/pdf,image/*');
            html += renderInput('State Bar Council Enrollment (SBC) ID Proof', 'sbc_id_proof', true, 'Upload proof of your State Bar Council Enrollment ID. (PDF, JPG, PNG)', 'application/pdf,image/*');
            html += renderInput('SBC ID Number', 'sbc_id_number', false, 'Enter your State Bar Council Enrollment ID Number.', null, 'text');
            html += renderInput('Address where you practice', 'practice_address', false, 'Enter the address where you practice law.', null, 'textarea');
            html += renderInput('Working Experience (In years)', 'experience', false, 'E.g., 5 years in Criminal Law. Provide details.', null, 'textarea');

        } else if (role === 'hacker' || role === 'other') {
            title.textContent = role === 'hacker' ? 'Register as Ethical Hacker / Forensic Expert' : 'Register as Other Individual Legal Services';
            html += renderInput('Adhaar No.', 'adhaar', true, 'Enter your 12-digit Aadhaar number. You will also need to upload a scan/photo of your Aadhaar card below.', null, 'text');
            html += renderInput('Adhaar Linked Phone No.', 'adhaar_phone', false, 'Enter the phone number linked to your Aadhaar.', null, 'tel');
            html += renderInput('Email Linked with the Adhaar linked Phone No.', 'adhaar_email', false, 'Enter the email address linked to your Aadhaar-linked phone number.', null, 'email');
            html += renderInput('Clear User Image (Photo)', 'user_image', true, 'Upload a clear, recent photo of yourself. (JPG, PNG)', 'image/jpeg,image/png');
            html += renderInput('Driving License', 'driving_license', true, 'Upload a scan or photo of your driving license. (PDF, JPG, PNG)', 'application/pdf,image/*');
            html += renderInput('Education/Qualification Certificates (UG, PG, PhD)', 'education_certificates', true, 'Upload your education/qualification certificates. Multiple files allowed. (PDF, JPG, PNG)', 'application/pdf,image/*', true);
            html += renderInput('Industry Certifications (e.g., CEH, OSCP, CISSP, CISA)', 'industry_certifications', true, 'Upload your industry certifications. Multiple files allowed. (PDF, JPG, PNG)', 'application/pdf,image/*', true);
            html += renderInput('Work Place Certifications (if any)', 'workplace_certifications', true, 'Upload any workplace certifications. Multiple files allowed. (PDF, JPG, PNG)', 'application/pdf,image/*', true);

        } else if (role === 'firm') {
            title.textContent = 'Register as Firm';
            html += renderInput('Firm Name', 'firm_name', false, 'Enter the official name of your firm.', null, 'text');
            html += renderInput('Certificate of Incorporation (COI)', 'coi', true, 'Upload your Certificate of Incorporation. (PDF, JPG, PNG)', 'application/pdf,image/*');
            html += renderInput('Memorandum of Association (MOA)', 'moa', true, 'Upload your Memorandum of Association. (PDF, JPG, PNG)', 'application/pdf,image/*');
            html += renderInput('PAN Card of the Organization', 'pan', true, 'Upload the PAN card of your organization. (PDF, JPG, PNG)', 'application/pdf,image/*');
            html += renderInput('GST Registration Certificate (GSTIN)', 'gst', true, 'Upload your GST registration certificate. (PDF, JPG, PNG)', 'application/pdf,image/*');
            html += renderInput('Registered Office Address Proof (Utility Bill, Lease, etc.)', 'address_proof', true, 'Upload address proof for the firm. (PDF, JPG, PNG)', 'application/pdf,image/*');
            html += renderInput('CEO/Authorised Person Name', 'ceo_name', false, 'Enter the name of the CEO or authorised person.', null, 'text');
            html += renderInput('CEO/Authorised Person Adhaar No.', 'ceo_adhaar', true, 'Enter CEO/Authorised Person 12-digit Aadhaar number and upload scan.', null, 'text');
            html += '<button type="button" class="btn contact-btn animated-btn">For any problem/inquiry, contact us</button>';
        }
        html += renderCaptcha();
        // The main register button is now part of the static HTML in #registerContent form
        fieldsContainer.innerHTML = html;
        attachInfoIconListeners();
        attachFileUploadListeners(); // Attach listeners for new file inputs
    }

    function renderInput(label, name, isFileOrHasFileInput, info, acceptType, inputType = 'text', multipleFiles = false) {
        const id = `input_${name}`;
        const infoIconHtml = `<button type='button' class='info-icon' tabindex='0' aria-label='Info for ${label}'>&#9432;</button><div class='info-tooltip'>${info}</div>`;
        let html = `<div class="input-box">`;
        html += `<label for="${id}">${label} ${infoIconHtml}</label>`;

        if (inputType === 'textarea') {
             html += `<textarea id="${id}" name="${name}" required autocomplete="off" placeholder="Enter ${label}"></textarea>`;
        } else if (inputType !== 'file' && !isFileOrHasFileInput) { // Standard text, email, tel, password inputs
            html += `<input type="${inputType}" id="${id}" name="${name}" required autocomplete="off" placeholder="Enter ${label}">`;
        }
        // If it's primarily a text input but also needs a file upload (e.g., Aadhaar No + Aadhaar Card Scan)
        // OR if it's purely a file input
        if (isFileOrHasFileInput) {
            if (name === 'adhaar' || name === 'ceo_adhaar') { // Special case for Aadhaar: Text input first
                 html += `<input type="text" id="${id}_text" name="${name}_text" required autocomplete="off" placeholder="Enter Aadhaar Number (12 digits)" style="margin-bottom:10px;" pattern="\\d{12}" title="Must be 12 digits">`;
            }

            // Then the file upload part
            const fileInputId = isFileOrHasFileInput && name !== 'adhaar' && name !== 'ceo_adhaar' ? id : `input_${name}_card`; // Differentiate if main input is text
            const fileLabel = name === 'adhaar' || name === 'ceo_adhaar' ? 'Upload Aadhaar Card Scan' : `Upload ${label}`;

            html += `<div class="file-upload-box">
                        <button type="button" class="plusButton" id="trigger_${fileInputId}" tabindex="0" aria-label="${fileLabel}">
                            <svg class="plusIcon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><rect x="10" y="4" width="4" height="16" rx="2"/><rect x="4" y="10" width="16" height="4" rx="2"/></svg>
                        </button>
                        <input type="file" id="${fileInputId}" name="${name}${name === 'adhaar' || name === 'ceo_adhaar' ? '_card' : ''}" 
                               ${acceptType ? `accept='${acceptType}'` : "accept='application/pdf,image/*'"} 
                               ${multipleFiles ? 'multiple' : ''} style="display: none;">
                        <span class="file-upload-list" id="list_${fileInputId}">No file selected</span>
                    </div>`;
        }
        html += `</div>`;
        return html;
    }

    function renderCaptcha() {
        // Google reCAPTCHA widget placeholder
        return `<div style='margin:18px 0;'><div class='g-recaptcha' data-sitekey='YOUR_RECAPTCHA_SITE_KEY_HERE'></div><small>This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.</small></div>`;
    }

    function attachInfoIconListeners() {
        const infoIcons = document.querySelectorAll('.info-icon');
        infoIcons.forEach(icon => {
            icon.addEventListener('click', function(e) {
                e.stopPropagation(); // Prevent document click from immediately hiding
                // Deactivate other active tooltips
                document.querySelectorAll('.info-icon.active').forEach(activeIcon => {
                    if (activeIcon !== icon) activeIcon.classList.remove('active');
                });
                icon.classList.toggle('active');
            });
            // Hide on blur (tabbing away)
            icon.addEventListener('blur', function() {
                 setTimeout(() => { icon.classList.remove('active'); }, 150); // Delay to allow click on tooltip
            });
        });
         // Hide tooltips when clicking outside
        document.addEventListener('click', function(e) {
            if (!e.target.closest('.info-icon') && !e.target.closest('.info-tooltip')) {
                document.querySelectorAll('.info-icon.active').forEach(icon => {
                    icon.classList.remove('active');
                });
            }
        });
    }
    attachInfoIconListeners(); // Initial call for any static info icons

    function attachFileUploadListeners() {
        document.querySelectorAll('.plusButton[id^="trigger_"]').forEach(button => {
            button.addEventListener('click', function() {
                const forId = this.id.replace('trigger_', '');
                const fileInput = document.getElementById(forId);
                if (fileInput) {
                    fileInput.click();
                }
            });
        });

        document.querySelectorAll('input[type="file"]').forEach(input => {
            input.addEventListener('change', function(e) {
                const list = document.getElementById('list_' + e.target.id);
                if (list) {
                    if (e.target.files.length > 0) {
                        list.textContent = Array.from(e.target.files).map(f => f.name).join(', ');
                    } else {
                        list.textContent = 'No file selected';
                    }
                }
            });
        });
    }
    attachFileUploadListeners(); // Initial call

    // Event Listeners for navigation
    if (langEnglishBtn) langEnglishBtn.addEventListener('click', animateWelcome);
    if (langHindiBtn) langHindiBtn.addEventListener('click', animateWelcome);
    if (backToWelcomeBtn) backToWelcomeBtn.addEventListener('click', backToWelcome);

    if (showLoginBtn) showLoginBtn.addEventListener('click', showLogin);
    if (showRoleSelectBtn) showRoleSelectBtn.addEventListener('click', showRoleSelect);

    if (loginBackToAuthBtn) loginBackToAuthBtn.addEventListener('click', backToAuth);
    if (loginSwitchToRegisterBtn) loginSwitchToRegisterBtn.addEventListener('click', showRoleSelect);

    if (roleBackToAuthBtn) roleBackToAuthBtn.addEventListener('click', backToAuth);
    if (roleSwitchToLoginBtn) roleSwitchToLoginBtn.addEventListener('click', showLogin);

    roleButtons.forEach(button => {
        button.addEventListener('click', () => {
            const role = button.dataset.role;
            if (role) showRegister(role);
        });
    });

    if (registerBackToRoleBtn) registerBackToRoleBtn.addEventListener('click', backToRole);
    if (registerSwitchToLoginBtn) registerSwitchToLoginBtn.addEventListener('click', showLogin);

    // Form Submissions (Placeholder)
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            // Actual login logic would go here (e.g., fetch to backend)
            console.log('Login form submitted');
            sessionStorage.setItem('isLoggedIn', 'true'); // Simulate login
            window.location.href = 'home.html';
        });
    }

    if (registerForm) {
        registerForm.addEventListener('submit', function(e) {
            e.preventDefault();
            // Actual registration logic would go here
            console.log('Register form submitted');
            // Validate passwords match
            const password = registerForm.querySelector('input[name="password"]');
            const confirmPassword = registerForm.querySelector('input[name="confirm_password"]');
            if (password && confirmPassword && password.value !== confirmPassword.value) {
                alert("Passwords do not match!");
                confirmPassword.focus();
                return;
            }
            sessionStorage.setItem('isLoggedIn', 'true'); // Simulate registration & login
            window.location.href = 'home.html';
        });
    }
    // Make welcomeContent initially visible
    if (welcomeContent) {
        welcomeContent.classList.add('fade-in');
        welcomeContent.style.display = '';
    }
});