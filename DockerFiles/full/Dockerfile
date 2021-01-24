FROM rovast/ubuntu-dev-base

ARG DEBIAN_FRONTEND=noninteractive

# nodejs 开发环境
RUN curl -sL https://deb.nodesource.com/setup_14.x | bash
RUN apt-get -y install nodejs

# PHP 环境
RUN apt-get install -y \
    php7.2 php7.2-fpm \
    php7.2-mysql php7.2-curl php7.2-mbstring php7.2-gd php7.2-xml php7.2-soap

# Java 环境
RUN apt-get install -y \
    openjdk-8-jdk

# Go 环境
COPY --from=golang:1.14-stretch /usr/local/go/ /usr/local/go/
ENV PATH /usr/local/go/bin:$PATH
ENV GOLANG_VERSION 1.14.14

# 清除工作，减小镜像体积
# RUN rm -rf /var/lib/apt/lists/*
