import sys

from pwn import *

fibonacci = [
    0,
    1,
    1,
    2,
    3,
    5,
    8,
    13,
    21,
    34,
    55,
    89,
    144,
    233,
    377,
    610,
    987,
    1597,
    2584,
    4181,
    6765,
    10946,
    17711,
    28657,
    46368,
    75025,
    121393,
    196418,
    317811,
    514229,
    832040,
    1346269,
    2178309,
    3524578,
    5702887,
    9227465,
    14930352,
    24157817,
    39088169,
    63245986,
    102334155,
    165580141,
    267914296,
    433494437,
    701408733,
    1134903170,
    1836311903,
    2971215073,
    4807526976,
    7778742049,
    12586269025,
]

conn = remote('misc.2020.chall.actf.co',20300)

def caesar_shift(text,s): 
    result = "" 
  
    # traverse text 
    for i in range(len(text)): 
        char = text[i] 
  
        # Encrypt uppercase characters 
        if (char.isupper()): 
            result += chr((ord(char) + s-65) % 26 + 65) 
  
        # Encrypt lowercase characters 
        else: 
            result += chr((ord(char) + s - 97) % 26 + 97) 
  
    return result

f = open("std.out","a+")

while True:
    try:
        data = conn.recvuntil("\n")
        data = data.decode('utf-8').strip()
        print(data)
        f.write(data+"\n")
        
        p = None
        n = None
        
        if "Shift" and "by" and "n=" in data:
            data_list = data.split()
            p = data_list[1]

            if p == "Shift":
                if len(data_list) == 4: # For empty shift text
                    p = ""
                else: # Socket recv after 1st iteration
                    p = data_list[2]
            n = data_list[len(data_list)-1]
            n = int(n[2:])
            cipher_text = ""
            if p: # Call function only for non-empty texts
                cipher_text = caesar_shift(p,fibonacci[n])
            
            write_text = "Cipher text: {}\n".format(cipher_text)    
            f.write(write_text)
            print(write_text)
            conn.sendline(cipher_text)
    except EOFError as e:
        f.write("Yaaaay got the flag!!!!\n")
        print("Yaaaay got the flag!!!!")
        sys.exit(0)


conn.recvline()
f.close()