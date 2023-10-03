const familyForm = document.getElementById('form-family')
const familyInput = document.getElementById('family')
const guestsInput = document.getElementById('guests')

familyForm.addEventListener('submit', async e => {
    e.preventDefault()
    await fetch('https://node-test.fly.dev/send-message', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            "id": "1",
            "familia": familyInput.value,
            "invitados": guestsInput.value,
        }),
    });
    familyInput.value = '';
    guestsInput.value = '';
});