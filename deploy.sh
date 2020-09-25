#!/bin/bash

function clientDeploy {

    echo "Initializing deploy"
    #Prepare de Backup of the current build

    echo 'Preparing backups...'
    sudo mv /var/www/html/build /var/www/html/build_bk

    #Get the latests code
    cd ~/auto-mant
    echo "Cleaning working directory"
    git clean -f -d
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

    #Limpiando ficheros de backup
    echo 'Cleaning...'
    sudo rm -r /var/www/html/build_bk

    #Reiniciando el servicio
    echo "Restarting Services.."
    sudo service nginx restart

    echo 'Deploy finished!!!'
}

function backendDeploy {

    echo "Initializing Backend deploy"
    #Prepare de Backup of the current build

    echo 'Preparing backups...'
    sudo mv /var/www/html/back /var/www/html/back_bk

    #Get the latests code
    cd ~/auto-mant
    echo "Cleaning working directory"
    git clean -f -d
    echo 'Pulling last commits...'
    git pull

    #Install and build
    cd backend
    echo 'Installing dependencies...'
    npm install
    
    #Give exec permission to the file
    sudo chmod +x ./src/index.js
    cd ..
    echo "Copying necesary files"
    sudo cp -r backend/ /var/www/html/back
    echo 'Restarting service...'
    sudo systemctl restart automant-api

    #Limpiando ficheros de backup
    echo 'Cleaning...'
    sudo rm -r /var/www/html/back_bk

    echo 'Deploy Backend finished!!!'
}

function showMan {
    echo "Es necesario un parámetro correcto:"
    echo 'Usa "-c" o "--client" para desplegar el cliente.'
    echo 'Usa "-b" o "--backend" para deplegar la api.'
}



case "$1" in
"-c" | "--client")
    clientDeploy
    ;;
"-b" | "--backend")
    backendDeploy
    ;;
*)
    showMan
    ;;
esac






