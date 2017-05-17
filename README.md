# mock-service
Mock HTTP request using service workers .  This module is useful for creating mock apis for testing as well as development. A service worker file is generated using the api file provided. Just register the generated service-worker file and we are good to go . 
## Installation
```
npm install -g
```
### Usage
```
mock-service <api.js> <service-worker-file>
```
#### Example api file
```
{
'/api/users' : {
  response : [{name : 'user1',name:'user2'}]
  },
 '/api/users/user1' : {
  response : {name : 'user1'}
} 
```
##### 
