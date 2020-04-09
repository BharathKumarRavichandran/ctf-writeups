
* Check the parameter of console - `_0x2ad1("0x2")`
* Run the js function `_0x2ad1()` in console of any browser.
* Then run `_0x2ad1("0x2")` in console, you will get
```
"Make a GET request to /hidden/nextstep.php"
```
* Make a GET request to /hidden/nextstep.php, you will get 
```
Howdy neighbor!
```
* Hmm, weird right? Check the network panel and all the response headers.
* Wow, there is BA64 header with value - `TWFrZSBhIFBPU1QgcmVxdWVzdCB0byAvYXBpL2ZpbmFsLnBocA==`
* Decode the Base64 string and it decodes to:
```
Make a POST request to /api/final.php - `curl http://challenges.auctf.com:30022/api/final.php`
```
* So, make a POST request to /api/final.php. The response is:
```
Send a request with the flag variable set 
```
* So, do `curl --data "flag=asd" http://challenges.auctf.com:30022/api/final.php`
* Tada, got the flag?