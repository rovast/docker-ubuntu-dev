FROM ubuntu:18.04

ARG DEBIAN_FRONTEND=noninteractive

# base layer
RUN apt-get update \
    && apt-get install -y \
    build-essential \
    cron curl git vim wget zsh \
    libicu-dev \
    locales \
    zip unzip libzip-dev \
    && localedef -i en_US -c -f UTF-8 -A /usr/share/locale/locale.alias en_US.UTF-8
    #&& rm -rf /var/lib/apt/lists/* \

# Uses "Spaceship" theme with some customization. Uses some bundled plugins and installs some more from github
RUN sh -c "$(wget -O- https://github.com/deluan/zsh-in-docker/releases/download/v1.1.1/zsh-in-docker.sh)" -- \
    -t https://github.com/denysdovhan/spaceship-prompt \
    -a 'SPACESHIP_PROMPT_ADD_NEWLINE="false"' \
    -a 'SPACESHIP_PROMPT_SEPARATE_LINE="false"' \
    -p git \
    -p ssh-agent \
    -p https://github.com/zsh-users/zsh-autosuggestions \
    -p https://github.com/zsh-users/zsh-completions

ENV LANG en_US.utf8
