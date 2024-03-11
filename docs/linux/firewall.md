<h1 align='center'>防火墙</h1>

## 关于ufw

`ufw`（Uncomplicated Firewall）是一个用于管理netfilter防火墙的友好界面，设计目标是为了简化防火墙配置的复杂性。

`ufw`最初是为Ubuntu开发的，因此在Ubuntu及其衍生版本中默认安装了`ufw`。随着时间的推移，其他基于Debian的发行版以及一些非Debian系的Linux发行版也开始支持`ufw`，但它可能不会在所有的Linux发行版中预装。

如果你的系统中没有预装`ufw`，通常可以通过系统的包管理器轻松安装。例如，在基于Debian的系统上使用`apt`，在Arch Linux上使用`pacman`，在Fedora上使用`dnf`等进行安装。

- 在Debian或Ubuntu上安装`ufw`：
  ```
  sudo apt update
  sudo apt install ufw
  ```

- 在Arch Linux上安装`ufw`：
  ```
  sudo pacman -S ufw
  ```

- 在Fedora或CentOS上安装`ufw`（Fedora可能需要使用`dnf`，CentOS使用`yum`或转向Fedora的仓库）：
  ```
  sudo dnf install ufw
  ```

请注意，虽然`ufw`可以在多种Linux发行版上安装和使用，但默认预装情况通常见于Ubuntu及其衍生版中。在使用前，建议检查你的发行版的文档或仓库，以确定`ufw`的可用性及安装方法。

## 常用命令

### 开启防火墙

```bash
sudo ufw enable
```

注意如果是首次开启，建议先设置默认拒绝所有，此后再按需放行

```bash
sudo ufw default deny
```

### 查看防火墙状态和规则

```bash
sudo ufw status
```

### 添加/删除规则

允许特定端口（例如，允许TCP 22端口）:

```bash
sudo ufw allow 22/tcp
```

禁止特定端口（例如，禁止TCP 22端口）：

```bash
sudo ufw deny 22/tcp
```

删除规则，首先使用`status numbered`查看规则编号，然后删除指定编号的规则：

```bash
sudo ufw delete [规则编号]
```

