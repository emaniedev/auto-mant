#!/bin/bash

#Prepare de Backup of the current build

echo 'Preparing backups...'
sudo mv /var/www/html/build_bk /var/www/html/build_bk2
sudo mv /var/www/html/build /var/www/html/build_bk

#Get the latests code

echo 'Pulling last commits...'
git pull

#Install and build
cd client
echo 'Installing dependencies...'
npm install
echo 'Building...'
npm run build

#Move de build directory to /var/www/html

echo 'Deploying...'
sudo mv build /var/www/html

echo 'Cleaning...'
sudo rm -r /var/www/html/build_bk2

echo 'Deploy finished!!!'


