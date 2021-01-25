FROM rovast/ubuntu-dev-base

# 安装 Java 环境
COPY --from=amd64/openjdk:8-jdk-slim /usr/local/openjdk-8 /usr/local/openjdk-8

ENV JAVA_HOME /usr/local/openjdk-8
ENV PATH $JAVA_HOME/bin:$PATH
