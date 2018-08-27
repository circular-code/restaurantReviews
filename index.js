if ('serviceWorker' in navigator) {

    navigator.serviceWorker
        .register('sw.js')
        .then(function(response) {
        console.log("Service Worker Registered " + response.scope);
        })
        .catch(function(err) {
        console.log("Service Worker Failed to Register", err);
        })
}