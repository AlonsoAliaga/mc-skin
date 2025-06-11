const BLOCKED_URL_REGEXS = [
    /https:\/\/.*\.imgur\.com*/i,
    /https:\/\/.*\.github[a-z]*.(io|com)*/i
]
const ALLOWED_REFERRER_DOMAIN = 'alonsoaliaga.github.io';

// self.addEventListener('fetch', function(event) {
//     const requestUrl = event.request.url;
//     const referrerUrl = event.request.referrer; // Get the referrer URL
//     // Create a URL object from the referrer for easier domain parsing
//     let referrerDomain = '';
//     try {
//         if (referrerUrl && referrerUrl !== 'about:client') { // 'about:client' can be a referrer for initial requests
//             const urlObj = new URL(referrerUrl);
//             referrerDomain = urlObj.hostname;
//         }
//     } catch (e) {
//         console.error("Error parsing referrer URL:", e);
//     }
//     if(referrerDomain.includes(ALLOWED_REFERRER_DOMAIN)) {
//         event.respondWith(fetch(event.request));
//     }else{
//         if(BLOCKED_URL_REGEXS.some(BLOCKED_URL_REGEX => BLOCKED_URL_REGEX.test(requestUrl))) {
//             event.respondWith(
//                 new Response(null, { status: 200, statusText: 'Blocked by CORS' })
//             );
//         }else{
//             event.respondWith(fetch(event.request));
//         }
//     }
// });