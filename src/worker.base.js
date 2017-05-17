/* Generated File */
(function(){
  var apis = {{APIS}};
  self.addEventListener('install',function(event){
  event.waitUntil(self.skipWaiting());
  })
  self.addEventListener('fetch',function(event){
    var route = event.request.url.replace(event.target.location.origin,"");
    if(route && apis[route]){
      var init = {
        "status" : apis[route].status || 200,
        "headers" : apis[route].headers || {
          "Content-Type" : 'application/json'
        }
      }
      event.respondWith(new Response(JSON.stringify(apis[route].response),init))
    }
    return fetch(request);
  })
})()
