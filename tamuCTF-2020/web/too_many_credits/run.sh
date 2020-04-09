#!/bin/sh

curl -c cookies.txt http://toomanycredits.tamuctf.com/

i=0
while [ $i -lt 200000000000 ]
do
    echo "$i"
    curl -b cookies.txt -c cookies.txt http://toomanycredits.tamuctf.com/
done