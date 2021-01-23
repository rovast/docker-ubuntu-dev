FROM ubuntu:18.04

ARG DEBIAN_FRONTEND=noninteractive

# base layer
RUN apt-get update \
    && apt-get install -y \
    build-essential \
    cron curl git vim \
    libicu-dev \
    locales \
    zip unzip libzip-dev \
    && localedef -i en_US -c -f UTF-8 -A /usr/share/locale/locale.alias en_US.UTF-8
    #&& rm -rf /var/lib/apt/lists/* \
RUN sh -c "$(curl -fsSL https://raw.github.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"

ENV LANG en_US.utf8
