console.warn("sw from public folder");

let cacheDAta="appV1";

this.addEventListener("install",(event)=>{
    event.waitUntil(
        caches.open(cacheDAta).then((cache)=>{
            cache.addAll([
                "/static/js/bundle.js",
                "/static/js/main.chunk.js",
                "/static/js/0.chunk.js",
                "/index.html",
                "/",
                "/users",

            ])
        })
    )
})

this.addEventListener("fetch", (event) => {
    // console.warn("url",event.request.url)
    if (!navigator.onLine) {
        event.respondWith(
            caches.match(event.request).then((resp) => {
                if (resp) {
                    return resp
                }
            })
        )
    }
}) 