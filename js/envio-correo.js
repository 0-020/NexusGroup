const btn = document.getElementById('button');

document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault();

    btn.value = 'Sending...';

    const serviceID = 'default_service';
    const templateID = 'template_bygq8k9';

    emailjs.sendForm(serviceID, templateID, this)
        .then(() => {
            btn.value = 'Send Email';
            alert('Su mensaje ha sido enviado, pronto sera contactado');
        }, (err) => {
            btn.value = 'Send Email';
            alert(JSON.stringify(err));
        });
});
