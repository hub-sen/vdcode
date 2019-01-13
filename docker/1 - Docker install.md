# Docker

## 1.install (CentOS 7)

Docker 要求 CentOS 系统的内核版本高于 3.10 ，查看本页面的前提条件来验证你的CentOS 版本是否支持 Docker 。通过 `uname -r` 命令查看你当前的内核版本.

从 2017 年 3 月开始 docker 在原来的基础上分为两个分支版本: Docker CE 和 Docker EE。
Docker CE 即社区免费版，Docker EE 即企业版，强调安全，但需付费使用。

- 移除旧版本:

```bash
sudo yum remove docker \
                  docker-client \
                  docker-client-latest \
                  docker-common \
                  docker-latest \
                  docker-latest-logrotate \
                  docker-logrotate \
                  docker-selinux \
                  docker-engine-selinux \
                  docker-engine
```

- 安装一些必要的系统工具:

```bash
sudo yum install -y yum-utils device-mapper-persistent-data lvm2
```

- 添加软件源信息:

```bash
sudo yum-config-manager --add-repo http://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo
```

- 更新yum缓存:

```bash
sudo yum makecache fast
```

- 安装Docker-ce:

```bash
sudo yum -y install docker-ce
```

- 启动Docker后台服务:

```bash
sudo systemctl start docker
```

- 测试运行hello-world:

```bash
docker run hello-world
```

**由于本地没有hello-world这个镜像，所以会下载一个hello-world的镜像，并在容器内运行。*

---

## 镜像加速

鉴于国内网络问题，后续拉取 Docker 镜像十分缓慢，我们可以需要配置加速器来解决，我使用的是网易的镜像地址: <http://hub-mirror.c.163.com。>

新版的 Docker 使用 /etc/docker/daemon.json（Linux） 或者 %programdata%\docker\config\daemon.json（Windows） 来配置 Daemon。

请在该配置文件中加入（没有该文件的话，请先建一个）：

```json
{
  "registry-mirrors": ["http://hub-mirror.c.163.com"]
}
```

---

## 删除Docker CE

```bash
sudo yum remove docker-ce
sudo rm -rf /var/lib/docker
```
