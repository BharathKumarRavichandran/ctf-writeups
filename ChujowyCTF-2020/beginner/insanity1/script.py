import sys

from pwn import *

f = open("std.out","a+")

def write_in_file(file, data):
    print(data)
    file.write(data+"\n")
    # Check if flag exists
    if "chCTF{" in data:
        sys.exit(0)

def recvuntil(until, conn, file):
    data = conn.recvuntil(until)
    data = data.decode('utf-8').strip()
    return data
    

def brute_force(n):
    conn = remote('insanity1.chujowyc.tf', 4004)
    try:
        # 2+2 = 4
        data = recvuntil("2+2:", conn, f)
        ans = "4"
        conn.sendline(ans)
        data = data + " " + ans
        write_in_file(f, data)

        # What number between 0 and 100 am I thinking about right now?
        data = recvuntil("right now?", conn, f)
        ans = str(n)
        conn.sendline(ans)
        data = data + " " + ans
        write_in_file(f, data)

        while True:
            data = conn.recvline()
            data = data.decode('utf-8').strip()
            write_in_file(f, data)
            if "Bye" in data:
                break
        
        conn.close()
        print("\n")
    
    except EOFError as e:
        f.write(str(e))
        print("ERROR:")
        print(e)


for i in range(0,101):
    brute_force(i)
    # Answer 81

f.close()