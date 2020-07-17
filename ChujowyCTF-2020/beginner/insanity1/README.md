# Insanity1

### How to get the flag?
* Run `python script.py`
    ```
    .
    .
    .
    [+] Opening connection to insanity1.chujowyc.tf on port 4004: Done
    Welcome chCTF Sanity Check :D
    What is 2+2: 4
    What number between 0 and 100 am I thinking about right now? 80

    Invalid answer Bye
    [*] Closed connection to insanity1.chujowyc.tf port 4004


    [+] Opening connection to insanity1.chujowyc.tf on port 4004: Done
    Welcome chCTF Sanity Check :D
    What is 2+2: 4
    What number between 0 and 100 am I thinking about right now? 81

    xD xD The answer to the next one is in front of your eyes xD xD
    ```

* You can see the number between 0 and 100 is `81`.
* Run `python script2.py`
```
    teslash21@blooddaemon:~/CS/Github/ctf-writeups/ChujowyCTF-2020/beginner/insanity1$ python3 script2.py 
    [+] Opening connection to insanity1.chujowyc.tf on port 4004: Done
    Welcome chCTF Sanity Check :D
    What is 2+2: 4
    What number between 0 and 100 am I thinking about right now? 81
    xD xD The answer to the next one is in front of your eyes xD xD
    The answer is 42123 ;)                         What is 2+2: 0
    [*] Closed connection to insanity1.chujowyc.tf port 4004
```

* `nc insanity1.chujowyc.tf 4004`
* Enter 4, 81 and 42123 respectively to get the flag! :)
