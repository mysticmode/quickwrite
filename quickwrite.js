document.addEventListener('DOMContentLoaded', function () {
    const quickwrite = document.getElementById('quickwrite');
    const saved = localStorage.getItem('quickwrite') || '';
    quickwrite.value = saved;

    quickwrite.addEventListener('input', function () {
        localStorage.setItem('quickwrite', quickwrite.value);
    });
});