@echo off
set var=%1
set extract=%var:~6,-1%
start /B C:\\chrome_extensions\\chromeputty\\putty.exe %extract%