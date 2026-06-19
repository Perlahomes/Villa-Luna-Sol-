/* === SIDEBAR === */
function openSidebar() {
    document.getElementById("sidebar").style.width = "250px";
    document.getElementById("overlay").style.display = "block";
}

function closeSidebar() {
    document.getElementById("sidebar").style.width = "0";
    document.getElementById("overlay").style.display = "none";
}

function toggleDropdown(id) {
    const dropdown = document.getElementById(id);
    dropdown.style.display = dropdown.style.display === "block" ? "none" : "block";
}

/* === MENU BUTTON HELPERS === */
function hideMenuButton() { 
    document.querySelector(".open-btn").style.display = "none"; 
}

function showMenuButton() { 
    document.querySelector(".open-btn").style.display = "block"; 
}

/* === POPUPS === */
function showCodeBox() { 
    document.getElementById('codeBox').style.display = 'flex'; 
    closeSidebar(); 
    hideMenuButton(); 
}

function hideCodeBox() { 
    document.getElementById('codeBox').style.display = 'none'; 
    showMenuButton(); 
}

function showInfoBox() { 
    document.getElementById('infoBox').style.display = 'flex'; 
    closeSidebar(); 
    hideMenuButton(); 
}

function hideInfoBox() { 
    document.getElementById('infoBox').style.display = 'none'; 
    showMenuButton(); 
}

function showWifiCodeBox() { 
    document.getElementById('wifiCodeBox').style.display = 'flex'; 
    closeSidebar(); 
    hideMenuButton(); 
}

function hideWifiCodeBox() { 
    document.getElementById('wifiCodeBox').style.display = 'none'; 
    showMenuButton(); 
}

/* === COPY TEXT === */
function copyText(elementId, button) {
    const text = document.getElementById(elementId).textContent;
    navigator.clipboard.writeText(text).then(() => {
        alert('Copied to clipboard: ' + text);
    });
}

/* === GOOGLE TRANSLATE === */
function googleTranslateElementInit() {
    new google.translate.TranslateElement({
        pageLanguage: 'en',
        includedLanguages: 'en,el,it,pt,ro,es,fr,ka,de,cs,hy,sq,ru',
        layout: google.translate.TranslateElement.InlineLayout.SIMPLE
    }, 'google_translate_element');
}

/* === CLICK-TO-ZOOM POPUP IMAGES === */
document.addEventListener('DOMContentLoaded', () => {
    const popupImages = document.querySelectorAll('.popup-image');

    popupImages.forEach(img => {
        img.addEventListener('click', e => {
            const body = document.body;

            if (img.classList.contains('enlarged')) {
                img.classList.remove('enlarged');
                body.classList.remove('image-overlay');
            } else {
                // Remove enlarged from other images
                document.querySelectorAll('.popup-image.enlarged').forEach(otherImg => {
                    otherImg.classList.remove('enlarged');
                });

                img.classList.add('enlarged');
                body.classList.add('image-overlay');
            }

            e.stopPropagation(); // Prevent body click
        });
    });

    // Click anywhere else to shrink enlarged images
    document.body.addEventListener('click', () => {
        document.querySelectorAll('.popup-image.enlarged').forEach(img => {
            img.classList.remove('enlarged');
        });
        document.body.classList.remove('image-overlay');
    });
});
