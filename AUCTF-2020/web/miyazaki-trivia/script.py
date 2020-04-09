import requests

r=requests.get("http://challenges.auctf.com:30020/robots.txt", headers={"answer":"fear the old blood"})

print(r.content)