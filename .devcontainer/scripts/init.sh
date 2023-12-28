#/bin/bash

sh -c "git config --global init.defaultBranch main"

sh -c "$(wget -O- https://github.com/deluan/zsh-in-docker/releases/download/v1.1.5/zsh-in-docker.sh)" -- \
  -p git \
  -p ssh-agent \
  -p yarn \
  -p https://github.com/zsh-users/zsh-autosuggestions \
  -p https://github.com/zsh-users/zsh-completions \
  -p https://github.com/zsh-users/zsh-syntax-highlighting \
  -x

sh -c "corepack enable"
sh -c "yarn config set --home enableTelemetry 0"
sh -c "yarn set version berry"
sh -c "yarn install"
sh -c "yarn dlx @yarnpkg/sdks vscode"
