module.exports = (wss) => {
  wss.on("connection", function connection(ws) {
    ws.on("message", function incoming(message) {
      console.log("received: %s", message);
    });

    // 每隔1s发送一次消息
    setInterval(() => {
      ws.send("something");
    }, 1000);
  });
};
