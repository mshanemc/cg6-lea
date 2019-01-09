sfdx shane:org:create -f config/project-scratch-def.json -d 1 -s -o df18.booth --userprefix cg6_
sfdx shane:github:package:install --githubuser mshanemc --repo volvo-base
sfdx shane:github:package:install -g mshanemc -r community-boilerplate
sfdx shane:github:src:install -g mshanemc -r customer-community-base
sfdx shane:github:package:install --githubuser mshanemc --repo carConfigurator
sfdx shane:user:password:set -g User -l User -p DF18*cg6
sfdx force:user:permset:assign -n VehiclesPerms
sfdx force:apex:execute -f scripts/init.cls
sfdx force:org:open -p lightning/setup/SetupNetworks/home