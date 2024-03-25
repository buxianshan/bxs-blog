<h1 align='center'>无密码执行sudo</h1>

## 允许无密码执行sudo任意命令

假如用户名是 tom，使用 root 编辑 `/etc/sudoers.d/tom`，填入以下内容：

```
tom ALL=(ALL) NOPASSWD: ALL
```

## 允许无密码执行sudo部分指定命令

假如允许tom用sudo无密码执行`chown`命令，使用root编辑 `/etc/sudoers.d/tom`，填入以下内容：

```bash
tom ALL=(ALL) NOPASSWD: /bin/chown
```

