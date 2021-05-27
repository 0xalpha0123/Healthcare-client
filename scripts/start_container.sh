#!/bin/sh
cd /home/ec2-user/app/client-front || exit
sudo cp ../envs/client-front.env .env
/usr/local/bin/docker-compose up --build -V -d prod