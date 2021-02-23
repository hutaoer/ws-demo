const http = require("http");
const koa = require("koa");
const WebSocket = require("ws");
const app = new koa();

const WebSocketApi = require("./utils/ws");
const server = http.createServer(app.callback());

const wss = new WebSocket.Server({ server });

WebSocketApi(wss);
server.listen(8000);
console.log("启动成功");
