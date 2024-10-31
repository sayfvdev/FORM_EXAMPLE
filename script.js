const form = document.forms.namedItem('form');
const lbls = form.querySelectorAll('label');
const success = document.getElementById('success');
const error = document.getElementById('error');
const need = document.getElementById('need');
let successCount = 0;
let errorCount = 0;

form.onsubmit = (event) => {
    event.preventDefault();
    const user = {};

    lbls.forEach(label => {
        const inp = label.querySelector('input');
        user[inp.name] = inp.value;

        if (label.classList.contains('required') && inp.value.length === 0) {
            label.classList.add('error');
            errorCount++;
        } else {
            label.classList.remove('error');
            if (inp.value.length > 0) {
                successCount++;
            }
        }
    });

    success.textContent = `Success: ${successCount}`;
    error.textContent = `Error: ${errorCount}`;

    if (!errorCount) {
        console.log(user);
        alert('Form submitted successfully!');
    }
};
