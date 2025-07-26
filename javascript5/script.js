/* 
 Name: Sadie Coleman
  Date: 7/25/2025
  JS for Flex Panels project
  Source: Based on Wes Bos' JS30 project
  Notes: Improved to allow only one panel open at a time, added accessibility
*/

const panels = document.querySelectorAll('.panel');

function toggleOpen() {
    // Close other panels
    panels.forEach(panel => {
        if (panel !== this) {
            panel.classList.remove('open', 'open-active');
            panel.setAttribute('aria-expanded', 'false');
        }
    });

    // Toggle open state
    this.classList.toggle('open');
    const isOpen = this.classList.contains('open');
    this.setAttribute('aria-expanded', isOpen);
}

function toggleActive(e) {
    if (e.propertyName.includes('flex')) {
        this.classList.toggle('open-active');
    }
}

panels.forEach(panel => {
    panel.addEventListener('click', toggleOpen);
    panel.addEventListener('transitionend', toggleActive);
    panel.addEventListener('keydown', function (e) {
        if (e.key === 'Enter' || e.key === ' ') {
            toggleOpen.call(this);
        }
    });
});
