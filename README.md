# web 开发大作业

## 选题：

选择兴趣圈为最终选题

## 运行方式：

利用Docker进行打包

在终端运行：

```bash
docker pull happyweb/interests-room
```

```bash
docker run -p 3000:3000 happyweb/interests-room
```

在浏览器输入 `localhost:3000`即可

## 技术栈描述

1. 使用next.js搭建react，利用next.js进行全栈开发(原因：在课下我对比了多种方法，由于next.js搭建方便快速，无需过多配置即可进行开发，最终决定选择next.js进行开发，并自行学习了next.js)
2. 利用mongoDB作为数据库来保存管理数据
3. 使用bcryptjs来hash用户密码，防止数据库密码泄露等安全问题
4. 使用tailwind来管理css，原因：
   1. 学习tailwind中的各种功能
   2. 开发项目并非非常庞大，选择tailwind可以快速搭建
5. 利用auth.js来处理登录

## 附加功能

1. 注册功能：允许用户注册自己的账号
2. 数据库：利用mongodb搭建数据库
3. redirect: 用户在未登录时只能浏览homepage,aboutpage无法浏览interest page,如果用户在未登录时点击导航栏中的interest page将会被redirect到login page,同样如果用户在login page中登录后会被redirect到home page,如果用户在sign up后（注册）将会被redirect到login page
4. 用户在login, sign up过程中如果密码错误或者注册了已有的用户名会出现错误信息(prompt)
5. loading: 在加载数据的时候会显示loading page 可以在interest page中看到
