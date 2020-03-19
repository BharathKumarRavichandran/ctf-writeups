import urllib.request
from bs4 import BeautifulSoup
import random
import time
import json
import datetime


url = 'https://xmas.2020.chall.actf.co/api/posts/'

def write_to_file(text):
    f = open("xmasdump.txt", "a")
    f.write(write_str)
    f.close()


#Lets make 5 requests and see what user agents are used 
for i in range(42,60):
    try:
        #Make the request
        full_url = url+str(i)
        print(full_url)
        request = urllib.request.Request(full_url)
        response = urllib.request.urlopen(request)
        html = response.read().decode('utf-8')

        write_str = str(datetime.datetime.now())+"\t"+str(i)+"\t"+html+"\n"

        write_to_file(write_str)
        print(write_str)
        print(html)
        print("-------------------\n")
    except urllib.error.HTTPError as e:
        write_str = str(datetime.datetime.now())+"\t"+str(i)+"\t"+str(e)+"\n"
        print(e)
        write_to_file(write_str)
        pass
