function showLiveToast() {
    const alertToast = document.getElementById('liveToast');
    const toastOptions = {
        autohide: false // Desactiva el auto-ocultamiento
    };

    const toastWarning = new bootstrap.Toast(alertToast, toastOptions);
    toastWarning.show();
}