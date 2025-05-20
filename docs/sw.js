// sw.js (your Service Worker file)
const BLOCKED_URL_REGEX = /https:\/\/*\.imgur\.com/i;
self.addEventListener('fetch', function(event) {
    let href = window.location.href;
    const requestUrl = event.request.url;
    if (href.includes(atob("YWxvbnNvYWxpYWdhLmdpdGh1Yi5pbw==")) && BLOCKED_URL_REGEX.test(requestUrl)) {
        console.log(`Service Worker Blocked: ${requestUrl}`);
        // Respond with an empty 200 OK response or a network error
        event.respondWith(
            new Response(null, { status: 200, statusText: 'Blocked by Service Worker' })
            // Or to simulate failure:
            // Promise.reject(new TypeError('Service Worker blocked request'))
        );
    } else {
        // For all other requests, proceed normally
        event.respondWith(fetch(event.request));
    }
});