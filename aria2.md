# How to use ARIA2

aria2是一个轻量级的多协议和多源命令行 下载实用程序。它支持HTTP / HTTPS，FTP，SFTP， BitTorrent和Metalink。aria2可以通过内置的 JSON-RPC和XML-RPC接口进行操作。

## __特征__
-  __多连接下载__

    aria2可以从多个源/协议下载文件，并尝试利用您的最大下载带宽。真正加快您的下载体验。

- __轻量级__

    aria2不需要太多内存和CPU时间。当磁盘缓存关闭时，物理内存使用量通常为4MiB（正常HTTP / FTP下载）到9MiB（BitTorrent下载）。下载速度为2.8MiB /秒的BitTorrent的CPU使用率约为6％。

- __功能齐全的BitTorrent客户端__
    
    您可以在BitTorrent客户端中使用所有功能：DHT，PEX，加密，磁体URI，Web种子，选择性下载，本地对等发现和UDP跟踪器。

- __Metalink已启用__
    
    aria2支持Metalink下载格式 （又名Metalink v4），Metalink版本3和  Metalink / HTTP。Metalink提供文件验证，HTTP / FTP / SFTP / BitTorrent集成以及语言，位置，操作系统等的各种配置。

- __遥控器__

    aria2支持RPC接口来控制aria2进程。支持的接口是JSON-RPC（通过HTTP和WebSocket）和XML-RPC。

---

## __用法示例__
命令行吓跑了你？不，aria2真的很容易使用!!

- 从WEB下载：

    ```shell
        $ aria2c http://example.org/mylinux.iso
    ```

- 从2个来源下载：

    ```shell
        $ aria2c http://a/f.iso ftp://b/f.iso
    ```

- 每个主机使用2个连接下载：

    ```shell
        $ aria2c -x2 http://a/f.iso
    ```

- BitTorrent的：

    ```shell
        $ aria2c http://example.org/mylinux.torrent
    ```

- BitTorrent磁铁URI：

    ```shell
        $ aria2c 'magnet:?xt=urn:btih:248D0A1CD08284299DE78D5C1ED359BB46717D8C'
    ```

- Metalink知识库：

    ```shell
        $ aria2c http://example.org/mylinux.metalink
    ```

- 下载文本文件中的URI：

    ```shell
        $ aria2c -i uris.txt
    ```
---
## 基本选项

- 存储下载文件的目录
    ```shell
        -d, --dir=<DIR>
    ```
