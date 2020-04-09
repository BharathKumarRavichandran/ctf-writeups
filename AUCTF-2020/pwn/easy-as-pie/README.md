* Access the shell
* Type `help`, you will get the available commands
* Type `ls`
```
acl.txt
user.txt
flag.txt
```
* `cat` all files, you will see you don't have perm to cat flag.txt. But on catting, `acl.txt` you will see the current user permissions for all the files in the current directory.
```
File contents of acl.txt:
user.txt:user:600
.acl.txt:root:600
.flag.txt:user:600
flag.txt:root:600
acl.txt:root:606
```
* The file `.flag.txt` is a dummy file and we don't have permission to `.acl.txt`
* Umm, but what do we have `write` command? Let's try to change the user permission for `flag.txt`.
* Type `write flag.txt:user:600 acl.txt`. Looks like the line is appended to the file.
* Now try catting the file `flag.txt`, you will get the flag - `aUctf_{h3y_th3_fl4g}`
* What? Looks like the flag is a dummy flag.
* Now try to do the above steps for `.acl.txt` file instead of `flag.txt`.
```
user@pyshell$ write .acl.txt:user:600 acl.txt
```
* Now try catting the file `.acl.txt`, you will get the real flag.
```
user@pyshell$ cat .acl.txt
```
