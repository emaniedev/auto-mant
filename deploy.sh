#!/bin/bash

#Prepare de Backup of the current build

echo 'Preparing backups...'
mv /var/www/html/build_bk /var/www/html/build_bk2
mv /var/www/html/build /var/www/html/build_bk

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
mv build /var/www/html

echo 'Cleaning...'
rm -r /var/www/html/build_bk2

echo 'Deploy finished!!!'


