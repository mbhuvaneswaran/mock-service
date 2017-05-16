/* Generated File */
(function(){
  var apis = {{APIS}};
  self.addEventListener('install',function(event){
  event.waitUntil(self.skipWaiting());
  })
  self.addEventListener('fetch',function(event){
    var route = event.request.url.replace(event.target.location.origin,"");
    var init = {
      "status" : 200,
      "headers" : {
        "Content-Type" : 'application/json'
      }
    }
    if(route && apis[route]){
      event.respondWith(new Response(JSON.stringify(apis[route].response),init))
    }
    return fetch(request);
  })
})()
