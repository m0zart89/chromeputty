# chromeputty
Running putty in one click in Chrome (Windows OS).

1. [Download](https://github.com/m0zart89/chromeputty/archive/master.zip) an extension and put into directory C:\chrome_extensions\chromeputty
2. [Download](https://www.putty.org/) or put your existing `putty.exe` into directory C:\chrome_extensions\chromeputty
3. Register and handle ssh protocol by running `bat.reg`:
```
Windows Registry Editor Version 5.00

[HKEY_CLASSES_ROOT\ssh]
@="URL:ssh Protocol"
"URL Protocol"=""

[HKEY_CLASSES_ROOT\ssh\shell]

[HKEY_CLASSES_ROOT\ssh\shell\open]

[HKEY_CLASSES_ROOT\ssh\shell\open\command]
@="\"C:\\chrome_extensions\\chromeputty\\putty_util.bat\" %1"

```
4. Open your chrome web browser extensions page `chrome://extensions/`: turn on developer mode (toggle), load extension and turn it on
5. Open any page with ip-address `1.2.3.4` on it and hit Ctrl + Alt
6. Then ip-address will be replaced with highlighted pink link:
```<a style="background-color: #e2b0b0;" class="webputty" href="ssh://1.2.3.4" target="_blank">1.2.3.4</a>```
7. Click the link
8. Link runs `C:\chrome_extensions\chromeputty\putty_util.bat`:
```
@echo off
set var=%1
set extract=%var:~6,-1%
start /B C:\\chrome_extensions\\chromeputty\\putty.exe %extract%
```
9. `C:\chrome_extensions\chromeputty\putty_util.bat` runs `C:\chrome_extensions\chromeputty\putty.exe` with forwarded ip-address

Also you can:
1. Customize Hotkeys in [`script.js`](https://github.com/m0zart89/chromeputty/blob/master/script.js#L4)
2. Customize [`permitted scheme`](https://github.com/m0zart89/chromeputty/blob/master/manifest.json#L11) (details https://developer.chrome.com/extensions/match_patterns)
