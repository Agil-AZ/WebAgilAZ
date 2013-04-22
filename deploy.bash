scriptDir="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"

deployDir=/var/www/agilaz

sudo rm -rf ${deployDir}
sudo mkdir ${deployDir}
sudo cp -Rf "${scriptDir}/." ${deployDir}
sudo rm -rf ${deployDir}/.git
sudo rm -rf ${deployDir}/deploy.bash

sudo chown -R www-data:www-data ${deployDir}

echo Successfully deployed at ${deployDir}
