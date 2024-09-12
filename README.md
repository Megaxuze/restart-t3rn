This Script auto 1 hours : sudo systemctl restart executor

install : ```git clone https://github.com/Megaxuze/restart-t3rn.git```

go to folder ```cd restart-t3rn```

Install NodeJs : ```nvm install 22.8.0```

create screen : ```screen -S trn```
Run script : ```node main.js```
close screen : ctrl + ad

Check Log T3rn : ```sudo journalctl -u executor -f```

for check script running in screen : ```screen -r trn```
for stop script : ```ctrl + c```
for kill screen : ```screen -S trn -X kill```
for delete folder script : ```cd /root``` and run ```rm -r restart-t3rn```
