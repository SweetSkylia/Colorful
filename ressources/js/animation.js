let tech = document.getElementById('tech');

function down_arrow() {
    location.href = '#colors'
}


document.addEventListener('DOMContentLoaded', () => {
    const checkboxes = document.querySelectorAll('.checkbox');

    checkboxes.forEach((checkbox, index) => {
        const label = document.createElement('label');
        label.setAttribute('for', `checkbox-${index}`);
        checkbox.setAttribute('id', `checkbox-${index}`);
        checkbox.insertAdjacentElement('afterend', label);
    });
});