document.getElementById('generate').addEventListener('click', function() {
    const length = document.getElementById('length').value;
    const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+~`|}{[]:;?><,./-=";
    let password = "";
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        password += charset[randomIndex];
    }
    document.getElementById('password').textContent = password;
});

document.getElementById('copy').addEventListener('click', function() {
    const passwordText = document.getElementById('password').textContent;
    navigator.clipboard.writeText(passwordText).then(function() {
        alert('پسورد کپی شد!');
    }, function(err) {
        console.error( 'password copied', err);
    });
});