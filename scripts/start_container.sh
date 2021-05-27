#!/bin/sh
cd /home/ec2-user/app/client-front || exit
sudo cp ../envs/client-front.env .env
git checkout dev
/usr/local/bin/docker-compose --build -V -d prod