import base64
import math


def revwoah(s1,s2):
    for a,b in zip(s1,s2):
        print(a,b) 
    #return ''.join( chr( print(math.log(ord(a),ord(b)))) for a,b in zip(s1,s2))

def main():
    key = 'meownyameownyameownyameownyameownya'
    c = 'HxEMBxUAURg6I0QILT4UVRolMQFRHzokRBcmAygNXhkqWBw='
    b = base64.b64decode(c, altchars=None)
    a = b.decode()
    a = revwoah(a,key)
    print(a)

main()