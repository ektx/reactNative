# 手工安装项目

由于天朝的网络问题,有时候我们需要自己手动来编译我们的 react native 项目,以下是参考方法:

- 建立目录

  ```shell
  mkdir myProject && cd myProject
  ```

- 创建 package.json

  ```shell
  npm init
  ```

- 安装 ract-native 

  ```shell
  npm install react-native --save
  ```

- 初始化项目

  ```shell
  node -e "require('react-native/local-cli/cli').init('.','myProject')"
  ```

  ​

### 运行

#### 在 ios 中运行项目

```shell
react-native run-ios
```

