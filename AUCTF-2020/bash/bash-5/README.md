* ls -la
```
total 32
drwxr-x--x 1 level5 level5 4096 Apr  4 21:39 .
drwxr-xr-x 1 root   root   4096 Apr  3 15:35 ..
-rw-r--r-- 1 level5 level5  220 Apr  4  2018 .bash_logout
-rw-r--r-- 1 level5 level5 3771 Apr  4  2018 .bashrc
-rw-r--r-- 1 level5 level5  807 Apr  4  2018 .profile
-r--r----- 1 root   root     23 Apr  1 21:25 flag.txt
-rwxrwxr-x 1 level5 level5  137 Apr  4 21:39 portforce.sh
```
* So only run can cat the flag
* `sudo -l`
```
Matching Defaults entries for level5 on 2110010241f5:
    env_reset, mail_badpass,
    secure_path=/usr/local/sbin\:/usr/local/bin\:/usr/sbin\:/usr/bin\:/sbin\:/bin\:/snap/bin

User level5 may run the following commands on 2110010241f5:
    (ALL) NOPASSWD: /home/level5/portforce.sh
```
* So we can run the script `/home/level5/portforce.sh` with root permissions.
* cat ~/portforce.sh
```
#!/bin/bash

x=$(shuf -i 1024-65500 -n 1)
echo "Guess the listening port"
input=$(nc -lp $x)
echo "That was easy right? :)"
cat flag.txt
```
* Basically it is selecting one shuffled number as x and scanning the port(x) and assigning it to input.
After that, it will cat the flag.
* So we don't have to do much :p
