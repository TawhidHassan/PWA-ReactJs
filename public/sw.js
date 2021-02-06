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
                "/about"

            ])
        })
    )
})

this.addEventListener("fetch", (event) => {

   

    // console.warn("url",event.request.url)
    if (!navigator.onLine) {
        if (event.request.url === "http://localhost:3000/static/js/main.chunk.js") {
            event.waitUntil(
                this.registration.showNotification("Internet", {
                    body: "internet not working",
                })
            )
        }
        event.respondWith(
            caches.match(event.request).then((resp) => {
                if (resp) {
                    return resp
                }
                let requestUrl = event.request.clone();
                fetch(requestUrl)
            })
        )
    }
}) 