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
