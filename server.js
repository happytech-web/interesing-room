const { createServer } = require("http");
const next = require("next");
const nextConfig = require("./next.config.mjs/index.js");

// 创建一个 Next.js 应用
const dev = process.env.NODE_ENV !== "production"; // 根据环境决定是否启用开发模式
const app = next({ dev, dir:__dirname, conf: nextConfig });
const handle = app.getRequestHandler();

// 准备应用并启动服务器
app.prepare().then(() => {
  createServer((req, res) => {
    handle(req, res); // 处理所有请求
  }).listen(3000, (err) => {
    if (err) throw err;
    console.log("> Ready on http://localhost:3000");
  });
});
