const BLOCKED_URL_REGEX = /https:\/\/.*\.imgur\.com/i;
const ALLOWED_REFERRER_DOMAIN = 'alonsoaliaga.github.io';

self.addEventListener('fetch', function(event) {
    const requestUrl = event.request.url;
    const referrerUrl = event.request.referrer; // Get the referrer URL
    // Create a URL object from the referrer for easier domain parsing
    let referrerDomain = '';
    try {
        if (referrerUrl && referrerUrl !== 'about:client') { // 'about:client' can be a referrer for initial requests
            const urlObj = new URL(referrerUrl);
            referrerDomain = urlObj.hostname;
        }
    } catch (e) {
        console.error("Error parsing referrer URL:", e);
    }
    if(referrerDomain.includes(ALLOWED_REFERRER_DOMAIN)) {
        event.respondWith(fetch(event.request));
    }else{
        // Check if the request is to imgur.com AND the referrer domain matches your allowed domain
        if (BLOCKED_URL_REGEX.test(requestUrl) && !referrerDomain.includes(ALLOWED_REFERRER_DOMAIN)) {
            console.log(`Service Worker Blocked (referrer: ${referrerUrl}): ${requestUrl}`);
            event.respondWith(
                new Response(null, { status: 200, statusText: 'Blocked by Service Worker' })
            );
        } else {
            // For all other requests, proceed normally
            event.respondWith(fetch(event.request));
        }
    }
});