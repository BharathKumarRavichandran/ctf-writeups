# Robots

### How to get the flag?
* The headline on the main page is `I really hate robots`, so we can get a hint that there is some clue in the file `robots.txt`.
* Go to `/robots.txt`
    ```
    User-agent: *
    Disallow: index.php
    Disallow: CQy2Z1k3J7ku7uhQ8uNTagIeLvYg1noA2f4v
    ```
* Go to `/CQy2Z1k3J7ku7uhQ8uNTagIeLvYg1noA2f4v`, a file will be downloaded.
* Open the file, you will get the flag.
