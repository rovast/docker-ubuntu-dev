# Ubuntu 开发环境

## 配置文件

- `code-server.yaml` code-server 配置文件，可以配置访问端口和密码等

## 已安装软件

- code-server

## Dockerfiles

- `rovast/ubuntu-dev-base` 基础镜像，包含基础软件
- `rovast/ubuntu-dev-node` nodejs 开发环境
- `rovast/ubuntu-dev-php` php 开发环境
- `rovast/ubuntu-dev-java` java 开发环境


- `rovast/ubuntu-dev-full` 上面的总和


```bash
docker build -t 'rovast/ubuntu-dev-base' ./DockerFiles/base
docker build -t 'rovast/ubuntu-dev-php' ./DockerFiles/php
docker build -t 'rovast/ubuntu-dev-node' ./DockerFiles/node
docker build -t 'rovast/ubuntu-dev-java' ./DockerFiles/java
```

```bash
docker build -t 'rovast/ubuntu-dev-full' ./DockerFiles/full
```
