# React Native

## Windows 环境搭建

### 安装 [Chocolatey](https://chocolatey.org/) 环境包管理

> Chocolatey 类似于 Linux 下的 apt-get ，用来帮助我们快速的构建开发环境，类似包管理工具。

具体安装的步骤可以参考 [Chocolatey官网](https://chocolatey.org/) 的操作文档。注意的是使用管理员命令来运行 cmd

### 安装 Node.js

```shell
# 使用 chocolatey 安装
choco install nodejs.install
```

如果你的电脑上已经安装过官方的nodejs可以忽略此步

### 安装 python2

```shell
# 使用 chocolatey 安装
choco install python2
```



## Chocolatey 使用

#### search 查找包

```shell
choco search 软件包名
```

#### install 安装

```sh
choco install 软件包名
```

#### uninstall 卸载

```sh
choco uninstall 软件包名
```

#### update 更新

```sh
choco update 软件包名
```

