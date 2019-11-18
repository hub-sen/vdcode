# How to use ARIA2

aria2 是一个轻量级的多协议和多源命令行 下载实用程序。它支持 HTTP / HTTPS，FTP，SFTP， BitTorrent 和 Metalink。aria2 可以通过内置的 JSON-RPC 和 XML-RPC 接口进行操作。

## **特征**

- **多连接下载**

  aria2 可以从多个源/协议下载文件，并尝试利用您的最大下载带宽。真正加快您的下载体验。

- **轻量级**

  aria2 不需要太多内存和 CPU 时间。当磁盘缓存关闭时，物理内存使用量通常为 4MiB（正常 HTTP / FTP 下载）到 9MiB（BitTorrent 下载）。下载速度为 2.8MiB /秒的 BitTorrent 的 CPU 使用率约为 6％。

- **功能齐全的 BitTorrent 客户端**

  您可以在 BitTorrent 客户端中使用所有功能：DHT，PEX，加密，磁体 URI，Web 种子，选择性下载，本地对等发现和 UDP 跟踪器。

- **Metalink 已启用**

  aria2 支持 Metalink 下载格式 （又名 Metalink v4），Metalink 版本 3 和 Metalink / HTTP。Metalink 提供文件验证，HTTP / FTP / SFTP / BitTorrent 集成以及语言，位置，操作系统等的各种配置。

- **遥控器**

  aria2 支持 RPC 接口来控制 aria2 进程。支持的接口是 JSON-RPC（通过 HTTP 和 WebSocket）和 XML-RPC。

---

## **用法示例**

命令行吓跑了你？不，aria2 真的很容易使用!!

- 从 WEB 下载：

  ```shell
      $ aria2c http://example.org/mylinux.iso
  ```

- 从 2 个来源下载：

  ```shell
      $ aria2c http://a/f.iso ftp://b/f.iso
  ```

- 每个主机使用 2 个连接下载：

  ```shell
      $ aria2c -x2 http://a/f.iso
  ```

- BitTorrent 的：

  ```shell
      $ aria2c http://example.org/mylinux.torrent
  ```

- BitTorrent 磁铁 URI：

  ```shell
      $ aria2c 'magnet:?xt=urn:btih:248D0A1CD08284299DE78D5C1ED359BB46717D8C'
  ```

- Metalink 知识库：

  ```shell
      $ aria2c http://example.org/mylinux.metalink
  ```

- 下载文本文件中的 URI：

  ```shell
      $ aria2c -i uris.txt
  ```

---

## 基本选项

- 存储下载文件的目录
  ```shell
      -d, --dir=<DIR>
  ```


## 配置AriaNg

- 新建配置文件aria2.conf
  ```conf
  dir=/root/aria2/aria2download
  disable-ipv6=true

  #打开rpc的目的是为了给web管理端用
  enable-rpc=true
  rpc-allow-origin-all=true
  rpc-listen-all=true
  rpc-listen-port=6800
  #断点续传
  continue=true
  input-file=/root/aria2/aria2.session
  save-session=/root/aria2/aria2.session

  #最大同时下载任务数
  max-concurrent-downloads=20
  save-session-interval=120

  # Http/FTP 相关
  connect-timeout=120
  #lowest-speed-limit=10K
  #同服务器连接数
  max-connection-per-server=10
  #max-file-not-found=2
  #最小文件分片大小, 下载线程数上限取决于能分出多少片, 对于小文件重要
  min-split-size=10M

  #单文件最大线程数, 路由建议值: 5
  split=10
  check-certificate=false
  #http-no-cache=true

  #设置为0, BT文件下载完成后,不会进行做种
  seed-time=0`
  ```
- 启动
  ```bash
  aria2c --conf-path=/root/aria2/aria2.conf -D
  ```
- 配置AriaNg webUI
  - http://aria2.net/
  - Basic Settings -> Language -> 简体中文
  - RPC -> Aria2 RPC 地址 -> 更新