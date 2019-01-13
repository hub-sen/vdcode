# about

## 简介

该脚本可用于查找资源管理器中的 `.mp4` , `.mp3` 等媒体文件(目前只支持这几种格式),
并以 `.html` 的格式输出结果(result.html)

- 可用于本地浏览器直接访问
- 使用 `live-server` 发布,用于局域网内访问 (推荐)

旨在于个人喜好,不足之处还请指教

@author : 施森(18018597739@163.com)

## javaShowFile.bat

运行脚本,其中

```bat
set path=D:\Java\jdk1.8.0_181\bin  #可手动设置为自己的jdk安装目录,若设置了path则删除此行
```

## ShowFile.java

java文件,目前只支持输出 `.mp4`, `.mp3`文件,后期可以设置更多格式的文件

期待大家一起努力

## result.html

脚本运行后产生,即最终生成的网页,可通过[简介](#简介)里的方式查看

## 启动方式

1. 设置脚本,即 [javaShowFile.bat](#javaShowFile.bat) 中提到的注意事项.
2. 双击 `run.bat` 脚本