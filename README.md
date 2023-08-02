# cascadeLive
Repository for Project Cascade's (Cascade API) WEB appearance. Please note that the files enclosed in this repository are related to the web development project that endorses a fictional API kit that is based upon 'New Technology' (the theme of the project), called Cascade API. A general context of what the project is about will be available on the "About" and "Products" pages of the website. 

This project was, when it was being tested, setup on a Python SimpleHTTP server binded to the LAN IPv4 address of the local machine of development (of all the machines used, the primary one). It also makes use of PHP and MySQL servers based off the XAMPP client (controlled using XAMPP Control Panel 3.3.0) to display the php file given by "cascadeRegisterCommit.php" through Apache and to commit all changes of registration (storing the data of the users who registered) on a suitable database, a MySQL server was used.

Note that in case you want to deploy this website and test it on your LAN, you will have to follow the following steps:
1. Clone this GitHub repository on your local machine.
2. Download XAMPP v3.3.0 Control Panel (recommended).
3. Where XAMPP is downloaded, locate the htdocs folder, and open a Python SimpleHTTP server over there, in a terminal, by typing the command python -m http.server for Windows and the equivalent command for Linux/Ubuntu. In order to make sure that other devices on the same LAN are able to access the website, make sure you write python -m http.server --bind 0.0.0.0 instead of the aforementioned command so that other devices with differing IPv4 addresses can access the website. 
4. Also, make sure that the Windows Defender Firewall allows inbound and outbound accesses on the ports you are hosting the servers in. Usually, a python http server is hosted on port 8000 of the local machine.
5. Assuming that all rules and accesses have been modified as per your needs, simply access the website using the IPv4 address that you have for your particular network, which can be seen on typing ipconfig in a suitable terminal. for example, if you're IPv4 local address is 192.168.XX.XX, then you can access the website using http://192.168.XX.XX/cascadeLive/Screens/pages/cascadeOnLoad.html

The above rules and guidelines are roughly indicative of how the server can be set up. If any difficulties are encountered, it is better to modify the configuration files of the respective servers and clients being used.
