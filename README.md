# Node端视频压缩工具

调用[ffmpeg](https://github.com/FFmpeg/FFmpeg)命令，解放双手~~

## Getting Started

```shell
npm i vminfy --save-dev
```

要保证系统已安装**ffmpeg**

#### 安装ffmpeg

1. 安装 homebrew `ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"`

2. 终端执行 brew install ffmpeg

3. 安装成功后执行 ffmpeg -h 查看帮助文档并验证是否ffmpeg安装成功。

## Basic Usage

```shell

const vminfy = require('vminfy');

vminfy({
    src: '',  // 源文件 (目前采取替换方式)
    quality: '500k', //一般500k左右即可，人眼看不到明显的闪烁，这个是与视频大小最直接相关的；
    width: '', //可定义视频的宽 such: 400
    height: '', //可定义视频的宽 such: 225
    command: '', //自定义ffmpeg命令  非必要不填
});

 ```
