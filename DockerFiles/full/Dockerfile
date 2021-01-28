FROM rovast/ubuntu-dev-base

ARG DEBIAN_FRONTEND=noninteractive

# nodejs 开发环境
RUN curl -sL https://deb.nodesource.com/setup_14.x | bash
RUN apt-get -y install nodejs

# PHP 环境
RUN apt-get install -y \
    php7.2 php7.2-fpm \
    php7.2-mysql php7.2-curl php7.2-mbstring php7.2-gd php7.2-xml php7.2-soap

# 安装 Java 环境
COPY --from=amd64/openjdk:8-jdk-slim /usr/local/openjdk-8 /usr/local/openjdk-8
ENV JAVA_HOME /usr/local/openjdk-8
ENV PATH $JAVA_HOME/bin:$PATH

# 安装 Maven 环境
COPY --from=maven:3-openjdk-8 /usr/share/maven /usr/share/maven
ENV MAVEN_HOME /usr/share/maven
ENV MAVEN_CONFIG "$USER_HOME_DIR/.m2"
ENV PATH $MAVEN_HOME/bin:$PATH

# Go 环境
COPY --from=golang:1.14-stretch /usr/local/go/ /usr/local/go/
ENV PATH /usr/local/go/bin:$PATH
ENV GOLANG_VERSION 1.14.14

# 清除工作，减小镜像体积
# RUN rm -rf /var/lib/apt/lists/*
