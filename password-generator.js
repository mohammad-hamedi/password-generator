document.getElementById('generate').addEventListener('click', function () {
    const lengthInput = document.getElementById('length');
    const length = parseInt(lengthInput.value, 10);

    if (isNaN(length) || length < 1 || length > 50) {
        alert('Please enter a valid password length between 1 and 50.');
        return;
    }

    const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+~`|}{[]:;?><,./-=";
    let password = "";
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        password += charset[randomIndex];
    }
    document.getElementById('password').textContent = password;
});

document.getElementById('copy').addEventListener('click', function () {
    const passwordText = document.getElementById('password').textContent;

    if (!passwordText) {
        alert('No password to copy. Please generate one first.');
        return;
    }

    navigator.clipboard.writeText(passwordText).then(function () {
        alert('Password copied to clipboard!');
    }).catch(function (err) {
        console.error('Failed to copy password:', err);
        alert('Failed to copy password. Please try again.');
    });
});

document.getElementById('clear').addEventListener('click', function () {
    document.getElementById('password').textContent = '';
    document.getElementById('length').value = 12;
});

document.getElementById('randomize').addEventListener('click', function () {
    const randomLength = Math.floor(Math.random() * 50) + 1;
    document.getElementById('length').value = randomLength;
});

