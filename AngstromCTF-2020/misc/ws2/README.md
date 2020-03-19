# ws2

### How to get the flag?
* Analyse the `pcapng` file using Wireshark.
* The file that is sent/received was an image, so reconstruct the image from the hex data.
* Export all the HTTP files using Wireshark.
* Clean the hex dump. Strip the left and right padded data.
* Reconstruct binary data from hex using some online tool.
* Download and open that binary data.
* Umm eh, you got the flag it seems! :D