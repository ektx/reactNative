[toc]

# Hold On: Starting simulator...

停留在这的主要原因是因为RN在启动时，需要 Exponent.app, 此时在下载，因国内外网络的问题，通常会失败。
解决方法：
1. 去[官方手动下载](https://expo.io/tools)
2. 下载完成后，进入用户根目录：**cd ~/.expo/**
3. 新建名为 **ios-simulator-app-cache** 文件夹
4. 解压刚下载好的文件到此目录，将文件夹后缀改为 **.app**
5. 重启 **yarn run ios**