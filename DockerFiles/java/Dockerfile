FROM rovast/ubuntu-dev-base

# 安装 Java 环境
COPY --from=amd64/openjdk:8-jdk-slim /usr/local/openjdk-8 /usr/local/openjdk-8

ENV JAVA_HOME /usr/local/openjdk-8
ENV PATH $JAVA_HOME/bin:$PATH

# 安装 Java 环境
COPY --from=maven:3-openjdk-8 /usr/share/maven /usr/share/maven

ENV MAVEN_HOME /usr/share/maven
ENV MAVEN_CONFIG "$USER_HOME_DIR/.m2"
ENV PATH $MAVEN_HOME/bin:$PATH
