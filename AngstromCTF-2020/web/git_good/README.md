# Git Good

### How to get the flag?
* Dump all the static served git files using the script. Though all the folders inside `.git` are not served, we have access to necessary files like `HEAD`, `refs`.
    ``` 
    ./gitdumper.sh https://gitgood.2020.chall.actf.co/.git/ src .
    ```
* Check `flag.txt`, it was filled with random text.
* Check the git log - `git log`
* Go one commit back - `git reset --hard HEAD~1`
* Check `flag.txt`
