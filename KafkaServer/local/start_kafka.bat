@echo off

start cmd /k ".\bin\windows\zookeeper-server-start.bat .\config\zookeeper.properties"

timeout /t 10 /nobreak >nul

start cmd /k ".\bin\windows\kafka-server-start.bat .\config\server.properties --override num.network.threads=2"

timeout /t 10 /nobreak >nul

start cmd /k ".\bin\windows\kafka-server-start.bat .\config\server.properties --override listeners=PLAINTEXT://:9093 --override broker.id=1 --override log.dirs=/tmp/kafka-logs-1"

timeout /t 10 /nobreak >nul

start cmd /k ".\bin\windows\kafka-server-start.bat .\config\server.properties --override listeners=PLAINTEXT://:9094 --override broker.id=2 --override log.dirs=/tmp/kafka-logs-2"
